import ToolbarMenu from "./ToolbarMenu";

const Toolbar = () => {
    return (
        <div
            className="flex items-center justify-end | bg-base-200"
            role="toolbar"
        >
            <ToolbarMenu />
        </div>
    );
};

export default Toolbar;
