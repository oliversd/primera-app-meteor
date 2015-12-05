if (Meteor.isClient) {
  // Este código sólo corre en el cliente
  Template.body.helpers({
    peliculas: [
      { nombre: "Star Wars" },
      { nombre: "El Padrino" },
      { nombre: "Forrest Gump" }
    ]
  });
}
