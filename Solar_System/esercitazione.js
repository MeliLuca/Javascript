window.onload = function(){

	var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 1, 500);
	camera.position.y = 15;
	camera.position.z = 70;

  	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	// SFONDO
	var geometry_sfondo = new THREE.PlaneGeometry(5 ,5 ,0);
	var material_sfondo = new THREE.MeshBasicMaterial({
		map: new THREE.TextureLoader().load('2k_stars_milky_way.jpg')
	});
	var sfondo = new THREE.Mesh(geometry_sfondo, material_sfondo);
	sfondo.material.depthTest = false;
	sfondo.material.depthWrite = false;

	// scena di background
	var backgroundScene = new THREE.Scene();
	var backgroundCamera = new THREE.Camera();
	backgroundScene.add(backgroundCamera);
	backgroundScene.add(sfondo);

	// LUCE
	var galaxy_light = new THREE.AmbientLight( 0xffffff,0.3);
    var solar_light = new THREE.PointLight( 0xffffff, 1.3 ); 
    solar_light.position.set(0, 0, 0).normalize(); 
	
    // SOLE
	var geometry_Sun = new THREE.SphereGeometry(7 ,32, 32 );
	var material_Sun = new THREE.MeshBasicMaterial( { 
		map: new THREE.TextureLoader().load('2k_sun.jpg')
	});
	var sun = new THREE.Mesh( geometry_Sun, material_Sun );	
	sun.matrixAutoUpdate = false; 

	// MARTE
	var geometry_Mars = new THREE.SphereGeometry( 0.7, 32, 32 );
	var material_Mars = new THREE.MeshLambertMaterial({
		 map: new THREE.TextureLoader().load('2k_mars.jpg') 
	});
    var mars = new THREE.Mesh( geometry_Mars, material_Mars );	 
	mars.matrixAutoUpdate = false;

	// TERRA
	var geometry_Earth = new THREE.SphereGeometry( 1.2 , 32, 32 );
	var material_Earth = new THREE.MeshLambertMaterial({
		map: new THREE.TextureLoader().load('2k_earth_daymap.jpg')
	});
	var earth = new THREE.Mesh( geometry_Earth, material_Earth );	 
	earth.matrixAutoUpdate = false;

	// LUNA
	var geometry_Moon = new THREE.SphereGeometry( 0.3 , 32, 32 );
	var material_Moon = new THREE.MeshLambertMaterial({
		map: new THREE.TextureLoader().load('2k_moon.jpg')
	});
    var moon = new THREE.Mesh( geometry_Moon, material_Moon );	 
	moon.matrixAutoUpdate = false;
	earth.add(moon);

	// SATURNO
	var geometry_Saturn = new THREE.SphereGeometry(1.8 , 32, 32 );
	var material_Saturn = new THREE.MeshLambertMaterial({
		map: new THREE.TextureLoader().load('2k_saturn.jpg')
	});
	var saturn = new THREE.Mesh( geometry_Saturn, material_Saturn );	 
	saturn.matrixAutoUpdate = false;

	// ANELLI di SATURNO
	var geometry_Ring = new THREE.RingGeometry(3.7, 2.4, 32, 32 );
	var material_Ring = new THREE.MeshBasicMaterial({
		map: new THREE.TextureLoader().load('2k_ceres_fictional.jpg'),
		side: THREE.DoubleSide
	});
	var ring = new THREE.Mesh( geometry_Ring, material_Ring );
	ring.matrixAutoUpdate = false;
	saturn.add(ring);

	// GIOVE
	var geometry_Jupiter = new THREE.SphereGeometry(2.7 , 32, 32 );
	var material_Jupiter = new THREE.MeshLambertMaterial({
		map: new THREE.TextureLoader().load('2k_jupiter.jpg')
	});
	var jupiter = new THREE.Mesh( geometry_Jupiter, material_Jupiter );	 
	jupiter.matrixAutoUpdate = false;

	// SATELLITE GIOVE
	var geometry_Sat = new THREE.SphereGeometry( 0.5 , 32, 32 );
	var material_Sat = new THREE.MeshLambertMaterial({
		map: new THREE.TextureLoader().load('2k_haumea_fictional.jpg')
	});
    var sat = new THREE.Mesh( geometry_Sat, material_Sat );	 
	sat.matrixAutoUpdate= false;
	jupiter.add(sat);

	// aggiungiamo alla scena
	scene.add( galaxy_light);
	scene.add(solar_light);
	
	sun.add(mars);
	sun.add(earth);
	sun.add(saturn);
	sun.add(jupiter);

	scene.add(sun);

	// animazione

    var render =function() {
		
		var now = new Date();		
		render.time= now;
		
		// ruotiamo i pianeti 

		// ROTAZIONE SOLE
		var sun_rot = new THREE.Matrix4().makeRotationY(-0.0001* now);
		sun.matrix = sun_rot.multiply(sun_rot);	

		// ROTAZIONE MARTE
		var rot_mars = new THREE.Matrix4().makeRotationY(-0.002* render.time); 
        var tras_mars = new THREE.Matrix4().makeTranslation(17, 0, 0);
        mars.matrix = rot_mars.multiply(tras_mars.multiply(rot_mars)); 
		
		// ROTAZIONE TERRA
		var earth_speed= -0.001;
		var rot_earth = new THREE.Matrix4().makeRotationY(earth_speed* render.time); 
        var tras_earth = new THREE.Matrix4().makeTranslation(23, 0, 0);
        earth.matrix = rot_earth.multiply(tras_earth.multiply(rot_earth));  
		
		// ROTAZIONE LUNA
		var rot_moon = new THREE.Matrix4().makeRotationY(earth_speed* render.time); 
        var tras_moon = new THREE.Matrix4().makeTranslation(3, 0, 0);
		moon.matrix = rot_moon.multiply(tras_moon.multiply(rot_moon));  
		
		// ROTAZIONE SATURNO
		var saturn_speed= -0.0006;
		var rot_saturn = new THREE.Matrix4().makeRotationY(saturn_speed* render.time); 
        var tras_saturn = new THREE.Matrix4().makeTranslation(33, 0, 0);
		saturn.matrix = rot_saturn.multiply(tras_saturn.multiply(rot_saturn));

		// ROTAZIONE ANELLI DI SATURNO
		var rot_ring = new THREE.Matrix4().makeRotationY(saturn_speed * render.time); 
		var tras_ring = new THREE.Matrix4().makeTranslation(0, 0, 0);
		ring.matrix = rot_ring.multiply(tras_ring.multiply(rot_ring));
		ring.matrix.makeRotationX(1.55);
		
		// ROTAZIONE GIOVE
		var speed_jupiter= -0.0004;
		var rot_jupiter = new THREE.Matrix4().makeRotationY(speed_jupiter *render.time); 
        var rot_sat = new THREE.Matrix4().makeRotationY(-0.0003*render.time); 
        var tras_jupiter = new THREE.Matrix4().makeTranslation(43, 0, 0);
		jupiter.matrix = rot_jupiter.multiply(tras_jupiter.multiply(rot_sat));
		
		// ROTAZIONE SATELLITE GIOVE
		var rot_sat = new THREE.Matrix4().makeRotationY(speed_jupiter *render.time); 
        var tras_sat = new THREE.Matrix4().makeTranslation(4, 0, 0);
		sat.matrix = rot_sat.multiply(tras_sat.multiply(rot_sat));

		renderer.autoClear = false;
		renderer.clear();
		renderer.render(backgroundScene , backgroundCamera );
		renderer.render( scene, camera );
		requestAnimationFrame( render );
	}

	window.addEventListener('resize',function(){
        var width=window.innerWidth;
        var heigth=window.innerHeight;
        renderer.setSize(width,heigth);
        camera.aspect=width/heigth;
        camera.updateProjectionMatrix ();
	});
	render();
}