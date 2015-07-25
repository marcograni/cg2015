var Feature = require('./Feature.js');

Feature.inherits(CappaVirus, Feature);

function CappaVirus(feature) {
	Feature.call(this, feature);
}

CappaVirus.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

CappaVirus.prototype.in_graph = true;
CappaVirus.prototype.in_2D_map = false;

CappaVirus.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

  var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
  var acciaioscuro=THREE.ImageUtils.loadTexture("../../assets/textures/acciaioscuro.jpg" )
  var texture = THREE.ImageUtils.loadTexture("../../assets/textures/sughero.jpg" )
  var blu_met = THREE.ImageUtils.loadTexture("../../assets/textures/blu_met.jpg" )
  var liv_rischio = THREE.ImageUtils.loadTexture("../../assets/textures/livellorischio.jpg" )
  var leg_rischio = THREE.ImageUtils.loadTexture("../../assets/textures/legendarischio.jpg" )
  var bio = THREE.ImageUtils.loadTexture("../../assets/textures/biohazard.jpg" )
  //base

  var cubeGeometryBase = new THREE.CubeGeometry(0.03,0.8,0.03);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  CappaVirus.position.set(0.35,0.4,0.40);
  o1.add(CappaVirus);

  var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  CappaVirus.position.set(-0.35,0.4,0.40);
  o1.add(CappaVirus);

  var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  CappaVirus.position.set(0.35,0.4,-0.40);
  o1.add(CappaVirus);

  var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  CappaVirus.position.set(-0.35,0.4,-0.40);
  o1.add(CappaVirus);

  var cubeGeometryBase = new THREE.CubeGeometry(0.7,0.03,0.03);
  var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  CappaVirus.position.set(0,0.4,0.40);
  o1.add(CappaVirus);

  var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  CappaVirus.position.set(0,0.4,-0.40);
  o1.add(CappaVirus);

  var cubeGeometryBase = new THREE.CubeGeometry(0.03,0.03,0.8);
  var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  CappaVirus.position.set(-0.35,0.4,0);
  o1.add(CappaVirus);

  var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  CappaVirus.position.set(0.35,0.4,0);
  o1.add(CappaVirus);


//cappa

var cubeGeometryBase = new THREE.CubeGeometry(0.7,0.05,0.8);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.position.set(0,0.8,0);
o1.add(CappaVirus);

var cubeGeometryBase = new THREE.CubeGeometry(0.7,0.6,0.03);
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.position.set(0,1.1,0.40);
o1.add(CappaVirus);

var cubeGeometryBase = new THREE.CubeGeometry(0.7,0.6,0.03);
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.position.set(0,1.1,-0.40);
o1.add(CappaVirus);

var cubeGeometryBase = new THREE.CubeGeometry(0.03,0.6,0.8);
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.position.set(-0.35,1.1,0);
o1.add(CappaVirus);

var cubeGeometryBase = new THREE.CubeGeometry(0.05,0.1,0.2);
var cubeMaterial = new THREE.MeshLambertMaterial({map:liv_rischio});
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.position.set(-0.34,1.15,0);
o1.add(CappaVirus);

var cubeGeometryBase = new THREE.CubeGeometry(0.01,0.05,0.8);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaioscuro});
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.position.set(0.3551,1.33,0);
o1.add(CappaVirus);

var cubeGeometryBase = new THREE.CubeGeometry(0.01,0.05,0.8);
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.position.set(0.3551,0.85,0);
o1.add(CappaVirus);

var cubeGeometryBase = new THREE.CubeGeometry(0.01,0.08,0.5);
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.position.set(0.355,1.09,-0.37);
CappaVirus.rotation.x=Math.PI/2;
o1.add(CappaVirus);

var cubeGeometryBase = new THREE.CubeGeometry(0.01,0.08,0.5);
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.position.set(0.355,1.09,0.37);
CappaVirus.rotation.x=Math.PI/2;
o1.add(CappaVirus);

