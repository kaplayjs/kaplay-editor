import { DirectoryNode, FileNode, FileSystemTree } from "@webcontainer/api";

/** file node with some metadata */
export interface KFileNode extends FileNode {
    file: {
        name: string;
        contents: string;
    };
}

export interface KDirectoryNode extends DirectoryNode {
    directory: KFileTree;
    name: string;
}

/** directory node with some metadata */
export interface KFileTree extends FileSystemTree {
    [name: string]: KFileNode | KDirectoryNode;
}
