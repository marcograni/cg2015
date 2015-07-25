var Feature = require('./Feature.js');

Feature.inherits(BanconeAngolare, Feature);

function BanconeAngolare(feature) {
	Feature.call(this, feature);
}

BanconeAngolare.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

BanconeAngolare.prototype.in_graph = true;
BanconeAngolare.prototype.in_2D_map = true;

BanconeAngolare.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

  
  var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
  var acciaioscuro=THREE.ImageUtils.loadTexture("../../assets/textures/acciaioscuro.jpg" )
  var gamba = THREE.ImageUtils.loadTexture("../../assets/textures/BanconeAngolarene.jpg" )
  var cassetti = THREE.ImageUtils.loadTexture("../../assets/textures/cassetti.jpg" )


  var cubeGeometryBase = new THREE.BoxGeometry(0.7,1.65,0.04);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:cassetti});
  var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  BanconeAngolare.position.set(0,0.82,0.025);
  BanconeAngolare.rotation.x=Math.PI/2;
  o1.add(BanconeAngolare);


  var cylinderGeometry1 = new THREE.CylinderGeometry(0.35,0.35,0.03991,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({map:cassetti});
  var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  rubinetto.position.set(0,0.82,-0.8);
  o1.add(rubinetto);

  var cubeGeometryBase = new THREE.BoxGeometry(0.7,1.65,0.03995);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:cassetti});
  var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  BanconeAngolare.position.set(0.81,0.82,-0.8);
  BanconeAngolare.rotation.x=Math.PI/2;
  BanconeAngolare.rotation.z=Math.PI/2;
  o1.add(BanconeAngolare);



//gambe tavolo sx


var cubeGeometryBase = new THREE.BoxGeometry(0.8,0.07,0.07);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.1,0.72);
o1.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.05,0.05);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,0.72);
piede.rotation.z=Math.PI/2;
o1.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.6,0.02);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,0.72);
piede.rotation.z=Math.PI/2;
o1.add(piede);

//gambe tavolo centro

var cubeGeometryBase = new THREE.BoxGeometry(0.8,0.07,0.07);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.1,-0.72);
o1.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.05,0.05);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,-0.72);
piede.rotation.z=Math.PI/2;
o1.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.6,0.02);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,-0.72);
piede.rotation.z=Math.PI/2;
o1.add(piede);

       //gambe tavolo centro
       
       var cubeGeometryBase = new THREE.BoxGeometry(0.8,0.07,0.07);
       var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
       var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
       piede.position.set(0,0.1,-0.72);
       piede.rotation.y=Math.PI/2;
       o1.add(piede);
       
       var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.05,0.05);
       var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
       var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
       piede.position.set(0,0.44,-0.72);
       piede.rotation.z=Math.PI/2;
       piede.rotation.y=Math.PI/2;
       o1.add(piede);

       var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.6,0.02);
       var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
       var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
       piede.position.set(0,0.44,-0.72);
       piede.rotation.z=Math.PI/2;
       piede.rotation.y=Math.PI/2;
       o1.add(piede);

       //gambe tavolo centro
       
       var cubeGeometryBase = new THREE.BoxGeometry(0.8,0.07,0.07);
       var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
       var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
       piede.position.set(1.2,0.1,-0.76);
       piede.rotation.y=Math.PI/2;
       o1.add(piede);
       
       var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.05,0.05);
       var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
       var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
       piede.position.set(1.2,0.44,-0.76);
       piede.rotation.z=Math.PI/2;
       piede.rotation.y=Math.PI/2;
       o1.add(piede);

       var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.6,0.02);
       var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
       var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
       piede.position.set(1.2,0.44,-0.76);
       piede.rotation.z=Math.PI/2;
       piede.rotation.y=Math.PI/2;
       o1.add(piede);

       var o2=new  THREE.Object3D();
       o1.add(o2);
       o2.position.set(1.3,0.12, -1.05);
       o2.rotation.y=-Math.PI/2;

//parete

var cubeGeometryBase = new THREE.BoxGeometry(0.08,0.6,1.2);
var cubeMaterial = new THREE.MeshLambertMaterial({map:cassetti});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,1,0.5);
o2.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.082,0.03,1.201);
var cubeMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,1.1,0.5);
o2.add(piede);

//luce

var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.01,0.06,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(0.06,1.25,0.4);
rubinetto.rotation.z=Math.PI/2;
o2.add(rubinetto);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.01,0.06,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(0.06,1.25,0.7);
rubinetto.rotation.z=Math.PI/2;
o2.add(rubinetto);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.015,0.015,0.4,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(0.1,1.25,0.55);
rubinetto.rotation.x=Math.PI/2;
o2.add(rubinetto);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.015,0.015,0.4,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(0.1,1.2,0.55);
rubinetto.rotation.x=Math.PI/2;
o2.add(rubinetto);


var cubeGeometryBase = new THREE.BoxGeometry(0.025,0.04,0.005);
var cubeMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0.1,1.23,0.7);
o2.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.025,0.04,0.005);
var cubeMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0.1,1.23,0.4);
o2.add(piede);

var curve = new THREE.CubicBezierCurve3(
 new THREE.Vector3( 0.06, 0, 0 ),
 new THREE.Vector3( 0.06, 0, 0.1 ),
 new THREE.Vector3( 0.06, 0,0.28),
 new THREE.Vector3( 0.06, 0,0.5 )
 );


var geometry = new THREE.LatheGeometry( curve.getPoints(20),200,0,Math.PI);
var material = new THREE.MeshLambertMaterial( {map:acciaioscuro} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.position.set(0.1,1.2,0.3)
o2.add( lathe );

o1.feature = this;
o1.name = this.id;
var model = Feature.packageModel(o1);

return model;
};

module.exports = BanconeAngolare;