var cubeGeometryBase = new THREE.CubeGeometry(0.008,0.5,0.65);
var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x5555ff, opacity: 0.5,
  transparent: true});
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.position.set(0.355,1.09,0);
o1.add(CappaVirus);

     //buchi mani

     var cylinderGeometry1 = new THREE.CylinderGeometry(0.1,0.1,0.01,80);
     var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
     var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
     rubinetto.position.set(0.355,1,-0.15);
     rubinetto.rotation.z=Math.PI/2;
     o1.add(rubinetto);

     var torusMaterial = new THREE.MeshPhongMaterial( {color:0x000000 } );
     var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.1, 0.025, 5, 8 ), torusMaterial );
     torus.rotation.y=  Math.PI/2;
     torus.position.set(0.355,1,-0.15);
     o1.add( torus );


     var cylinderGeometry1 = new THREE.CylinderGeometry(0.1,0.1,0.01,80);
     var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
     var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
     rubinetto.position.set(0.355,1,0.15);
     rubinetto.rotation.z=Math.PI/2;
     o1.add(rubinetto);

     var torusMaterial = new THREE.MeshPhongMaterial( {color:0x000000 } );
     var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.1, 0.025, 6, 8 ), torusMaterial );
     torus.rotation.y =  Math.PI/2;
     torus.position.set(0.355,1,0.15);
     o1.add( torus );


      //laterale

      var cubeGeometryBase = new THREE.CubeGeometry(0.3,0.3,0.3);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      CappaVirus.position.set(0,1.09,-0.57);
      o1.add(CappaVirus);

      var cubeGeometryBase = new THREE.CubeGeometry(0.3,0.03,0.02);
      var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      CappaVirus.position.set(0,1.22,-0.73);
      o1.add(CappaVirus);

      var cubeGeometryBase = new THREE.CubeGeometry(0.3,0.07,0.02);
      var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      CappaVirus.position.set(0,1.2,-0.73);
      o1.add(CappaVirus);

      var cubeGeometryBase = new THREE.CubeGeometry(0.3,0.07,0.02);
      var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      CappaVirus.position.set(0,0.98,-0.73);
      o1.add(CappaVirus);

      var cubeGeometryBase = new THREE.CubeGeometry(0.27,0.07,0.02);
      var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      CappaVirus.position.set(0.115,1.1,-0.73);
      CappaVirus.rotation.z=Math.PI/2;
      o1.add(CappaVirus);

      var cubeGeometryBase = new THREE.CubeGeometry(0.27,0.07,0.02);
      var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      CappaVirus.rotation.z=Math.PI/2;
      CappaVirus.position.set(-0.115,1.1,-0.73);
      o1.add(CappaVirus);

//cerniere

var cubeGeometryBase = new THREE.CubeGeometry(0.04,0.03,0.005);
var cubeMaterial = new THREE.MeshLambertMaterial({color:0xCCCCCC});
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.rotation.y=Math.PI/2;
CappaVirus.position.set(0.15,1.15,-0.719);
o1.add(CappaVirus);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.005,0.005,0.03,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaioscuro});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.15,1.15,-0.719);
o1.add(maniglia);

var cubeGeometryBase = new THREE.CubeGeometry(0.04,0.03,0.005);
var cubeMaterial = new THREE.MeshLambertMaterial({color:0xCCCCCC});
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.rotation.y=Math.PI/2;
CappaVirus.position.set(0.15,1.05,-0.719);
o1.add(CappaVirus);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.005,0.005,0.03,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaioscuro});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.15,1.05,-0.719);
o1.add(maniglia);

//vetro
var cubeGeometryBase = new THREE.CubeGeometry(0.26,0.26,0.01);
var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x5555ff, opacity: 0.5,
  transparent: true});
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.rotation.z=Math.PI/2;
CappaVirus.position.set(0,1.1,-0.73);
o1.add(CappaVirus);

var torusMaterial = new THREE.MeshPhongMaterial( {color:0x000000 } );
var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.1, 0.025, 6, 6 ), torusMaterial );
      //torus.rotation.y =  Math.PI/2;
      torus.position.set(0,1.09,-0.73);
      o1.add( torus );


//sopra
var cubeGeometryBase = new THREE.CubeGeometry(0.701,0.3,0.9);
var cubeMaterial = new THREE.MeshLambertMaterial({map:blu_met});
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.position.set(0,1.5,0);
o1.add(CappaVirus);

