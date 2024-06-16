import { $project } from "../../Core/stores/project";
import type { KDirectoryNode, KFileNode } from "../../Core/types/fileTree";
import { isFile } from "../../FileTree/util/asserts";

export const queryFile = (path: string) => {
    const dirs = path.split("/");
    const fileName = dirs.pop();

    const scanDirForFile = (dir: KFileNode | KDirectoryNode) => {
        if (isFile(dir)) {
            if (dir.file.name === fileName) {
                return dir;
            }
        } else {
            for (const subDir of Object.values(dir.directory)) {
                const result: KFileNode = scanDirForFile(subDir)!;

                if (result) {
                    return result;
                }
            }
        }
    };

    return scanDirForFile(
        $project.get().fileTree[dirs[0]]
            ?? $project.get().fileTree[fileName!],
    );
};
