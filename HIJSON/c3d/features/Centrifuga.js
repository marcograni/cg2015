var Feature = require('./Feature.js');

Feature.inherits(Centrifuga, Feature);

function Centrifuga(feature) {
	Feature.call(this, feature);
}

Centrifuga.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

Centrifuga.prototype.in_graph = true;
Centrifuga.prototype.in_2D_map = false;

Centrifuga.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;


  o1.scale.set(0.013,0.013,0.013);

  var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
  var display=THREE.ImageUtils.loadTexture("../../assets/textures/display_centrifuga.jpg" )
  var interno=THREE.ImageUtils.loadTexture("../../assets/textures/blu_met.jpg" )
  var nero=THREE.ImageUtils.loadTexture("../../assets/textures/nero.jpg" )

  var curve = new THREE.SplineCurve3([
    new THREE.Vector3( 0, 0, 0 ),
    new THREE.Vector3( 15, 0, 1 ),
    new THREE.Vector3( 15, 0, 22 ),
    ]
    );


  var geometry = new THREE.LatheGeometry( curve.getPoints(10),200);
  var material = new THREE.MeshLambertMaterial( { map:acciaio} );
  material.side = THREE.DoubleSide;
  var lathe = new THREE.Mesh( geometry, material );
  lathe.rotation.x=-Math.PI/2;
  lathe.rotation.z=-Math.PI/2;
  lathe.position.y=10;

  o1.add( lathe );

  var lathe = new THREE.Mesh( geometry, material );
  lathe.rotation.x=-Math.PI/2;
  lathe.position.y=14;
  lathe.scale.set(0.8,0.8,0.8);
  o1.add( lathe );


  var torusMaterial = new THREE.MeshPhongMaterial( { color: 0x000000 } );
  var torus = new THREE.Mesh(new THREE.TorusGeometry( 13, 2, 6, 100 ), torusMaterial );
  torus.rotation.x =  Math.PI/2;
  torus.position.y=32 ;
  o1.add( torus );   

  var o1a=new THREE.Object3D();
  o1.add(o1a);
  var o1b=new THREE.Object3D();
  o1a.add(o1b);
  var cylinderGeometry1 = new THREE.CylinderGeometry(7,13,13,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({map:interno});
  var maniglia1 = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia1.position.set(0,23,0);
  maniglia1.rotation.y=-Math.PI/4;
  o1a.add(maniglia1);

  var cylinderGeometry1 = new THREE.CylinderGeometry(2,2,1,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({map:nero});
  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(0,29.5,0);
  o1.add(maniglia);


  

  var curve = new THREE.CubicBezierCurve3(
   new THREE.Vector3( 0, 0, 0 ),
   new THREE.Vector3( 1.3, 0, -1 ),
   new THREE.Vector3( 1, 0, 8),
   new THREE.Vector3( 1, 0, 15 )
   );


  var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
  var material = new THREE.MeshLambertMaterial( { color: 0xffffff, opacity: 0.5,
    transparent: true} );
  material.side = THREE.DoubleSide;
  var lathe = new THREE.Mesh( geometry, material );
  lathe.rotation.x=-Math.PI/2;


  o1b.add( lathe );
  var o2=o1b.clone();
  var o3=o1b.clone();
  var o4=o1b.clone();
  o1b.position.set(0,18,-9);
  o1b.rotation.x=Math.PI/9;


  o2.position.set(0,18,9);
  o2.rotation.x=-Math.PI/9;
  o1a.add(o2);


  o3.position.set(-9,18,0);
  o3.rotation.z=-Math.PI/9;
  o1a.add(o3);


  o4.position.set(9,18,0);
  o4.rotation.z=Math.PI/9;
  o1a.add(o4);


//coperchio
var cubeGeometryBase = new THREE.CubeGeometry(5,8,1);
var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xC0C0C0});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(-15,32,0);
banco.rotation.y=Math.PI/2;
o1.add(banco);


var torusMaterial = new THREE.MeshPhongMaterial( { color: 0x000000 } );
var torus = new THREE.Mesh(new THREE.TorusGeometry( 13, 0.6, 6, 100 ), torusMaterial );
torus.rotation.x =  Math.PI/2;
torus.rotation.y =  Math.PI/5.87;
torus.position.set(-4.5,42.5,0) ;
o1.add( torus ); 



var curve = new THREE.SplineCurve3([
  new THREE.Vector3( 0, 0, 0 ),
  new THREE.Vector3( 13, 0, 1 ),
  new THREE.Vector3( 13, 0, 3 ),
  ]
  );


var geometry = new THREE.LatheGeometry( curve.getPoints(10),200);
var material = new THREE.MeshLambertMaterial( { map:acciaio} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.rotation.x=Math.PI/2;
lathe.rotation.z=Math.PI/2;
lathe.rotation.y=Math.PI/6;
lathe.position.set(-5,44,0);

o1.add( lathe );

//piedini

var curve = new THREE.SplineCurve3([
  new THREE.Vector3( 0, 0, 0 ),
  new THREE.Vector3( 1, 0, 0.5 ),
  new THREE.Vector3( 0, 0, 3 ),
  ]
  );


var geometry = new THREE.LatheGeometry( curve.getPoints(10),200);
var material = new THREE.MeshLambertMaterial( { color: 0x000000} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );

lathe.position.set(7,7.5,7);
lathe.rotation.x=-Math.PI/2;
o1.add( lathe );

var lathe = new THREE.Mesh( geometry, material );
lathe.position.set(-7,7.5,7);
lathe.rotation.x=-Math.PI/2;
o1.add( lathe );

var lathe = new THREE.Mesh( geometry, material );
lathe.position.set(-7,7.5,-7);
lathe.rotation.x=-Math.PI/2;
o1.add( lathe );

var lathe = new THREE.Mesh( geometry, material );
lathe.position.set(7,7.5,-7);
lathe.rotation.x=-Math.PI/2;
o1.add( lathe );

//pulsanti


var curve = new THREE.SplineCurve3([
  new THREE.Vector3( 16.15, 0, 0 ),
  new THREE.Vector3( 16.15, 0, 5 ),
  new THREE.Vector3( 15.7, 0, 10 ),
  ]
  );


var geometry = new THREE.LatheGeometry( curve.getPoints(10),200,0,Math.PI/3);
var material = new THREE.MeshLambertMaterial( { map:display} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.rotation.z=-Math.PI/6;
lathe.rotation.x=-Math.PI/2;


lathe.position.set(-0.095,18,0);
o1.add( lathe );
setInterval(function () {o1a.rotation.y+=2}, 1);

o1.feature = this;
o1.name = this.id;
var model = Feature.packageModel(o1);

return model;
};

module.exports = Centrifuga;