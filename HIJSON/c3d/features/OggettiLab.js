var Feature = require('./Feature.js');

Feature.inherits(OggettiLab, Feature);

function OggettiLab(feature) {
	Feature.call(this, feature);
}

OggettiLab.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

OggettiLab.prototype.in_graph = true;
OggettiLab.prototype.in_2D_map = false;

OggettiLab.prototype.get3DModel = function() {


  var texture = THREE.ImageUtils.loadTexture("../../assets/textures/etichetta.jpg" )
  var bianco = THREE.ImageUtils.loadTexture("../../assets/textures/biancoopaco.jpg" )
  var gomma = THREE.ImageUtils.loadTexture("../../assets/textures/gomma.jpg" )

  

  var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;
  var o1a=new THREE.Object3D();
  o1.add(o1a);


  o1a.position.z=0.1;
  o1a.scale.set(0.008,0.008,0.008);
  var curve = new THREE.SplineCurve3([
    new THREE.Vector3( 0, 0, 0 ),
    new THREE.Vector3( 12, 0, 2 ),
    new THREE.Vector3( 3, 0, 12 ),
    new THREE.Vector3( 2, 0, 25 )]
    );


  var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
  var material = new THREE.MeshLambertMaterial( { color: 0xffffff, opacity: 0.3,
    transparent: true} );
  material.side = THREE.DoubleSide;
  var lathe = new THREE.Mesh( geometry, material );
  lathe.rotation.x=-Math.PI/2;

  o1a.add( lathe );

  var curve = new THREE.SplineCurve3([
    new THREE.Vector3( 0, 0, 0 ),
    new THREE.Vector3( 11.5, 0, 2),
    new THREE.Vector3( 7, 0, 7 ),
    ]
    );

  var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
  var material = new THREE.MeshLambertMaterial( { color: 0xFFFF00, opacity: 0.8,
    transparent: true} );
  material.side = THREE.DoubleSide;
  var lathe = new THREE.Mesh( geometry, material );
  lathe.rotation.x=-Math.PI/2;
  o1a.add( lathe );

  var cylinderGeometry1 = new THREE.CylinderGeometry(7,7,2,80);
  var rubinetto = new THREE.Mesh(cylinderGeometry1,material);
  rubinetto.position.set(0,6,0);
  o1a.add(rubinetto);


//pipetta_pasteur
var o1b=new THREE.Object3D();
o1.add(o1b);
o1b.rotation.z=Math.PI/2;
o1b.position.set(0.7,0.008,0);

var curve = new THREE.SplineCurve3( [
  new THREE.Vector3( 0.0005, 0, 0 ),
  new THREE.Vector3( 0.0012, 0, 0.02 ),
  new THREE.Vector3( 0.0013, 0, 0.04 ),
  new THREE.Vector3( 0.0013, 0, 0.06 ),
  new THREE.Vector3( 0.003, 0, 0.08 )
  ] );

var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
var material = new THREE.MeshLambertMaterial( { color: 0xffffff, opacity: 0.3,
  transparent: true} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.rotation.x=-Math.PI/2;
lathe.position.set(0,0.28,0)
o1b.add( lathe );


var cylinderGeometry1 = new THREE.CylinderGeometry(0.003,0.003,0.10,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, opacity: 0.3,
  transparent: true});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0,0.41,0);   
o1b.add(maniglia);


var curve = new THREE.SplineCurve3( [
  new THREE.Vector3( 0, 0, 0 ),
  new THREE.Vector3( 0.0075, 0, 0.005 ),
  new THREE.Vector3( 0.005, 0, 0.033 ),
  new THREE.Vector3( 0.0075, 0, 0.038 ),
  new THREE.Vector3( 0.005, 0, 0.04 ),
  new THREE.Vector3( 0.00025, 0, 0.035 )
  ] );

var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
var material = new THREE.MeshLambertMaterial( { map:gomma} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.rotation.x=Math.PI/2;
lathe.position.set(0,0.5,0)
o1b.add( lathe );

//pipetta 

var o1c=new THREE.Object3D();
o1.add(o1c);
o1c.rotation.z=Math.PI/2;
o1c.position.set(0.8,0.008,0.03);
var curve = new THREE.SplineCurve3( [
  new THREE.Vector3( 0.0005, 0, 0 ),
  new THREE.Vector3( 0.0014, 0, 0.02 ),
  new THREE.Vector3( 0.003, 0, 0.025 )
  ] );

var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
var material = new THREE.MeshLambertMaterial( { color: 0xffffff, opacity: 0.3,
  transparent: true} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.rotation.x=-Math.PI/2;
lathe.position.set(0,0.36,0)

o1c.add( lathe );


var cylinderGeometry1 = new THREE.CylinderGeometry(0.003,0.003,0.10,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, opacity: 0.3,
  transparent: true});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0,0.435,0);

