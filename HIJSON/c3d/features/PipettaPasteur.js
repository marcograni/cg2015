var Feature = require('./Feature.js');

Feature.inherits(PipettaPasteur, Feature);

function PipettaPasteur(feature) {
	Feature.call(this, feature);
}

PipettaPasteur.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

PipettaPasteur.prototype.in_graph = true;
PipettaPasteur.prototype.in_2D_map = false;

PipettaPasteur.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

  var gomma = THREE.ImageUtils.loadTexture("../../assets/textures/gomma.jpg" )

  

  var curve = new THREE.SplineCurve3( [
    new THREE.Vector3( 0.0005, 0, 0 ),
    new THREE.Vector3( 0.0012, 0, 0.02 ),
    new THREE.Vector3( 0.0013, 0, 0.04 ),
    new THREE.Vector3( 0.0013, 0, 0.06 ),
    new THREE.Vector3( 0.003, 0, 0.08 )
    ] );

  var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
  var material = new THREE.MeshLambertMaterial( { color: 0xffffff, opacity: 0.3,
    transparent: true} );
  material.side = THREE.DoubleSide;
  var lathe = new THREE.Mesh( geometry, material );
  lathe.rotation.x=-Math.PI/2;
  lathe.position.set(0,0.28,0)

  o1.add( lathe );


  var cylinderGeometry1 = new THREE.CylinderGeometry(0.003,0.003,0.10,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, opacity: 0.3,
    transparent: true});
  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(0,0.41,0);
  
  o1.add(maniglia);


  var curve = new THREE.SplineCurve3( [
    new THREE.Vector3( 0, 0, 0 ),
    new THREE.Vector3( 0.0075, 0, 0.005 ),
    new THREE.Vector3( 0.005, 0, 0.033 ),
    new THREE.Vector3( 0.0075, 0, 0.038 ),
    new THREE.Vector3( 0.005, 0, 0.04 ),
    new THREE.Vector3( 0.00025, 0, 0.035 )
    ] );

  var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
  var material = new THREE.MeshLambertMaterial( { map:gomma} );
  material.side = THREE.DoubleSide;
  var lathe = new THREE.Mesh( geometry, material );
  lathe.rotation.x=Math.PI/2;

  lathe.position.set(0,0.5,0)

  o1.add( lathe );
  
  o1.feature = this;
  o1.name = this.id;
  var model = Feature.packageModel(o1);

  return model;
};

module.exports = PipettaPasteur;