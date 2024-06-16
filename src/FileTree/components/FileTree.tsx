import { Fragment, useEffect, useState } from "react";
import { $project } from "../../Core/stores/project";
import type { KFileTree } from "../../Core/types/fileTree";
import { isDirectory } from "../util/asserts";
import FileDirectory from "./FileDirectory";
import FileEntry from "./FileEntry";

const FileTree = () => {
    const [files, setFiles] = useState<KFileTree>($project.get().fileTree!);

    useEffect(() => {
        // only re-render when fileTree changes
        $project.listen((project, _oldProject, changed) => {
            if (changed === "fileTree") {
                setFiles(project.fileTree!);
            }
        });
    }, []);

    return (
        <div>
            {Object.entries(files).map(([key, file]) => (
                <Fragment key={`${key}-con`}>
                    {isDirectory(file)
                        ? (
                            <FileDirectory
                                directory={file}
                                key={`${key}-root`}
                                folder
                            />
                        )
                        : <FileEntry file={file} key={`${key}-root`} />}
                </Fragment>
            ))}
        </div>
    );
};

export default FileTree;