o1c.add(maniglia);


var curve = new THREE.SplineCurve3( [
  new THREE.Vector3( 0, 0, 0 ),
  new THREE.Vector3( 0.0075, 0, 0.005 ),
  new THREE.Vector3( 0.005, 0, 0.023 ),
  new THREE.Vector3( 0.0075, 0, 0.028 ),
  new THREE.Vector3( 0.005, 0, 0.03 ),
  new THREE.Vector3( 0.00025, 0, 0.025 )
  ] );

var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
var material = new THREE.MeshLambertMaterial( { color: 0xff0000} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.rotation.x=Math.PI/2;

lathe.position.set(0,0.5,0)

o1c.add( lathe );

//spruzzetta

var o1d=new THREE.Object3D();
o1.add(o1d);
o1d.position.set(0.2,0,-0.2);


var curve = new THREE.SplineCurve3([
  new THREE.Vector3( 0, 0, 0 ),
  new THREE.Vector3( 0.03, 0, 0.01 ),
  new THREE.Vector3( 0.03, 0, 0.12 ),
  new THREE.Vector3( 0, 0, 0.145 )]
  );


var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
var material = new THREE.MeshLambertMaterial( { map:bianco} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.rotation.x=-Math.PI/2;
o1d.add( lathe );


var o2=new THREE. Object3D();
o1d.add(o2);
o2.rotation.y=-Math.PI/4;
o2.scale.set(0.2,0.2,0.2);
o2.position.y=-0.05;



var cylinderGeometry1 = new THREE.CylinderGeometry(0.08,0.08,0.12,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x0066ff});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0,1,0);
o2.add(maniglia);

var cylinderGeometry1 = new THREE.CylinderGeometry(0.0125,0.0125,0.8,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:bianco});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0,0.725,0);
o2.add(maniglia);   


var torusMaterial = new THREE.MeshPhongMaterial( { map:bianco } );
var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.11, 0.013, 30, 30 , 2*Math.PI/3), torusMaterial );
torus.rotation.z =  Math.PI/3;
torus.position.y=1.125;
torus.position.x=0.11;
o2.add( torus );


var cylinderGeometry1 = new THREE.CylinderGeometry(0.0125,0.006,0.40,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({map:bianco});
var maniglia = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
maniglia.position.set(0.338,1.12,0);
maniglia.rotation.z=Math.PI/3;
o2.add(maniglia);

//beuta_piccola

var o1e=new THREE.Object3D();
o1.add(o1e);
o1e.position.set(0.1,0,-0.1)
var curve = new THREE.CubicBezierCurve3(
  new THREE.Vector3( 0, 0, 0 ),
  new THREE.Vector3( 6, 0, 0 ),
  new THREE.Vector3( 0, 0, 2 ),
  new THREE.Vector3( 0.8, 0, 12 )
  );


var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
var material = new THREE.MeshLambertMaterial( { color: 0xffffff, opacity: 0.3,
  transparent: true} );
material.side = THREE.DoubleSide;
var lathe = new THREE.Mesh( geometry, material );
lathe.rotation.x=-Math.PI/2;
lathe.scale.set(0.015,0.015,0.015);
o1e.add( lathe );



var o1f=new THREE.Object3D();
o1.add(o1f);

o1f.scale.set(0.01,0.01,0.01);
o1f.position.set(0.2,0.04,0.30);


//provette sangue


var cylinderGeometry1 = new THREE.CylinderGeometry(1,1,8,80);
var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xffff00, opacity: 0.4,
  transparent: true});
var cylinder = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);   
o1f.add(cylinder);

      //sangue
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.9,0.9,6.5,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xff0077});
      var cylinder = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylinder.position.y=-0.5 ;
      o1f.add(cylinder);

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

      o1f.add( lathe );

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.5,0.5,1,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0x000000});
      var cylinder = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylinder.position.y=4.5;
      o1f.add(cylinder);


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
      o1f.add( lathe );

      var o1f2=o1f.clone();
      o1.add(o1f2);

      o1f2.position.set(0.27,0.01,0.24);
      o1f2.rotation.z=Math.PI/2
      
      o1.feature = this;
      o1.name = this.id;
      var model = Feature.packageModel(o1);

      return model;
    };

    module.exports = OggettiLab;