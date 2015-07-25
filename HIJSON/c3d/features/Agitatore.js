var Feature = require('./Feature.js');

Feature.inherits(Agitatore, Feature);

function Agitatore(feature) {
	Feature.call(this, feature);
}

Agitatore.prototype.style = {
			    			prefix: "fa",
	    					icon: "minus",
	    					zIndex: 3
						};

Agitatore.prototype.in_graph = true;
Agitatore.prototype.in_2D_map = false;

Agitatore.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
var pannello=THREE.ImageUtils.loadTexture("../../assets/textures/displayagitatore.jpg" )
var texture = THREE.ImageUtils.loadTexture("../../assets/textures/etichetta.jpg" )

//incubatrice

//base 

var cubeGeometryBase = new THREE.BoxGeometry(0.3,0.02,0.15);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(0,0.01,0);
o1.add(banco);

var cubeGeometryBase = new THREE.BoxGeometry(0.265,0.07,0.15);
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(-0.017,0.046,0);
o1.add(banco);

var cubeGeometryBase = new THREE.BoxGeometry(0.03,0.07,0.15);
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(0.119,0.0432,0);
banco.rotation.z=Math.PI/6;
o1.add(banco);


var cubeGeometryBase = new THREE.BoxGeometry(0.03,0.05,0.15);
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(-0.135,0.1,0);
o1.add(banco);

var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(0.08,0.1,0);
o1.add(banco);

//cilindri

var cylinderGeometry1 = new THREE.CylinderGeometry(0.014,0.014,0.22,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(-0.02,0.1,0.06);
maniglia.rotation.z=Math.PI/2;
o1.add(maniglia);

var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(-0.02,0.1,0.03);
maniglia.rotation.z=Math.PI/2;
o1.add(maniglia);

var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(-0.02,0.1,0);
maniglia.rotation.z=Math.PI/2;
o1.add(maniglia);

var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(-0.02,0.1,-0.03);
maniglia.rotation.z=Math.PI/2;
o1.add(maniglia);

var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(-0.02,0.1,-0.06);
maniglia.rotation.z=Math.PI/2;
o1.add(maniglia);

//display

var cubeGeometryBase = new THREE.BoxGeometry(0.031,0.069,0.149);
var cubeMaterial = new THREE.MeshLambertMaterial({map:pannello});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
banco.position.set(0.119,0.0432,0);
banco.rotation.z=Math.PI/6;
o1.add(banco);

//provette

var o2=new THREE.Object3D();
o1.add(o2);
o2.position.set(0,0.115,0.015);
o2.rotation.z=Math.PI/2;
o2.scale.set(0.007,0.007,0.007);

      //provette sangue
            
      var cylinderGeometry1 = new THREE.CylinderGeometry(1,1,8,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xffff00, opacity: 0.4,
      transparent: true});
      var cylinder = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);   
      o2.add(cylinder);

      //sangue
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.9,0.9,6.5,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xff0077});
      var cylinder = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylinder.position.y=-0.5 ;
      o2.add(cylinder);

      //tappo

      var curve = new THREE.SplineCurve3( [
        new THREE.Vector3( 0.5, 0, 0 ),
        new THREE.Vector3( 0.7, 1, 0 ),
        new THREE.Vector3( 0.5, 1, 1.5 ),
        new THREE.Vector3( 0.2, 1, 1 ),
        new THREE.Vector3( 0.5, 0, 1.7 )
        ] );

      var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
      var material = new THREE.MeshLambertMaterial( { color: 0x0066FF} );
      material.side = THREE.DoubleSide;
      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.x=Math.PI/2;
      lathe.position.set(0,5,0);
      o2.add( lathe );

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.5,0.5,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x000000});
      var cylinder = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylinder.position.y=4.5;
      o2.add(cylinder);

      //etichetta

      var curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3( 1, 0, 0 ),
        new THREE.Vector3( 1, 0, 0 ),
        new THREE.Vector3( 1, 0, 5),
        new THREE.Vector3( 1, 0, 5 )
      );

      var geometry = new THREE.LatheGeometry( curve.getPoints(20),200,0, Math.PI);
      var material = new THREE.MeshLambertMaterial( {map:texture} );
      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.x=-Math.PI/2;
      lathe.position.y=-2;
      o2.add( lathe );

      //provetta #2
      var o3=o2.clone();
      o1.add(o3);
      o3.position.set(-0.05,0.115,0.045);

      //provetta #3
      var o4=o2.clone();
      o1.add(o4);
      o4.position.set(-0.05,0.115,-0.045);
  
	
	o1.feature = this;
	o1.name = this.id;
	var model = Feature.packageModel(o1);

	return model;
};

module.exports = Agitatore;