var Feature = require('./Feature.js');

Feature.inherits(PompaVuoto, Feature);

function PompaVuoto(feature) {
	Feature.call(this, feature);
}

PompaVuoto.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

PompaVuoto.prototype.in_graph = true;
PompaVuoto.prototype.in_2D_map = false;

PompaVuoto.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;
  o1.scale.set(0.08,0.08,0.08);
//pompa a vuoto



var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
var cylinderGeometry1 = new THREE.CylinderGeometry(0.10,0.10,3,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0,14,0);
o1.add(maniglia);


var cylinderGeometry1 = new THREE.CylinderGeometry(0.18,0.10,2,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0,16,0);
o1.add(maniglia);   


var torusMaterial = new THREE.MeshPhongMaterial( { color: 0x777777 } );
var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.2, 0.1, 6, 6 ), torusMaterial );
torus.rotation.x =  Math.PI/2;
torus.position.y=17;
o1.add( torus );   


var curve = new THREE.SplineCurve3( [
  new THREE.Vector3( 0.5, 0, 0 ),
  new THREE.Vector3( 0.7, 0, 0.5 ),
  new THREE.Vector3( 0.5, 0, 1 ),
  new THREE.Vector3( 0.7, 0, 1.5 ),
  new THREE.Vector3( 0.5, 0, 2 )
  ] );


var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
var material = new THREE.MeshLambertMaterial( { color: 0x0066FF} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.rotation.x=Math.PI/2;
lathe.scale.set(0.2,0.2,0.2);
lathe.position.set(0,17.4,0)

o1.add( lathe );


var cylinderGeometry1 = new THREE.CylinderGeometry(0.1,0.1,1.6,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFF9933});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0,16.5,-0.95);
maniglia.rotation.x=Math.PI/2;
o1.add(maniglia);

var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.2, 0.1, 6, 6 ), torusMaterial );
torus.position.set(0,16.5,-0.3);
o1.add( torus ); 


var cubeGeometryBase = new THREE.BoxGeometry(0.22,0.22,0.32);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,16.5,-1);
o1.add(piede);


var cylinderGeometry1 = new THREE.CylinderGeometry(0.06,0.06,0.2,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.2,16.5,-1);
maniglia.rotation.z=Math.PI/2;
o1.add(maniglia);


var cylinderGeometry1 = new THREE.CylinderGeometry(0.03,0.03,0.3,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.25,16.5,-1);
maniglia.rotation.x=Math.PI/4;
o1.add(maniglia);


var cylinderGeometry1 = new THREE.CylinderGeometry(0.61,0.61,0.299,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x0066FF});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0,17.4,-1.8);
maniglia.rotation.z=Math.PI/2;
o1.add(maniglia);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.58,0.58,0.3,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFFFFFF});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0,17.4,-1.8);
maniglia.rotation.z=Math.PI/2;
o1.add(maniglia);


var texture = THREE.ImageUtils.loadTexture("../../assets/textures/barometro.jpg" )
var cubeGeometryBase = new THREE.BoxGeometry(0.301,0.8,0.8);
var cubeMaterial = new THREE.MeshLambertMaterial({map:texture});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,17.4,-1.8);
o1.add(piede);


var cylinderGeometry1 = new THREE.CylinderGeometry(0.1,0.1,0.5,5);
var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFF9933});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0,16.5,-1.8);
o1.add(maniglia);


var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
var material = new THREE.MeshLambertMaterial( { color: 0x0066FF} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.rotation.x=Math.PI/2;
lathe.scale.set(0.2,0.2,0.2);
lathe.position.set(0,16.4,-1.8)

o1.add( lathe );     

o1.feature = this;
o1.name = this.id;
var model = Feature.packageModel(o1);

return model;
};

module.exports = PompaVuoto;