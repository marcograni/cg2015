var Feature = require('./Feature.js');

Feature.inherits(Banco, Feature);

function Banco(feature) {
	Feature.call(this, feature);
}

Banco.prototype.style = {
	prefix: "fa",
	icon: "minus",
	zIndex: 3
};

Banco.prototype.in_graph = true;
Banco.prototype.in_2D_map = false;

Banco.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
	o1.rotation.x=Math.PI/2;

	var riciclo = THREE.ImageUtils.loadTexture("../../assets/textures/riciclo.jpg" )

//secchio
var curve = new THREE.SplineCurve3([
	new THREE.Vector3( 0, 0, 0 ),
	new THREE.Vector3( 0.22, 0, 0.01 ),
	new THREE.Vector3( 0.26, 0, 0.65 ),
	new THREE.Vector3( 0.26, 0, 0.70 )

	]
	);
//etichetta
var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
var material = new THREE.MeshLambertMaterial( { color:0xffffff} );
var lathe = new THREE.Mesh( geometry, material );
material.side = THREE.DoubleSide;
lathe.position.set(0,0.4,0);
lathe.rotation.x=-Math.PI/2;
lathe.scale.set(0.8,1,1);
o1.add( lathe );

var curve = new THREE.SplineCurve3([

	new THREE.Vector3( 0.25, 0, 0.01 ),    
	new THREE.Vector3( 0.25, 0, 0.25)


	]
	);
var geometry = new THREE.LatheGeometry( curve.getPoints(20),200,0,Math.PI/2);
var material = new THREE.MeshLambertMaterial( {map:riciclo } );
var lathe = new THREE.Mesh( geometry, material );
lathe.position.set(-0.028,0.7,0);
lathe.rotation.x=-Math.PI/2;
lathe.rotation.z=-Math.PI/4;
o1.add( lathe );


o1.feature = this;
o1.name = this.id;
var model = Feature.packageModel(o1);

return model;
};

module.exports = Banco;