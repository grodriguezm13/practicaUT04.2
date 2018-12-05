//Funcion de testeo con todas las posibilidades
function testVideo(){
    //Se crea un objeto person
	try {
		var persona1 = new Person("Guillermo","Rodriguez",new Date(1993,10,25),"Moraga");
		console.log("Objeto Person: " + persona1.toString());
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	console.log("-----------------------------------------------");
    //Se crea un objeto category
	try {
		var category = new Category("Comedia");
		console.log("Objeto Category: " + category.toString());
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	console.log("-----------------------------------------------");
    //Se crea un objeto resource
	try {
		var resource1 = new Resource(180,"Ruta",["Español","Ingles"]);
		console.log("Objeto Resource: " + resource1.toString());
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	console.log("-----------------------------------------------");
    //Se crea un objeto Production
	try {
		var production = new Production("Vengadores",new Date(2012,05,05));
		console.log("Objeto production: " + production.toString());
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	console.log("-----------------------------------------------");
    //Se crea un objeto Coordinate
	try {
		var coor = new Coordinate(123,124);
		console.log("Objeto Coordinate: " + coor.toString());
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	console.log("-----------------------------------------------");
    //Se crea un objeto Movie
    try {
        var movie = new Movie("Vengadores",new Date(2012,05,05),resource1,coor);
        console.log("Objeto Movie: " + movie.toString());
    } catch (error) {
        console.log("Ha fallado: " + error);
	}
	console.log("-----------------------------------------------");
	//Se crea un objeto User
	try {
		var user = new User("pepe","pepe@yo.com","pepe");
		console.log("Objeto User: " + user.toString());
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	console.log("-----------------------------------------------");
	//Se crea un objeto Season
	try {
		var season1 = new Season("Temporada 1");
		console.log("Objeto Season: " + season1.toString());
		console.log("-----------------------------------------------");
		var serie = new Serie(season1);
		console.log("Objeto Serie: " + serie.toString());
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	console.log("-----------------------------------------------");
	//Se crea el objeto VideoSystem y se le añade el nombre 
	try {
		var video = VideoSystem.getInstance();
		video.name = "GUIROMO CHANNEL";
		console.log("Nombre del VideoSystem: " + video.name);
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	console.log("-----------------------------------------------");
	//Añadimos una categoria 
	try {
		console.log("Añadimos la categoria anterior: " + video.addCategory(category));
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	//Añadimos una categoria 
	try {
		var category1 = new Category("Accion","Explosiones y esas cosas");
		console.log("Añadimos otra categoria: " + video.addCategory(category1));
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos las categorias que hay
	console.log("Mostramos las categorias");
	var categorias = video.categories;
	var categoria = categorias.next();
	while (categoria.done !== true){
		console.log ("" + categoria.value);
		categoria = categorias.next();
	}
	console.log("-----------------------------------------------");
	//Añadimos una categoria 
	try {
		console.log("Volvemos a añadir la categoria Comedia: " + video.addCategory(category));
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	console.log("-----------------------------------------------");
	//Añadimos una categoria 
	try {
		console.log("Eliminamos la categoria Accion: " + video.removeCategory(category1));
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos las categorias que hay
	console.log("Mostramos las categorias");
	var categorias = video.categories;
	var categoria = categorias.next();
	while (categoria.done !== true){
		console.log ("" + categoria.value);
		categoria = categorias.next();
	}
	console.log("-----------------------------------------------");
	//Añadimos un usuario
	try {
		console.log("Añadimos un usuario: " + video.addUser(user));
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	//Añadimos una categoria 
	try {
		var user1 = new User("pepe","pepe@yo.com","pepe");
		console.log("Añadimos otro usuario: " + video.addUser(user1));
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos las categorias que hay
	console.log("Mostramos los usuarios");
	var usuarios = video.users;
	var usuario = usuarios.next();
	while (usuario.done !== true){
		console.log ("" + usuario.value);
		usuario = usuarios.next();
	}
	console.log("-----------------------------------------------");
	//Borramos el usuario 
	try {
		console.log("Eliminamos el usuario: " + video.removeUser(user));
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos las categorias que hay
	console.log("Mostramos los usuarios");
	var usuarios = video.users;
	var usuario = usuarios.next();
	while (usuario.done !== true){
		console.log ("" + usuario.value);
		usuario = usuarios.next();
	}
	console.log("-----------------------------------------------");
	//Añadimos una produccion
	try {
		console.log("Añadimos una produccion: " + video.addProduction(serie));
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos las producciones que hay
	console.log("Mostramos las producciones");
	var producciones = video.productions;
	var produccion = producciones.next();
	while (produccion.done !== true){
		console.log ("" + produccion.value);
		produccion = producciones.next();
	}
	console.log("-----------------------------------------------");
	//Borramos una produccion 
	try {
		console.log("Eliminamos la produccion: " + video.removeProduction(serie));
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos las producciones que hay
	console.log("Mostramos las producciones");
	var producciones = video.productions;
	var produccion = producciones.next();
	while (produccion.done !== true){
		console.log ("" + produccion.value);
		produccion = producciones.next();
	}
	console.log("-----------------------------------------------");
	//Añadimos un actor
	try {
		console.log("Añadimos un actor: " + video.addActor(persona1));
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos los actores que hay
	console.log("Mostramos los actores");
	var actores = video.actors;
	var actor = actores.next();
	while (actor.done !== true){
		console.log ("" + actor.value);
		actor = actores.next();
	}
	console.log("-----------------------------------------------");
	//Borramos un actor :(
	try {
		console.log("Eliminamos al actor: " + video.removeActor(persona1));
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos los actores que hay
	console.log("Mostramos los actores");
	var actores = video.actors;
	var actor = actores.next();
	while (actor.done !== true){
		console.log ("" + actor.value);
		actor = actores.next();
	}
	console.log("-----------------------------------------------");

}//Fin de testVideo

window.onload = testVideo;