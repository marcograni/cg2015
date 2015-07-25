var Feature = require('./Feature.js');

Feature.inherits(Secchio, Feature);

function Secchio(feature) {
	Feature.call(this, feature);
}

Secchio.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

Secchio.prototype.in_graph = true;
Secchio.prototype.in_2D_map = false;

Secchio.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

  var bio = THREE.ImageUtils.loadTexture("../../assets/textures/biohazard.jpg" )

//secchio
var curve = new THREE.SplineCurve3([
  new THREE.Vector3( 0, 0, 0 ),
  new THREE.Vector3( 0.22, 0, 0.01 ),
  new THREE.Vector3( 0.26, 0, 0.75 ),
  new THREE.Vector3( 0.26, 0, 0.80 )

  ]
  );
//etichetta
var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
var material = new THREE.MeshLambertMaterial( { color:0xffff00} );
var lathe = new THREE.Mesh( geometry, material );
lathe.position.set(0,0.4,0);
lathe.rotation.x=-Math.PI/2;
lathe.scale.set(0.8,1,1);
o1.add( lathe );

var curve = new THREE.SplineCurve3([

  new THREE.Vector3( 0.25, 0, 0.01 ),    
  new THREE.Vector3( 0.25, 0, 0.25)


  ]
  );
var geometry = new THREE.LatheGeometry( curve.getPoints(20),200,0,Math.PI/2);
var material = new THREE.MeshLambertMaterial( {map:bio } );
var lathe = new THREE.Mesh( geometry, material );
lathe.position.set(-0.028,0.8,0);
lathe.rotation.x=-Math.PI/2;
lathe.rotation.z=-Math.PI/4;
o1.add( lathe );

//coperchio
var curve = new THREE.SplineCurve3([
  new THREE.Vector3( 0, 0, 0 ),
  new THREE.Vector3( 0.26, 0, 0.01 ),
  new THREE.Vector3( 0.28, 0, 0.75 ),
  new THREE.Vector3( 0.28, 0, 0.80 )

  ]
  );


var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
var material = new THREE.MeshLambertMaterial( {color:0xffff00 } );
var lathe = new THREE.Mesh( geometry, material );
lathe.position.set(0,1.3,0);
lathe.rotation.x=Math.PI/2;
lathe.scale.set(0.8,1,0.1);
o1.add( lathe );

//manico

var torusMaterial = new THREE.MeshPhongMaterial( {color:0x000000 } );
var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.1, 0.01, 30, 30,Math.PI ), torusMaterial );
torus.rotation.y =  Math.PI/2;
torus.position.set(0,1.3,0);
torus.scale.set(1,0.5,1);
o1.add( torus );



o1.feature = this;
o1.name = this.id;
var model = Feature.packageModel(o1);

return model;
};

module.exports = Secchio;