var Feature = require('./Feature.js');

Feature.inherits(FrigoriferoEma, Feature);

function FrigoriferoEma(feature) {
	Feature.call(this, feature);
}

FrigoriferoEma.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

FrigoriferoEma.prototype.in_graph = true;
FrigoriferoEma.prototype.in_2D_map = true;

FrigoriferoEma.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

  var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
  var acciaioscuro=THREE.ImageUtils.loadTexture("../../assets/textures/acciaioscuro.jpg" )
  var pannello=THREE.ImageUtils.loadTexture("../../assets/textures/Pannellocontrollo.jpg" )
  var sacca=THREE.ImageUtils.loadTexture("../../assets/textures/etichetta_sacca.jpg" )

//cella frigo
var cubeGeometryBase = new THREE.BoxGeometry(0.07,1.8,0.8);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(-0.35,1,0);
o1.add(banco);  


var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,1,-0.4);
banco.rotation.y=Math.PI/2;
o1.add(banco);  


var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,1,0.4);
banco.rotation.y=Math.PI/2;
o1.add(banco);  

var cubeGeometryBase = new THREE.BoxGeometry(0.9,0.1,0.9);
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.05,1.85,0);
o1.add(banco);  

var cubeGeometryBase = new THREE.BoxGeometry(0.9,0.3,0.9);
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.05,0.25,0);
o1.add(banco); 


//sportelli

var cubeGeometryBase = new THREE.BoxGeometry(0.03,0.03,0.85);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.43,0.42,0);
o1.add(banco); 

var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.43,1.78,0);
o1.add(banco); 

var cubeGeometryBase = new THREE.BoxGeometry(0.03,1.5,0.03);
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.43,1.02,0.41);
o1.add(banco); 

var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.43,1.02,-0.41);
o1.add(banco);

var cubeGeometryBase = new THREE.BoxGeometry(0.01,1.5,0.84);
var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x5555ff, opacity: 0.5,
  transparent: true});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.43,1.02,0);
o1.add(banco);


      //maniglie

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.015,0.015,0.06,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(0.49,1.35,0.35);
      maniglia.rotation.z=Math.PI/2;
      o1.add(maniglia);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.015,0.015,0.06,80);
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(0.49,1.05,0.35);
      maniglia.rotation.z=Math.PI/2;
      o1.add(maniglia);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.02,0.02,0.4,80);
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(0.52,1.2,0.35);
      o1.add(maniglia);

//buchi
var cylinderGeometry1 = new THREE.CylinderGeometry(0.015,0.015,0.06,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
for (var i=0;i<15;i++)
{

  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(-0.325,0.45+i*0.1,0.15);
  maniglia.rotation.x=Math.PI/2;
  o1.add(maniglia);}

  for (var i=0;i<15;i++)
  {

    var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
    maniglia.position.set(-0.325,0.45+i*0.1,-0.15);
    maniglia.rotation.x=Math.PI/2;
    o1.add(maniglia);}

//griglie
var cylinderGeometry1 = new THREE.CylinderGeometry(0.002,0.002,0.70,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
for (var i=0;i<18;i++)
{
  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(-0.325+i*0.04,0.85,0);
  maniglia.rotation.x=Math.PI/2;
  o1.add(maniglia);

  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(0,0.85,-0.325+i*0.04);
  maniglia.rotation.z=Math.PI/2;
  o1.add(maniglia);
}

for (var i=0;i<18;i++)
{

  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(-0.325+i*0.04,1.15,0);
  maniglia.rotation.x=Math.PI/2;
  o1.add(maniglia);
  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(0,1.15,-0.325+i*0.04);
  maniglia.rotation.z=Math.PI/2;
  o1.add(maniglia);
}

for (var i=0;i<18;i++)
{

  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(-0.325+i*0.04,1.45,0);
  maniglia.rotation.x=Math.PI/2;
  o1.add(maniglia);
  var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  maniglia.position.set(0,1.45,-0.325+i*0.04);
  maniglia.rotation.z=Math.PI/2;
  o1.add(maniglia);
}

//scarico
var cylinderGeometry1 = new THREE.CylinderGeometry(0.03,0.03,0.06,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0,0.371,0);
o1.add(maniglia);

//interno

var o0=new THREE.Object3D();
o1.add(o0);
o0.position.y=0.85;


//Portasacche

var cubeGeometryBase = new THREE.BoxGeometry(0.4,0.02,0.3);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.y=0.01; 
o0.add(banco);

var cubeGeometryBase = new THREE.BoxGeometry(0.4,0.1,0.02);
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,0.05,0.14); 
o0.add(banco);

var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,0.05,-0.14); 
o0.add(banco);

var cubeGeometryBase = new THREE.BoxGeometry(0.02,0.1,0.30);
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.19,0.05,0); 
o0.add(banco);

var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(-0.19,0.05,0); 
o0.add(banco);

//saccheSangue

var o2=new THREE.Object3D();
o0.add(o2);
o2.scale.set(0.6,0.6,0.6);
o2.position.set(0.3,-0.9,-0.29);
o2.rotation.z=Math.PI/4;
//sangue interno
var cylinderGeometry1 = new THREE.CylinderGeometry(0.1,0.1,0.25,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color:0xff0000});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.64,1.70,0.41);
maniglia.scale.set(0.2,1,1);
o2.add(maniglia);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.01,0.025,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color:0xff0000});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.64,1.84,0.46);
maniglia.scale.set(0.2,1,1);
o2.add(maniglia);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.01,0.025,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color:0xff0000});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.64,1.84,0.41);
maniglia.scale.set(0.2,1,1);
o2.add(maniglia);



//busta Trasparente
var cylinderGeometry1 = new THREE.CylinderGeometry(0.12,0.12,0.27,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, opacity: 0.5,
  transparent: true});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.64,1.70,0.41);
maniglia.scale.set(0.2,1,1);
o2.add(maniglia);


var cylinderGeometry1 = new THREE.CylinderGeometry(0.015,0.015,0.03,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, opacity: 0.5,
  transparent: true});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.64,1.84,0.46);
maniglia.scale.set(0.2,1,1);
o2.add(maniglia);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.015,0.015,0.03,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, opacity: 0.5,
  transparent: true});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.64,1.84,0.41);
maniglia.scale.set(0.2,1,1);
o2.add(maniglia);

//tappi
var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.01,0.01,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.64,1.86,0.46);
o2.add(maniglia);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.01,0.01,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x00ff00});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.64,1.86,0.41);
o2.add(maniglia);

      //texture

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.09,0.09,0.17,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:sacca});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(0.64,1.70,0.41);
      maniglia.scale.set(0.25,1,1);
      o2.add(maniglia);

      var o3=o2.clone();
      o0.add(o3);
      o3.position.set(0.35,-0.9,-0.19);

      var o4=o2.clone();
      o0.add(o4);
      o4.position.set(0.45,-0.9,-0.19);

      var o5=o2.clone();
      o0.add(o5);
      o5.position.set(0.55,-0.9,-0.19);

      var o6=o2.clone();
      o0.add(o6);
      o6.position.set(0.4,-0.9,-0.29);

      var o7=o2.clone();
      o0.add(o7);
      o7.position.set(0.5,-0.9,-0.29);
      
      o1.feature = this;
      o1.name = this.id;
      var model = Feature.packageModel(o1);

      return model;
    };

    module.exports = FrigoriferoEma;