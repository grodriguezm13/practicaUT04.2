//Funcion de testeo con todas las posibilidades
function testVideo(){
	/* INICIO DE LA CREACION DE OBJETOS */ 
	//Se crean los objetos person
	console.log("-----------------------------------------------");
	try {
		var persona = new Person("Guillermo","Rodriguez",new Date(1993,09,25),"Moraga");
		var persona1 = new Person("Barry","Allen",new Date(1993,05,15));
		var persona2 = new Person("Marco","Mendez",new Date(1993,10,25),"Moraga","c://imagenes/usuario213123.jpg");
		var persona3 = new Person("Ramon","Diaz",new Date(1945,01,25));
		var persona4 = new Person("Manolo","Leon",new Date(1997,01,25));
		console.log("Objetos Person: ");
		console.log(persona.toString());
		console.log(persona1.toString());
		console.log(persona2.toString());
		console.log(persona3.toString());
		console.log(persona4.toString());
	} catch (error) {
		console.log(error);
	}
	//Se crea un objeto person mal
	console.log("-----------------------------------------------");
	try {
		var persona4 = new Person("Prueba");
		console.log(persona4.toString());
	} catch (error) {
		console.log("Objetos Person con fallos: ");
		console.log("" + error);
	}
	console.log("-----------------------------------------------");
    //Se crean los objetos category
	try {
		var category = new Category("Comedia");
		var category1 = new Category("Romance","Las pasteladas");
		var category2 = new Category("Terror", "Sustos y mas sustos");
		var category3 = new Category("Accion");
		console.log("Objeto Category: ");
		console.log(category.toString());
		console.log(category1.toString());
		console.log(category2.toString());
		console.log(category3.toString());
	} catch (error) {
		console.log("" + error);
	}
	console.log("-----------------------------------------------");
    //Se crean un objetos category mal
	try {
		var category4 = new Category();
		console.log(category4.toString());
	} catch (error) {
		console.log("Objetos Category con fallos: ");
		console.log("" + error);
	}
	console.log("-----------------------------------------------");
    //Se crean objetos resource
	try {
		var resource = new Resource(180,"http://www.guiromo.es/resource",["Español","Ingles"],["Chino","Japones"]);
		var resource1 = new Resource(120,"http://www.guiromo.es/resource1");
		var resource2 = new Resource(23,"http://www.guiromo.es/resource2",["Español","Ingles"],["Ruso","Ingles"]);
		console.log("Objeto Resource:");
		console.log(resource.toString());
		console.log(resource1.toString());
		console.log(resource2.toString());
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	console.log("-----------------------------------------------");
	//Se crea un objeto resource mal
	try {
		var resource3 = new Resource(180,"ruta del recurso");
		console.log(resource3.toString());
	} catch (error) {
		console.log("Objeto Resource mal: ");
		console.log("" + error);
	}
	console.log("-----------------------------------------------");
    //Se crea un objeto Production
	try {
		var production = new Production("Vengadores",new Date(2012,05,05));
		console.log(production.toString());
	} catch (error) {
		console.log("Objeto production: ");
		console.log("" + error);
	}
	console.log("-----------------------------------------------");
    //Se crea un objeto Coordinate
	try {
		var coor = new Coordinate(123,124);
		console.log("Objeto Coordinate: ");
		console.log(coor.toString());
	} catch (error) {
		console.log("" + error);
	}
	console.log("-----------------------------------------------");
    //Se crean objetos Movie
    try {
		var movie = new Movie("Vengadores",new Date(2012,05,05),"Americana","Superheroes y explosiones",null,resource,coor);
		var movie1 = new Movie("Aterriza como puedas",new Date(1980,05,05),"Americana",null,null,resource1,coor);
		var movie2 = new Movie("Las aventuras de Rita",new Date(1999,12,05),"Rusa",null,null,resource2);
		console.log("Objeto Movie: ");
		console.log(movie.toString());
		console.log(movie1.toString());
		console.log(movie2.toString());
    } catch (error) {
        console.log("" + error);
	}
	console.log("-----------------------------------------------");
	//Se crea un objeto Movie
    try {
		var movie3 = new Movie();
		console.log(movie3.toString());
    } catch (error) {
		console.log("Objeto Movie mal: ");
        console.log("" + error);
	}
	console.log("-----------------------------------------------");
	//Se crean objetos User
	try {
		var user = new User("pepe","pepe@yo.com","pepe");
		var user1 = new User("ramon","ramon@yo.com","milady");
		var user2 = new User("guillermo","guillermo@yo.com","guillermo");
		console.log("Objeto User: ");
		console.log(user.toString());
		console.log(user1.toString());
		console.log(user2.toString());
	} catch (error) {
		console.log("" + error);
	}
	console.log("-----------------------------------------------");
	//Se crea un objeto User mal
	try {
		var user3 = new User("pepe","sdfsdfsdfsdf.","pepe");
		console.log(user3.toString());
	} catch (error) {
		console.log("Objeto User mal: ");
		console.log("" + error);
	}
	console.log("-----------------------------------------------");
	//Se crean los objetos Season
	try {
		var season = new Season("Temporada 1",["Episodio 1","Episodio 2"]);
		var season1 = new Season("Temporada 2",["Episodio 1","Episodio 2","Episodio 3"]);
		var season2 = new Season("Temporada 3");
		console.log("Objeto Season: ");
		console.log(season.toString());
		console.log(season1.toString());
		console.log(season2.toString());
	} catch (error) {
		console.log("" + error);
	}
	console.log("-----------------------------------------------");
	//Se crea un objeto Season mal
	try {
		var season3 = new Season();
		console.log(season3.toString());
	} catch (error) {
		console.log("Objeto Season mal: ");
		console.log("" + error);
	}
	console.log("-----------------------------------------------");
	//Se crean los objetos Serie
	try {
		var serie = new Serie("El Mago Invisible visible","Francesa",new Date(2010,05,05),"Un mago se cree invisible pero no lo es","http://www.guiromo.es/resource6",[season,season1]);
		var serie1 = new Serie("Juego de Gnomos","Americana",new Date(2016,05,05),"Movidas raras","http://www.guiromo.es/resource21",[season,season1,season2]);
		console.log("Objeto Serie: ");
		console.log(serie.toString());
		console.log(serie1.toString());
	} catch (error) {
		console.log("" + error);
	}
	console.log("-----------------------------------------------");

	/* FIN DE LA CREACION DE OBJETOS */
	/* INICIO DE LAS FUNCIONES DE VIDEOSYSTEM */

	//Se crea el objeto VideoSystem y se le añade el nombre 
	try {
		var video = VideoSystem.getInstance();
		video.name = "GUIROMO CHANNEL";
		console.log("#######################################");
		console.log("Nombre del VideoSystem: " + video.name);
		console.log("#######################################");
	} catch (error) {
		console.log("" + error);
	}
	console.log("-----------------------------------------------");
	//Añadimos las categorias 
	try {
		console.log("Añadimos la categoria "+ category.name +": " + video.addCategory(category));
		console.log("Añadimos la categoria "+ category1.name +": " + video.addCategory(category1));
		console.log("Añadimos la categoria "+ category2.name +": " + video.addCategory(category2));
		console.log("Añadimos la categoria "+ category3.name +": " + video.addCategory(category3));
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos una categoria 
	try {
		console.log("Añadimos la categoria "+ category.name +": " + video.addCategory(category));
	} catch (error) {
		console.log("Se ha intentado añadir de nuevo "+ category.name +": "+ error);
	}
	console.log("-----------------------------------------------");
	//Mostramos las categorias que hay
	console.log("#### Mostramos las categorias ####");
	var categorias = video.categories;
	var categoria = categorias.next();
	while (categoria.done !== true){
		console.log ("" + categoria.value);
		categoria = categorias.next();
	}
	console.log("-----------------------------------------------");
	//Eliminamos una categoria 
	try {
		console.log("Eliminamos la categoria "+ category1.name +": " + video.removeCategory(category1));
	} catch (error) {
		console.log("" + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos las categorias que hay
	console.log("#### Mostramos las categorias ####");
	var categorias = video.categories;
	var categoria = categorias.next();
	while (categoria.done !== true){
		console.log ("" + categoria.value);
		categoria = categorias.next();
	}
	console.log("-----------------------------------------------");
	//Añadimos los usuarios
	try {
		console.log("Añadimos el usuario "+ user.userName + ": " + video.addUser(user));
		console.log("Añadimos el usuario "+ user1.userName + ": " + video.addUser(user1));
		console.log("Añadimos el usuario "+ user2.userName + ": " + video.addUser(user2));
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos de nuevo un usuario
	try {
		console.log("Añadimos el usuario "+ user1.userName + ": " + video.addUser(user1));
	} catch (error) {
		console.log("Se ha intentado añadir de nuevo al usuario "+ user1.userName +": "+ error);
	}
	console.log("-----------------------------------------------");
	//Mostramos los usuarios que hay
	console.log("#### Mostramos los usuarios ####");
	var usuarios = video.users;
	var usuario = usuarios.next();
	while (usuario.done !== true){
		console.log ("" + usuario.value);
		usuario = usuarios.next();
	}
	console.log("-----------------------------------------------");
	//Borramos el usuario 
	try {
		console.log("Eliminamos el usuario "+ user.name + ": " + video.removeUser(user));
	} catch (error) {
		console.log("" + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos los usuarios que hay
	console.log("#### Mostramos los usuarios ####");
	var usuarios = video.users;
	var usuario = usuarios.next();
	while (usuario.done !== true){
		console.log ("" + usuario.value);
		usuario = usuarios.next();
	}
	console.log("-----------------------------------------------");
	//Añadimos las producciones
	try {
		console.log("Añadimos la produccion "+ movie.title +": " + video.addProduction(movie));
		console.log("Añadimos la produccion "+ movie1.title +": " + video.addProduction(movie1));
		console.log("Añadimos la produccion "+ movie2.title +": " + video.addProduction(movie2));
		console.log("Añadimos la produccion "+ serie.title +": " + video.addProduction(serie));
		console.log("Añadimos la produccion "+ serie1.title +": " + video.addProduction(serie1));
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos de nuevo una produccion
	try {
		console.log("Añadimos la produccion "+ movie1.title +": " + video.addProduction(movie1));
	} catch (error) {
		console.log("Se ha intentado añadir de nuevo la produccion "+ movie1.title +": "+ error);
	}
	console.log("-----------------------------------------------");
	//Mostramos las producciones que hay
	console.log("#### Mostramos las producciones ####");
	var producciones = video.productions;
	var produccion = producciones.next();
	while (produccion.done !== true){
		console.log ("" + produccion.value);
		produccion = producciones.next();
	}
	console.log("-----------------------------------------------");
	//Borramos una produccion 
	try {
		console.log("Eliminamos la produccion "+ serie.title +": " + video.removeProduction(serie));
	} catch (error) {
		console.log("" + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos las producciones que hay
	console.log("#### Mostramos las producciones ####");
	var producciones = video.productions;
	var produccion = producciones.next();
	while (produccion.done !== true){
		console.log ("" + produccion.value);
		produccion = producciones.next();
	}
	console.log("-----------------------------------------------");
	//Añadimos los actores
	try {
		console.log("Añadimos al actor "+ persona.name +": " + video.addActor(persona));
		console.log("Añadimos al actor "+ persona1.name +": " + video.addActor(persona1));
		console.log("Añadimos al actor "+ persona4.name +": " + video.addActor(persona4));
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos de nuevo un actor
	try {
		console.log("Añadimos al actor "+ persona.name +": " + video.addActor(persona));
	} catch (error) {
		console.log("Se ha intentado añadir de nuevo al actor "+ persona.name +": " + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos los actores que hay
	console.log("#### Mostramos los actores ####");
	var actores = video.actors;
	var actor = actores.next();
	while (actor.done !== true){
		console.log ("" + actor.value);
		actor = actores.next();
	}
	console.log("-----------------------------------------------");
	//Borramos un actor :(
	try {
		console.log("Eliminamos al actor "+ persona1.name +": " + video.removeActor(persona1));
	} catch (error) {
		console.log("" + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos los actores que hay
	console.log("#### Mostramos los actores ####");
	var actores = video.actors;
	var actor = actores.next();
	while (actor.done !== true){
		console.log ("" + actor.value);
		actor = actores.next();
	}
	console.log("-----------------------------------------------");
	//Añadimos un director
	try {
		console.log("Añadimos al director " + persona2.name + ": " + video.addDirector(persona2));
		console.log("Añadimos al director " + persona3.name + ": " + video.addDirector(persona3));
	} catch (error) {
		console.log("" + error);
	}
	//Añadimos de nuevo un director
	try {
		console.log("Añadimos al director " + persona2.name + ": " + video.addDirector(persona2));
	} catch (error) {
		console.log("Se ha intentado añadir de nuevo al director "+ persona2.name +": " + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos los directores que hay
	console.log("#### Mostramos los directores ####");
	var directores = video.directors;
	var director = directores.next();
	while (director.done !== true){
		console.log ("" + director.value);
		director = directores.next();
	}
	console.log("-----------------------------------------------");
	//Borramos un director :(
	try {
		console.log("Eliminamos al director "+ persona1.name +": " + video.removeDirector(persona1));
	} catch (error) {
		console.log("Intenamos borrar al director " + persona1.name + ": " + error);
	}
	console.log("-----------------------------------------------");
	//Borramos un director :(
	try {
		console.log("Eliminamos al director "+ persona2.name +": " + video.removeDirector(persona2));
	} catch (error) {
		console.log("" + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos los directores que hay
	console.log("#### Mostramos los directores ####");
	var directores = video.directors;
	var director = directores.next();
	while (director.done !== true){
		console.log ("" + director.value);
		director = directores.next();
	}
	console.log("-----------------------------------------------");
	//Asignamos una produccion a una categoria
	try {
		console.log("Asignamos la produccion '"+ movie.title +"' a la categoria '"+ category3.name +"': " + video.assignCategory(category3,movie));
		console.log("Asignamos la produccion '"+ movie1.title +"' a la categoria '"+ category.name +"': " + video.assignCategory(category,movie1));
		console.log("Asignamos la produccion '"+ movie2.title +"' a la categoria '"+ category.name +"': " + video.assignCategory(category,movie2));
		console.log("Asignamos la produccion '"+ serie.title +"' a la categoria '"+ category2.name +"': " + video.assignCategory(category2,serie));
		console.log("Asignamos la produccion '"+ serie1.title +"' a la categoria '"+ category2.name +"': " + video.assignCategory(category2,serie1));
	} catch (error) {
		console.log("" + error);
	}
	try {
		console.log("Asignamos la produccion '"+ serie1.title +"' a la categoria '"+ category2.name +"': " + video.assignCategory(category2,serie1));
	} catch (error) {
		console.log("Intentamos asignar de nuevo la produccion '"+ serie1.title +"' a la categoria '"+ category2.name +"': " + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos las producciones de las categorias que hay
	console.log("#### Mostramos las producciones de la categoria " + category2.name + " ####");
	var productions = video.getProductionsCategory(category2);
	var production = productions.next();
	while (production.done !== true){
		console.log ("" + production.value.title);		
		production = productions.next();
	}
	console.log("-----------------------------------------------");
	//Mostramos las producciones de las categorias que hay
	console.log("#### Mostramos las producciones de la categoria " + category.name + " ####");
	var productions = video.getProductionsCategory(category);
	var production = productions.next();
	while (production.done !== true){
		console.log ("" + production.value.title);		
		production = productions.next();
	}
	console.log("-----------------------------------------------");
	//Mostramos las producciones de las categorias que hay
	console.log("#### Mostramos las producciones de la categoria " + category3.name + " ####");
	var productions = video.getProductionsCategory(category3);
	var production = productions.next();
	while (production.done !== true){
		console.log ("" + production.value.title);		
		production = productions.next();
	}
	console.log("-----------------------------------------------");
	//Desasignamos una produccion a una categoria
	try {
		console.log("Quitamos la produccion '"+ serie1.title +"' de la categoria '"+ category2.name +"': " + video.deassignCategory(category2,serie));
	} catch (error) {
		console.log(" " + error);
	}
	console.log("-----------------------------------------------");
	//Desasignamos una produccion a una categoria
	try {
		console.log("Quitamos la produccion '"+ serie1.title +"' de la categoria '"+ category2.name +"': " + video.deassignCategory(category2,movie1));
	} catch (error) {
		console.log("Intentamos quitar de nuevo la produccion '"+ serie1.title +"' de la categoria '"+ category2.name +"':" + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos las producciones de las categorias que hay
	console.log("#### Mostramos las producciones de la categoria " + category2.name + " ####");
	var productions = video.getProductionsCategory(category2);
	var production = productions.next();
	while (production.done !== true){
		console.log ("" + production.value.title);		
		production = productions.next();
	}
	console.log("-----------------------------------------------");
	//Asignamos una produccion a un director
	try {	
		console.log("Asignamos la produccion '"+ movie1.title +"' al director '"+ persona3.name +"': " + video.assignDirector(persona3,movie1));
		console.log("Asignamos la produccion '"+ movie.title +"' al director '"+ persona3.name +"': " + video.assignDirector(persona3,movie));
		console.log("Asignamos la produccion '"+ movie2.title +"' al director '"+ persona3.name +"': " + video.assignDirector(persona3,movie2));
	} catch (error) {
		console.log("" + error);
	}
	try {	
		console.log("Asignamos la produccion '"+ movie2.title +"' al director '"+ persona3.name +"': " + video.assignDirector(persona3,movie2));
	} catch (error) {
		console.log("Intentamos asignar de nuevo la produccion '"+ movie2.title +"' al director '"+ persona3.name +"': " + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos las producciones de las categorias que hay
	console.log("#### Mostramos las producciones del director " + persona3.name + " ####");
	var productions = video.getProductionsDirector(persona3);
	var production = productions.next();
	while (production.done !== true){
		console.log ("" + production.value.title);		
		production = productions.next();
	}
	console.log("-----------------------------------------------");
	//Desasignamos una produccion a un director
	try{
		console.log("Quitamos la produccion '"+ movie1.title +"' al director '"+ persona3.name +"': " + video.deassignDirector(persona3,movie1));
	} catch (error) {
		console.log(" " + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos las producciones de las categorias que hay
	console.log("#### Mostramos las producciones del director " + persona3.name + " ####");
	var productions = video.getProductionsDirector(persona3);
	var production = productions.next();
	while (production.done !== true){
		console.log ("" + production.value.title);		
		production = productions.next();
	}
	console.log("-----------------------------------------------");
	//Asignamos una produccion a un actorr
	try {	
		console.log("Asignamos la produccion '"+ movie1.title +"' al actor '"+ persona.name +"': " + video.assignActor(persona,movie1,"Ciudadano",false));
		console.log("Asignamos la produccion '"+ movie.title +"' al actor '"+ persona.name +"': " + video.assignActor(persona,movie,"Hulk",true));
		console.log("Asignamos la produccion '"+ movie2.title +"' al actor '"+ persona.name +"': " + video.assignActor(persona,movie2,"Nemesio",true));
		console.log("Asignamos la produccion '"+ movie.title +"' al actor '"+ persona4.name +"': " + video.assignActor(persona4,movie,"Extra",false));	
	} catch (error) {
		console.log("" + error);
	}
	try {	
		console.log("Asignamos la produccion '"+ movie2.title +"' al actor '"+ persona.name +"': " + video.assignActor(persona,movie2,"Nemesio",true));
	} catch (error) {
		console.log("Intentamos asignar de nuevo la produccion '"+ movie2.title +"' al actor '"+ persona.name +"': "+ error);
	}
	console.log("-----------------------------------------------");
	//Mostramos las producciones de las categorias que hay
	console.log("#### Mostramos las producciones del actor " + persona.name + " ####");
	var productions = video.getProductionsActor(persona);
	var production = productions.next();
	while (production.done !== true){
		console.log ("Produccion: " + production.value.title + ". Papel: "+production.papel);		
		production = productions.next();
	}
	console.log("-----------------------------------------------");
	//Desasignamos una produccion a un actor
	try{
		console.log("Quitamos la produccion '"+ movie1.title +"' al actor '"+ persona.name +"': " + video.deassignActor(persona,movie1));
	} catch (error) {
		console.log("" + error);
	}
	console.log("-----------------------------------------------");
	//Desasignamos una produccion a un actor
	try{
		console.log("Quitamos la produccion '"+ movie1.title +"' al actor '"+ persona.name +"': " + video.deassignActor(persona,movie1));
	} catch (error) {
		console.log("Intentamos quitar la produccion '"+ movie1.title +"' al actor '"+ persona.name +"': " + error);
	}
	console.log("-----------------------------------------------");
	//Mostramos las producciones de las categorias que hay
	console.log("#### Mostramos las producciones del actor " + persona.name + " ####");
	var productions = video.getProductionsActor(persona);
	var production = productions.next();
	while (production.done !== true){
		console.log ("Produccion: " + production.value.title + ". Papel: "+production.papel);		
		production = productions.next();
	}
	console.log("-----------------------------------------------");
	//Mostramos el reparto de una produccion
	console.log("#### Mostramos el reparto de '" + movie.title + "' ####");
	var elenco = video.getCast(movie);
	var actor = elenco.next();
	while (actor.done !== true){
		console.log ("Actor: " + actor.value.name + ". Papel: "+ actor.papel + ". Principal: " + actor.principal);		
		actor = elenco.next();
	}
	console.log("-----------------------------------------------");
	




}//Fin de testVideo

window.onload = testVideo;