var Feature = require('./Feature.js');

Feature.inherits(Cappa, Feature);

function Cappa(feature) {
	Feature.call(this, feature);
}

Cappa.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

Cappa.prototype.in_graph = true;
Cappa.prototype.in_2D_map = true;

Cappa.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;
  o1.scale.set(0.038,0.038,0.038);


  var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
  var texture = THREE.ImageUtils.loadTexture("../../assets/textures/bancone.jpg" )
  //banco
  var cubeGeometryBase = new THREE.CubeGeometry(35,50,5);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:texture});
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.set(0,20,0);
  banco.rotation.x=Math.PI/2;
  o1.add(banco);

  var cylinderGeometry1 = new THREE.CylinderGeometry(2.5,2.5,45,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({map:texture});
  var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  rubinetto.position.set(17,20,0);
  rubinetto.rotation.x=Math.PI/2;
  o1.add(rubinetto);

//sottobanco
var cubeGeometryBase = new THREE.CubeGeometry(35,20,1);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,10,24);

o1.add(banco);

var cubeGeometryBase = new THREE.CubeGeometry(35,20,1);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,10,-24);

o1.add(banco);

//pilastri
var cubeGeometryBase = new THREE.CubeGeometry(5,60,3);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(17,30,24);

o1.add(banco);

var cubeGeometryBase = new THREE.CubeGeometry(5,60,3);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(-17,30,24);

o1.add(banco);

var cubeGeometryBase = new THREE.CubeGeometry(5,60,3);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(17,30,-24);

o1.add(banco);

var cubeGeometryBase = new THREE.CubeGeometry(5,60,3);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(-17,30,-24);

