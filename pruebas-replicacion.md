#INSERTAR DATOS

Windows PowerShell
Copyright (C) Microsoft Corporation. Todos los derechos reservados.

Instale la versión más reciente de PowerShell para obtener nuevas características y mejoras. https://aka.ms/PSWindows

PS C:\Users\Alejandra Betancourt> mongosh --port 27017
Current Mongosh Log ID: 674bd8df9f44e213e5893bf7
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.4
Using MongoDB:          8.0.3
Using Mongosh:          2.3.4

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-11-30T22:28:22.339-05:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
   2024-11-30T22:28:22.339-05:00: This server is bound to localhost. Remote systems will be unable to connect to this server. Start the server with --bind_ip <address> to specify which IP addresses it should serve responses from, or with --bind_ip_all to bind to all interfaces. If this behavior is desired, start the server with --bind_ip 127.0.0.1 to disable this warning
------

replicaSetTorneo [direct: primary] test> use pruebaReplicacion;
switched to db pruebaReplicacion
replicaSetTorneo [direct: primary] pruebaReplicacion> db.test.insertOne({ mensaje: "Prueba insercion datos nodo primario" });
{
  acknowledged: true,
  insertedId: ObjectId('674bd9079f44e213e5893bf8')
}
replicaSetTorneo [direct: primary] pruebaReplicacion> cfg = rs.conf();
{
  _id: 'replicaSetTorneo',
  version: 2,
  term: 2,
  members: [
    {
      _id: 0,
      host: 'localhost:27017',
      arbiterOnly: false,
      buildIndexes: true,
      hidden: false,
      priority: 2,
      tags: {},
      secondaryDelaySecs: Long('0'),
      votes: 1
    },
    {
      _id: 1,
      host: 'localhost:27018',
      arbiterOnly: false,
      buildIndexes: true,
      hidden: false,
      priority: 1,
      tags: {},
      secondaryDelaySecs: Long('0'),
      votes: 1
    },
    {
      _id: 2,
      host: 'localhost:27019',
      arbiterOnly: false,
      buildIndexes: true,
      hidden: false,
      priority: 1,
      tags: {},
      secondaryDelaySecs: Long('0'),
      votes: 1
    }
  ],
  protocolVersion: Long('1'),
  writeConcernMajorityJournalDefault: true,
  settings: {
    chainingAllowed: true,
    heartbeatIntervalMillis: 2000,
    heartbeatTimeoutSecs: 10,
    electionTimeoutMillis: 10000,
    catchUpTimeoutMillis: -1,
    catchUpTakeoverDelayMillis: 30000,
    getLastErrorModes: {},
    getLastErrorDefaults: { w: 1, wtimeout: 0 },
    replicaSetId: ObjectId('674bc1db8a3a1122c2d6cc9b')
  }
}

##CONSULTAR DATOS

Windows PowerShell
Copyright (C) Microsoft Corporation. Todos los derechos reservados.

Instale la versión más reciente de PowerShell para obtener nuevas características y mejoras. https://aka.ms/PSWindows

PS C:\Users\Alejandra Betancourt> mongosh --port 27018
Current Mongosh Log ID: 674bdd4f9f913cda96893bf7
Connecting to:          mongodb://127.0.0.1:27018/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.4
Using MongoDB:          8.0.3
Using Mongosh:          2.3.4

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-11-30T22:28:50.463-05:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
   2024-11-30T22:28:50.463-05:00: This server is bound to localhost. Remote systems will be unable to connect to this server. Start the server with --bind_ip <address> to specify which IP addresses it should serve responses from, or with --bind_ip_all to bind to all interfaces. If this behavior is desired, start the server with --bind_ip 127.0.0.1 to disable this warning
------

replicaSetTorneo [direct: primary] test> use pruebaReplicacion;
switched to db pruebaReplicacion
replicaSetTorneo [direct: primary] pruebaReplicacion> db.getMongo().setReadPref('secondaryPreferred');

replicaSetTorneo [direct: primary] pruebaReplicacion> db.test.find();
[
  {
    _id: ObjectId('674bc86cca20b7c2b9893bf8'),
    mensaje: 'Prueba insercion datos nodo primario'
  },
  {
    _id: ObjectId('674bd9079f44e213e5893bf8'),
    mensaje: 'Prueba insercion datos nodo primario'
  }
]


## FALLO NODO PRINCIPAL

C:\Windows\System32> taskkill /PID 11924 /F
Correcto: se terminó el proceso con PID 11924.

Windows PowerShell
Copyright (C) Microsoft Corporation. Todos los derechos reservados.

Instale la versión más reciente de PowerShell para obtener nuevas características y mejoras. https://aka.ms/PSWindows

PS C:\Users\Alejandra Betancourt> mongosh --port 27017
Current Mongosh Log ID: 674bdceecb80916d4b893bf7
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.4
MongoNetworkError: connect ECONNREFUSED 127.0.0.1:27017
PS C:\Users\Alejandra Betancourt>

Copyright (C) Microsoft Corporation. Todos los derechos reservados.

Instale la versión más reciente de PowerShell para obtener nuevas características y mejoras. https://aka.ms/PSWindows

PS C:\Users\Alejandra Betancourt> mongosh --port 27018
Current Mongosh Log ID: 674bd826acaea54740893bf7
Connecting to:          mongodb://127.0.0.1:27018/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.3.4
Using MongoDB:          8.0.3
Using Mongosh:          2.3.4

For mongosh info see: https://www.mongodb.com/docs/mongodb-shell/

------
   The server generated these startup warnings when booting
   2024-11-30T22:28:50.463-05:00: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
   2024-11-30T22:28:50.463-05:00: This server is bound to localhost. Remote systems will be unable to connect to this server. Start the server with --bind_ip <address> to specify which IP addresses it should serve responses from, or with --bind_ip_all to bind to all interfaces. If this behavior is desired, start the server with --bind_ip 127.0.0.1 to disable this warning
------
replicaSetTorneo [direct: primary] test> use pruebaReplicacion;
switched to db pruebaReplicacion
replicaSetTorneo [direct: primary] pruebaReplicacion> db.getMongo().setReadPref('secondaryPreferred');

replicaSetTorneo [direct: primary] pruebaReplicacion> db.test.find();
[
  {
    _id: ObjectId('674bc86cca20b7c2b9893bf8'),
    mensaje: 'Prueba insercion datos nodo primario'
  },
  {
    _id: ObjectId('674bd9079f44e213e5893bf8'),
    mensaje: 'Prueba insercion datos nodo primario'
  }
]






