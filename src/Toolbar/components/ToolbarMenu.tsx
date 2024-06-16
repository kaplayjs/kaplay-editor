const ToolbarMenu = () => {
    return (
        <div className="d-dropdown d-dropdown-end">
            <div tabIndex={0} role="button" className="d-btn d-btn-xs m-1">
                PROJECT
            </div>
            <ul
                tabIndex={0}
                className="d-dropdown-content z-[1] d-menu p-2 shadow bg-base-100 rounded-box w-52"
            >
                <li>
                    <a>Item 1</a>
                </li>
                <li>
                    <a>Item 2</a>
                </li>
            </ul>
        </div>
    );
};

export default ToolbarMenu;
