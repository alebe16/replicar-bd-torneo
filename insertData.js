db = connect("mongodb://localhost:27017/torneo");
db.deportistas.insertMany([
    {
    "nombre": "Camilo Jaramillo",
    "edad": 24,
    "ranking": 7
    },
    {
    "nombre": "Andrea Campos",
    "edad": 28,
    "ranking": 2
    },
    {
        "nombre": "Julio jaramillo",
        "edad": 24,
        "ranking": 1
    },
    {
        "nombre": "Paola benites",
        "edad": 30,
        "ranking": 5
    },
    {
        "nombre": "Esteban linares",
        "edad": 31,
        "ranking": 8
    },
    {
        "nombre": "Juan boada",
        "edad": 35,
        "ranking": 4
    },
    {
        "nombre": "Oscar blanco",
        "edad": 18,
        "ranking": 7
    },
    {
        "nombre": "Estefania neira",
        "edad": 20,
        "ranking": 3
    }
]);

// Replica set para iniciar el conjunto de réplicas en MongoDB
rs.initiate({
    _id: "replicaSetTorneo", 
    members: [
      { _id: 0, host: "localhost:27017" }, // Nodo 1
      { _id: 1, host: "localhost:27018" }, // Nodo 2
      { _id: 2, host: "localhost:27019" }  // Nodo 3
    ]
});

  // para verificar el estado del conjunto de réplicas
printjson(rs.status());
