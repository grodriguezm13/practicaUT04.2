//Funcion de testeo con todas las posibilidades
function testVideo(){
    //Se crea un objeto person
	try {
		var persona1 = new Person("Guillermo","Rodriguez",new Date(1993,10,25),"Moraga");
		console.log("Objeto Person: " + persona1.toString());
	} catch (error) {
		console.log("Ha fallado: " + error);
    }
    //Se crea un objeto category
	try {
		var category1 = new Category("Comedia");
		console.log("Objeto Category: " + category1.toString());
	} catch (error) {
		console.log("Ha fallado: " + error);
    }
    //Se crea un objeto resource
	try {
		var resource1 = new Resource(180,"Ruta",["Español","Ingles"]);
		console.log("Objeto Resource: " + resource1.toString());
	} catch (error) {
		console.log("Ha fallado: " + error);
    }
    //Se crea un objeto Production
	try {
		var production = new Production("Vengadores",new Date(2012,05,05));
		console.log("Objeto production: " + production.toString());
	} catch (error) {
		console.log("Ha fallado: " + error);
    }
    //Se crea un objeto Coordinate
	try {
		var coor = new Coordinate(123,124);
		console.log("Objeto Coordinate: " + coor.toString());
	} catch (error) {
		console.log("Ha fallado: " + error);
    }
    //Se crea un objeto Movie
    try {
        var movie = new Movie("Vengadores",new Date(2012,05,05),resource1,coor);
        console.log("Objeto Movie: " + movie.toString());
    } catch (error) {
        console.log("Ha fallado: " + error);
    }
	//Se crea un objeto User
	try {
		var user = new User("pepe","pepe@yo.com","pepe");
		console.log("Objeto User: " + user.toString());
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	//Se crea un objeto Season
	try {
		var season1 = new Season("Temporada 1");
		console.log("Objeto Season: " + season1.toString());
		var serie = new Serie(season1);
		console.log("Objeto Serie: " + serie.toString());
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
}//Fin de testVideo

window.onload = testVideo;