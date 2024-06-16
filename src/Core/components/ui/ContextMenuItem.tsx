import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import type { FC, PropsWithChildren } from "react";
import { ContextMenuItem as BaseContextMenuItem } from "./context-menu";

type Props = PropsWithChildren<
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
        inset?: boolean;
    }
>;

const ContextMenuItem: FC<Props> = ({ children, ...props }) => {
    return (
        <>
            <BaseContextMenuItem
                className="d-btn d-btn-sm d-btn-ghost"
                {...props}
            >
                {children}
            </BaseContextMenuItem>
        </>
    );
};

export default ContextMenuItem;
