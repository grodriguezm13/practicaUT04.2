"use strict";

//Objeto para identificar los datos de una persona.
function Person(name, lastName1, lastName2, born, picture) {
    //Validación de parámetros obligatorios
	name = typeof name !== 'undefined' ? name : "";
	if (name === ""){ throw new Error("No puedes dejar el nombre vacio");}
    lastName1 = typeof lastName1 !== 'undefined' ? lastName1 : "";
    if (lastName1 === ""){ throw new Error("No puedes dejar el lastName vacio");}
    born = typeof Date !== 'undefined' ? born : "";
    if (born === ""){ throw new Error("El formato del nacimiento esta vacio o es invalido");}

    //Declaracion de atributos
    var _name = name;
    var _lastName1 = lastName1;
    var _lastName2 = lastName2 || "";
    var _born = born;
    var _picture = picture || "";

    //Declaracion de getter y setters
	Object.defineProperty(this, 'name', {
		get:function(){
			return _name;
		},
		set:function(value){
			value = typeof name !== 'undefined' ? value : "";
		    if (value === ""){
                throw new Error("No puedes dejar el nombre vacio");
            }else{
                _name = value;
            }//Fin del if
        }		
    });
	
	Object.defineProperty(this, 'lastName1', {
		get:function(){
			return _lastName1;
		},
		set:function(value){
			value = typeof lastName1 !== 'undefined' ? value : "";
		    if (value === ""){
                throw new Error("No puedes dejar el lastName1 vacio");
            }else{
                _lastName1 = value;
            }//Fin del if
        }		
    });

	Object.defineProperty(this, 'lastName2', {
		get:function(){
			return _lastName2;
		},
		set:function(value){
			value = typeof lastName2 !== 'undefined' ? value : "";
		    if (value === ""){
                throw new Error("No puedes dejar el lastName2 vacio");
            }else{
                _lastName2 = value;
            }//Fin del if
        }		
	});
	
	Object.defineProperty(this, 'born', {
		get:function(){
			return _born;
		},
		set:function(value){
			value = typeof Date !== 'undefined' ? value : "";
		    if (value === ""){
                throw new Error("No puedes dejar la fecha de nacimiento vacia");
            }else{
                _born = value;
            }//Fin del if
        }		
    });

	Object.defineProperty(this, 'picture', {
		get:function(){
			return _picture;
		},
		set:function(value){
			value = typeof picture !== 'undefined' ? value : "";
		    if (value === ""){
                throw new Error("No puedes dejar la imagen vacia");
            }else{
                _picture = value;
            }//Fin del if
        }		
    });
}//Fin de Person
Person.prototype.toString = function(){
	return "Nombre completo: " + this.name + ", " + this.lastName1 + " " + this.lastName2 + ". Fecha de nacimiento: "+ this.born + ". Imagen: "+ this.picture;
}

//Con este objeto podemos crear la estructura de categorías.
function Category(name, description) {
	//Validación de parámetros obligatorios
	name = typeof name !== 'undefined' ? name : "";
	if (name === ""){ throw new Error("No puedes dejar el nombre vacio");}

	//Declaracion de atributos
    var _name = name;
	var _description = description || "";
	
	//Declaracion de getter y setters
	Object.defineProperty(this, 'name', {
		get:function(){
			return _name;
		},
		set:function(value){
			value = typeof name !== 'undefined' ? value : "";
		    if (value === ""){
                throw new Error("No puedes dejar el nombre vacio");
            }else{
                _name = value;
            }//Fin del if
        }		
    });
	
	Object.defineProperty(this, 'description', {
		get:function(){
			return _description;
		},
		set:function(value){
			value = typeof description !== 'undefined' ? value : "";
		    if (value === ""){
                throw new Error("No puedes dejar la descripcion vacia");
            }else{
                _description = value;
            }//Fin del if
        }		
    });
}//Fin de Category
Category.prototype.toString = function(){
	return "Nombre: " + this.name + ". Descripcion: "+ this.description;
}

