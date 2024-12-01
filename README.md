Crearemos una carpeta C:\MongodbReplication
Dentro de ella se encuentran los archivos insertData.js replicationSetup.js
ademas de tres carpetas en donde se almacenan las replicas : data1, data2, data3

Dentro de cmd o powershell abre tres terminales separadas en ellas inicializa Replicaset para cada uno de los puertos 
mongod --port 27017 --dbpath "C:\MongodbReplication\data1" --replSet replicaSetTorneo
mongod --port 27018 --dbpath "C:\MongodbReplication\data2" --replSet replicaSetTorneo
mongod --port 27019 --dbpath "C:\MongodbReplication\data3" --replSet replicaSetTorneo

Estas terminales no se cierran 

Dentro de otra terminal direcciona el proyecto C:\MongodbReplication
Y luego ejecuta la conexion hacia el puerto primario: mongosh --port 27017

Para cargar y ejecutar las configuraciones dentro del archivo usa este comando : load("replicationSetup.js");
Si esto no funciona, ejecutamos replicaset asi:

rs.initiate({
  _id: "replicaSetTorneo",
  members: [
    { _id: 0, host: "localhost:27017" },
    { _id: 1, host: "localhost:27018" },
    { _id: 2, host: "localhost:27019" }
  ]
});

verificamos el estado: rs.status();


/////Pruebas de replicacion
1.Insertar datos en la base de datos conectada al primario (puerto 27017): 
Usa el comando... use pruebaReplicacion;
 db.test.insertOne({ mensaje: "Prueba insercion datos nodo primario" });

2. Verificar los datos en nodos secundarios, ingresar al nodo secundario puerto 27018 ... mongosh --port 27018
verificar que estemos en la bd adecuada.... use pruebaReplicacion;
 usar el siguiente comando.....  db.getMongo().setReadPref('secondaryPreferred');
 Luego inserta el comando ....  db.test.find();
 Esto deberia mostrar la insercion que se hizo en el nodo primario replicada en el secundario

IMPORTANTE!!!
Si por alguna razon los tres nodos aparecen como secundarios puede ser que no asignada la prioridad correta, intenta lo siguiente

cfg = rs.conf();

cfg.members[0].priority = 2;  // Nodo 0 con mayor prioridad
cfg.members[1].priority = 1;  // Nodo 1 con prioridad estándar
cfg.members[2].priority = 1;  // Nodo 2 con prioridad estándar

rs.reconfig(cfg);

3. simular un fallo en el nodo principal
Es necesario detener el puerto 27017 (nodo principal) para ello se abre una nueva terminal/sino funciona el comando ejecuta como administrador

IMPORTANTE! verifica los procesos y el puerto adecuado a detener con ....  netstat -ano | findstr :2701
ubica el PID y deten el proceso con .... taskkill /PID 20004 /F
verifica que el puerto se detuvo ... mongosh --port 27017  
(Deberia aparecer algo similiar a  ECONNREFUSED)
Ahora cualquiera de los otros dos puertos disponibles podria tomar el rol de nodo primario 

4. Después de reiniciar el nodo del puerto 27017, verifica que los datos estén sincronizados en todos los nodos, Los datos ingresados deberian estar en los nodos 27018 y 27019
Repetimos la prueba #2 para comprobar

5. Pruebas de lectura desde nodos seundarios, esto se hace posible a traves de 
verificar que estemos en la bd adecuada.... use pruebaReplicacion;
 usar el siguiente comando.....  db.getMongo().setReadPref('secondaryPreferred');
 Luego inserta el comando ....  db.test.find();
 Esto deberia mostrar la informacion de los nodos secundarios 
