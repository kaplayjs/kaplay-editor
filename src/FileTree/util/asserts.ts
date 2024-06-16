import type { KDirectoryNode, KFileNode } from "../../Core/types/fileTree";

export const isFile = (
    fileOrDirectory: KFileNode | KDirectoryNode,
): fileOrDirectory is KFileNode => {
    return "file" in fileOrDirectory;
};

export const isDirectory = (
    fileOrDirectory: KFileNode | KDirectoryNode,
): fileOrDirectory is KDirectoryNode => {
    return "directory" in fileOrDirectory;
};
