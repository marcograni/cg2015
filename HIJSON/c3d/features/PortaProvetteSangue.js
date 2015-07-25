var Feature = require('./Feature.js');

Feature.inherits(PortaProvetteSangue, Feature);

function PortaProvetteSangue(feature) {
	Feature.call(this, feature);
}

PortaProvetteSangue.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

PortaProvetteSangue.prototype.in_graph = true;
PortaProvetteSangue.prototype.in_2D_map = false;

PortaProvetteSangue.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;
  o1.scale.set(0.007,0.007,0.007);
  var o1a=new THREE.Object3D();
  o1.add(o1a);



  o1a.position.y=4.5;
  var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
  var texture = THREE.ImageUtils.loadTexture("../../assets/textures/etichetta.jpg" )
//porta_provette

var cubeGeometryBase = new THREE.CubeGeometry(10,25,1);
var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x33CCCC, opacity: 0.3,
  transparent: true});
cubeMaterial.side = THREE.DoubleSide;
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(2,6,0);
banco.rotation.x=Math.PI/2;
o1.add(banco);


var cubeGeometryBase = new THREE.CubeGeometry(2,7,0.5);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
cubeMaterial.side = THREE.DoubleSide;
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(1.5,3.5,11);
o1.add(banco);


var cubeGeometryBase = new THREE.CubeGeometry(2,7,0.5);
cubeMaterial.side = THREE.DoubleSide;
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(1.5,3.5,-11);
o1.add(banco);

var cubeGeometryBase = new THREE.CubeGeometry(11,26,0.5);
cubeMaterial.side = THREE.DoubleSide;
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(1.5,0,0);
banco.rotation.x=Math.PI/2;
o1.add(banco);


//provette sangue


var cylinderGeometry1 = new THREE.CylinderGeometry(1,1,8,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xffff00, opacity: 0.4,
  transparent: true});
var cylinder = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);   
o1a.add(cylinder);

      //sangue
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.9,0.9,6.5,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xff0077});
      var cylinder = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylinder.position.y=-0.5 ;
      o1a.add(cylinder);

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
      lathe.position.set(0,5,0)

      o1a.add( lathe );

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.5,0.5,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x000000});
      var cylinder = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylinder.position.y=4.5;
      o1a.add(cylinder);


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

      o1a.add( lathe );



      var o2=o1a.clone();
      o2.position.x=4;
      var o3=o1a.clone();
      o3.position.set(0,4.5,5);
      var o4=o1a.clone();
      o4.position.set(4,4.5,-5);
      o1.add(o2);
      o1.add(o3);
      o1.add(o4);
      
      o1.feature = this;
      o1.name = this.id;
      var model = Feature.packageModel(o1);

      return model;
    };

    module.exports = PortaProvetteSangue;