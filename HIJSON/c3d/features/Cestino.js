var Feature = require('./Feature.js');

Feature.inherits(Cestino, Feature);

function Cestino(feature) {
	Feature.call(this, feature);
}

Cestino.prototype.style = {
	prefix: "fa",
	icon: "minus",
	zIndex: 3
};

Cestino.prototype.in_graph = true;
Cestino.prototype.in_2D_map = false;

Cestino.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
	o1.rotation.x=Math.PI/2;

	
	var acciaioscuro=THREE.ImageUtils.loadTexture("../../assets/textures/acciaioscuro.jpg" )

	var curve = new THREE.SplineCurve3( [
		new THREE.Vector3( 0.12, 0, 0 ),
		new THREE.Vector3( 0.15, 0, 0.3 )
		] );


	var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
	var material = new THREE.MeshLambertMaterial( { map:acciaioscuro} );
	material.side = THREE.DoubleSide;
	var lathe = new THREE.Mesh( geometry, material );
	lathe.rotation.x=-Math.PI/2
	o1.add( lathe );

	var cylinderGeometry1 = new THREE.CylinderGeometry(0.12,0.12,0.01,80);
	var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaioscuro});
	var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
	maniglia.position.set(0,0.005,0);
	o1.add(maniglia);
	
	
	o1.feature = this;
	o1.name = this.id;
	var model = Feature.packageModel(o1);

	return model;
};

module.exports = Cestino;