var cubeGeometryBase = new THREE.CubeGeometry(0.1,0.1,0.1);
var cubeMaterial = new THREE.MeshLambertMaterial({map:bio});
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.position.set(0.301,1.55,-0.3);
o1.add(CappaVirus);

var cubeGeometryBase = new THREE.CubeGeometry(0.1,0.07,0.25);
var cubeMaterial = new THREE.MeshLambertMaterial({map:leg_rischio});
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.position.set(0.301,1.45,0.3);
o1.add(CappaVirus);

var cubeGeometryBase = new THREE.CubeGeometry(0.30,0.3,0.4);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaioscuro});
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.position.set(0,1.8,-0.20);
o1.add(CappaVirus);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.08,0.08,0.1,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color:0xCCCCCC});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(0,1.8,-0.45);
rubinetto.rotation.x=Math.PI/2;
o1.add(rubinetto);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.05,0.05,0.1,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color:0xCCCCCC});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(0,1.8,-0.451);
rubinetto.rotation.x=Math.PI/2;
o1.add(rubinetto);


//interno

var o0=new THREE.Object3D();
o1.add(o0);
o0.scale.set(0.01,0.01,0.01);
var o0a=new THREE.Object3D();
o0.add(o0a);
o0.position.y=0.88;


//porta_provette

var cubeGeometryBase = new THREE.CubeGeometry(10,25,1);
var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x33CCCC, opacity: 0.3,
  transparent: true});
cubeMaterial.side = THREE.DoubleSide;
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.position.set(2,11,0);
CappaVirus.rotation.x=Math.PI/2;

o0.add(CappaVirus);





var curve = new THREE.CubicBezierCurve3(
 new THREE.Vector3( 0, 0, 0 ),
 new THREE.Vector3( 1.3, 0, -1 ),
 new THREE.Vector3( 1, 0, 8),
 new THREE.Vector3( 1, 0, 15 )
 );


var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
var material = new THREE.MeshLambertMaterial( { color: 0xffffff, opacity: 0.3,
  transparent: true} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.rotation.x=-Math.PI/2;


o0a.add( lathe );


//tappo

var cylinderGeometry1 = new THREE.CylinderGeometry(1.1,0.8,2,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:texture});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(0,14.9,0);
o0a.add(rubinetto);

//interno
var curve = new THREE.CubicBezierCurve3(
 new THREE.Vector3( 0, 0, 0 ),
 new THREE.Vector3( 1.2, 0, -1 ),
 new THREE.Vector3( 1, 0, 8),
 new THREE.Vector3( 1, 0, 11 )
 );


var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
var material = new THREE.MeshLambertMaterial( { color: 0xff0000} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.rotation.x=-Math.PI/2;
o0a.add( lathe );

var cylinderGeometry1 = new THREE.CylinderGeometry(1,1,1,80);
var rubinetto = new THREE.Mesh(cylinderGeometry1,material);
rubinetto.position.set(0,11,0);
o0a.add(rubinetto);

var o4=o0a.clone();
o4.position.set(0,0,-5);

var o6=o0a.clone();
o6.position.set(4,0,5);
o0.add(o4);
o0.add(o6);



var cubeGeometryBase = new THREE.CubeGeometry(2,13,0.5);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
cubeMaterial.side = THREE.DoubleSide;
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.position.set(1.5,6.5,11);
o0.add(CappaVirus);


var cubeGeometryBase = new THREE.CubeGeometry(2,13,0.5);
cubeMaterial.side = THREE.DoubleSide;
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.position.set(1.5,6.5,-11);
o0.add(CappaVirus);

var cubeGeometryBase = new THREE.CubeGeometry(11,26,0.5);
cubeMaterial.side = THREE.DoubleSide;
var CappaVirus = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
CappaVirus.position.set(1.5,0,0);
CappaVirus.rotation.x=Math.PI/2;
o0.add(CappaVirus);


o1.feature = this;
o1.name = this.id;
var model = Feature.packageModel(o1);

return model;
};

module.exports = CappaVirus;