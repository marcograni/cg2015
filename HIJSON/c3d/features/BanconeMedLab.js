var Feature = require('./Feature.js');

Feature.inherits(BanconeMedLab, Feature);

function BanconeMedLab(feature) {
	Feature.call(this, feature);
}

BanconeMedLab.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

BanconeMedLab.prototype.in_graph = true;
BanconeMedLab.prototype.in_2D_map = true;

BanconeMedLab.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;
  
  
  var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
  var gamba = THREE.ImageUtils.loadTexture("../../assets/textures/bancone.jpg" )

  var cubeGeometryBase = new THREE.BoxGeometry(0.7,1.8,0.04);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.set(0,0.82,0);
  banco.rotation.x=Math.PI/2
  o1.add(banco);


  var cubeGeometryBase = new THREE.BoxGeometry(0.07,1.8,0.02);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.set(-0.35,0.86,0);
  banco.rotation.x=Math.PI/2;
  banco.rotation.y=Math.PI/2;
  o1.add(banco);


//gambe tavolo sx


var cubeGeometryBase = new THREE.BoxGeometry(0.8,0.07,0.07);
var cubeMaterial = new THREE.MeshLambertMaterial({map:gamba});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.035,0.82);
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
var cubeMaterial = new THREE.MeshLambertMaterial({map:gamba});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0.035,-0.82);
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



o1.feature = this;
o1.name = this.id;
var model = Feature.packageModel(o1);

return model;
};

module.exports = BanconeMedLab;