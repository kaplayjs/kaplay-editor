import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuTrigger,
} from "@/Core/components/ui/context-menu";
import ContextMenuItem from "@/Core/components/ui/ContextMenuItem";
import { $currentFile } from "@/Core/stores/files";
import type { KFileNode } from "@/Core/types/fileTree";
import { cn } from "@/Core/utils/cn";
import { type FC, useEffect, useRef, useState } from "react";
import FileNameEdit from "./FileNameEdit";

type Props = {
    file: KFileNode;
    parent?: string;
};

const FileEntry: FC<Props> = ({ file, parent = "" }) => {
    const [isCurrent, setIsCurrent] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [fileName] = useState(`${parent}/${file.file.name}`);
    const fileNameInput = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        $currentFile.set(fileName);
    };

    const handleRenameClick = () => {
        setIsEditing(true);

        setTimeout(() => {
            fileNameInput.current?.focus();
        }, 0);
    };

    const handleRename = () => {
        setIsEditing(false);
    };

    useEffect(() => {
        $currentFile.listen((currentFile, oldCurrentFile) => {
            if (currentFile === fileName) {
                setIsCurrent(true);
            } else if (oldCurrentFile === fileName) {
                setIsCurrent(false);
            }
        });
    }, []);

    return (
        <ContextMenu>
            <ContextMenuTrigger
                className={cn(
                    "d-btn d-btn-sm w-full justify-start rounded-none px-2",
                    {
                        "d-btn-primary": isCurrent,
                        "d-btn-ghost": !isCurrent,
                    },
                )}
                onClick={handleClick}
            >
                <span className="truncate max-w-[80%]">
                    <>
                        <span
                            className={cn({
                                hidden: isEditing,
                            })}
                        >
                            {file.file.name}
                        </span>

                        <FileNameEdit
                            ref={fileNameInput}
                            file={file}
                            onSubmit={handleRename}
                            className={cn({
                                hidden: !isEditing,
                            })}
                        />
                    </>
                </span>
            </ContextMenuTrigger>
            <ContextMenuContent className="bg-base-200 rounded-box flex d-menu">
                <ContextMenuItem onClick={handleRenameClick}>
                    Rename
                </ContextMenuItem>
                <ContextMenuItem>
                    Delete
                </ContextMenuItem>
            </ContextMenuContent>
        </ContextMenu>
    );
};

export default FileEntry;
