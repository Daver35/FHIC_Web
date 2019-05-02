var red_marker, blue_marker, green_marker, yellow_marker;
var red_infowindow, blue_infowindow, green_infowindow, yellow_infowindow;
var map;

$(function () {
    
    function initMap() {

        var location = new google.maps.LatLng(41.386952, 2.1699290);

        var mapCanvas = document.getElementById('map');
        var mapOptions = {
            center: location,
            zoom: 16,
            panControl: false,
            scrollwheel: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        map = new google.maps.Map(mapCanvas, mapOptions);

        // Red marker -----------------

        red_marker = new google.maps.Marker({
            position: new google.maps.LatLng(41.3863738,2.1757399),
            map: map,
            icon: 'images/red_marker.png'
        });

        var red_contentString = '<div class="info-window">' +
                '<h3>Crear menjador social</h3>' +
                '<div class="info-content">' +
                '<p>Malauradament, són molts els ciutadans del barri de Ciutat Vella que no tenen uns ingressos regulars per tal de mantenir-se. Demano que es construeixi un menjador social en aquest edifici abandonat.</p>' +
                '</div>' +
                '</div>';

        red_infowindow = new google.maps.InfoWindow({
            content: red_contentString,
            maxWidth: 400
        });

		// Blue marker -----------------

	blue_marker = new google.maps.Marker({
            position: new google.maps.LatLng(41.3863337,2.1630204),
            map: map,
            icon: 'images/blue_marker.png'
        });

        var blue_contentString = '<div class="info-window">' +
                '<h3>Crear pàrquing patinets</h3>' +
                '<div class="info-content">' +
                '<p>El nombre de ciutadans que utilitzen el patinet (convencional o elèctric) com a mitjà de transport creix dia a dia, sobretot entre els estudiants. Per aquest motiu, davant la demanda existent crec necessari la creació d\'un pàrquing de patinets a dins la universitat.</p>' +
                '</div>' +
                '</div>';

        blue_infowindow = new google.maps.InfoWindow({
            content: blue_contentString,
            maxWidth: 400
        });

        blue_marker.addListener('click', function () {
            blue_infowindow.open(map, blue_marker);
        });

		// Yellow marker -----------------

        yellow_marker = new google.maps.Marker({
            position: new google.maps.LatLng(41.384035, 2.1656359),
            map: map,
            icon: 'images/yellow_marker.png'
        });

        var yellow_contentString = '<div class="info-window">' +
                '<h3>Reforma parc infantil</h3>' +
                '<div class="info-content">' +
                '<p>Realitzo aquesta petició amb l\'esparança d\'obtenir el suport dels veïns de Barcelona que han experimentat de manera directa o indirecta aquest problema. Sóc una mare de dos fills que de tant en tant decideix portar-los al parc després de l\'escola...</p>' +
                '</div>' +
                '</div>';

        yellow_infowindow = new google.maps.InfoWindow({
            content: yellow_contentString,
            maxWidth: 400
        });

		// Green marker -----------------

        green_marker = new google.maps.Marker({
            position: new google.maps.LatLng(41.3862477, 2.1701107),
            map: map,
            icon: 'images/green_marker.png'
        });

        var green_contentString = '<div class="info-window">' +
                '<h3>Control de plaga de coloms</h3>' +
                '<div class="info-content">' +
                '<p>És conegut per tothom i des de fa anys la quantitat de coloms que viuen a plaça Catalunya. Recentment, però, sembla que mica en mica s\'hagin anat reproduint i ha arribat a un punt que hi ha massa coloms. Aquests han passat a ser l\'atractiu turístic i característic de la plaça a ser una molèstia pels ciutadans i turistes. Cal que es realitzi un control de la població de coloms en aquesta plaça.</p>' +
                '</div>' +
                '</div>';

        green_infowindow = new google.maps.InfoWindow({
            content: green_contentString,
            maxWidth: 400
        });

        // Listeners markers

        red_marker.addListener('click', function () {
            red_infowindow.open(map, red_marker);
            blue_infowindow.close(map, blue_marker);
            yellow_infowindow.close(map, yellow_marker);
            green_infowindow.close(map, green_marker);
        });

        blue_marker.addListener('click', function () {
            red_infowindow.close(map, red_marker);
            blue_infowindow.open(map, blue_marker);
            yellow_infowindow.close(map, yellow_marker);
            green_infowindow.close(map, green_marker);
        });

        yellow_marker.addListener('click', function () {
            red_infowindow.close(map, red_marker);
            blue_infowindow.close(map, blue_marker);
            yellow_infowindow.open(map, yellow_marker);
            green_infowindow.close(map, green_marker);
        });

        green_marker.addListener('click', function () {
            red_infowindow.close(map, red_marker);
            blue_infowindow.close(map, blue_marker);
            yellow_infowindow.close(map, yellow_marker);
            green_infowindow.open(map, green_marker);
        });
	
    }

    google.maps.event.addDomListener(window, 'load', initMap);
    
    //cuando aprietas un botón se centra el amrcador correspondiente
	
    var medi_ambient  = document.getElementById("medi_ambient");
    var serveis = document.getElementById("serveis");
    var socials = document.getElementById("socials");
    var infraestructures = document.getElementById("infraestructures");

    serveis.addListener('click', function () {
            red_infowindow.open(map, red_marker);
            blue_infowindow.close(map, blue_marker);
            yellow_infowindow.close(map, yellow_marker);
            green_infowindow.close(map, green_marker);
        });

        serveis.addListener('click', function () {
            red_infowindow.close(map, red_marker);
            blue_infowindow.open(map, blue_marker);
            yellow_infowindow.close(map, yellow_marker);
            green_infowindow.close(map, green_marker);
        });

        socials.addListener('click', function () {
            red_infowindow.close(map, red_marker);
            blue_infowindow.close(map, blue_marker);
            yellow_infowindow.open(map, yellow_marker);
            green_infowindow.close(map, green_marker);
        });

        infraestructures.addListener('click', function () {
            red_infowindow.close(map, red_marker);
            blue_infowindow.close(map, blue_marker);
            yellow_infowindow.close(map, yellow_marker);
            green_infowindow.open(map, green_marker);
        });
});

var inicio = 0;
		
		function esconder() {
			document.getElementById("medi_ambient").style.display = "none";
			document.getElementById("serveis").style.display = "none";
			document.getElementById("socials").style.display = "none";
			document.getElementById("infraestructures").style.display = "none";
			
			document.getElementById("medi_ambient2").style.display = "block";
			document.getElementById("serveis2").style.display = "block";
			document.getElementById("socials2").style.display = "block";
			document.getElementById("infraestructures2").style.display = "block";
			inicio = 1;
		}
		
		function myFunction1() {
			var y = document.getElementById("medi_ambient2");
			var x = document.getElementById("medi_ambient");
			if(inicio == 0) {
				esconder();
				red_marker.setVisible(false);
				red_infowindow.close(map, red_marker);
				blue_marker.setVisible(false);
				blue_infowindow.close(map, blue_marker);
				yellow_marker.setVisible(false);
				yellow_infowindow.close(map, yellow_marker);
				
			}
			if (x.style.display === "none") {
				x.style.display = "block";
				y.style.display = "none";
				green_marker.setVisible(true);
			} else {
				x.style.display = "none";
				y.style.display = "block";
				green_marker.setVisible(false);
				green_infowindow.close(map, green_marker);
			}
		}

		function myFunction2() {
			var y = document.getElementById("serveis2");
			var x = document.getElementById("serveis");
			if(inicio == 0) {
				esconder();
				red_marker.setVisible(false);
				red_infowindow.close(map, red_marker);
				green_marker.setVisible(false);
				green_infowindow.close(map, green_marker);
				yellow_marker.setVisible(false);
				yellow_infowindow.close(map, yellow_marker);
			}
			if (x.style.display === "none") {
				x.style.display = "block";
				y.style.display = "none";
				blue_marker.setVisible(true);

			} else {
				x.style.display = "none";
				y.style.display = "block";
				blue_marker.setVisible(false);
				blue_infowindow.close(map, blue_marker);
			}
		}

		function myFunction3() {
			var y = document.getElementById("socials2");
			var x = document.getElementById("socials");
			if(inicio == 0) {
				esconder();
				green_marker.setVisible(false);
				green_infowindow.close(map, green_marker);
				blue_marker.setVisible(false);
				blue_infowindow.close(map, blue_marker);
				yellow_marker.setVisible(false);
				yellow_infowindow.close(map, yellow_marker);
			}
			if (x.style.display === "none") {
				x.style.display = "block";
				y.style.display = "none";
				red_marker.setVisible(true);
			} else {
				x.style.display = "none";
				y.style.display = "block";
				red_marker.setVisible(false);
				red_infowindow.close(map, red_marker);
			}
		}

		function myFunction4() {
			var x = document.getElementById("infraestructures");
			var y = document.getElementById("infraestructures2");
			if(inicio == 0) {
				esconder();
				red_marker.setVisible(false);
				red_infowindow.close(map, red_marker);
				blue_marker.setVisible(false);
				blue_infowindow.close(map, blue_marker);
				green_marker.setVisible(false);
				green_infowindow.close(map, green_marker);
			}
			if (x.style.display === "none") {
				y.style.display = "none";
				x.style.display = "block";
				yellow_marker.setVisible(true);
				
			} else {
				x.style.display = "none";
				y.style.display = "block";
				yellow_marker.setVisible(false);
				yellow_infowindow.close(map, yellow_marker);
			}
		}