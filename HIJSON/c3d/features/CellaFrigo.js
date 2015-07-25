var Feature = require('./Feature.js');

Feature.inherits(CellaFrigo, Feature);

function CellaFrigo(feature) {
	Feature.call(this, feature);
}

CellaFrigo.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

CellaFrigo.prototype.in_graph = true;
CellaFrigo.prototype.in_2D_map = true;

CellaFrigo.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

  var acciaio=THREE.ImageUtils.loadTexture("../assets/textures/acciaio.jpg" )
  var acciaioscuro=THREE.ImageUtils.loadTexture("../assets/textures/acciaioscuro.jpg" )
  var pannello=THREE.ImageUtils.loadTexture("../assets/textures/Pannellocontrollo.jpg" )

//cella frigo
var cubeGeometryBase = new THREE.BoxGeometry(0.8,2,1.6);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,1,0);
o1.add(banco);  


//sportelli
var cubeGeometryBase = new THREE.BoxGeometry(0.06,2,1);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaioscuro});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.44,1,-0.3);
o1.add(banco);  


var cubeGeometryBase = new THREE.BoxGeometry(0.06,2,0.55);
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.44,1,0.5);
o1.add(banco); 

//motore
var cubeGeometryBase = new THREE.BoxGeometry(0.2,0.55,0.4);
var cubeMaterial = new THREE.MeshLambertMaterial({map:pannello});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.54,1.7,0.5);
o1.add(banco);

var cubeGeometryBase = new THREE.BoxGeometry(0.199,0.551,0.401);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.54,1.7,0.5);
o1.add(banco);

//maniglia pannello
var cylinderGeometry1 = new THREE.CylinderGeometry(0.03,0.03,0.04,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.64,1.70,0.41);
maniglia.rotation.z=Math.PI/2;
o1.add(maniglia);


var cubeGeometryBase = new THREE.BoxGeometry(0.03,0.01,0.005);
var cubeMaterial = new THREE.MeshLambertMaterial({color:0xffffff});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.65,1.725,0.41);
o1.add(banco);

//tubi

var torusMaterial = new THREE.MeshPhongMaterial( { color: 0xFF9933 } );
var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.1, 0.005, 20, 100 ), torusMaterial );
torus.position.set(0.44,1.4,0.4);
o1.add( torus ); 

var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.1, 0.005, 20, 100 ), torusMaterial );
torus.position.set(0.44,1.4,0.6);
o1.add( torus ); 

      //maniglie

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.015,0.015,0.06,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(0.49,1.75,0.05);
      maniglia.rotation.z=Math.PI/2;
      o1.add(maniglia);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.015,0.015,0.06,80);
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(0.49,0.25,0.05);
      maniglia.rotation.z=Math.PI/2;
      o1.add(maniglia);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.02,0.02,1.8,80);
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(0.52,1,0.05);
      o1.add(maniglia);
      
      o1.feature = this;
      o1.name = this.id;
      var model = Feature.packageModel(o1);

      return model;
    };

    module.exports = CellaFrigo;