import {
    $webContainerLoading,
    $webContainerMessage,
    $webContainerURL,
} from "@/Core/stores/webContainer";
import { useStore } from "@nanostores/react";

const GameView = () => {
    const webContainerLoading = useStore($webContainerLoading);
    const webContainerMessage = useStore($webContainerMessage);
    const webContainerURL = useStore($webContainerURL);

    return (
        <div className="w-full h-full flex items-center justify-center flex-col">
            {webContainerLoading && (
                <>
                    <span className="d-loading d-loading-dots d-loading-lg">
                    </span>
                    <span>
                        {webContainerMessage}
                    </span>
                </>
            )}

            {!webContainerLoading && (
                <iframe
                    src={webContainerURL}
                    className="w-full h-full"
                    title="Game"
                >
                </iframe>
            )}
        </div>
    );
};

export default GameView;
