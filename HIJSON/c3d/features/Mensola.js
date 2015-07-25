var Feature = require('./Feature.js');

Feature.inherits(Mensola, Feature);

function Mensola(feature) {
	Feature.call(this, feature);
}

Mensola.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Mensola.prototype.in_graph = true;
Mensola.prototype.in_2D_map = false;

Mensola.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

  
  var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
var cubeGeometryBase = new THREE.BoxGeometry(0.4,0.02,1.2);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      piede.position.set(0,0.4,0);
       o1.add(piede);


       //maniglie

        var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.01,1.2,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(0.2,0.4,0);
      maniglia.rotation.x=Math.PI/2;   
      o1.add(maniglia);


 var curve = new THREE.CubicBezierCurve3(
    new THREE.Vector3( 0, 0, 0 ),
    new THREE.Vector3( 0.7, 0, 0.01 ),
    new THREE.Vector3( 0.1, 0, 0.05 ),
    new THREE.Vector3( 0.01, 0, 0.35 )
);

var geometry = new THREE.LatheGeometry( curve.getPoints(20),200,0,Math.PI);
var material = new THREE.MeshLambertMaterial( { map:acciaio} );
var lathe = new THREE.Mesh( geometry, material );
lathe.position.set(-0.2,0.4,0.58);
lathe.rotation.y=Math.PI/2;
lathe.scale.set(0.05,1,1);
o1.add( lathe );

var lathe = new THREE.Mesh( geometry, material );
lathe.position.set(-0.2,0.4,-0.58);
lathe.rotation.y=Math.PI/2;
lathe.scale.set(0.05,1,1);
o1.add( lathe );



	
	o1.feature = this;
	o1.name = this.id;
	var model = Feature.packageModel(o1);

	return model;
};

module.exports = Mensola;