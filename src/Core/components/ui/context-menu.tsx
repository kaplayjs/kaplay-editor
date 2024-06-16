import * as ContextMenuPrimitive from "@radix-ui/react-context-menu";
import {
    CheckIcon,
    ChevronRightIcon,
    DotFilledIcon,
} from "@radix-ui/react-icons";
import * as React from "react";

import { cn } from "@/Core/utils/cn";

const ContextMenu = ContextMenuPrimitive.Root;

const ContextMenuTrigger = ContextMenuPrimitive.Trigger;

const ContextMenuGroup = ContextMenuPrimitive.Group;

const ContextMenuPortal = ContextMenuPrimitive.Portal;

const ContextMenuSub = ContextMenuPrimitive.Sub;

const ContextMenuRadioGroup = ContextMenuPrimitive.RadioGroup;

const ContextMenuSubTrigger = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.SubTrigger>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubTrigger> & {
        inset?: boolean;
    }
>(({ className, inset, children, ...props }, ref) => (
    <ContextMenuPrimitive.SubTrigger
        ref={ref}
        className={cn(
            "scn-flex scn-cursor-default scn-select-none scn-items-center scn-rounded-sm scn-px-2 scn-py-1.5 scn-text-sm scn-outline-none focus:scn-bg-slate-100 focus:scn-text-slate-900 data-[state=open]:scn-bg-slate-100 data-[state=open]:scn-text-slate-900 dark:focus:scn-bg-slate-800 dark:focus:scn-text-slate-50 dark:data-[state=open]:scn-bg-slate-800 dark:data-[state=open]:scn-text-slate-50",
            inset && "scn-pl-8",
            className,
        )}
        {...props}
    >
        {children}
        <ChevronRightIcon className="scn-ml-auto scn-h-4 scn-w-4" />
    </ContextMenuPrimitive.SubTrigger>
));
ContextMenuSubTrigger.displayName = ContextMenuPrimitive.SubTrigger.displayName;

const ContextMenuSubContent = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.SubContent>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
    <ContextMenuPrimitive.SubContent
        ref={ref}
        className={cn(
            "scn-z-50 scn-min-w-[8rem] scn-overflow-hidden scn-rounded-md scn-border scn-border-slate-200 scn-bg-white scn-p-1 scn-text-slate-950 scn-shadow-lg data-[state=open]:scn-animate-in data-[state=closed]:scn-animate-out data-[state=closed]:scn-fade-out-0 data-[state=open]:scn-fade-in-0 data-[state=closed]:scn-zoom-out-95 data-[state=open]:scn-zoom-in-95 data-[side=bottom]:scn-slide-in-from-top-2 data-[side=left]:scn-slide-in-from-right-2 data-[side=right]:scn-slide-in-from-left-2 data-[side=top]:scn-slide-in-from-bottom-2 dark:scn-border-slate-800 dark:scn-bg-slate-950 dark:scn-text-slate-50",
            className,
        )}
        {...props}
    />
));
ContextMenuSubContent.displayName = ContextMenuPrimitive.SubContent.displayName;

const ContextMenuContent = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Portal>
        <ContextMenuPrimitive.Content
            ref={ref}
            className={cn(
                "scn-z-50 scn-min-w-[8rem] scn-overflow-hidden scn-rounded-md scn-border scn-border-slate-200 scn-bg-white scn-p-1 scn-text-slate-950 scn-shadow-md data-[state=open]:scn-animate-in data-[state=closed]:scn-animate-out data-[state=closed]:scn-fade-out-0 data-[state=open]:scn-fade-in-0 data-[state=closed]:scn-zoom-out-95 data-[state=open]:scn-zoom-in-95 data-[side=bottom]:scn-slide-in-from-top-2 data-[side=left]:scn-slide-in-from-right-2 data-[side=right]:scn-slide-in-from-left-2 data-[side=top]:scn-slide-in-from-bottom-2 dark:scn-border-slate-800 dark:scn-bg-slate-950 dark:scn-text-slate-50",
                className,
            )}
            {...props}
        />
    </ContextMenuPrimitive.Portal>
));
ContextMenuContent.displayName = ContextMenuPrimitive.Content.displayName;

const ContextMenuItem = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Item> & {
        inset?: boolean;
    }