o1.add(banco);

     //sopra-cappa


     var cubeGeometryBase = new THREE.CubeGeometry(40,20,1);
     var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
     var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
     banco.position.set(0,60,-24);
     
     o1.add(banco);

     var cubeGeometryBase = new THREE.CubeGeometry(40,20,1);
     var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
     var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
     banco.position.set(0,60,24);
     
     o1.add(banco);


     var cubeGeometryBase = new THREE.CubeGeometry(50,7,1);
     var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
     var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
     banco.position.set(20,55,0);
     banco.rotation.y=Math.PI/2;
     o1.add(banco);


     var cubeGeometryBase = new THREE.CubeGeometry(49,7,1);
     var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
     var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
     banco.position.set(20,68.5,0);
     banco.rotation.y=Math.PI/2;
     o1.add(banco);

     var texture = THREE.ImageUtils.loadTexture("../../assets/textures/copra_cappa.jpg" )
     var cubeGeometryBase = new THREE.CubeGeometry(49,7,1);
     var cubeMaterial = new THREE.MeshLambertMaterial({map:texture});
     var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
     banco.position.set(19.1,61.5,0);
     banco.rotation.y=Math.PI/2;
     o1.add(banco);

     var cubeGeometryBase = new THREE.CubeGeometry(40,49,1);
     var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
     var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
     banco.position.set(0,70.5,0);
     banco.rotation.x=Math.PI/2;
     o1.add(banco);

     //dietro

     var cubeGeometryBase = new THREE.CubeGeometry(49,71,1);
     var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
     var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
     banco.position.set(-20,35.5,0);
     banco.rotation.y=Math.PI/2;
     o1.add(banco);

     //blocco davanti-vetro


     var cubeGeometryBase = new THREE.CubeGeometry(2,16,2);
     var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x000000});
     var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
     banco.position.set(17,46,21.5);
     
     o1.add(banco);


     var cubeGeometryBase = new THREE.CubeGeometry(2,16,2);
     var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x000000});
     var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
     banco.position.set(17,46,-21.5);
     
     o1.add(banco);

     var cubeGeometryBase = new THREE.CubeGeometry(3,50,3);
     var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x000000});
     var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
     banco.position.set(18,54,0);
     banco.rotation.x=Math.PI/2;
     
     o1.add(banco);

     var cylinderGeometry1 = new THREE.CylinderGeometry(1,1,45,80);
     var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
     var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
     rubinetto.position.set(17,38,0);
     rubinetto.rotation.x=Math.PI/2;
     o1.add(rubinetto);


      //vetro
      var cubeGeometryBase = new THREE.CubeGeometry(25,49,1);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x33CCCC, opacity: 0.3,
        transparent: true});
      cubeMaterial.side = THREE.DoubleSide;
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(17,50,0);
      banco.rotation.x=Math.PI/2;
      banco.rotation.y=Math.PI/2;
      o1.add(banco);


      var cubeGeometryBase = new THREE.CubeGeometry(30,30,1);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x33CCCC, opacity: 0.3,
        transparent: true});
      cubeMaterial.side = THREE.DoubleSide;
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0,35,24);
      o1.add(banco);


      var cubeGeometryBase = new THREE.CubeGeometry(30,30,1);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x33CCCC, opacity: 0.3,
        transparent: true});
      cubeMaterial.side = THREE.DoubleSide;
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0,35,-24);
      o1.add(banco);


  //manigliette


  var cylinderGeometry1 = new THREE.CylinderGeometry(0.2,0.2,2,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
  var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  rubinetto.position.set(20.5,38,24);
  rubinetto.rotation.z=Math.PI/2;
  o1.add(rubinetto);

  var curve = new THREE.CubicBezierCurve3(
    new THREE.Vector3( 0, 0, 0 ),
    new THREE.Vector3( 1.5, 0, 0 ),
    new THREE.Vector3( 0.3, 0, 0.5 ),
    new THREE.Vector3( 0.3, 0, 1.2 )
    );

  var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
  var material = new THREE.MeshLambertMaterial( { color: 0x00FF88} );
  var lathe = new THREE.Mesh( geometry, material );
  lathe.rotation.y=-Math.PI/2;
  lathe.scale.set(1.1,1.1,1.1);
  lathe.position.set(21.5,38,24)
  o1.add( lathe );


  var cylinderGeometry1 = new THREE.CylinderGeometry(0.2,0.2,2,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
  var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  rubinetto.position.set(20.5,44,24);
  rubinetto.rotation.z=Math.PI/2;
  o1.add(rubinetto);



  var curve = new THREE.CubicBezierCurve3(
    new THREE.Vector3( 0, 0, 0 ),
    new THREE.Vector3( 1.5, 0, 0 ),
    new THREE.Vector3( 0.3, 0, 0.5 ),
    new THREE.Vector3( 0.3, 0, 1.2 )
    );

  var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
  var material = new THREE.MeshLambertMaterial( { color: 0x0099FF} );
  var lathe = new THREE.Mesh( geometry, material );
  lathe.rotation.y=-Math.PI/2;
  lathe.scale.set(1.1,1.1,1.1);
  lathe.position.set(21.5,44,24)
  o1.add( lathe );


  var cylinderGeometry1 = new THREE.CylinderGeometry(0.2,0.2,2,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
  var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  rubinetto.position.set(20.5,32,24);
  rubinetto.rotation.z=Math.PI/2;
  o1.add(rubinetto);



  var curve = new THREE.CubicBezierCurve3(
    new THREE.Vector3( 0, 0, 0 ),
    new THREE.Vector3( 1.5, 0, 0 ),
    new THREE.Vector3( 0.3, 0, 0.5 ),
    new THREE.Vector3( 0.3, 0, 1.2 )
    );

  var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
  var material = new THREE.MeshLambertMaterial( { color: 0xFFFF66} );
  var lathe = new THREE.Mesh( geometry, material );
  lathe.rotation.y=-Math.PI/2;
  lathe.scale.set(1.1,1.1,1.1);
  lathe.position.set(21.5,32,24)
  o1.add( lathe );



//filtro interno

var texture = THREE.ImageUtils.loadTexture("../../assets/textures/filtro.jpg" )
var cubeGeometryBase = new THREE.CubeGeometry(30,43,1);
var cubeMaterial = new THREE.MeshLambertMaterial({map:texture});
cubeMaterial.side = THREE.DoubleSide;
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,55,0);
banco.rotation.x=Math.PI/2;
o1.add(banco);





     //controller pulsanti


     var cubeGeometryBase = new THREE.CubeGeometry(2.5,2.5,1);
     var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
     cubeMaterial.side = THREE.DoubleSide;
     var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
     banco.rotation.y=Math.PI/2;
     banco.position.set(19.5,32,-24);
     o1.add(banco);

     var texture = THREE.ImageUtils.loadTexture("../../assets/textures/pannello_controllo.jpg" )
     var cubeGeometryBase = new THREE.CubeGeometry(2.48,2.48,1.2);
     var cubeMaterial = new THREE.MeshLambertMaterial({map:texture});
     cubeMaterial.side = THREE.DoubleSide;
     var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
     banco.rotation.y=Math.PI/2;
     banco.position.set(19.5,32,-24);
     o1.add(banco);



  //sfondo

  var texture = THREE.ImageUtils.loadTexture("../../assets/textures/scondo.jpg" )
  var cubeGeometryBase = new THREE.CubeGeometry(45,38,3);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:texture});
  cubeMaterial.side = THREE.DoubleSide;
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.rotation.y=Math.PI/2;
  banco.position.set(-13,47,0);
  o1.add(banco);





