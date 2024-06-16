import { type FC, Fragment, useState } from "react";
import type { KDirectoryNode } from "../../Core/types/fileTree";
import { cn } from "../../Core/utils/cn";
import { isDirectory } from "../util/asserts";
import FileEntry from "./FileEntry";

type Props = {
    directory: KDirectoryNode;
    folder?: boolean;
};

const FileDirectory: FC<Props> = ({ directory, folder }) => {
    const [folded, setFolded] = useState(true);

    const handleClick = () => {
        setFolded(!folded);
    };

    return (
        <>
            <div
                className="d-btn d-btn-sm w-full justify-start rounded-none px-2"
                onClick={handleClick}
            >
                {folder && <span>{directory.name}</span>}
            </div>
            <div
                className={cn({
                    "hidden": folded,
                })}
            >
                {Object.entries(directory.directory).map(([key, file]) => (
                    <Fragment key={`${key}-cons`}>
                        {isDirectory(file)
                            ? (
                                <FileDirectory
                                    directory={file}
                                    key={`folder-${key}`}
                                />
                            )
                            : (
                                <FileEntry
                                    file={file}
                                    key={`folder-${key}`}
                                    parent={directory.name}
                                />
                            )}
                    </Fragment>
                ))}
            </div>
        </>
    );
};

export default FileDirectory;
