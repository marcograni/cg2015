var Feature = require('./Feature.js');

Feature.inherits(Scaffale, Feature);

function Scaffale(feature) {
      Feature.call(this, feature);
}

Scaffale.prototype.style = {
                                    prefix: "fa",
                                    icon: "plus",
                                    zIndex: 3
                                    };

Scaffale.prototype.in_graph = true;

Scaffale.prototype.in_2D_map = false;

Scaffale.prototype.get3DModel = function() {

  var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;


      var black = new THREE.MeshLambertMaterial({color: 0x000000});
      var gray = new THREE.MeshLambertMaterial({color: 0xC0C0C0});
  
      
      var scaffale = new THREE.Mesh(new THREE.BoxGeometry(0.4,0.01,2.4),gray);
      scaffale.position.set(0,0.5,0);
      o1.add(scaffale);

      var scaffale = new THREE.Mesh(new THREE.BoxGeometry(0.4,0.01,2.4),gray);
      scaffale.position.set(0,1,0);
      o1.add(scaffale);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.025,0.025,1,80);
      var maniglia = new THREE.Mesh(cylinderGeometry1,gray);
      maniglia.position.set(-0.2,0.5,-1.2);
      o1.add(maniglia); 

      var maniglia = new THREE.Mesh(cylinderGeometry1,gray);
      maniglia.position.set(-0.2,0.5,0);
      o1.add(maniglia);

      var maniglia = new THREE.Mesh(cylinderGeometry1,gray);
      maniglia.position.set(-0.2,0.5,1.2);
      o1.add(maniglia);

      var maniglia = new THREE.Mesh(cylinderGeometry1,gray);
      maniglia.position.set(0.2,0.5,-1.2);
      o1.add(maniglia);

      var maniglia = new THREE.Mesh(cylinderGeometry1,gray);
      maniglia.position.set(0.2,0.5,0);
      o1.add(maniglia);

      var maniglia = new THREE.Mesh(cylinderGeometry1,gray);
      maniglia.position.set(0.2,0.5,1.2);
      o1.add(maniglia);
      

      

      o1.feature = this;
      o1.name = this.id;
      var model = Feature.packageModel(o1);

      return model;
};

module.exports = Scaffale;
