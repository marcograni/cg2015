var Feature = require('./Feature.js');

Feature.inherits(Wc, Feature);

function Wc(feature) {
	Feature.call(this, feature);
}

Wc.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

Wc.prototype.in_graph = true;
Wc.prototype.in_2D_map = false;

Wc.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

  
  var curve = new THREE.SplineCurve3([
    new THREE.Vector3( 0.12, 0, 0 ),
    new THREE.Vector3( 0.14, 0, 0.1 ),
    new THREE.Vector3( 0.18, 0, 0.2 ),
    new THREE.Vector3( 0.3, 0, 0.32 ),
    new THREE.Vector3( 0.2, 0, 0.36 ),
    new THREE.Vector3( 0.2, 0, 0.3)
    ]
    );


  var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
  var material = new THREE.MeshLambertMaterial( {color: 0xffffff} );
  material.side = THREE.DoubleSide;
  var lathe = new THREE.Mesh( geometry, material );
  lathe.rotation.x=-Math.PI/2;
  lathe.scale.set(0.7,0.8,0.8);
  lathe.position.set(0.015,0.405,-0.01);

  o1.add( lathe );

  var curve = new THREE.CubicBezierCurve3(
    new THREE.Vector3( 0.08, 0, 0 ),
    new THREE.Vector3( 0.14, 0, 0.05 ),
    new THREE.Vector3( 0.18, 0, 0.25 ),
    new THREE.Vector3( 0, 0, 0.25 )
    
    );


  var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
  var material = new THREE.MeshLambertMaterial( {color: 0xffffff} );
  material.side = THREE.DoubleSide;
  var lathe = new THREE.Mesh( geometry, material );
  lathe.rotation.x=-Math.PI/2;
  lathe.scale.set(1.3,0.1,1.7);
  lathe.position.set(0.01,0.69,-0.21);

  o1.add( lathe );
  
  o1.feature = this;
  o1.name = this.id;
  var model = Feature.packageModel(o1);

  return model;
};

module.exports = Wc;