<template>
    <v-app>
        <v-main>
            <canvas class="engine-host" ref="engineHost"></canvas>
            <!-- <v-overlay v-model="overlay">
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card>
                                <v-toolbar>
                                    <v-toolbar-title>
                                        Title
                                    </v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-icon>
                                        mdi-circle
                                    </v-icon>
                                </v-toolbar>
                                Hello World!
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-overlay> -->
            <v-dialog v-model="overlay">
                <v-container>
                    <v-row>
                        <v-col>
                            <v-card>
                                <v-toolbar>
                                    <v-toolbar-title>
                                        Title
                                    </v-toolbar-title>
                                    <v-spacer></v-spacer>
                                    <v-icon>
                                        mdi-circle
                                    </v-icon>
                                </v-toolbar>
                                Hello World!
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-dialog>
        </v-main>
    </v-app>
</template>

<script lang="ts" setup>
//#region //! # imports # !//
import { main, scribe } from '@/scripts/main';
import { useAppStore } from "@/store/app";
//#endregion

//#region //! # props # !//
//#endregion

//#region //! # emits # !//
//#endregion

//#region //! # data # !//
const appStore = useAppStore();
scribe.info(`${appStore.name} v${appStore.version}`);
const engineHost = ref();
const overlay = ref(true);
//#endregion

//#region //! # computed # !//
//#endregion

//#region //! # methods # !//
//#endregion

//#region //! # watchers # !//
//#endregion

//#region //! # hooks # !//
onMounted(() => {
    if (!(engineHost.value instanceof HTMLCanvasElement)) {
        scribe.error("app", "couldn't find engine host");
        return;
    }
    main(engineHost.value);
});
//#endregion
</script>

<style>
html, body {
    overflow: hidden;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
}
.engine-host {
    width: 100%;
    height: 100%;
}
</style>
