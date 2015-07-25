var Feature = require('./Feature.js');

Feature.inherits(IncubatriceCO2, Feature);

function IncubatriceCO2(feature) {
	Feature.call(this, feature);
}

IncubatriceCO2.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

IncubatriceCO2.prototype.in_graph = true;
IncubatriceCO2.prototype.in_2D_map = false;

IncubatriceCO2.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
    o1.rotation.x=Math.PI/2;

    
    var acciaioscuro=THREE.ImageUtils.loadTexture("../../assets/textures/acciaioscuro.jpg" )
    var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
    var pannello=THREE.ImageUtils.loadTexture("../../assets/textures/displayincubatrice.jpg" )

//incubatrice

var cubeGeometryBase = new THREE.BoxGeometry(0.03,0.4,0.6);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(0,0.2,0);
o1.add(banco);

var cubeGeometryBase = new THREE.BoxGeometry(0.03,0.39,0.4);
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(0.2,0.2,0.285);
banco.rotation.y=Math.PI/2;
o1.add(banco);

var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(0.2,0.2,0.185);
banco.rotation.y=Math.PI/2;
o1.add(banco);

var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0.2,0.2,-0.285);
banco.rotation.y=Math.PI/2; 
o1.add(banco);

var cubeGeometryBase = new THREE.BoxGeometry(0.03,0.4,0.6);
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(0.2,0.4,0);
banco.rotation.z=Math.PI/2;
o1.add(banco);

var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(0.2,0,0);
banco.rotation.z=Math.PI/2;
o1.add(banco);

//display

var cubeGeometryBase = new THREE.BoxGeometry(0.05,0.43,0.2);
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(0.425,0.2,0.2);
o1.add(banco);

var cubeGeometryBase = new THREE.BoxGeometry(0.05,0.429,0.199);
var cubeMaterial = new THREE.MeshLambertMaterial({map:pannello});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(0.426,0.2,0.2);
o1.add(banco);

//sportello

var cubeGeometryBase = new THREE.BoxGeometry(0.04,0.1,0.4);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaioscuro});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(0.42,0.365,-0.1);
o1.add(banco);

var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(0.42,0.035,-0.1);
o1.add(banco);

var cubeGeometryBase = new THREE.BoxGeometry(0.04,0.05,0.23);
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(0.42,0.2,0.075);
banco.rotation.x=Math.PI/2;
o1.add(banco);

var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(0.42,0.2,-0.275);
banco.rotation.x=Math.PI/2;
o1.add(banco);

//vetro

var cubeGeometryBase = new THREE.BoxGeometry(0.02,0.24,0.35);
var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x5555ff, opacity: 0.5,
    transparent: true});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(0.42,0.2,-0.1);
o1.add(banco);

//cerniere

var cylinderGeometry1 = new THREE.CylinderGeometry(0.003,0.003,0.04,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.4,0.32,-0.302);
o1.add(maniglia);

var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.4,0.12,-0.302);
o1.add(maniglia);

//griglia

var cylinderGeometry1 = new THREE.CylinderGeometry(0.002,0.002,0.44,80);
for (var i=0;i<10;i++)
{
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(0.01+i*0.03,0.17,-0.05);
      maniglia.rotation.x=Math.PI/2;
      o1.add(maniglia);

}

//maniglia
var torusMaterial = new THREE.MeshPhongMaterial( {map:acciaio } );
var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.1, 0.01, 30, 30,Math.PI ), torusMaterial );
torus.rotation.z =  -Math.PI/2;
torus.position.set(0.42,0.2,0.08);
torus.scale.set(1,0.5,1);
o1.add( torus );


o1.feature = this;
o1.name = this.id;
var model = Feature.packageModel(o1);

return model;
};

module.exports = IncubatriceCO2;