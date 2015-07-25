var Feature = require('./Feature.js');

Feature.inherits(ArmCass, Feature);

function ArmCass(feature) {
	Feature.call(this, feature);
}

ArmCass.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

ArmCass.prototype.in_graph = true;
ArmCass.prototype.in_2D_map = false;

ArmCass.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
    o1.rotation.x=Math.PI/2;
    o1.scale.set(0.033,0.033,0.033);
    
    var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
    var texture = THREE.ImageUtils.loadTexture("../../assets/textures/legno_grigio.jpg" )
    var cassetto = THREE.ImageUtils.loadTexture("../../assets/textures/cassetti.jpg" )
//cassettone

var cubeGeometryBase = new THREE.BoxGeometry(20,19,17);
var cubeMaterial = new THREE.MeshLambertMaterial({map:texture});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(0,8,0);
o1.add(banco);

var cubeGeometryBase = new THREE.BoxGeometry(18,17,15);
var cubeMaterial = new THREE.MeshLambertMaterial({map:cassetto});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(2,8.3,0);
o1.add(banco);

      //maniglia

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.4,0.4,8,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(11,10,-6);
      o1.add(maniglia);

      //cerniere

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.2,0.2,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(10,12,7.5);
      o1.add(maniglia);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.2,0.2,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(10,3,7.5);
      o1.add(maniglia);
      
      o1.feature = this;
      o1.name = this.id;
      var model = Feature.packageModel(o1);

      return model;
};

module.exports = ArmCass;