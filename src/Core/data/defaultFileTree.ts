import { KFileTree } from "../types/fileTree";
import engineJs from "./defaultProject/engine.js?raw";
import indexHTML from "./defaultProject/index.html?raw";
import mainJs from "./defaultProject/main.js?raw";
import packageJson from "./defaultProject/package.json?raw";

export const defaultFileTree: KFileTree = {
    "package.json": {
        file: {
            name: "package.json",
            contents: packageJson,
        },
    },
    "index.html": {
        file: {
            name: "index.html",
            contents: indexHTML,
        },
    },
    "main.js": {
        file: {
            name: "main.js",
            contents: mainJs,
        },
    },
    "engine.js": {
        file: {
            name: "engine.js",
            contents: engineJs,
        },
    },
};
