  var Feature = require('./Feature.js');

  Feature.inherits(Analizzatrice, Feature);

  function Analizzatrice(feature) {
  	Feature.call(this, feature);
  }

  Analizzatrice.prototype.style = {
    prefix: "fa",
    icon: "minus",
    zIndex: 3
  };

  Analizzatrice.prototype.in_graph = true;
  Analizzatrice.prototype.in_2D_map = false;

  Analizzatrice.prototype.get3DModel = function() {

    var o1=new THREE.Object3D();
    o1.rotation.x=Math.PI/2;

    var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
    var display=THREE.ImageUtils.loadTexture("../../assets/textures/displayanalizzatrice.jpg" )
    var scontrino=THREE.ImageUtils.loadTexture("../../assets/textures/scontrino.jpg" )

        //struttura
        
        var cubeGeometryBase = new THREE.BoxGeometry(0.3,0.5,0.501);
        var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
        var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
        BanconeAngolare.position.set(0,0.25,0);
        o1.add(BanconeAngolare);

        var cubeGeometryBase = new THREE.BoxGeometry(0.3,0.25,0.5);
        var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
        BanconeAngolare.position.set(0.08,0.375,0);
        o1.add(BanconeAngolare);

        var cubeGeometryBase = new THREE.BoxGeometry(0.3,0.2501,0.25);
        var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
        BanconeAngolare.position.set(0.05,0.125,0.125);
        o1.add(BanconeAngolare);

        //schermo

        var cubeGeometryBase = new THREE.BoxGeometry(0.29,0.15,0.18);
        var cubeMaterial = new THREE.MeshLambertMaterial({map:display});
        var BanconeAngolare = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
        BanconeAngolare.position.set(0.091,0.375,0.10);
        o1.add(BanconeAngolare);

        //parte scontrino

        var cylinderGeometry1 = new THREE.CylinderGeometry(0.0025,0.0025,0.05,80);
        var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
        var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
        maniglia.position.set(0.20,0.125,0.125);
        maniglia.rotation.x=Math.PI/2;
        o1.add(maniglia);

        //decorazioni

        var cylinderGeometry1 = new THREE.CylinderGeometry(0.05,0.05,0.05,80);
        var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x0000ff});
        var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
        maniglia.position.set(0.126,0.125,-0.125);
        maniglia.rotation.z=Math.PI/2;
        maniglia.scale.set(1,1,0.5);
        o1.add(maniglia);

        var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
        var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
        maniglia.position.set(0.127,0.125,-0.125);
        maniglia.rotation.z=Math.PI/2;
        maniglia.scale.set(0.6,1,0.08);
        o1.add(maniglia);

        var cylinderGeometry1 = new THREE.CylinderGeometry(0.001,0.001,0.12,80);
        var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
        maniglia.position.set(0.206,0.195,-0.125);
        o1.add(maniglia);

        //scontrino

        var curve = new THREE.SplineCurve3([
          new THREE.Vector3( 0.04, 0, 0 ),
          new THREE.Vector3( 0.04, 0, 0.04 )
          ]
          );

        var geometry = new THREE.LatheGeometry( curve.getPoints(20),200,0,Math.PI/2);
        var material = new THREE.MeshLambertMaterial( {map:scontrino} );
        material.side = THREE.DoubleSide;
        var lathe = new THREE.Mesh( geometry, material );
        lathe.position.set(0.19,0.085,0.105);
        o1.add( lathe );

        
        o1.feature = this;
        o1.name = this.id;
        var model = Feature.packageModel(o1);

        return model;
      };

      module.exports = Analizzatrice;