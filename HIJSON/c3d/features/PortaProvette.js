var Feature = require('./Feature.js');

Feature.inherits(PortaProvette, Feature);

function PortaProvette(feature) {
	Feature.call(this, feature);
}

PortaProvette.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

PortaProvette.prototype.in_graph = true;
PortaProvette.prototype.in_2D_map = false;

PortaProvette.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;
  o1.scale.set(0.007,0.007,0.007);
  var o1a=new THREE.Object3D();
  o1.add(o1a);



//porta_provette

var cubeGeometryBase = new THREE.CubeGeometry(10,25,1);
var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x33CCCC, opacity: 0.3,
  transparent: true});
cubeMaterial.side = THREE.DoubleSide;
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(2,11,0);
banco.rotation.x=Math.PI/2;

o1.add(banco);





var curve = new THREE.CubicBezierCurve3(
 new THREE.Vector3( 0, 0, 0 ),
 new THREE.Vector3( 1.3, 0, -1 ),
 new THREE.Vector3( 1, 0, 8),
 new THREE.Vector3( 1, 0, 15 )
 );


var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
var material = new THREE.MeshLambertMaterial( { color: 0xffffff, opacity: 0.3,
  transparent: true} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.rotation.x=-Math.PI/2;


o1a.add( lathe );


//tappo
var texture = THREE.ImageUtils.loadTexture("../../assets/textures/sughero.jpg" )
var cylinderGeometry1 = new THREE.CylinderGeometry(1.1,0.8,2,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:texture});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(0,14.9,0);
o1a.add(rubinetto);

//interno
var curve = new THREE.CubicBezierCurve3(
 new THREE.Vector3( 0, 0, 0 ),
 new THREE.Vector3( 1.2, 0, -1 ),
 new THREE.Vector3( 1, 0, 8),
 new THREE.Vector3( 1, 0, 11 )
 );


var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
var material = new THREE.MeshLambertMaterial( { color: 0xff0000} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.rotation.x=-Math.PI/2;
o1a.add( lathe );

var cylinderGeometry1 = new THREE.CylinderGeometry(1,1,1,80);
var rubinetto = new THREE.Mesh(cylinderGeometry1,material);
rubinetto.position.set(0,11,0);
o1a.add(rubinetto);


var o2=o1a.clone();
o2.position.x=4;
var o3=o1a.clone();
o3.position.set(0,0,5);
var o4=o1a.clone();
o4.position.set(0,0,-5);
var o5=o1a.clone();
o5.position.set(4,0,-5);
var o6=o1a.clone();
o6.position.set(4,0,5);
o1.add(o2);
o1.add(o3);
o1.add(o4);
o1.add(o5);
o1.add(o6);


var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
var cubeGeometryBase = new THREE.CubeGeometry(2,13,0.5);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
cubeMaterial.side = THREE.DoubleSide;
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(1.5,6.5,11);
o1.add(banco);


var cubeGeometryBase = new THREE.CubeGeometry(2,13,0.5);
cubeMaterial.side = THREE.DoubleSide;
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(1.5,6.5,-11);
o1.add(banco);

var cubeGeometryBase = new THREE.CubeGeometry(11,26,0.5);
cubeMaterial.side = THREE.DoubleSide;
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(1.5,0,0);
banco.rotation.x=Math.PI/2;
o1.add(banco);

o1.feature = this;
o1.name = this.id;
var model = Feature.packageModel(o1);

return model;
};

module.exports = PortaProvette;