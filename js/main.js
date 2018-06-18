
/* KISS WebGl Template . Main */
/* Main JS file of the project */

const canvas = document.getElementById("mainCanvas");
const sceneManager = new SceneManager(canvas);

bindEventListeners();
animate();

function bindEventListeners() {
	window.onresize = resizeCanvas;
	resizeCanvas();	
}

function animate() {
    requestAnimationFrame(animate);
    sceneManager.update();
}

function resizeCanvas() {
	canvas.style.width = '100%';
	canvas.style.height= '100%';
	canvas.width  = canvas.offsetWidth;
	canvas.height = canvas.offsetHeight;
    sceneManager.onWindowResize();
}