//Representa un recurso audiovisual.
function Resource(duration, link, audios, subtitles){
	//Validación de parámetros obligatorios
	duration = typeof duration !== 'undefined' ? duration : "";
	if (duration === ""){ throw new Error("No puedes dejar la duracion vacia");}
	link = typeof link !== 'undefined' ? link : "";
	if (link === ""){ throw new Error("No puedes dejar la ruta vacia");}

	//Declaracion de atributos
    var _duration = duration;
	var _link = link;
	var _audios = audios || []; //Array de string
	var _subtitles = subtitles || []; //Array de string

	//Declaracion de getter y setters
	Object.defineProperty(this, 'duration', {
		get:function(){
			return _duration;
		},
		set:function(value){
			value = typeof duration !== 'undefined' ? value : "";
		    if (value === ""){
                throw new Error("No puedes dejar el nombre vacio");
            }else{
                _duration = value;
            }//Fin del if
        }		
	});
	
	Object.defineProperty(this, 'link', {
		get:function(){
			return _link;
		},
		set:function(value){
			value = typeof link !== 'undefined' ? value : "";
		    if (value === ""){
                throw new Error("No puedes dejar el nombre vacio");
            }else{
                _link = value;
            }//Fin del if
        }		
	});

	Object.defineProperty(this, 'audios', {
		get:function(){
			return _audios;
		},
		set:function(value){
			value = typeof audios !== 'undefined' ? value : "";
		    if (value === ""){
                throw new Error("No puedes dejar el nombre vacio");
            }else{
                _audios = value;
            }//Fin del if
        }		
	});

	Object.defineProperty(this, 'subtitles', {
		get:function(){
			return _subtitles;
		},
		set:function(value){
			value = typeof subtitles !== 'undefined' ? value : "";
		    if (value === ""){
                throw new Error("No puedes dejar el nombre vacio");
            }else{
                _subtitles = value;
            }//Fin del if
        }		
	});
}//Fin de Resource