>(({ className, inset, ...props }, ref) => (
    <ContextMenuPrimitive.Item
        ref={ref}
        className={cn(
            "scn-relative scn-flex scn-cursor-default scn-select-none scn-items-center scn-rounded-sm scn-px-2 scn-py-1.5 scn-text-sm scn-outline-none focus:scn-bg-slate-100 focus:scn-text-slate-900 data-[disabled]:scn-pointer-events-none data-[disabled]:scn-opacity-50 dark:focus:scn-bg-slate-800 dark:focus:scn-text-slate-50",
            inset && "scn-pl-8",
            className,
        )}
        {...props}
    />
));
ContextMenuItem.displayName = ContextMenuPrimitive.Item.displayName;

const ContextMenuCheckboxItem = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.CheckboxItem>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
    <ContextMenuPrimitive.CheckboxItem
        ref={ref}
        className={cn(
            "scn-relative scn-flex scn-cursor-default scn-select-none scn-items-center scn-rounded-sm scn-py-1.5 scn-pl-8 scn-pr-2 scn-text-sm scn-outline-none focus:scn-bg-slate-100 focus:scn-text-slate-900 data-[disabled]:scn-pointer-events-none data-[disabled]:scn-opacity-50 dark:focus:scn-bg-slate-800 dark:focus:scn-text-slate-50",
            className,
        )}
        checked={checked}
        {...props}
    >
        <span className="scn-absolute scn-left-2 scn-flex scn-h-3.5 scn-w-3.5 scn-items-center scn-justify-center">
            <ContextMenuPrimitive.ItemIndicator>
                <CheckIcon className="scn-h-4 scn-w-4" />
            </ContextMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </ContextMenuPrimitive.CheckboxItem>
));
ContextMenuCheckboxItem.displayName =
    ContextMenuPrimitive.CheckboxItem.displayName;

const ContextMenuRadioItem = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.RadioItem>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
    <ContextMenuPrimitive.RadioItem
        ref={ref}
        className={cn(
            "scn-relative scn-flex scn-cursor-default scn-select-none scn-items-center scn-rounded-sm scn-py-1.5 scn-pl-8 scn-pr-2 scn-text-sm scn-outline-none focus:scn-bg-slate-100 focus:scn-text-slate-900 data-[disabled]:scn-pointer-events-none data-[disabled]:scn-opacity-50 dark:focus:scn-bg-slate-800 dark:focus:scn-text-slate-50",
            className,
        )}
        {...props}
    >
        <span className="scn-absolute scn-left-2 scn-flex scn-h-3.5 scn-w-3.5 scn-items-center scn-justify-center">
            <ContextMenuPrimitive.ItemIndicator>
                <DotFilledIcon className="scn-h-4 scn-w-4 scn-fill-current" />
            </ContextMenuPrimitive.ItemIndicator>
        </span>
        {children}
    </ContextMenuPrimitive.RadioItem>
));
ContextMenuRadioItem.displayName = ContextMenuPrimitive.RadioItem.displayName;

const ContextMenuLabel = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Label>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Label> & {
        inset?: boolean;
    }
>(({ className, inset, ...props }, ref) => (
    <ContextMenuPrimitive.Label
        ref={ref}
        className={cn(
            "scn-px-2 scn-py-1.5 scn-text-sm scn-font-semibold scn-text-slate-950 dark:scn-text-slate-50",
            inset && "scn-pl-8",
            className,
        )}
        {...props}
    />
));
ContextMenuLabel.displayName = ContextMenuPrimitive.Label.displayName;

const ContextMenuSeparator = React.forwardRef<
    React.ElementRef<typeof ContextMenuPrimitive.Separator>,
    React.ComponentPropsWithoutRef<typeof ContextMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <ContextMenuPrimitive.Separator
        ref={ref}
        className={cn(
            "scn--mx-1 scn-my-1 scn-h-px scn-bg-slate-200 dark:scn-bg-slate-800",
            className,
        )}
        {...props}
    />
));
ContextMenuSeparator.displayName = ContextMenuPrimitive.Separator.displayName;

const ContextMenuShortcut = ({
    className,
    ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
    return (
        <span
            className={cn(
                "scn-ml-auto scn-text-xs scn-tracking-widest scn-text-slate-500 dark:scn-text-slate-400",
                className,
            )}
            {...props}
        />
    );
};
ContextMenuShortcut.displayName = "ContextMenuShortcut";

export {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuGroup,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuPortal,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger,
};
