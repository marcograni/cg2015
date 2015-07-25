var Feature = require('./Feature.js');

Feature.inherits(CassettiBancoLab, Feature);

function CassettiBancoLab(feature) {
	Feature.call(this, feature);
}

CassettiBancoLab.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

CassettiBancoLab.prototype.in_graph = true;
CassettiBancoLab.prototype.in_2D_map = false;

CassettiBancoLab.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
    o1.rotation.x=Math.PI/2;
    o1.scale.set(0.029,0.029,0.029);
    
    var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
    var cassetti = THREE.ImageUtils.loadTexture("../../assets/textures/cassetti.jpg" )


      //cassettine

      var cubeGeometryBase = new THREE.BoxGeometry(20,19,17);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var CassettiBancoLab = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
      CassettiBancoLab.position.set(0,8,8.5);
      o1.add(CassettiBancoLab);

      var cubeGeometryBase = new THREE.BoxGeometry(18,17,15);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:cassetti});
      var CassettiBancoLab = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
      CassettiBancoLab.position.set(2,8.3,8.5);
      o1.add(CassettiBancoLab);

      //maniglia

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.4,0.4,8,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(11,10,2.5);
      o1.add(maniglia);

      //cerniere

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.2,0.2,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(10,12,16);
      o1.add(maniglia);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.2,0.2,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(10,3,16);
      o1.add(maniglia);


//cassettine dx
var cubeGeometryBase = new THREE.BoxGeometry(20,19,17);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var CassettiBancoLab = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
CassettiBancoLab.position.set(0,8,-8.5);
o1.add(CassettiBancoLab);

var cubeGeometryBase = new THREE.BoxGeometry(18,17,15);
var cubeMaterial = new THREE.MeshLambertMaterial({map:cassetti});
var CassettiBancoLab = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
CassettiBancoLab.position.set(2,8.3,-8.5);
o1.add(CassettiBancoLab);

      //maniglia

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.4,0.4,8,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(11,10,-2.5);
      o1.add(maniglia);

      //cerniere

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.2,0.2,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(10,12,-16);
      o1.add(maniglia);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.2,0.2,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(10,3,-16);
      o1.add(maniglia);

      //cassettiere

      var cubeGeometryBase = new THREE.BoxGeometry(20,19,20);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var CassettiBancoLab = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
      CassettiBancoLab.position.set(0,8,27);
      o1.add(CassettiBancoLab);


      var cubeGeometryBase = new THREE.BoxGeometry(10,6,17);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:cassetti});
      var CassettiBancoLab = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
      CassettiBancoLab.position.set(6,12,27);
      o1.add(CassettiBancoLab);


      var cubeGeometryBase = new THREE.BoxGeometry(10,6,17);
      var CassettiBancoLab = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
      CassettiBancoLab.position.set(6,4,27);
      o1.add(CassettiBancoLab);

      //maniglie

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.5,0.5,10,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(11,12,27);
      maniglia.rotation.x=Math.PI/2;
      o1.add(maniglia);


      var cylinderGeometry1 = new THREE.CylinderGeometry(0.5,0.5,10,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(11,4,27);
      maniglia.rotation.x=Math.PI/2;
      o1.add(maniglia);

           //cassettiere

           var cubeGeometryBase = new THREE.BoxGeometry(20,19,20);
           var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
           var CassettiBancoLab = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
           CassettiBancoLab.position.set(0,8,-27);
           o1.add(CassettiBancoLab);


           var cubeGeometryBase = new THREE.BoxGeometry(10,15,17);
           var cubeMaterial = new THREE.MeshLambertMaterial({map:cassetti});
           var CassettiBancoLab = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
           CassettiBancoLab.position.set(6,9,-27);
           o1.add(CassettiBancoLab);




      //maniglie


      var torusMaterial = new THREE.MeshPhongMaterial( {map:acciaio} );
      var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.2, 0.02, 30, 30,Math.PI ), torusMaterial );

      torus.rotation.x =  -Math.PI/2;
      torus.rotation.z =  -Math.PI/2;
      torus.position.set(11,12,-27);
      torus.scale.set(20,10,20);
      o1.add( torus );


           //cassettiere

           var cubeGeometryBase = new THREE.BoxGeometry(20,19,20);
           var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
           var CassettiBancoLab = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
           CassettiBancoLab.position.set(0,8,-47);
           o1.add(CassettiBancoLab);


           var cubeGeometryBase = new THREE.BoxGeometry(10,4,17);
           var cubeMaterial = new THREE.MeshLambertMaterial({map:cassetti});
           var CassettiBancoLab = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
           CassettiBancoLab.position.set(6,14,-47);
           o1.add(CassettiBancoLab);


           var cubeGeometryBase = new THREE.BoxGeometry(10,4,17);
           var CassettiBancoLab = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
           CassettiBancoLab.position.set(6,2,-47);
           o1.add(CassettiBancoLab);

           var cubeGeometryBase = new THREE.BoxGeometry(10,4,17);
           var CassettiBancoLab = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
           CassettiBancoLab.position.set(6,8,-47);
           o1.add(CassettiBancoLab);

      //maniglie

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.5,0.5,10,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(11,14,-47);
      maniglia.rotation.x=Math.PI/2;
      o1.add(maniglia);

      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(11,8,-47);
      maniglia.rotation.x=Math.PI/2;
      o1.add(maniglia);


      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(11,2,-47);
      maniglia.rotation.x=Math.PI/2;
      o1.add(maniglia);

      
      o1.feature = this;
      o1.name = this.id;
      var model = Feature.packageModel(o1);

      return model;
};

module.exports = CassettiBancoLab;