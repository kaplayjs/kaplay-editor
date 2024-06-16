import { WebContainer } from "@webcontainer/api";
import { Allotment } from "allotment";
import { useEffect } from "react";
import CodeEditor from "../../CodeEditor/components/CodeEditor";
import FileTree from "../../FileTree/components/FileTree";
import GameView from "../../GameView/components/GameView";
import Toolbar from "../../Toolbar/components/Toolbar";
import { $project } from "../stores/project";
import {
    $webContainer,
    $webContainerLoading,
    $webContainerMessage,
    $webContainerURL,
} from "../stores/webContainer";

function App() {
    // WebContainer initialization
    useEffect(() => {
        const initWebContainer = async () => {
            const webcontainerInstance = await WebContainer.boot();

            $webContainer.set(webcontainerInstance);
            $webContainerLoading.set(true);
            $webContainerMessage.set("Initializing WebContainer...");

            await webcontainerInstance.mount($project.get().fileTree);

            async function startDevServer() {
                const installProcess = await webcontainerInstance.spawn("npm", [
                    "install",
                ]);
                $webContainerMessage.set("Installing dependencies...");

                const installExitCode = await installProcess.exit;
                if (installExitCode !== 0) {
                    throw new Error("Unable to run npm install");
                }

                // `npm run dev`
                $webContainerMessage.set("Starting development server...");
                await webcontainerInstance.spawn("npm", ["run", "start"]);
            }

            try {
                await startDevServer();
            } catch (error) {
                $webContainerMessage.set("Something went wrong");
            }

            webcontainerInstance.on("server-ready", (_port, url) => {
                $webContainerURL.set(url);
                $webContainerMessage.set(`Server ready at ${url}`);
                $webContainerLoading.set(false);
            });
        };

        initWebContainer();
    }, []);

    return (
        <main className="h-screen flex flex-col">
            <Toolbar />

            <Allotment defaultSizes={[0.3, 1, 1]}>
                <Allotment.Pane>
                    <FileTree />
                </Allotment.Pane>
                <Allotment.Pane>
                    <CodeEditor />
                </Allotment.Pane>
                <Allotment.Pane>
                    <GameView />
                </Allotment.Pane>
            </Allotment>
        </main>
    );
}

export default App;
