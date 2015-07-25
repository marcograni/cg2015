var Feature = require('./Feature.js');

Feature.inherits(BancoAcciaioAngolare, Feature);

function BancoAcciaioAngolare(feature) {
	Feature.call(this, feature);
}

BancoAcciaioAngolare.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

BancoAcciaioAngolare.prototype.in_graph = true;
BancoAcciaioAngolare.prototype.in_2D_map = true;

BancoAcciaioAngolare.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

  
  var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )


  var cubeGeometryBase = new THREE.BoxGeometry(0.7,1.8,0.04);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var BancoAcciaioAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  BancoAcciaioAngolare.position.set(0,0.82,0);
  BancoAcciaioAngolare.rotation.x=Math.PI/2
  o1.add(BancoAcciaioAngolare);


//gambe tavolo sx


var cubeGeometryBase = new THREE.BoxGeometry(0.8,0.07,0.07);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.1,0.82);
o1.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.05,0.05);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,0.82);
piede.rotation.z=Math.PI/2;
o1.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.4,0.02);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,0.82);
piede.rotation.z=Math.PI/2;
o1.add(piede);

//gambe tavolo dx

var cubeGeometryBase = new THREE.BoxGeometry(0.8,0.07,0.07);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.1,-0.82);
o1.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.05,0.05);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,-0.82);
piede.rotation.z=Math.PI/2;
o1.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.4,0.02);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,-0.82);
piede.rotation.z=Math.PI/2;
o1.add(piede);

var o2=new THREE.Object3D();
o1.add(o2);
o2.position.set(0.7,0,-0.55);
o2.rotation.y=Math.PI/2;
var cubeGeometryBase = new THREE.BoxGeometry(0.7,0.8,0.04);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var BancoAcciaioAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
BancoAcciaioAngolare.position.set(0,0.82,0);
BancoAcciaioAngolare.rotation.x=Math.PI/2
o2.add(BancoAcciaioAngolare);







//gambe tavolo sx


var cubeGeometryBase = new THREE.BoxGeometry(0.8,0.07,0.07);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.1,0.32);
o2.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.05,0.05);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,0.32);
piede.rotation.z=Math.PI/2;
o2.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(0.75,0.4,0.02);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.44,0.32);
piede.rotation.z=Math.PI/2;
o2.add(piede);



o1.feature = this;
o1.name = this.id;
var model = Feature.packageModel(o1);

return model;
};

module.exports = BancoAcciaioAngolare;