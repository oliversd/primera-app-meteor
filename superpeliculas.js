Peliculas = new Mongo.Collection("peliculas");

if (Meteor.isClient) {
  // Este código sólo corre en el cliente
  Template.body.helpers({
    peliculas: function() {
      return Peliculas.find({});
    }
  });

  Template.body.events({
    // Detectamos el evento de submit del formulario
    'submit .nueva-pelicula': function(event) {
      // Evitamos el comportamiento por defecto del navegador al enviar
      // un formulario
      event.preventDefault();

      // Tomamos los valores de los inputs del formulario
      var nombre = event.target.nombre.value;
      var fecha = event.target.fecha.value;
      var director = event.target.director.value;

      // Insertamos la película en la coleccion
      Peliculas.insert({
        nombre: nombre,
        fecha: fecha,
        director: director
      });

      // Limpiamos los valores del formulario
      event.target.nombre.value = "";
      event.target.fecha.value = "";
      event.target.director.value = "";
    }
  });
}
