var Feature = require('./Feature.js');

Feature.inherits(Wc_uomo, Feature);

function Wc_uomo(feature) {
  Feature.call(this, feature);
}

Wc_uomo.prototype.style = {
                prefix: "fa",
                icon: "minus",
                zIndex: 3
            };

Wc_uomo.prototype.in_graph = true;
Wc_uomo.prototype.in_2D_map = false;

Wc_uomo.prototype.get3DModel = function() {

  var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

var poster=THREE.ImageUtils.loadTexture("../../assets/textures/Wc_uomo.jpg" )


  var cubeGeometryBase = new THREE.BoxGeometry(0.01,0.3,0.3);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0x0000ff});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0,0.6,0);
     o1.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.01,0.299,0.299);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:poster});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.001,0.6,0);
     o1.add(banco);


  o1.feature = this;
  o1.name = this.id;
  var model = Feature.packageModel(o1);

  return model;
};

module.exports = Wc_uomo;