//Funcion para crear Production que tiene herencia con Movie y Serie
(function(){ 
    //Seguro para no instanciar objetos tipo Production
	var abstractCreateLock = false; 

	//Constructor de production.
	function Production(title, nationality, publication, synopsis, image){
		//Validación clase abstracta
		if(abstractCreateLock){throw new Error("No puedes instanciar Production");}		

		//Validación de parámetros obligatorios
		title = typeof title !== 'undefined' ? title : "";
		if (title === ""){ throw new Error("No puedes dejar el titulo vacio");}
        publication = typeof Date !== 'undefined' ? publication : "";
        if (publication === ""){ throw new Error("El formato de la publicacion esta vacio o es invalido");}
        
        //Declaracion de atributos
        var _title = title; 
        var _nationality = nationality;
        var _publication = publication;
        var _synopsis = synopsis;
        var _image = image;

		//Declaracion de getter y setters
		Object.defineProperty(this, 'title', {
			get:function(){
				return _title;
			},
			set:function(value){
				value = typeof title !== 'undefined' ? value : "";
		        if (value === ""){
                    throw new Error("No puedes dejar el titulo vacio");
                }else{
                    _title = value;
                }//Fin del if
			}		
		});

		Object.defineProperty(this, 'nationality', {
			get:function(){
				return _nationality;
			},
			set:function(value){
				value = typeof nationality !== 'undefined' ? value : "";
		        if (value === ""){
                    throw new Error("No puedes dejar la nacionalidad vacia");
                }else{
                    _nationality = value;
                }//Fin del if
			}		
		});

		Object.defineProperty(this, 'publication', {
			get:function(){
				return _publication;
			},
			set:function(value){
				value = typeof Date !== 'undefined' ? value : "";
		        if (value === ""){
                    throw new Error("No puedes dejar la fecha de publicacion vacia");
                }else{
                    _publication = value;
                }//Fin del if
			}		
		});

		Object.defineProperty(this, 'synopsis', {
			get:function(){
				return _synopsis;
			},
			set:function(value){
				value = typeof synopsis !== 'undefined' ? value : "";
		        if (value === ""){
                    throw new Error("No puedes dejar la fecha de publicacion vacia");
                }else{
                    _synopsis = value;
                }//Fin del if
			}		
		});

		Object.defineProperty(this, 'image', {
			get:function(){
				return _image;
			},
			set:function(value){
				value = typeof image !== 'undefined' ? value : "";
		        if (value === ""){
                    throw new Error("No puedes dejar la ruta de la imagen vacia");
                }else{
                    _image = value;
                }//Fin del if
			}		
		});
	}//Fin de  la funcion Production
	Production.prototype = {}; 
	Production.prototype.constructor = Production;
	//Se define toString con los datos
	Production.prototype.toString = function(){
		return "Titulo: " + this.title + ". Nacionalidad: " + this.nationality + ". Fecha publicacion: " + this.publication + ". Sipnosis: " + this.synopsis + ". Imagen: " + this.image;
	}

	//Definimos la subclase MOvie que hereda de Production y Representa un recurso película que podremos reproducir en el sistema
	function Movie(resource, locations){
		//Llamada al superconstructor. Debemos desactivar el seguro para realizarla.
		abstractCreateLock = false;
		Production.call(this,resource, locations);	
		abstractCreateLock = true;

		//Declaracion de atributos
		var _resource = resource || "";
		var _locations = locations || "";

		//Declaracion de getter y setters
		Object.defineProperty(this, 'resource', {
			get:function(){
				return _resource;
			},
			set:function(value){
				value = typeof Resource !== 'undefined' ? value : "";
		        if (value === ""){
                    throw new Error("Recurso invalido");
                }else{
                    _resource = value;
                }//Fin del if
			}		
        });		
        
        Object.defineProperty(this, 'locations', {
			get:function(){
				return _locations;
			},
			set:function(value){
				value = typeof Coordinate !== 'undefined' ? value : "";
		        if (value === ""){
                    throw new Error("Recurso invalido");
                }else{
                    _locations = value;
                }//Fin del if
			}		
		});	
    }//Fin de la funcion Movie
    //Definimos la herencia
	Movie.prototype = Object.create(Production.prototype); 
	Movie.prototype.constructor = Movie;
	Movie.prototype.toString = function(){
		return Production.prototype.toString.call(this) + ". Recurso: " + this.resource + ". Coordenadas: " + this.locations;
	}
	
	//Definimos la subclase serie que hereda de Production y representa un recurso serie que podremos reproducir
	function Serie(season){
		//Llamada al superconstructor. Debemos desactivar el seguro para realizarla.
		abstractCreateLock = false;
		Production.call(this,season);	
		abstractCreateLock = true;

		//Declaracion de atributos
		var _season = season || "";

		//Declaracion de getter y setters
		Object.defineProperty(this, 'season', {
			get:function(){
				return _season;
			},
			set:function(value){
				value = typeof Season !== 'undefined' ? value : "";
		        if (value === ""){
                    throw new Error("Recurso invalido");
                }else{
                    _season = value;
                }//Fin del if
			}		
        });		
    }//Fin de la funcion Serie
    //Definimos la herencia
	Serie.prototype = Object.create(Production.prototype); 
	Serie.prototype.constructor = Serie;
	Serie.prototype.toString = function(){
		return Production.prototype.toString.call(this) + ". Temporadas: " + this.season;
	}

	abstractCreateLock = true; //Activamos el seguro

	//Devolvemos constructores
	window.Production = Production; 
	window.Movie = Movie; 
	window.Serie = Serie;  
})();//Fin de la clase abstracta y las subclases

//Definimos la clase season que representa una temporada de una serie.
function Season(title, episodes){
	//Validación de parámetros obligatorios
	title = typeof title !== 'undefined' ? title : "";
	if (title === ""){ throw new Error("No puedes dejar el titulo vacio");}

    //Declaracion de atributos
    var _title = title;
    var _episodes = episodes || [];

	//Declaracion de getter y setters
	Object.defineProperty(this, 'title', {
		get:function(){
			return _title;
		},
		set:function(value){
			value = typeof title !== 'undefined' ? value : "";
			if (value === ""){
				throw new Error("El titulo no puede dejarse vacio");
			}else{
				_title = value;
			}//Fin del if
		}		
	});		

	Object.defineProperty(this, 'episodes', {
		get:function(){
			return _episodes;
		},
		set:function(value){
			value = typeof episodes !== 'undefined' ? value : "";
			if (value === ""){
				throw new Error("Episodio invalido");
			}else{
				_episodes = value;
			}//Fin del if
		}		
	});	
}//Fin de la funcion Serie
Season.prototype.toString = function(){
	return "Titulo: " + this.title + ". Episodios: "+ this.episodes;
}

