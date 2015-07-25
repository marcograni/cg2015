var Feature = require('./Feature.js');

Feature.inherits(Microscopio, Feature);

function Microscopio(feature) {
	Feature.call(this, feature);
}

Microscopio.prototype.style = {
  prefix: "fa",
  icon: "minus",
  zIndex: 3
};

Microscopio.prototype.in_graph = true;
Microscopio.prototype.in_2D_map = false;

Microscopio.prototype.get3DModel = function() {

	var o1=new THREE.Object3D();
  o1.rotation.x=Math.PI/2;

  var acciaio=THREE.ImageUtils.loadTexture("../../assets/textures/acciaio.jpg" )
  var optika=THREE.ImageUtils.loadTexture("../../assets/textures/optika.jpg" )

  //oculare

  var o1a=new THREE.Object3D();
  o1.add(o1a);
  o1a.position.y=0.8;
  o1a.rotation.z=-Math.PI/4;



      //oculari
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.025,0.025,0.07,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0xCCCCCC});
      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(0.015,0.35,0.07);
      o1a.add(cylin);

      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(0.015,0.35,-0.01);
      o1a.add(cylin);


      var cylinderGeometry1 = new THREE.CylinderGeometry(0.03,0.03,0.02,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(0.015,0.39,-0.01);
      o1a.add(cylin);

      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(0.015,0.39,0.07);
      o1a.add(cylin);


      var cylinderGeometry1 = new THREE.CylinderGeometry(0.03,0.03,0.03,80);
      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(0.015,0.35,-0.01);
      o1a.add(cylin);

      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(0.015,0.35,0.07);
      o1a.add(cylin);


      //lenti
      var curve = new THREE.SplineCurve3([
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 0.12, 0, 0.01 ),
        new THREE.Vector3( 0.15, 0, 0.02 ),
        new THREE.Vector3( 0.2, 0, 0.04 ),
        new THREE.Vector3( 0.23, 0, 0.04 )
        ]
        );


      var geometry = new THREE.LatheGeometry( curve.getPoints(10),200);
      var material = new THREE.MeshLambertMaterial( {color: 0x5555ff, opacity: 0.9,
        transparent: true} );
      material.side = THREE.DoubleSide;
      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.x=Math.PI/2;
      lathe.scale.set(0.05,0.05,0.05)
      lathe.position.set(0.015,0.405,-0.01)
      o1a.add( lathe );

      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.x=Math.PI/2;
      lathe.scale.set(0.05,0.05,0.05)
      lathe.position.set(0.015,0.405,0.07)
      o1a.add( lathe );


      //base oculari

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.06,0.06,0.04,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0xCCCCCC});
      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(0,0.301,0);
      cylin.rotation.y=-Math.PI/4;
      cylin.scale.set(0.6,1,1);
      o1a.add(cylin);

      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(0,0.3,0.06);
      cylin.rotation.y=Math.PI/4;
      cylin.scale.set(0.6,1,1);
      o1a.add(cylin);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.005,0.005,0.03,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(-0.02,0.31,0.03);
      o1a.add(cylin);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.03,0.03,0.03,80);
      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(0,0.28,0.03);
      o1a.add(cylin);

      //blocco centrale      

      var o2=new THREE.Object3D();
      o1.add(o2);
      o2.position.y=0.8;



      var cubeGeometryBase = new THREE.CubeGeometry(0.1,0.03,0.15);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0xCCCCCC});
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.rotation.z=Math.PI/4;
      cubo.position.set(0.14,0.17,0.03);
      o2.add(cubo);

      var cubeGeometryBase = new THREE.CubeGeometry(0.05,0.03,0.15);
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.rotation.z=Math.PI/4;
      cubo.position.set(0.175,0.17,0.03);
      o2.add(cubo);

      var cubeGeometryBase = new THREE.CubeGeometry(0.12,0.06,0.15);
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.position.set(0.145,0.147,0.03);
      o2.add(cubo);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.05,0.05,0.03,80);
      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(0.145,0.12,0.03);
      o2.add(cylin);

      var cubeGeometryBase = new THREE.CubeGeometry(0.12,0.02,0.10);
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.rotation.z=Math.PI/6;
      cubo.position.set(0.1,0.075,0.03);
      o2.add(cubo);

      var cubeGeometryBase = new THREE.CubeGeometry(0.12,0.02,0.10);
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.rotation.z=Math.PI/6;
      cubo.position.set(0.05,0.075,0.03);
      o2.add(cubo);

      var cubeGeometryBase = new THREE.CubeGeometry(0.12,0.02,0.10);
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.rotation.z=Math.PI/6;
      cubo.position.set(0.075,0.075,0.03);
      o2.add(cubo);

      var cubeGeometryBase = new THREE.CubeGeometry(0.08,0.02,0.10);
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.position.set(0.125,0.105,0.03);
      o2.add(cubo);

      var cubeGeometryBase = new THREE.CubeGeometry(0.08,0.02,0.10);
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.position.set(0.033,0.044,0.03);
      o2.add(cubo);

      var cubeGeometryBase = new THREE.CubeGeometry(0.08,0.25,0.10);
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.position.set(0.033,-0.08,0.03);
      o2.add(cubo);

      var cubeGeometryBase = new THREE.CubeGeometry(0.02,0.15,0.06);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0x000000  });
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.position.set(0.083,-0.13,0.03);
      o2.add(cubo);


      var cubeGeometryBase = new THREE.CubeGeometry(0.29,0.06,0.10);
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.position.set(0.133,-0.28,0.03);
      o2.add(cubo);

      var cubeGeometryBase = new THREE.CubeGeometry(0.08,0.24,0.099);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0xCCCCCC});
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.position.set(0.113,-0.24,0.03);
      cubo.rotation.z=Math.PI/2
      o2.add(cubo);

      var cubeGeometryBase = new THREE.CubeGeometry(0.03,0.08,0.099);
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.position.set(0.251,-0.24,0.03);
      cubo.rotation.z=Math.PI/4;
      o2.add(cubo);

      var cubeGeometryBase = new THREE.CubeGeometry(0.03,0.05,0.07);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:optika});
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.position.set(0.246,-0.233,0.03);
      cubo.rotation.z=Math.PI/4;
      o2.add(cubo);


      var cubeGeometryBase = new THREE.CubeGeometry(0.03,0.08,0.099);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0xCCCCCC});
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.position.set(0.231,-0.26,0.03);
      cubo.rotation.z=Math.PI/4;
      o2.add(cubo);

      var cubeGeometryBase = new THREE.CubeGeometry(0.03,0.05,0.101);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.position.set(0.275,-0.283,0.03);
      o2.add(cubo);

      //piedi posteriore

      var curve = new THREE.SplineCurve3([
        new THREE.Vector3( 0.15, 0, 0 ),
        new THREE.Vector3( 0.15, 0, 0.15 ),
        new THREE.Vector3( 0.05, 0, 0.3 ),
        ]
        );


      var geometry = new THREE.LatheGeometry( curve.getPoints(20),200);
      var material = new THREE.MeshLambertMaterial( { color:0x000000 } );
      material.side = THREE.DoubleSide;
      var lathe = new THREE.Mesh( geometry, material );
      lathe.scale.set(0.2,1,1);
      lathe.rotation.x=-Math.PI/2;
      lathe.position.set(0,-0.31,0.03);
      o2.add( lathe );


      //blocco lenti
      var geometry = new THREE.SphereGeometry( 0.05, 32, 32 );
      var material = new THREE.MeshLambertMaterial( {map:acciaio} );
      var sphere = new THREE.Mesh( geometry, material );
      sphere.position.set(0.15,0.11,0.03);
      o2.add( sphere );


      var torusMaterial = new THREE.MeshPhongMaterial( { color: 0x000000 } );
      var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.045, 0.005, 20, 100 ), torusMaterial );
      torus.rotation.x =  Math.PI/2;
      torus.rotation.y =  -Math.PI/6;
      torus.position.set(0.15,0.1,0.03); ;
      o2.add( torus ); 

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.01,0.03,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(0.16,0.05,0.03);
      o2.add(cylin);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.005,0.01,80);
      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(0.16,0.03,0.03);
      o2.add(cylin);


      var cylinderGeometry1 = new THREE.CylinderGeometry(0.008,0.008,0.03,80);
      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(0.14,0.06,0.05);
      cylin.rotation.z=-Math.PI/6;
      cylin.rotation.x=-Math.PI/10;
      o2.add(cylin);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.008,0.004,0.01,80);
      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(0.13,0.044,0.055  );
      cylin.rotation.z=-Math.PI/6;
      cylin.rotation.x=-Math.PI/10;
      o2.add(cylin);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.008,0.008,0.03,80);
      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(0.14,0.06,0.01);
      cylin.rotation.z=-Math.PI/6;
      cylin.rotation.x=Math.PI/10;
      o2.add(cylin);

      var cylinderGeometry1 = new THREE.CylinderGeometry(0.008,0.004,0.01,80);
      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(0.13,0.044,0.005);
      cylin.rotation.z=-Math.PI/6;
      cylin.rotation.x=Math.PI/10;
      o2.add(cylin);

      //base appoggio

      var cubeGeometryBase = new THREE.CubeGeometry(0.13,0.015,0.16);
      var cubeMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.position.set(0.15,-0.02,0.03);
      o2.add(cubo);

      var cubeGeometryBase = new THREE.CubeGeometry(0.01,0.01,0.18);
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.position.set(0.09,-0.02,0.03);
      o2.add(cubo);


      var cubeGeometryBase = new THREE.CubeGeometry(0.05,0.05,0.08);
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.position.set(0.12,-0.051,0.03);
      o2.add(cubo);


      //manopola
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.008,0.008,0.03,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(0.13,-0.051,-0.02);
      cylin.rotation.x=Math.PI/2;
      o2.add(cylin);


      var cylinderGeometry1 = new THREE.CylinderGeometry(0.02,0.02,0.03,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(0.13,-0.051,-0.04);
      cylin.rotation.x=Math.PI/2;
      o2.add(cylin);


      //regolatore altezza

      var cubeGeometryBase = new THREE.CubeGeometry(0.03,0.12,0.12);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.position.set(0.1,-0.078,0.03);
      o2.add(cubo);

      var cubeGeometryBase = new THREE.CubeGeometry(0.13,0.02,0.07);
      var cubeMaterial = new THREE.MeshLambertMaterial({map:acciaio});
      var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
      cubo.position.set(0.15,-0.19,0.03);
      o2.add(cubo);

      //luce sotto

      var torusMaterial = new THREE.MeshPhongMaterial( { color: 0x000000 } );
      var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.025, 0.005, 4, 100 ), torusMaterial );
      torus.position.set(0.16,-0.18,0.03); 
      torus.rotation.x=Math.PI/2;
      o2.add( torus ); 

      var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.025, 0.005, 4, 100 ), torusMaterial );
      torus.position.set(0.16,-0.17,0.03); 
      torus.rotation.x=Math.PI/2;
      o2.add( torus ); 


      var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.025, 0.005, 4, 100 ), torusMaterial );
      torus.position.set(0.16,-0.16,0.03); 
      torus.rotation.x=Math.PI/2;
      o2.add( torus ); 


      var torus = new THREE.Mesh(new THREE.TorusGeometry( 0.025, 0.005, 4, 100 ), torusMaterial );
      torus.position.set(0.16,-0.15,0.03); 
      torus.rotation.x=Math.PI/2;
      o2.add( torus ); 

      var curve = new THREE.SplineCurve3([
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 0.12, 0, 0.01 ),
        new THREE.Vector3( 0.15, 0, 0.02 ),
        new THREE.Vector3( 0.2, 0, 0.04 ),
        new THREE.Vector3( 0.23, 0., 0.04 )
        ]
        );


      var geometry = new THREE.LatheGeometry( curve.getPoints(10),200);
      var material = new THREE.MeshLambertMaterial( {color: 0x5555ff, opacity: 0.9,
        transparent: true} );
      material.side = THREE.DoubleSide;
      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.x=Math.PI/2;
      lathe.scale.set(0.1,0.1,0.1)
      lathe.position.set(0.16,-0.143,0.03)

      o2.add( lathe );


      //reggi-vetrino

      var curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 10, 0, 5 ),
        new THREE.Vector3( -1, 0, -1 ),    
        new THREE.Vector3( 1, 0, 6 )
        );


      var geometry = new THREE.LatheGeometry( curve.getPoints(20),200,0, Math.PI/1.5);
      var material = new THREE.MeshLambertMaterial( { map:acciaio} );
      material.side = THREE.DoubleSide;
      var lathe = new THREE.Mesh( geometry, material );
      lathe.rotation.x=Math.PI;
      lathe.rotation.z=-Math.PI/2;
      lathe.scale.set(0.0001,0.02,0.02)
      lathe.position.set(0.10,-0.009,0.1);
      o2.add( lathe );

      //perno
      var cylinderGeometry1 = new THREE.CylinderGeometry(0.003,0.003,0.03,80);
      var cylinderMaterial = new THREE.MeshLambertMaterial({color:0x000000});
      var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
      cylin.position.set(0.11,-0.023,0.08);
      o2.add(cylin);

        //vetrino

        var cubeGeometryBase = new THREE.CubeGeometry(0.03,0.001,0.08);
        var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, opacity: 0.3,
          transparent: true});
        var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
        cubo.position.set(0.17,-0.01,0.03);
        o2.add(cubo);

        var cylinderGeometry1 = new THREE.CylinderGeometry(0.01,0.01,0.0001,80);
        var cylinderMaterial = new THREE.MeshLambertMaterial({color: 0xff0000, opacity: 0.5,
          transparent: true});
        var cylin = new THREE.Mesh(cylinderGeometry1,cylinderMaterial);
        cylin.position.set(0.17,-0.012,0.03);
        o2.add(cylin);


        //pulsante
        var o3=new THREE.Object3D();
        o2.add(o3);
        o3.rotation.x=Math.PI;


        var cubeGeometryBase = new THREE.CubeGeometry(0.026,0.015,0.01);
        var cubeMaterial = new THREE.MeshLambertMaterial({color:0x000000});
        var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
        cubo.position.set(0.18,0.29,0.016);
        o3.add(cubo);

        var cubeGeometryBase = new THREE.CubeGeometry(0.02,0.01,0.009);
        var cubeMaterial = new THREE.MeshLambertMaterial({color:0xff0000, opacity: 0.8,
          transparent: true});
        var cubo = new THREE.Mesh(cubeGeometryBase,cubeMaterial);
        cubo.rotation.y=Math.PI/8;
        cubo.position.set(0.18,0.29,0.022);
        o3.add(cubo);

o1.feature = this;
o1.name = this.id;
var model = Feature.packageModel(o1);

return model;
};

module.exports = Microscopio;