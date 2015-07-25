var Feature = require('./Feature.js');

Feature.inherits(BanconeLab, Feature);

function BanconeLab(feature) {
	Feature.call(this, feature);
}

BanconeLab.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

BanconeLab.prototype.in_graph = true;
BanconeLab.prototype.in_2D_map = true;

BanconeLab.prototype.get3DModel = function() {

	var o2=new THREE.Object3D();
  o2.scale.set(0.035,0.035,0.030);
  o2.rotation.x=Math.PI/2;
  var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
  var texture = THREE.ImageUtils.loadTexture("../../assets/textures/bancone.jpg" )
  //banco centrale
  
  var cubeGeometryBase = new THREE.BoxGeometry(45,100,2);
  var cubeMaterial = new THREE.MeshLambertMaterial({map:texture});
  var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
  banco.position.set(0,20,0);
  banco.rotation.x=Math.PI/2
  o2.add(banco);


//gambe tavolo sx

var gamba = THREE.ImageUtils.loadTexture("../../assets/textures/gambe.jpg" )
var cubeGeometryBase = new THREE.BoxGeometry(45,3,3);
var cubeMaterial = new THREE.MeshLambertMaterial({map:gamba});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0,48);
o2.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(20,3,3);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,10,48);
piede.rotation.z=Math.PI/2;
o2.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(20,15,0.3);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,10,48);
piede.rotation.z=Math.PI/2;
o2.add(piede);

//gambe tavolo dx

var cubeGeometryBase = new THREE.BoxGeometry(45,3,3);
var cubeMaterial = new THREE.MeshLambertMaterial({map:gamba});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,0,-48);
o2.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(20,3,3);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,10,-48);
piede.rotation.z=Math.PI/2;
o2.add(piede);

var cubeGeometryBase = new THREE.BoxGeometry(20,15,0.3);
var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
piede.position.set(0,10,-48);
piede.rotation.z=Math.PI/2;
o2.add(piede);


//scaffali tavolo

    //travi


    var cubeGeometryBase = new THREE.BoxGeometry(40,2,2);
    var cubeMaterial = new THREE.MeshLambertMaterial({map:gamba});
    var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
    piede.position.set(0,40,48);
    piede.rotation.z=Math.PI/2;
    o2.add(piede);


    var cubeGeometryBase = new THREE.BoxGeometry(40,2,2);
    var cubeMaterial = new THREE.MeshLambertMaterial({map:gamba});
    var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
    piede.position.set(0,40,0);
    piede.rotation.z=Math.PI/2;
    o2.add(piede);


    var cubeGeometryBase = new THREE.BoxGeometry(40,2,2);
    var cubeMaterial = new THREE.MeshLambertMaterial({map:gamba});
    var piede = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
    piede.position.set(0,40,-48);
    piede.rotation.z=Math.PI/2;
    o2.add(piede);

      //scaffali vetro

      var cubeGeometryBase = new THREE.BoxGeometry(20,100,1);
      var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff, opacity: 0.3,
        transparent: true});
      cubeMaterial.side = THREE.DoubleSide;
      var scaffale = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      scaffale.position.set(0,35,0);
      scaffale.rotation.x=Math.PI/2;            
      o2.add(scaffale);


      var cubeGeometryBase = new THREE.BoxGeometry(20,100,1);
      var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0xffffff, opacity: 0.3,
        transparent: true});
      cubeMaterial.side = THREE.DoubleSide;
      var scaffale = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      scaffale.position.set(0,55,0);
      scaffale.rotation.x=Math.PI/2;        
      o2.add(scaffale);