//Objeto para identificar los datos de una persona.
function User(userName, email, password) {
    //Validación de parámetros obligatorios
	userName = typeof userName !== 'undefined' ? userName : "";
	if (userName === ""){ throw new Error("No puedes dejar el nombre vacio");}
    email = typeof email !== 'undefined' ? email : "";
    if (email === ""){ throw new Error("No puedes dejar el mail vacio");}
    password = typeof password !== 'undefined' ? password : "";
    if (password === ""){ throw new Error("No puedes dejar la contraseña vacia");}

    //Declaracion de atributos
    var _userName = userName;
    var _email = email;
    var _password = password;


    //Declaracion de getter y setters
	Object.defineProperty(this, 'userName', {
		get:function(){
			return _userName;
		},
		set:function(value){
			value = typeof userName !== 'undefined' ? value : "";
		    if (uvalue === ""){
                throw new Error("No puedes dejar el nombre vacio");
            }else{
                _userName = value;
            }//Fin del if
        }		
    });
	
	Object.defineProperty(this, 'email', {
		get:function(){
			return _email;
		},
		set:function(value){
			value = typeof email !== 'undefined' ? value : "";
		    if (value === ""){
                throw new Error("No puedes dejar el mail vacio");
            }else{
                _email = value;
            }//Fin del if
        }		
    });

	Object.defineProperty(this, 'password', {
		get:function(){
			return _password;
		},
		set:function(value){
			value = typeof password !== 'undefined' ? value : "";
		    if (value === ""){
                throw new Error("No puedes dejar la contraseña vacia");
            }else{
                _password = value;
            }//Fin del if
        }		
	});
}//Fin de User
User.prototype.toString = function(){
	return "Nombre Usuario: " + this.userName + ". Email: "+ this.email + ". Pass: " + this.password;
}

//Objeto para identificar los datos de una persona.
function Coordinate(latitude, longitude) {
    //Validación de parámetros obligatorios
	latitude = typeof latitude !== 'undefined' ? latitude : "";
	if (latitude === ""){ throw new Error("No puedes dejar el nombre vacio");}
    longitude = typeof longitude !== 'undefined' ? longitude : "";
    if (longitude === ""){ throw new Error("No puedes dejar el mail vacio");}
    
    //Declaracion de atributos
    var _latitude = latitude;
    var _longitude = longitude;

    //Declaracion de getter y setters
	Object.defineProperty(this, 'latitude', {
		get:function(){
			return _latitude;
		},
		set:function(value){
			value = typeof latitude !== 'undefined' ? value : "";
		    if (value === ""){
                throw new Error("No puedes dejar la latitud vacia");
            }else{
                _latitude = value;
            }//Fin del if
        }		
    });
	
	Object.defineProperty(this, 'longitude', {
		get:function(){
			return _longitude;
		},
		set:function(value){
			value = typeof longitude !== 'undefined' ? value : "";
		    if (value === ""){
                throw new Error("No puedes dejar la longitud vacia");
            }else{
                _longitude = value;
            }//Fin del if
        }		
    });
}//Fin de Coordinate
Coordinate.prototype.toString = function(){
	return "Latitude: " + this.latitude + ". Longitud: "+ this.longitude;
}

