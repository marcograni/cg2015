var Feature = require('./Feature.js');

Feature.inherits(TavoloTondo, Feature);

function TavoloTondo(feature) {
  Feature.call(this, feature);
}

TavoloTondo.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

TavoloTondo.prototype.in_graph = true;
TavoloTondo.prototype.in_2D_map = true;

TavoloTondo.prototype.get3DModel = function() {

  var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

  var blu = THREE.ImageUtils.loadTexture("../../assets/textures/cassetti.jpg" )
  var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
  var acciaioscuro=THREE.ImageUtils.loadTexture("../../assets/textures/acciaioscuro.jpg" )

  var cylinderGeometry1 = new THREE.CylinderGeometry(0.8,0.8,0.04,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  rubinetto.position.set(0,0.8199,0);
  o1.add(rubinetto);

  var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var cubeGeometryBase = new THREE.CubeGeometry(1.6,0.04,1.2);
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.set(0,0.82,0.5);
  o1.add(banco);

//gambe



var cubeGeometryBase = new THREE.BoxGeometry(0.8,0.07,0.07);
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.035,-0.22);
o1.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.71,0.05,0.05);
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,-0.22);
piede.rotation.z=Math.PI/2;
o1.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.71,0.4,0.02);
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,-0.22);
piede.rotation.z=Math.PI/2;
o1.add(piede);

       //parete

       var cubeGeometryBase = new THREE.BoxGeometry(0.08,0.6,1.9);
       var cubeMaterial = new THREE.MeshLambertMaterial({map:blu});
       var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
       piede.position.set(0,1.12,0.85);
       o1.add(piede);

       var cubeGeometryBase = new THREE.BoxGeometry(0.082,0.03,1.9);
       var cubeMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
       var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
       piede.position.set(0,1.22,0.85);
       o1.add(piede);

//luce

var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.01,0.06,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(0.06,1.37,0.4);
rubinetto.rotation.z=Math.PI/2;
o1.add(rubinetto);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.01,0.06,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(0.06,1.37,0.7);
rubinetto.rotation.z=Math.PI/2;
o1.add(rubinetto);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.015,0.015,0.4,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(0.1,1.37,0.55);
rubinetto.rotation.x=Math.PI/2;
o1.add(rubinetto);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.015,0.015,0.4,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(0.1,1.32,0.55);
rubinetto.rotation.x=Math.PI/2;
o1.add(rubinetto);


var cubeGeometryBase = new THREE.BoxGeometry(0.025,0.04,0.005);
var cubeMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0.1,1.35,0.7);
o1.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.025,0.04,0.005);
var cubeMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0.1,1.35,0.4);
o1.add(piede);

var curve = new THREE.CubicBezierCurve3(
 new THREE.Vector3( 0.06, 0, 0 ),
 new THREE.Vector3( 0.06, 0, 0.1 ),
 new THREE.Vector3( 0.06, 0,0.28),
 new THREE.Vector3( 0.06, 0,0.5 )
 );


var geometry = new THREE.LatheGeometry( curve.getPoints(20),200,0,Math.PI);
var material = new THREE.MeshLambertMaterial( { map:acciaioscuro} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.position.set(0.1,1.32,0.3)
o1.add( lathe );


//seconda luce

var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.01,0.06,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(-0.06,137,0.4);
rubinetto.rotation.z=Math.PI/2;
o1.add(rubinetto);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.01,0.06,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(-0.06,1.37,0.7);
rubinetto.rotation.z=Math.PI/2;
o1.add(rubinetto);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.015,0.015,0.4,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(-0.1,1.37,0.55);
rubinetto.rotation.x=Math.PI/2;
o1.add(rubinetto);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.015,0.015,0.4,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(-0.1,1.32,0.55);
rubinetto.rotation.x=Math.PI/2;
o1.add(rubinetto);


var cubeGeometryBase = new THREE.BoxGeometry(0.025,0.04,0.005);
var cubeMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(-0.1,1.35,0.7);
o1.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.025,0.04,0.005);
var cubeMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(-0.1,1.35,0.4);
o1.add(piede);

var curve = new THREE.CubicBezierCurve3(
 new THREE.Vector3( 0.06, 0, 0 ),
 new THREE.Vector3( 0.06, 0, 0.1 ),
 new THREE.Vector3( 0.06, 0,0.28),
 new THREE.Vector3( 0.06, 0,0.5 )
 );


var geometry = new THREE.LatheGeometry( curve.getPoints(20),200,0,Math.PI);
var material = new THREE.MeshLambertMaterial( { map:acciaioscuro} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.position.set(-0.1,1.32,0.3)
o1.add( lathe );


var o2=new THREE.Object3D();
o1.add(o2);
o2.rotation.y=Math.PI/2;
o2.position.set(0,0,1.45);


//tavolo

var cubeGeometryBase = new THREE.BoxGeometry(0.7,1.8,0.04);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,0.82,0);
banco.rotation.x=Math.PI/2
o2.add(banco);


//gambe tavolo sx


var cubeGeometryBase = new THREE.BoxGeometry(0.8,0.07,0.07);
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.035,0.82);
o2.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.05,0.05);
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,0.82);
piede.rotation.z=Math.PI/2;
o2.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.4,0.02);
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,0.82);
piede.rotation.z=Math.PI/2;
o2.add(piede);

//gambe tavolo dx

var cubeGeometryBase = new THREE.BoxGeometry(0.8,0.07,0.07);
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.035,-0.82);
o2.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.05,0.05);
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,-0.82);
piede.rotation.z=Math.PI/2;
o2.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.4,0.02);
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,-0.82);
piede.rotation.z=Math.PI/2;
o2.add(piede);


o1.feature = this;
o1.name = this.id;
var model = Feature.packageModel(o1);

return model;
};

module.exports = TavoloTondo;