import fs from "fs";
import pkg from "./package.json";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    // todo: figure out why the `target` option was removed
    // target: "static",
    // https://nuxt.com/docs/api/configuration/nuxt-config#typescript
    typescript: { shim: false, strict: true, typeCheck: true },
    // https://codybontecou.com/how-to-use-vuetify-with-nuxt-3.html
    css: ["vuetify/lib/styles/main.sass", "@mdi/font/css/materialdesignicons.min.css"],
    build: { transpile: ["vuetify"] },
    modules: ["@pinia/nuxt"],
    vite: {
        define: { "process.env.DEBUG": false },
        // https://github.com/nuxt/framework/issues/1796#issuecomment-1130014050
        server: {
            https: {
                cert: fs.readFileSync("./https/cert.pem"),
                key: fs.readFileSync("./https/private-key.pem"),
            },
            hmr: { protocol: "wss" },
        },
    },
    runtimeConfig: {
        public: {
            packageJson: {
                name: pkg.name,
                version: pkg.version,
            },
        },
    },
});
