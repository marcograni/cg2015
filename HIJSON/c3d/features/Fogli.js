var Feature = require('./Feature.js');

Feature.inherits(Fogli, Feature);

function Fogli(feature) {
	Feature.call(this, feature);
}

Fogli.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Fogli.prototype.in_graph = true;
Fogli.prototype.in_2D_map = false;

Fogli.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

var foglio1 = THREE.ImageUtils.loadTexture("../../assets/textures/Foglio.jpg" )
var foglio2 = THREE.ImageUtils.loadTexture("../../assets/textures/foglio2.jpg" )


  var cubeGeometryBase = new THREE.BoxGeometry(0.32,0.001,0.25);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:foglio1});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0,0.001,0);
     o1.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.32,0.001,0.25);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:foglio2});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.03,0.002,0.04);
      banco.rotation.y=Math.PI/6;
     o1.add(banco);

     var cylinderGeometry1 = new THREE.CylinderGeometry(0.0035,0.0035,0.13,6);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xFFFF00});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(0,0.005,0);
      maniglia.rotation.z=Math.PI/2;
      o1.add(maniglia);


       var cylinderGeometry1 = new THREE.CylinderGeometry(0.0035,0.0005,0.01,6);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x555555});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(0.07,0.005,0);
      maniglia.rotation.z=Math.PI/2;
      o1.add(maniglia);

      var sphereGeometry = new THREE.SphereGeometry(0.00065,260,20);
      var sphereMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
      sphere.position.set(0.075,0.005,0);

      o1.add(sphere);
	
	o1.feature = this;
	o1.name = this.id;
	var model = Feature.packageModel(o1);

	return model;
};

module.exports = Fogli;