//rubinetti




var cylinderGeometry1 = new THREE.CylinderGeometry(0.4,0.4,6,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(-10,30,-18);
rubinetto.rotation.z=Math.PI/2;
o1.add(rubinetto);

      //perno sx
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.1,0.1,6.5,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(-10,30,-18);
      rubinetto.rotation.z=Math.PI/2;
      o1.add(rubinetto);

      //rubinetti
      var curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 1.5, 0, 0 ),
        new THREE.Vector3( 0.3, 0, 0.5 ),
        new THREE.Vector3( 0.3, 0, 1.2 )
        );

      var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
      var material = new THREE.MeshLambertMaterial( { color: 0x99CCCC} );
      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.y=-Math.PI/2;
      lathe.scale.set(1.1,1.1,1.1);
      lathe.position.set(-6.8,30,-18)
      o1.add( lathe );





      var cylinderGeometry1 = new THREE.CylinderGeometry(0.4,0.2,1.5,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(-8.2,29.3,-18);
      o1.add(rubinetto);


      var cylinderGeometry1 = new THREE.CylinderGeometry(0.4,0.4,6,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(-10,30,-15);
      rubinetto.rotation.z=Math.PI/2;
      o1.add(rubinetto);

      //perno sx
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.1,0.1,6.5,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(-10,30,-15);
      rubinetto.rotation.z=Math.PI/2;
      o1.add(rubinetto);

      //rubinetti
      var curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 1.5, 0, 0 ),
        new THREE.Vector3( 0.3, 0, 0.5 ),
        new THREE.Vector3( 0.3, 0, 1.2 )
        );

      var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
      var material = new THREE.MeshLambertMaterial( { color: 0x0066FF} );
      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.y=-Math.PI/2;
      lathe.scale.set(1.1,1.1,1.1);
      lathe.position.set(-6.8,30,-15)
      o1.add( lathe );





      var cylinderGeometry1 = new THREE.CylinderGeometry(0.4,0.2,1.5,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(-8.2,29.3,-15);
      o1.add(rubinetto);


      var cylinderGeometry1 = new THREE.CylinderGeometry(0.4,0.4,6,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(-10,30,-12);
      rubinetto.rotation.z=Math.PI/2;
      o1.add(rubinetto);

      //perno sx
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.1,0.1,6.5,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(-10,30,-12);
      rubinetto.rotation.z=Math.PI/2;
      o1.add(rubinetto);

      //rubinetti
      var curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 1.5, 0, 0 ),
        new THREE.Vector3( 0.3, 0, 0.5 ),
        new THREE.Vector3( 0.3, 0, 1.2 )
        );

      var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
      var material = new THREE.MeshLambertMaterial( { color: 0xFFCC33} );
      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.y=-Math.PI/2;
      lathe.scale.set(1.1,1.1,1.1);
      lathe.position.set(-6.8,30,-12)
      o1.add( lathe );





      var cylinderGeometry1 = new THREE.CylinderGeometry(0.4,0.2,1.5,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(-8.2,29.3,-12);
      o1.add(rubinetto);


      var curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 1, 0, 0 ),
        new THREE.Vector3( 0.7, 0, 0.8 ),
        new THREE.Vector3( 0.5, 0, 1.8 )
        );

      var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
      var material = new THREE.MeshLambertMaterial( { color: 0x000000} );
      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.y=-Math.PI/2;
      lathe.scale.set(1.1,1.1,1.1);
      lathe.position.set(-10,33,-14)
      o1.add( lathe );


      var cylinderGeometry1 = new THREE.CylinderGeometry(0.3,0.3,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x555555});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(-10.4,33,-14);
      rubinetto.rotation.z=Math.PI/2;
      o1.add(rubinetto);


      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.y=-Math.PI/2;
      lathe.scale.set(1.1,1.1,1.1);
      lathe.position.set(-10,33,0)
      o1.add( lathe );


      var cylinderGeometry1 = new THREE.CylinderGeometry(0.3,0.3,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x555555});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(-10.4,33,0);
      rubinetto.rotation.z=Math.PI/2;
      o1.add(rubinetto);



      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.y=-Math.PI/2;
      lathe.scale.set(1.1,1.1,1.1);
      lathe.position.set(-10,33,14)
      o1.add( lathe );


      var cylinderGeometry1 = new THREE.CylinderGeometry(0.3,0.3,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x555555});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(-10.4,33,14);
      rubinetto.rotation.z=Math.PI/2;
      o1.add(rubinetto);


      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.y=-Math.PI/2;
      lathe.scale.set(1.1,1.1,1.1);
      lathe.position.set(-10,44,-14)
      o1.add( lathe );


      var cylinderGeometry1 = new THREE.CylinderGeometry(0.3,0.3,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x555555});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(-10.4,44,-14);
      rubinetto.rotation.z=Math.PI/2;
      o1.add(rubinetto);


      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.y=-Math.PI/2;
      lathe.scale.set(1.1,1.1,1.1);
      lathe.position.set(-10,44,0)
      o1.add( lathe );


      var cylinderGeometry1 = new THREE.CylinderGeometry(0.3,0.3,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x555555});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(-10.4,44,0);
      rubinetto.rotation.z=Math.PI/2;
      o1.add(rubinetto);



      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.y=-Math.PI/2;
      lathe.scale.set(1.1,1.1,1.1);
      lathe.position.set(-10,44,14)
      o1.add( lathe );


      var cylinderGeometry1 = new THREE.CylinderGeometry(0.3,0.3,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x555555});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(-10.4,44,14);
      rubinetto.rotation.z=Math.PI/2;
      o1.add(rubinetto);


      //decorazioni


      var curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 1, 0, 0.1 ),
        new THREE.Vector3( 1, 0, 9.9 ),
        new THREE.Vector3( 0, 0, 10 )
        );

      var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
      var material = new THREE.MeshLambertMaterial( { color: 0x000000} );
      var lathe = new THREE.Mesh( geometry, material );
      lathe.position.set(-12,33,-12)
      o1.add( lathe );

      var lathe = new THREE.Mesh( geometry, material );
      lathe.position.set(-12,33,2)
      o1.add( lathe );

      
      o1.feature = this;
      o1.name = this.id;
      var model = Feature.packageModel(o1);

      return model;
    };

    module.exports = Cappa;