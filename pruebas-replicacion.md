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

replicaSetTorneo [direct: primary] rs.initiate({
...   _id: "replicaSetTorneo",
...   members: [
...     { _id: 0, host: "localhost:27017" },
...     { _id: 1, host: "localhost:27018" },
...     { _id: 2, host: "localhost:27019" }
...   ]
... });
replicaSetTorneo [direct: primary] pruebaReplicacion> rs.status();
{
  set: 'replicaSetTorneo',
  date: ISODate('2024-12-01T03:38:02.956Z'),
  myState: 1,
  term: Long('2'),
  syncSourceHost: '',
  syncSourceId: -1,
  heartbeatIntervalMillis: Long('2000'),
  majorityVoteCount: 2,
  writeMajorityCount: 2,
  votingMembersCount: 3,
  writableVotingMembersCount: 3,
  optimes: {
    lastCommittedOpTime: { ts: Timestamp({ t: 1733024275, i: 1 }), t: Long('2') },
    lastCommittedWallTime: ISODate('2024-12-01T03:37:55.711Z'),
    readConcernMajorityOpTime: { ts: Timestamp({ t: 1733024275, i: 1 }), t: Long('2') },
    appliedOpTime: { ts: Timestamp({ t: 1733024275, i: 1 }), t: Long('2') },
    durableOpTime: { ts: Timestamp({ t: 1733024275, i: 1 }), t: Long('2') },
    writtenOpTime: { ts: Timestamp({ t: 1733024275, i: 1 }), t: Long('2') },
    lastAppliedWallTime: ISODate('2024-12-01T03:37:55.711Z'),
    lastDurableWallTime: ISODate('2024-12-01T03:37:55.711Z'),
    lastWrittenWallTime: ISODate('2024-12-01T03:37:55.711Z')
  },
  lastStableRecoveryTimestamp: Timestamp({ t: 1733024233, i: 1 }),
  electionCandidateMetrics: {
    lastElectionReason: 'electionTimeout',
    lastElectionDate: ISODate('2024-12-01T03:28:54.079Z'),
    electionTerm: Long('2'),
    lastCommittedOpTimeAtElection: { ts: Timestamp({ t: 0, i: 0 }), t: Long('-1') },
    lastSeenWrittenOpTimeAtElection: { ts: Timestamp({ t: 1733023420, i: 1 }), t: Long('1') },
    lastSeenOpTimeAtElection: { ts: Timestamp({ t: 1733023420, i: 1 }), t: Long('1') },
    numVotesNeeded: 2,
    priorityAtElection: 2,
    electionTimeoutMillis: Long('10000'),
    numCatchUpOps: Long('0'),
    newTermStartDate: ISODate('2024-12-01T03:28:55.269Z'),
    wMajorityWriteAvailabilityDate: ISODate('2024-12-01T03:28:55.367Z')
  },
  members: [
    {
      _id: 0,
      name: 'localhost:27017',
      health: 1,
      state: 1,
      stateStr: 'PRIMARY',
      uptime: 583,
      optime: { ts: Timestamp({ t: 1733024275, i: 1 }), t: Long('2') },
      optimeDate: ISODate('2024-12-01T03:37:55.000Z'),
      optimeWritten: { ts: Timestamp({ t: 1733024275, i: 1 }), t: Long('2') },
      optimeWrittenDate: ISODate('2024-12-01T03:37:55.000Z'),
      lastAppliedWallTime: ISODate('2024-12-01T03:37:55.711Z'),
      lastDurableWallTime: ISODate('2024-12-01T03:37:55.711Z'),
      lastWrittenWallTime: ISODate('2024-12-01T03:37:55.711Z'),
      syncSourceHost: '',
      syncSourceId: -1,
      infoMessage: '',
      electionTime: Timestamp({ t: 1733023734, i: 1 }),
      electionDate: ISODate('2024-12-01T03:28:54.000Z'),
      configVersion: 3,
      configTerm: 2,
      self: true,
      lastHeartbeatMessage: ''
    },
    {
      _id: 1,
      name: 'localhost:27018',
      health: 1,
      state: 2,
      stateStr: 'SECONDARY',
      uptime: 551,
      optime: { ts: Timestamp({ t: 1733024275, i: 1 }), t: Long('2') },
      optimeDurable: { ts: Timestamp({ t: 1733024275, i: 1 }), t: Long('2') },
      optimeWritten: { ts: Timestamp({ t: 1733024275, i: 1 }), t: Long('2') },
      optimeDate: ISODate('2024-12-01T03:37:55.000Z'),
      optimeDurableDate: ISODate('2024-12-01T03:37:55.000Z'),
      optimeWrittenDate: ISODate('2024-12-01T03:37:55.000Z'),
      lastAppliedWallTime: ISODate('2024-12-01T03:37:55.711Z'),
      lastDurableWallTime: ISODate('2024-12-01T03:37:55.711Z'),
      lastWrittenWallTime: ISODate('2024-12-01T03:37:55.711Z'),
      lastHeartbeat: ISODate('2024-12-01T03:38:01.598Z'),
      lastHeartbeatRecv: ISODate('2024-12-01T03:38:01.598Z'),
      pingMs: Long('0'),
      lastHeartbeatMessage: '',
      syncSourceHost: 'localhost:27017',
      syncSourceId: 0,
      infoMessage: '',
      configVersion: 3,
      configTerm: 2
    },
    {
      _id: 2,
      name: 'localhost:27019',
      health: 1,
      state: 2,
      stateStr: 'SECONDARY',
      uptime: 527,
      optime: { ts: Timestamp({ t: 1733024275, i: 1 }), t: Long('2') },
      optimeDurable: { ts: Timestamp({ t: 1733024275, i: 1 }), t: Long('2') },
      optimeWritten: { ts: Timestamp({ t: 1733024275, i: 1 }), t: Long('2') },
      optimeDate: ISODate('2024-12-01T03:37:55.000Z'),
      optimeDurableDate: ISODate('2024-12-01T03:37:55.000Z'),
      optimeWrittenDate: ISODate('2024-12-01T03:37:55.000Z'),
      lastAppliedWallTime: ISODate('2024-12-01T03:37:55.711Z'),
      lastDurableWallTime: ISODate('2024-12-01T03:37:55.711Z'),
      lastWrittenWallTime: ISODate('2024-12-01T03:37:55.711Z'),
      lastHeartbeat: ISODate('2024-12-01T03:38:01.597Z'),
      lastHeartbeatRecv: ISODate('2024-12-01T03:38:01.598Z'),
      pingMs: Long('0'),
      lastHeartbeatMessage: '',
      syncSourceHost: 'localhost:27018',
      syncSourceId: 1,
      infoMessage: '',
      configVersion: 3,
      configTerm: 2
    }
  ],
  ok: 1,
  '$clusterTime': {
    clusterTime: Timestamp({ t: 1733024275, i: 1 }),
    signature: {
      hash: Binary.createFromBase64('AAAAAAAAAAAAAAAAAAAAAAAAAAA=', 0),
      keyId: Long('0')
    }
  },
  operationTime: Timestamp({ t: 1733024275, i: 1 })
}
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

