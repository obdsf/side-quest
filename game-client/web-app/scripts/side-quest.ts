import {
    Engine,
    Scene,
    ArcRotateCamera,
    Vector3,
    HemisphericLight,
    MeshBuilder,
    AmmoJSPlugin,
    PhysicsImpostor,
    //
} from "@babylonjs/core";
import Ammo from "@/physics/ammo-290822";
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
        // what to do with each resize
        const resize = () => {
            //! the following width & height assignments are needed,
            //! without them the canvas does not resize properly
            //! also 0 truly is the magic number here, positive
            //! values make the canvas clunky, negative use the
            //! defaults (300x300), which also make it clunky
            //! only 0 & undefined have been tested and work
            //! although undefined makes typescript complain
            //! for this to work, the host canvas must have
            //! width/height set to 100% using css (as done
            //! in app.vue), these two tricks combined make
            //! the canvas host actually responsive
            //! https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/width
            host.width = 0;
            host.height = 0;
            //! without this, the babylon engine does not react to resizes
            engine.resize();
        };
        // catch global resize event
        onresize = resize;
        // also resize once at the beginning
        resize();
    };
    public createScene = async () => {
        const scene = new Scene(this._engine);
        const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new Vector3(0, 0, 0));
        camera.attachControl(this._host, true);
        const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
        const box = MeshBuilder.CreateBox("box", {});
        scene.addCamera(camera);
        scene.addLight(light);
        scene.addMesh(box);
        const ammo = await Ammo();
        scene.enablePhysics(new Vector3(0, -9.81, 0), new AmmoJSPlugin(true, ammo));
        new PhysicsImpostor(box, PhysicsImpostor.BoxImpostor, { mass: 1 });
        return scene;
    };
}
