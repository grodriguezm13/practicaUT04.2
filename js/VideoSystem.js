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
						   //Mientras no acabe devuelve un objeto con el valor y la propiedad done
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