//Declaración objeto VideoSystem
var VideoSystem = (function () {
	//Objeto con la instancia única VideoSystem
	var instantiated; 

	function init() { //Inicialización del Singleton

		//Declaración de la función constructora de VideoSystem
		function VideoSystem(){
			//La función se invoca con el operador new
			if (!(this instanceof VideoSystem)) 
				throw new InvalidAccessConstructorException();

			//Definición de atributos privados del objeto
			var _name = name; //Nombre del sistema
			var _users = []; //usuarios que tienen acceso al sistema.
			var _productions = []; //Listado de producciones que tenemos en el sistema.
			var _categories = []; //Las categorías de las producciones.
			var _actors = []; //Actores y actrices que tenemos registrados.
			var _directors = []; //Directores que tenemos en el sistema.

			//Declaracion de getter y setter
			//Devuelve el nombre del sistema
			Object.defineProperty(this, 'name', {
				get:function(){
					return _name;
				},
				set:function(value){
					value = typeof name !== 'undefined' ? value : "";
					if (value === "" || value === 'undefined'){
						throw new Error("No puedes dejar el nombre vacio");
					}else{
						_name = value;
					}//Fin del if
				}		
			});

			//Devuelve un iterador que permite recorrer las categorías del sistema
			Object.defineProperty(this, 'categories', {
				get:function(){
				    var nextIndex = 0;		    
				    return {
				       next: function(){
				           return nextIndex < _categories.length ?
				               {value: _categories[nextIndex++], done: false} :
				               {done: true};
				       }
				    }
				}	
			});	

			//Dado un objeto, devuelve la posición de ese objeto.
			this.getItemPosition = function(item){
				function compareItems(arrayItem) {
				  return (arrayItem.name === item.name)
				}
				return _categories.findIndex(compareItems);		
			}

			//Añade una nueva categoría
			this.addCategory = function(category){
				if(!(category instanceof Category)){
					throw new Error ("El elemento que quieres introducir no es una categoria");
				}
				if (category == null) {
					throw new Error ("La categoria no puede ser nula");
				}
				var position = this.getItemPosition(category); 
				//Si no existe la categoria se añade al array	
				if (position === -1){
					_categories.push(category);
				} else{
					throw new Error ("La categoria ya existe");
				}
				return _categories.length;
			};//Fin de addCategory

			this.removeCategory = function(){

			};//Fin de removeCategory
			
		}//Fin de la funcion constructora de VideoSystem
		VideoSystem.prototype = {}; 
		VideoSystem.prototype.constructor = VideoSystem;

		//Devolvemos el objeto para que sea una instancia única.
		var sc = new VideoSystem();
		return sc;
	} //Fin inicialización del Singleton
	return {
		// Devuelve un objeto con el método getInstance
		getInstance: function () { 
			//Si es la primera llamada sera undefined y ejecutara el init()
			if (!instantiated) { 
				instantiated = init();
			}
			return instantiated; 
		}
	};
})();//Fin de VideoSystem

function testVideo(){
	try {
		var persona1 = new Person("Marcos","Diaz","",new Date(1999,12,31),"ruta de la imagen");
		console.log("Objeto Person: " + persona1.toString());
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	try {
		var categoria1 = new Category("Comedia","Las risas ja,ja");
		console.log("Objeto Category: " + categoria1.toString());	
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	try {
		var recurso1 = new Resource(140, "ruta");
		console.log("Objeto Resource: " + recurso1.duration);	
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	try {
		var coor1 = new Coordinate(133,125);
		console.log("Objeto Coordinate: " + coor1.toString());
		var movie1 = new Movie("Vengadores","Americana",new Date(2012,5,5),"Resumen","ruta",recurso1,coor1);	
		console.log("Objeto Movie: " + movie1.toString());
	} catch (error) {
		console.log("Ha fallado: " + error);
	}
	var video = new VideoSystem.getInstance();
	video.name = "Prueba";
	console.log("Nombre del sistema: " + video.name);
	video.addCategory(categoria1);
	video.addCategory(new Category("Terror","Los sustos y eso"));
	console.log("Categorias existentes.");
	var iterableItem = video.categories;
	var item = iterableItem.next();
	while(!item.done){		
		console.log("Categoria: " + item.value);
		item = iterableItem.next();
	}
	try {
		video.addCategory(categoria1);
	} catch (error) {
		console.log(error);
	}
}//Fin de testVideo

window.onload = testVideo;