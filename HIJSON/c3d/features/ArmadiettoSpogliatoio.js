var Feature = require('./Feature.js');

Feature.inherits(ArmadiettoSpogliatoio, Feature);

function ArmadiettoSpogliatoio(feature) {
	Feature.call(this, feature);
}

ArmadiettoSpogliatoio.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

ArmadiettoSpogliatoio.prototype.in_graph = true;
ArmadiettoSpogliatoio.prototype.in_2D_map = false;

ArmadiettoSpogliatoio.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

  var blu = THREE.ImageUtils.loadTexture("../../assets/textures/cassetti.jpg" )
  var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )




  var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var cubeGeometryBase = new THREE.CubeGeometry(0.02,1.8,0.6);
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.set(-0.35,0.9,0);
  o1.add(banco);

  var cubeGeometryBase = new THREE.CubeGeometry(0.02,1.8,0.7);
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.set(0,0.9,0.3);
  banco.rotation.y=Math.PI/2;
  o1.add(banco);

  var cubeGeometryBase = new THREE.CubeGeometry(0.02,1.8,0.7);
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.set(0,0.9,-0.3);
  banco.rotation.y=Math.PI/2;
  o1.add(banco);

  var cubeGeometryBase = new THREE.CubeGeometry(0.7,0.02,0.6);
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.set(0,1.8,0);
  o1.add(banco);

  var cubeGeometryBase = new THREE.CubeGeometry(0.7,0.02,0.6);
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  o1.add(banco);

  var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var cubeGeometryBase = new THREE.CubeGeometry(0.02,1.79,0.59);
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.set(0.34,0.9,0);
  o1.add(banco);

  var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.01,0.15,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
  for(var i=0;i<10;i++){
    var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
    rubinetto.position.set(0.347,1.6,-0.2+i*0.04);
    o1.add(rubinetto);
  }

//maniglia
var torusMaterial = new THREE.MeshPhongMaterial( {color:0x000000 } );
var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.1, 0.01, 30, 30,Math.PI ), torusMaterial );
torus.rotation.z =  -Math.PI/2;
torus.position.set(0.35,1.1,0.20);
torus.scale.set(1,0.5,1);
o1.add( torus );


o1.feature = this;
o1.name = this.id;
var model = Feature.packageModel(o1);

return model;
};

module.exports = ArmadiettoSpogliatoio;