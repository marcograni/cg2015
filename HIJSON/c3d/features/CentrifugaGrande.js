var Feature = require('./Feature.js');

Feature.inherits(CentrifugaGrande, Feature);

function CentrifugaGrande(feature) {
	Feature.call(this, feature);
}

CentrifugaGrande.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

CentrifugaGrande.prototype.in_graph = true;
CentrifugaGrande.prototype.in_2D_map = false;

CentrifugaGrande.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;


  var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaioscuro.jpg" )
  var celeste=THREE.ImageUtils.loadTexture("../../assets/textures/blu_met.jpg" )
  var beige=THREE.ImageUtils.loadTexture("../../assets/textures/grigio.jpg" )
  var display=THREE.ImageUtils.loadTexture("../../assets/textures/centrifuga.jpg" )
  var zig=THREE.ImageUtils.loadTexture("../../assets/textures/zigrinatura.jpg" )
//base

var cubeGeometryBase = new THREE.BoxGeometry(0.5,0.1,0.6);
var cubeMaterial = new THREE.MeshLambertMaterial({map:celeste});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,0.32,0);
o1.add(banco);

var cubeGeometryBase = new THREE.BoxGeometry(0.05,0.1,0.6);
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.20,0.245,0);
banco.rotation.z=-Math.PI/5;
o1.add(banco);

var cubeGeometryBase = new THREE.BoxGeometry(0.05,0.1,0.6);
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.20,0.145,0);
banco.rotation.z=Math.PI/5;
o1.add(banco);

var cubeGeometryBase = new THREE.BoxGeometry(0.5,0.1,0.6);
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,0.07,0);
o1.add(banco);

var cubeGeometryBase = new THREE.BoxGeometry(0.5,0.35,0.006);
var cubeMaterial = new THREE.MeshLambertMaterial({map:beige});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,0.195,-0.3);
o1.add(banco);

var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,0.195,0.3);
o1.add(banco);

var cubeGeometryBase = new THREE.BoxGeometry(0.005,0.35,0.6);
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(-0.25,0.195,0);
o1.add(banco);

//coperchio

var cubeGeometryBase = new THREE.BoxGeometry(0.5,0.04,0.6);
var cubeMaterial = new THREE.MeshLambertMaterial({map:beige});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,0.397,0);
o1.add(banco);


var cubeGeometryBase = new THREE.BoxGeometry(0.01,0.06,0.04);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(-0.25,0.36,0.25);
o1.add(banco);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.005,0.005,0.04,80);
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(-0.254,0.37,0.25);
maniglia.rotation.x=Math.PI/2;
o1.add(maniglia);


var cubeGeometryBase = new THREE.BoxGeometry(0.01,0.06,0.04);
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(-0.25,0.36,-0.25);
o1.add(banco);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.005,0.005,0.04,80);
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(-0.254,0.37,-0.25);
maniglia.rotation.x=Math.PI/2;
o1.add(maniglia);


//perni coperchio
var cylinderGeometry1 = new THREE.CylinderGeometry(0.005,0.005,0.04,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(-0.17,0.37,0.17);
o1.add(maniglia);

var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(-0.17,0.37,-0.17);
o1.add(maniglia);

var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.17,0.37,-0.17);
o1.add(maniglia);

var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.17,0.37,0.17);
o1.add(maniglia);


//cupola
var curve = new THREE.SplineCurve3([
  new THREE.Vector3( 0, 0, 0 ),
  new THREE.Vector3( 0.12, 0, 0.01 ),
  new THREE.Vector3( 0.15, 0, 0.02 ),
  new THREE.Vector3( 0.2, 0, 0.04 ),
  new THREE.Vector3( 0.23, 0.04, 0.04 )
  ]
  );


var geometry = new THREE.LatheGeometry( curve.getPoints(10),200);
var material = new THREE.MeshLambertMaterial( {color: 0x5555ff, opacity: 0.9,
  transparent: true} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.rotation.x=Math.PI/2;

lathe.position.y=0.46;

o1.add( lathe );

//perni

var cylinderGeometry1 = new THREE.CylinderGeometry(0.005,0.005,0.04,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x4B4B4B});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.15,0.405,0.15);
o1.add(maniglia);

var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(-0.15,0.405,0.15);
o1.add(maniglia);

var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.15,0.405,-0.15);
o1.add(maniglia);

var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(-0.15,0.405,-0.15);
o1.add(maniglia);

var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0,0.405,-0.215);
o1.add(maniglia);

var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0,0.405,0.215);
o1.add(maniglia);

var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(-0.215,0.405,0);
o1.add(maniglia);

var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.215,0.405,0);
o1.add(maniglia);

//piedini

var cylinderGeometry1 = new THREE.CylinderGeometry(0.02,0.02,0.02,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x000000});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.2,0.015,0.25);
o1.add(maniglia);

var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.2,0.015,-0.25);
o1.add(maniglia);

var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(-0.2,0.015,0.25);
o1.add(maniglia);

var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(-0.2,0.015,-0.25);
o1.add(maniglia);

//pulsanti

var cubeGeometryBase = new THREE.BoxGeometry(0.015,0.015,0.025);
var cubeMaterial = new THREE.MeshLambertMaterial({color:0x4B4B4B});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.211,0.16,0.18);
banco.rotation.z=Math.PI/5;
o1.add(banco);

var cubeGeometryBase = new THREE.BoxGeometry(0.01,0.01,0.02);
var cubeMaterial = new THREE.MeshLambertMaterial({color:0xff0000});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.217,0.164,0.18);

banco.rotation.x=-Math.PI/14;
banco.rotation.z=Math.PI/5;
banco.rotation.y=Math.PI/10;
o1.add(banco);


var cubeGeometryBase = new THREE.BoxGeometry(0.015,0.08,0.15);
var cubeMaterial = new THREE.MeshLambertMaterial({map:display});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.216,0.155,0);
banco.rotation.z=Math.PI/5;
o1.add(banco);


var cylinderGeometry1 = new THREE.CylinderGeometry(0.025,0.025,0.04,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:zig});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.226,0.16,-0.18);
maniglia.rotation.z=-Math.PI/3.5;
      //maniglia.rotation.x=Math.PI/2;
      o1.add(maniglia);

      
      o1.feature = this;
      o1.name = this.id;
      var model = Feature.packageModel(o1);

      return model;
    };

    module.exports = CentrifugaGrande;