//rubinetti

  //tubi sx

  var cylinderGeometry1 = new THREE.CylinderGeometry(0.4,0.4,6,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  rubinetto.position.set(0,23,30);
  o2.add(rubinetto);

  var cylinderGeometry1 = new THREE.CylinderGeometry(0.4,0.4,6,80);
  var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
  var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
  rubinetto.position.set(0,26,30);
  rubinetto.rotation.z=Math.PI/2;
  o2.add(rubinetto);

      //perno sx
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.1,0.1,6.5,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(0,26,30);
      rubinetto.rotation.z=Math.PI/2;
      o2.add(rubinetto);

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
      lathe.position.set(3.2,26,30)
      o2.add( lathe );

      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.y=Math.PI/2;
      lathe.scale.set(1.1,1.1,1.1);
      lathe.position.set(-3.2,26,30)
      o2.add( lathe );

//bocchette
var cylinderGeometry1 = new THREE.CylinderGeometry(0.4,0.2,1.5,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(1.8,25.3,30);
o2.add(rubinetto);



var cylinderGeometry1 = new THREE.CylinderGeometry(0.4,0.2,1.5,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(-1.8,25.3,30);
o2.add(rubinetto);


      //rubinetti dx

      //tubi
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.4,0.4,6,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(0,23,-30);
      o2.add(rubinetto);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.4,0.4,6,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(0,26,-30);
      rubinetto.rotation.z=Math.PI/2;
      o2.add(rubinetto);

      

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
      lathe.position.set(3.2,26,-30)

      o2.add( lathe );

      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.y=Math.PI/2;
      lathe.scale.set(1.1,1.1,1.1);
      lathe.position.set(-3.2,26,-30)
      o2.add( lathe );

//bocchetta dx
var cylinderGeometry1 = new THREE.CylinderGeometry(0.4,0.2,1.5,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(1.8,25.3,-30);
o2.add(rubinetto);



var cylinderGeometry1 = new THREE.CylinderGeometry(0.4,0.2,1.5,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
rubinetto.position.set(-1.8,25.3,-30);
o2.add(rubinetto);

      //perno dx

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.1,0.1,6.5,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
      var rubinetto = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      rubinetto.position.set(0,26,-30);
      rubinetto.rotation.z=Math.PI/2;
      o2.add(rubinetto);


      //prese corrente centro


      var cubeGeometryBase = new THREE.BoxGeometry(3,4,9);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0xcccccc});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0,22.2,5.5);  
      o2.add(banco);

      var texture = THREE.ImageUtils.loadTexture("../../assets/textures/presa.jpg" )
      var cubeGeometryBase = new THREE.BoxGeometry(4,3,3.1);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:texture});
      var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      banco.position.set(0,22.5,3);
     //banco.rotation.x=Math.PI/2
     banco.rotation.y=Math.PI/2;   
     o2.add(banco);


     var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
     banco.position.set(0,22.5,7.5);
     //banco.rotation.x=Math.PI/2
     banco.rotation.y=Math.PI/2;   
     o2.add(banco);



//prese corrente dx


var cubeGeometryBase = new THREE.BoxGeometry(3,9,3.1);
var cubeMaterial = new THREE.MeshLambertMaterial({color:0xCCCCCC});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,25.2,-45.5);  
o2.add(banco);

var texture = THREE.ImageUtils.loadTexture("../../assets/textures/presa.jpg" )
var cubeGeometryBase = new THREE.BoxGeometry(4,3,3.1);
var cubeMaterial = new THREE.MeshLambertMaterial({map:texture});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,23.5,-45.5);
banco.rotation.z=Math.PI/2
banco.rotation.y=Math.PI/2;   
o2.add(banco);


var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,27.5,-45.5);
banco.rotation.z=Math.PI/2
banco.rotation.y=Math.PI/2;   
o2.add(banco);



//prese corrente sx


var cubeGeometryBase = new THREE.BoxGeometry(3,9,3.1);
var cubeMaterial = new THREE.MeshLambertMaterial({color:0xCCCCCC});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,25.2,45.5);  
o2.add(banco);

var texture = THREE.ImageUtils.loadTexture("../../assets/textures/presa.jpg" )
var cubeGeometryBase = new THREE.BoxGeometry(4,3,3.1);
var cubeMaterial = new THREE.MeshLambertMaterial({map:texture});
var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,23.5,45.5);
banco.rotation.z=Math.PI/2
banco.rotation.y=Math.PI/2;   
o2.add(banco);


var banco = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
banco.position.set(0,27.5,45.5);
banco.rotation.z=Math.PI/2
banco.rotation.y=Math.PI/2;   
o2.add(banco);
o2.feature = this;
o2.name = this.id;
var model = Feature.packageModel(o2);

return model;
};

module.exports = BanconeLab;