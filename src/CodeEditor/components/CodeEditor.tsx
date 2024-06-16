import { Editor } from "@monaco-editor/react";
import type { editor } from "monaco-editor";
import { FC, useEffect, useRef, useState } from "react";
import { $currentFile } from "../../Core/stores/files";
import { getTypeByExtension } from "../util/getTypeByExtension";
import { queryFile } from "../util/queryFile";

const CodeEditor: FC = () => {
    const editorRef = useRef<editor.IStandaloneCodeEditor | null>(null);
    const [content, setContent] = useState("");
    const [language, setLanguage] = useState("javascript");

    const handleMount = (editor: editor.IStandaloneCodeEditor) => {
        editorRef.current = editor;
        updateToCurrentFile();
    };

    const updateToCurrentFile = () => {
        const currentFile = $currentFile.get();
        const file = queryFile(currentFile!);
        const fileContent = file?.file.contents;
        setContent(fileContent ?? "");
    };

    useEffect(() => {
        $currentFile.listen((currentFile, oldCurrentFile) => {
            if (currentFile === oldCurrentFile) return;

            updateToCurrentFile();

            const language = getTypeByExtension(
                currentFile?.split(".").pop() ?? "",
            );
            setLanguage(language);
        });
    }, []);

    useEffect(() => {
        if (editorRef.current) {
            editorRef.current.setValue(content);
        }
    }, [content]);

    return (
        <Editor
            defaultLanguage="javascript"
            theme="vs-dark"
            language={language}
            options={{
                fontSize: 20,
            }}
            path={"main.js"}
            height={"100%"}
            onMount={handleMount}
        />
    );
};

CodeEditor.displayName = "MonacoEditor";

export default CodeEditor;
