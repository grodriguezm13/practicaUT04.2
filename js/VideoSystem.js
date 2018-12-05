"use strict";

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
						throw new new EmptyValueException("name");
					}else{
						_name = value;
					}//Fin del if
				}		
			});

			/* LAS SIGUIENTES FUNCIONES HACEN USO DE LAS CATEGORIAS */
			//Devuelve un iterador que permite recorrer las categorías del sistema
			Object.defineProperty(this, 'categories', {
				get:function(){
				    var nextIndex = 0;		    
				    return {
				       next: function(){
						   return nextIndex < _categories.length ?
						   //Mientras no acabe devuelve un objeto con el valor y la propiedad done
				               {value: _categories[nextIndex++], done: false} :
				               {done: true};
				       }
				    }
				}	
			});	

			//Dado un objeto, devuelve la posición de ese objeto.
			this.getCategoryPosition = function(category){
				function compareCategories(arrayCategory) {
				  return (arrayCategory.name === category.name)
				}
				return _categories.findIndex(compareCategories);		
			}

			//Añade una nueva categoría
			this.addCategory = function(category){
				if(!(category instanceof Category)){
					throw new InvalidParamException("Category");
				}
				if (category == null) {
					throw new NullParamException("category");
				}
				var position = this.getCategoryPosition(category); 
				//Si no existe la categoria se añade al array	
				if (position === -1){
					_categories.push(category);
				} else{
					throw new CategoryExistsException();
				}
				return _categories.length;
			};//Fin de addCategory

			//Elimina una categoría.
			this.removeCategory = function(category){
				if (!(category instanceof Category)) { 
					throw new InvalidParamException("Category");
				}
				if (category == null) {
					throw new NullParamException("category");
				}	
				var position = this.getCategoryPosition(category); 	
				if (position !== -1){
					_categories.splice(position, 1);			
				} else{
					throw new CategoryNotExistsException();
				}	
				return _categories.length;
			};//Fin de removeCategory
			
			/* LAS SIGUIENTES FUNCIONES HACEN USO DE LOS USUARIOS */
			//Devuelve un iterador que permite recorrer los usuarios del sistema
			Object.defineProperty(this, 'users', {
				get:function(){
					var nextIndex = 0;		    
					return {
					next: function(){
						return nextIndex < _users.length ?
						//Mientras no acabe devuelve un objeto con el valor y la propiedad done
							{value: _users[nextIndex++], done: false} :
							{done: true};
					}
					}
				}	
			});

			//Añade una nuevo usuario
			this.addUser = function(user){
				if(!(user instanceof User)){
					throw new InvalidParamException("User");
				}
				if (user == null) {
					throw new NullParamException("user");
				}
				//Buscamos la position del email y del username
				var existeNombre = this.getUserNamePosition(user); 
				var existeEmail = this.getUserEmailPosition(user);
				//Si la posicion de existeNombre es igual a -1, no
				//existe ningun usuario con el mismo nombre
				if (existeNombre === -1){
					//Comprobamos que no haya ningun email igual, si no existe se añade el usuario
					if (existeEmail === -1) {
						_users.push(user);
					}else{
						throw new UserExistsException("email");
					}
				} else{
					throw new UserExistsException("userName");
				}
				return _users.length;
			};//Fin de addUser

			//Dado un objeto User, devuelve la posición de ese objeto.
			this.getUserNamePosition = function(user){
				function compareUsers(arrayUser) {
				  return (arrayUser.userName === user.userName)
				}
				return _users.findIndex(compareUsers);		
			}

			//Dado un objeto User, devuelve la posición de ese objeto.
			this.getUserEmailPosition = function(user){
				function compareUsers(arrayUser) {
				return (arrayUser.email === user.email)
				}
				return _users.findIndex(compareUsers);		
			}

			//Elimina un usuario del sistema
			this.removeUser = function(user){
				if (!(user instanceof User)) { 
					throw new InvalidParamException("User");
				}
				if (user == null) {
					throw new NullParamException("User");
				}	
				//Para encontrar el usuario se utiliza su email
				var position = this.getUserEmailPosition(user);	
				if (position !== -1){
					_users.splice(position, 1);			
				} else{
					throw new UserNotExistsException();
				}	
				return _users.length;
			};//Fin de removeUser

			/* LAS SIGUIENTES FUNCIONES HACEN USO DE LAS PRODUCTION */
			//Devuelve un iterador que permite recorrer las producciones del sistema
			Object.defineProperty(this, 'productions', {
				get:function(){
					var nextIndex = 0;		    
					return {
					next: function(){
						return nextIndex < _productions.length ?
						//Mientras no acabe devuelve un objeto con el valor y la propiedad done
							{value: _productions[nextIndex++], done: false} :
							{done: true};
					}
					}
				}	
			});

			//Dado un objeto, devuelve la posición de ese objeto.
			this.getProductionPosition = function(production){
				function compareProduction(arrayProduction) {
				  return (arrayProduction.title === production.title)
				}
				return _productions.findIndex(compareProduction);		
			}

			//Añade una nueva produccion
			this.addProduction = function(production){
				if(!(production instanceof Production)){
					throw new InvalidParamException("Production");
				}
				if (production == null) {
					throw new NullParamException("production");
				}
				var position = this.getProductionPosition(production); 
				//Si no existe la produccion se añade al array	
				if (position === -1){
					_productions.push(production);
				} else{
					throw new ProductionExistsException();
				}
				return _productions.length;
			};//Fin de addProduction

			//Elimina una produccion.
			this.removeProduction = function(production){
				if(!(production instanceof Production)){
					throw new InvalidParamException("Production");
				}
				if (production == null) {
					throw new NullParamException("production");
				}	
				var position = this.getProductionPosition(production);
				if (position !== -1){
					_productions.splice(position, 1);			
				} else{
					throw new ProductionNotExistsException();
				}	
				return _productions.length;
			};//Fin de removeProduction

			/* LAS SIGUIENTES FUNCIONES HACEN USO DE LOS ACTORES */
			//Devuelve un iterador que permite recorrer los actores registrados en el sistema
			Object.defineProperty(this, 'actors', {
				get:function(){
					var nextIndex = 0;		    
					return {
					next: function(){
						return nextIndex < _actors.length ?
						//Mientras no acabe devuelve un objeto con el valor y la propiedad done
							{value: _actors[nextIndex++], done: false} :
							{done: true};
					}
					}
				}	
			});

			//Añade una nuevo actor
			this.addActor = function(actor){
				if(!(actor instanceof Person)){
					throw new InvalidParamException("Person");
				}
				if (actor == null) {
					throw new NullParamException("actor");
				}
				var existeNombre = this.getActorPosition(actor); 
				//Si la posicion de existeNombre es igual a -1, no
				//existe ningun actor con el mismo nombre
				if (existeNombre === -1){
					_actors.push(actor);
				} else{
					throw new ActorExistsException("name");
				}
				return _actors.length;
			};//Fin de addActor

			//Dado un objeto Actor, devuelve la posición de ese objeto.
			this.getActorPosition = function(actor){
				function compareActors(arrayActor) {
				  return (arrayActor.name === actor.name)
				}
				return _actors.findIndex(compareActors);		
			}

			//Elimina un actor del sistema
			this.removeActor = function(actor){
				if(!(actor instanceof Person)){
					throw new InvalidParamException("Person");
				}
				if (actor == null) {
					throw new NullParamException("actor");
				}
				var existeNombre = this.getActorPosition(actor); 
				//Si la posicion de existeNombre es igual a -1, no
				//existe ningun actor con el mismo nombre
				if (existeNombre === -1){
					_actors.splice(existeNombre, 1);
				} else{
					throw new ActorNotExistsException();
				}
				return _actors.length;
			};//Fin de removeUser

			/* LAS SIGUIENTES FUNCIONES HACEN USO DE LOS DIRECTORES */
			//Devuelve un iterador que permite recorrer los directores registrados en el sistema
			Object.defineProperty(this, 'directors', {
				get:function(){
					var nextIndex = 0;		    
					return {
					next: function(){
						return nextIndex < _actors.length ?
						//Mientras no acabe devuelve un objeto con el valor y la propiedad done
							{value: _actors[nextIndex++], done: false} :
							{done: true};
					}
					}
				}	
			});

			//Añade una nuevo actor
			this.addActor = function(actor){
				if(!(actor instanceof Person)){
					throw new InvalidParamException("Person");
				}
				if (actor == null) {
					throw new NullParamException("actor");
				}
				var existeNombre = this.getActorPosition(actor); 
				//Si la posicion de existeNombre es igual a -1, no
				//existe ningun actor con el mismo nombre
				if (existeNombre === -1){
					_actors.push(actor);
				} else{
					throw new ActorExistsException("name");
				}
				return _actors.length;
			};//Fin de addActor

			//Dado un objeto Actor, devuelve la posición de ese objeto.
			this.getActorPosition = function(actor){
				function compareActors(arrayActor) {
				  return (arrayActor.name === actor.name)
				}
				return _actors.findIndex(compareActors);		
			}

			//Elimina un actor del sistema
			this.removeActor = function(actor){
				if(!(actor instanceof Person)){
					throw new InvalidParamException("Person");
				}
				if (actor == null) {
					throw new NullParamException("actor");
				}
				var existeNombre = this.getActorPosition(actor); 
				//Si la posicion de existeNombre es igual a -1, no
				//existe ningun actor con el mismo nombre
				if (existeNombre === -1){
					_actors.splice(existeNombre, 1);
				} else{
					throw new ActorNotExistsException();
				}
				return _actors.length;
			};//Fin de removeUser




		}//Fin de la funcion constructora de VideoSystem
		VideoSystem.prototype = {}; 
		VideoSystem.prototype.constructor = VideoSystem;

		//Devolvemos el objeto para que sea una instancia única.
		var video = new VideoSystem();
		return video;
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