var Feature = require('./Feature.js');

Feature.inherits(PosterVir2, Feature);

function PosterVir2(feature) {
  Feature.call(this, feature);
}

PosterVir2.prototype.style = {
                prefix: "fa",
                icon: "minus",
                zIndex: 3
            };

PosterVir2.prototype.in_graph = true;
PosterVir2.prototype.in_2D_map = false;

PosterVir2.prototype.get3DModel = function() {

  var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

var poster=THREE.ImageUtils.loadTexture("../../assets/textures/PosterVir2.jpg" )


  var cubeGeometryBase = new THREE.BoxGeometry(0.01,1.2,1);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0x0000ff});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0,0.6,0);
     o1.add(banco);

      var cubeGeometryBase = new THREE.BoxGeometry(0.01,1.199,0.999);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:poster});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0.001,0.6,0);
     o1.add(banco);


  o1.feature = this;
  o1.name = this.id;
  var model = Feature.packageModel(o1);

  return model;
};

module.exports = PosterVir2;