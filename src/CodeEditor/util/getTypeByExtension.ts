export const getTypeByExtension = (extension: string) => {
    if (extension.startsWith("html")) return "html";
    if (extension.startsWith("css")) return "css";
    if (extension.endsWith("js")) return "javascript";
    if (extension.endsWith("json")) return "json";
    return "plaintext";
};
