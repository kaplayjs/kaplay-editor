import type { KFileNode } from "@/Core/types/fileTree";
import { cn } from "@/Core/utils/cn";
import { forwardRef, useImperativeHandle, useRef } from "react";

type Props = {
    file: KFileNode;
    onSubmit: (newName: string) => void;
    className?: string;
};

type Ref = HTMLInputElement;

const FileNameEdit = forwardRef<Ref, Props>(
    ({ file, onSubmit, className }, outerRef) => {
        const innerRef = useRef<HTMLInputElement>(null);

        useImperativeHandle(outerRef, () => innerRef.current!);

        return (
            <input
                ref={innerRef}
                type="text"
                className={cn(
                    "text-base-content w-full | d-input d-input-xs",
                    className,
                )}
                onChange={(e) => {
                    console.log(e.target.value);
                }}
                defaultValue={file.file.name}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSubmit(innerRef.current?.value || "");
                    }
                }}
                onBlur={() => {
                    onSubmit(innerRef.current?.value || "");
                }}
            />
        );
    },
);

export default FileNameEdit;
