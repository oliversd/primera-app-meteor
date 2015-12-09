Peliculas = new Mongo.Collection("peliculas");

if (Meteor.isClient) {
  // Este código sólo corre en el cliente
  Template.body.helpers({
    peliculas: function() {
      return Peliculas.find({});
    }
  });
}
