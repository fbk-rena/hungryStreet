var cargarPagina = function () {
    $('select').material_select();
	$("#search-form").submit(filtrarRestaurantes);
    mostrarRestaurantes(restaurantes);  
}; 

var obtenerUbicacion = function (e) {
     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(mostrarPosicion);
     } else {
         alert("Actualice su navegador");
     }
 };

 var mostrarPosicion = function (posicion) {
     var coordenadas = {
         lat: posicion.coords.latitude,
         lng: posicion.coords.longitude
     };
     mostrarMapa(coordenadas);
 };

 var mostrarMapa = function (coordenadas) {
     var mapa = new google.maps.Map($('#map')[0], {
         zoom: 15,
         center: coordenadas
     });
     var marker = new google.maps.Marker({
         position: coordenadas,
         map: mapa
     });
 }

 /*var restaurantes = function restaurante(nombre, foto, tipo, direccion, coordenadas) {
     this.titulo = nombre;
     this.img = foto;
     this.kind = tipo;
     this.ubicacion = direccion;
     this.coords = coordenadas; 
 };

 var bobaBar = new restaurante("Boba Fusion Tea Bar", "assetes/bobatea.jpg", "cafesito", "Dirección: Alvaro Obregón 233 C, Roma Norte, 06700 México, CDMX", {"lat":"19.417444" ,"lng": "-99.166161"} );

 var jetsons = new restaurante("Jetsons", "assetes/Jetsons-2.jpg", "comida", "Dirección: Av. Álvaro Obregón 291, Roma Nte., 06700 Ciudad de México, CDMX", {"lat":"19.417060" ,"lng": "-99.168371"} );

 var papa = new restaurante("Papa Guapa", "assetes/papaGuapa.jpg", "comida", "Dirección: Calle Orizaba 4, Local B, Cuauhtémoc, Roma Norte, 06700 Ciudad de México, CDMX", {"lat":"19.419234" ,"lng": "-99.166927"} );

 var perro = new restaurante("Pizzas del Perro Negro", "assetes/perro.jpg", "comida", "Dirección: Parque España 3, Roma Nte., 06700 Ciudad de México, CDMX", {"lat":"19.416727" ,"lng": "-99.169671"} );

 var suiza = new restaurante("Pasteleria Suiza", "assetes/suiza.jpg", "comida", "Dirección: Parque España 7, Condesa, 06140 Ciudad de México, CDMX ", {"lat":"19.416637" ,"lng": "-99.170024"} );*/
 var restaurantes = [
         {
             "titulo": "Boba Fusion Tea Bar",
             "kind": "cafesito",
              "value": "2",
             "img": "assetes/bobatea.jpg",
             "ubicacion": "Dirección: Alvaro Obregón 233 C, Roma Norte, 06700 México, CDMX",
             "coordenadas": {
                 "lat": "19.417444",
                 "lng": "-99.166161"
             }
	},
         {
             "titulo": "Jetsons",
             "kind": "comida",
              "value": "1",
             "img": "assetes/Jetsons-2.jpg",
             "ubicacion": "Dirección: Av. Álvaro Obregón 291, Roma Nte., 06700 Ciudad de México, CDMX",
             "coordenadas": {
                 "lat": "19.417060",
                 "lng": "-99.168371"
             }
	},
         {
             "titulo": "Papa Guapa",
             "kind": "comida",
              "value": "1",
             "img": "assetes/papaGuapa.jpg",
             "ubicacion": "Dirección: Calle Orizaba 4, Local B, Cuauhtémoc, Roma Norte, 06700 Ciudad de México, CDMX",
             "coordenadas": {
                 "lat": "19.419234",
                 "lng": "-99.166927"
             }
	},
         {
             "titulo": "Pizzas del Perro Negro",
             "kind": "comida",
              "value": "1",
             "img": "assetes/perro.jpg",
             "ubicacion": "Calle Orizaba 4, Local B, Cuauhtémoc, Roma Norte, 06700 Ciudad de México, CDMX",
             "coordenadas": {
                 "lat": "19.416512",
                 "lng": "-99.169656"
             }
	},
         {
             "titulo": "Pasteleria Suiza",
             "kind": "cafesito",
             "value": "2",
             "img": "assetes/suiza.jpg",
             "ubicacion": "Dirección: Parque España 7, Condesa, 06140 Ciudad de México, CDMX ",
             "coordenadas": {
                 "lat": "19.416637",
                 "lng": "-99.170024"
             }
	}
     
];
var plantillaRestaurantes =
             " <div class='col s12 m6'>" +
             "<h2 class='header' value= '__value__'>__titulo__</h2>" +
             "<div class='card horizontal'>" +
             "<div>" +
             "<img src='__img__' alt='Contact' class='fotoRestaurante responsive-img'>" +
             "</div>" +
             "<div class='card-stacked'>" +
             "<div class='card-content'>" +
             "<h4>__kind__</h4>" +
             "<p>__ubicacion__</p>" +
             "</div" +
             "</div>" +
             "</div>" +
             "</div>";

var mostrarRestaurantes = function (restaurantes) {
             var restauranteMostrar = "";
             restaurantes.forEach(function (restaurante) {
                 plantillaFinal += plantillaRestaurantes.replace("__titulo__", restaurante.titulo)
                    .replace("__kind__", restaurante.kind)
                    .replace("__value__", restaurante.value)
                    .replace("__img__", restaurante.img)
                    .replace("__ubicacion__", restaurante.ubicacion);
             });
             $("#restaurantes").html(restauranteMostrar);
         };



var filtrarRestaurantes = function (e) {
	e.preventDefault();
	var busqueda = $("#search").val().toLowerCase();
	var nombreFiltrado = restaurantes.filter(function (restaurante) {
		return restaurante.nombre.toLowerCase().indexOf(busqueda) >= 0;
	});
    mostrarRestaurantes(nombreFiltrado);
};

$(document).ready(cargarPagina);
