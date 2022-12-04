import {
    Engine,
    Scene,
    ArcRotateCamera,
    Vector3,
    HemisphericLight,
    MeshBuilder,
    //
} from "@babylonjs/core";
import { scribe } from "@/scripts/main";

type EngineHost = HTMLCanvasElement;

export type Options = {
    host: EngineHost;
};

export class SideQuest {
    private _host: EngineHost;
    private _engine: Engine;
    public get engine() {
        return this._engine;
    }
    constructor(options: Options) {
        this._host = options.host;
        this._engine = new Engine(options.host);
        this._initializeEngineHost(options.host, this._engine);
    }
    private _initializeEngineHost = (host: EngineHost, engine: Engine) => {
        const resize = () => {
            host.width = document.body.clientWidth;
            host.height = document.body.clientHeight;
            engine.resize();
        };
        onresize = resize;
        resize();
    };
    public createScene = () => {
        const scene = new Scene(this._engine);
        const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0));
        camera.attachControl(this._host, true);
        const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
        const box = MeshBuilder.CreateBox("box", {});
        scene.addCamera(camera);
        scene.addLight(light);
        scene.addMesh(box);
        return scene;
    };
}
