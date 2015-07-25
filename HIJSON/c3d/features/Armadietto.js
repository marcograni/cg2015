var Feature = require('./Feature.js');

Feature.inherits(Armadietto, Feature);

function Armadietto(feature) {
	Feature.call(this, feature);
}

Armadietto.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

Armadietto.prototype.in_graph = true;
Armadietto.prototype.in_2D_map = false;

Armadietto.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
    o1.rotation.x=Math.PI/2;
    o1.scale.set(0.033,0.033,0.033);

    var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
    var texture = THREE.ImageUtils.loadTexture("../../assets/textures/legno_grigio.jpg" )
    var cassetto = THREE.ImageUtils.loadTexture("../../assets/textures/cassetti.jpg" )
    var cubeGeometryBase = new THREE.BoxGeometry(20,17,20);
    var cubeMaterial = new THREE.MeshLambertMaterial({map:texture});
    var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
    banco.position.set(0,10,0);
    o1.add(banco);


    var cubeGeometryBase = new THREE.BoxGeometry(10,6,17);
    var cubeMaterial = new THREE.MeshLambertMaterial({map:cassetto});
    var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
    banco.position.set(6,14,0);
    o1.add(banco);


    var cubeGeometryBase = new THREE.BoxGeometry(10,6,17);
    var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial); 
    banco.position.set(6,6,0);
    o1.add(banco);

      //maniglie

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.5,0.5,10,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(11,14,0);
      maniglia.rotation.x=Math.PI/2;
      o1.add(maniglia);


      var cylinderGeometry1 = new THREE.CylinderGeometry(0.5,0.5,10,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      maniglia.position.set(11,6,0);
      maniglia.rotation.x=Math.PI/2;
      o1.add(maniglia);


      //ruote


      var cylinderGeometry1 = new THREE.CylinderGeometry(1,1,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x000000});
      var ruota = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      ruota.position.set(8,0,7);
      ruota.rotation.x=Math.PI/2;
      o1.add(ruota);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.3,0.3,2,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var ruota = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      ruota.position.set(8,0.7,7.8);
      o1.add(ruota);



      var cylinderGeometry1 = new THREE.CylinderGeometry(1,1,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x000000});
      var ruota = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      ruota.position.set(8,0,-7);
      ruota.rotation.x=Math.PI/2;
      o1.add(ruota);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.3,0.3,2,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var ruota = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      ruota.position.set(8,0.7,-7.8);
      o1.add(ruota);



      var cylinderGeometry1 = new THREE.CylinderGeometry(1,1,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x000000});
      var ruota = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      ruota.position.set(-8,0,7);
      ruota.rotation.x=Math.PI/2;
      o1.add(ruota);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.3,0.3,2,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var ruota = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      ruota.position.set(-8,0.7,7.8);
      o1.add(ruota);



      var cylinderGeometry1 = new THREE.CylinderGeometry(1,1,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x000000});
      var ruota = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      ruota.position.set(-8,0,-7);
      ruota.rotation.x=Math.PI/2;
      o1.add(ruota);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.3,0.3,2,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var ruota = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      ruota.position.set(-8,0.7,-7.8);
      o1.add(ruota);


      
      o1.feature = this;
      o1.name = this.id;
      var model = Feature.packageModel(o1);

      return model;
};

module.exports = Armadietto;