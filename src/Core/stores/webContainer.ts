import { WebContainer } from "@webcontainer/api";
import { atom } from "nanostores";

export const $webContainer = atom<WebContainer | null>(null);
export const $webContainerLoading = atom(true);
export const $webContainerMessage = atom("");
export const $webContainerURL = atom("");
export const $webContainerError = atom<Error | null>(null);
