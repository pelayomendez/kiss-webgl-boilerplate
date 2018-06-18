
/* KISS WebGl Template . Global Params */
/* Global variables used by the elements of the stage */

var global = {
	size:1,
	color: "#00FFBC"
}

var gui = new dat.GUI();
var c_mesh_size = gui.add(global, 'size', 0,2);
var c_mesh_color = gui.addColor(global, 'color', 0,100);