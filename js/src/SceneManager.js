
/* KISS WebGl Template . Scene Manager */
/* Main Scene */

function SceneManager(canvas) {

    const clock = new THREE.Clock();
    var stats = new Stats();
    
    const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    }
    
    const scene = buildScene();
    const renderer = buildRender(screenDimensions);
    const camera = buildCamera(screenDimensions);
    const sceneElements = createSceneElements(scene);

    function buildScene() {

        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#000");

        stats.showPanel( 0 );
        document.body.appendChild( stats.dom );
        
        return scene;

    }

    function buildRender({ width, height }) {

        const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: true }); 
        const DPR = (window.devicePixelRatio) ? window.devicePixelRatio : 1;
        renderer.setPixelRatio(DPR);
        renderer.setSize(width, height);
        renderer.gammaInput = true;
        renderer.gammaOutput = true; 
        
        return renderer;

    }

    function buildCamera({ width, height }) {

        const aspectRatio = width / height;
        const fieldOfView = 60;
        const nearPlane = 1;
        const farPlane = 100; 
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);

        return camera;

    }

    function createSceneElements(scene) {

        const sceneElements = [
            new GlobalLights(scene),
            new SampleCube(scene)
        ]

        return sceneElements

    }

    this.update = function() {

        stats.begin();

        const elapsedTime = clock.getElapsedTime();
    
        for(let i=0; i<sceneElements.length; i++)
            sceneElements[i].update(elapsedTime);
        
        renderer.render(scene, camera);

        stats.end();

    }

    this.onWindowResize = function() {

        const { width, height } = canvas;

        screenDimensions.width = width;
        screenDimensions.height = height;
    
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        
        renderer.setSize(width, height);
    
    }

}