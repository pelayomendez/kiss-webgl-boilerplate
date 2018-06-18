
/* KISS WebGl Template . Global Lights */
/* Dummy 3D Object */

function SampleCube(scene) {

	var geometry = new THREE.BoxGeometry( global.size, global.size, global.size ); 
	var material = new THREE.MeshStandardMaterial( { color: global.color } );
	var cube = new THREE.Mesh( geometry, material ); 
	
	cube.position.set(0,0,-5);
	scene.add(cube);
	
	this.update = function(time) {
		cube.rotation.x += 0.01; 
		cube.rotation.y += 0.01;
	}

	/* GlobalParams.js Listeners */

	c_mesh_size.onChange(function(){
		cube.geometry = new THREE.BoxGeometry( global.size, global.size, global.size ); 
	});
	  
	c_mesh_color.onChange(function(){
		cube.material = new THREE.MeshStandardMaterial( { color: global.color } );
	});

}