import { persistentMap } from "@nanostores/persistent";
import { defaultFileTree } from "../data/defaultFileTree";
import { KFileTree } from "../types/fileTree";

type KAPLAYEditorProject = {
    name: string;
    description: string;
    author: string;
    /** compatible version */
    version: string;
    /** project structure */
    fileTree: KFileTree;
};

export const $project = persistentMap<KAPLAYEditorProject>("project:", {
    name: "Untitled",
    description: "A new project",
    author: "Anonymous",
    version: "0.0.1",
    fileTree: defaultFileTree,
}, {
    encode: JSON.stringify,
    decode: JSON.parse,
});
