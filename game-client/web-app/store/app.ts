import { defineStore } from "pinia";

export const useAppStore = defineStore("app", () => {
    // privates
    const _config = useRuntimeConfig();
    // name & version
    const name = _config.public.packageJson.name;
    const version = _config.public.packageJson.version;
    //
    return { name, version };
});
