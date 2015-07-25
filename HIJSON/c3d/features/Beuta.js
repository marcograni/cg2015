var Feature = require('./Feature.js');

Feature.inherits(Beuta, Feature);

function Beuta(feature) {
	Feature.call(this, feature);
}

Beuta.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

Beuta.prototype.in_graph = true;
Beuta.prototype.in_2D_map = false;

Beuta.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;
  o1.scale.set(0.01,0.01,0.01);
  var curve = new THREE.SplineCurve3([
    new THREE.Vector3( 0, 0, 0 ),
    new THREE.Vector3( 12, 0, 2 ),
    new THREE.Vector3( 3, 0, 12 ),
    new THREE.Vector3( 2, 0, 25 )]
    );


  var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
  var material = new THREE.MeshLambertMaterial( { color: 0xffffff, opacity: 0.3,
    transparent: true} );
  material.side = THREE.DoubleSide;
  var lathe = new THREE.Mesh( geometry, material );
  lathe.rotation.x=-Math.PI/2;

  o1.add( lathe );

  var curve = new THREE.SplineCurve3([
    new THREE.Vector3( 0, 0, 0 ),
    new THREE.Vector3( 11.5, 0, 2),
    new THREE.Vector3( 7, 0, 7 ),
    ]
    );

  var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
  var material = new THREE.MeshLambertMaterial( { color: 0xFFFF00} );
  material.side = THREE.DoubleSide;
  var lathe = new THREE.Mesh( geometry, material );
  lathe.rotation.x=-Math.PI/2;
  o1.add( lathe );

  var cylinderGeometry1 = new THREE.CylinderGeometry(7,7,2,80);
  var rubinetto = new THREE.Mesh(cylinderGeometry1,material);
  rubinetto.position.set(0,6,0);
  o1.add(rubinetto);
  
  o1.feature = this;
  o1.name = this.id;
  var model = Feature.packageModel(o1);

  return model;
};

module.exports = Beuta;