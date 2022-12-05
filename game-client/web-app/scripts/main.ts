import { Scribe, LogLevels } from "@lorekeepers-of-bellithriel/scribe";
import { SideQuest } from "@/scripts/side-quest";

export const scribe = new Scribe({ level: LogLevels.All });

export const main = async (host: HTMLCanvasElement) => {
    const sdq = new SideQuest({ host });
    const scene = await sdq.createScene();
    sdq.engine.runRenderLoop(() => {
        scene.render();
    });
};
