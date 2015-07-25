var Feature = require('./Feature.js');

Feature.inherits(Pipetta, Feature);

function Pipetta(feature) {
	Feature.call(this, feature);
}

Pipetta.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

Pipetta.prototype.in_graph = true;
Pipetta.prototype.in_2D_map = false;

Pipetta.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

  var curve = new THREE.SplineCurve3( [
    new THREE.Vector3( 0.0005, 0, 0 ),
    new THREE.Vector3( 0.0014, 0, 0.02 ),
    new THREE.Vector3( 0.003, 0, 0.025 )
    ] );

  var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
  var material = new THREE.MeshLambertMaterial( { color: 0xffffff, opacity: 0.3,
    transparent: true} );
  material.side = THREE.DoubleSide;
  var lathe = new THREE.Mesh( geometry, material );
  lathe.rotation.x=-Math.PI/2;
  lathe.position.set(0,0.36,0)

  o1.add( lathe );


  var cylinderGeometry1 = new THREE.CylinderGeometry(0.003,0.003,0.10,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, opacity: 0.3,
    transparent: true});
  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(0,0.435,0);
  
  o1.add(maniglia);


  var curve = new THREE.SplineCurve3( [
    new THREE.Vector3( 0, 0, 0 ),
    new THREE.Vector3( 0.0075, 0, 0.005 ),
    new THREE.Vector3( 0.005, 0, 0.023 ),
    new THREE.Vector3( 0.0075, 0, 0.028 ),
    new THREE.Vector3( 0.005, 0, 0.03 ),
    new THREE.Vector3( 0.00025, 0, 0.025 )
    ] );

  var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
  var material = new THREE.MeshLambertMaterial( { color: 0xff0000} );
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

module.exports = Pipetta;