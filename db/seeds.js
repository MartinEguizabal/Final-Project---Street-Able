2017-11-05T22:42:38.488+0000 I CONTROL  [initandlisten] MongoDB starting : pid=63444 port=27017 dbpath=/data/db 64-bit host=MacBook-Air.local
2017-11-05T22:42:38.489+0000 I CONTROL  [initandlisten] db version v3.4.9
2017-11-05T22:42:38.489+0000 I CONTROL  [initandlisten] git version: 876ebee8c7dd0e2d992f36a848ff4dc50ee6603e
2017-11-05T22:42:38.489+0000 I CONTROL  [initandlisten] OpenSSL version: OpenSSL 1.0.2l  25 May 2017
2017-11-05T22:42:38.489+0000 I CONTROL  [initandlisten] allocator: system
2017-11-05T22:42:38.489+0000 I CONTROL  [initandlisten] modules: none
2017-11-05T22:42:38.489+0000 I CONTROL  [initandlisten] build environment:
2017-11-05T22:42:38.489+0000 I CONTROL  [initandlisten]     distarch: x86_64
2017-11-05T22:42:38.489+0000 I CONTROL  [initandlisten]     target_arch: x86_64
2017-11-05T22:42:38.489+0000 I CONTROL  [initandlisten] options: {}
2017-11-05T22:42:38.491+0000 I -        [initandlisten] Detected data files in /data/db created by the 'wiredTiger' storage engine, so setting the active storage engine to 'wiredTiger'.
2017-11-05T22:42:38.491+0000 I STORAGE  [initandlisten] wiredtiger_open config: create,cache_size=1536M,session_max=20000,eviction=(threads_min=4,threads_max=4),config_base=false,statistics=(fast),log=(enabled=true,archive=true,path=journal,compressor=snappy),file_manager=(close_idle_time=100000),checkpoint=(wait=60,log_size=2GB),statistics_log=(wait=0),
2017-11-05T22:42:39.907+0000 I CONTROL  [initandlisten] 
2017-11-05T22:42:39.907+0000 I CONTROL  [initandlisten] ** WARNING: Access control is not enabled for the database.
2017-11-05T22:42:39.907+0000 I CONTROL  [initandlisten] **          Read and write access to data and configuration is unrestricted.
2017-11-05T22:42:39.907+0000 I CONTROL  [initandlisten] 
2017-11-05T22:42:39.907+0000 I CONTROL  [initandlisten] 
2017-11-05T22:42:39.907+0000 I CONTROL  [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
2017-11-05T22:42:39.919+0000 I FTDC     [initandlisten] Initializing full-time diagnostic data capture with directory '/data/db/diagnostic.data'
2017-11-05T22:42:39.920+0000 I NETWORK  [thread1] waiting for connections on port 27017
2017-11-05T22:43:16.733+0000 I NETWORK  [thread1] connection accepted from 127.0.0.1:63328 #1 (1 connection now open)
2017-11-05T22:43:16.749+0000 I NETWORK  [conn1] received client metadata from 127.0.0.1:63328 conn1: { driver: { name: "nodejs", version: "2.2.31" }, os: { type: "Darwin", name: "darwin", architecture: "x64", version: "16.7.0" }, platform: "Node.js v8.6.0, LE, mongodb-core: 2.1.15" }
2017-11-05T22:43:39.933+0000 I -        [conn1] end connection 127.0.0.1:63328 (1 connection now open)
2017-11-05T22:43:56.818+0000 I NETWORK  [thread1] connection accepted from 127.0.0.1:63497 #2 (1 connection now open)
2017-11-05T22:43:56.833+0000 I NETWORK  [conn2] received client metadata from 127.0.0.1:63497 conn2: { driver: { name: "nodejs", version: "2.2.31" }, os: { type: "Darwin", name: "darwin", architecture: "x64", version: "16.7.0" }, platform: "Node.js v8.6.0, LE, mongodb-core: 2.1.15" }
2017-11-05T22:44:22.045+0000 I NETWORK  [thread1] connection accepted from 127.0.0.1:63618 #3 (2 connections now open)
2017-11-05T22:44:22.047+0000 I NETWORK  [conn3] received client metadata from 127.0.0.1:63618 conn3: { driver: { name: "nodejs", version: "2.2.31" }, os: { type: "Darwin", name: "darwin", architecture: "x64", version: "16.7.0" }, platform: "Node.js v8.6.0, LE, mongodb-core: 2.1.15" }
2017-11-05T22:58:09.516+0000 I -        [conn3] end connection 127.0.0.1:63618 (2 connections now open)
2017-11-05T22:58:09.516+0000 I -        [conn2] end connection 127.0.0.1:63497 (2 connections now open)
2017-11-05T23:00:03.902+0000 I NETWORK  [thread1] connection accepted from 127.0.0.1:51337 #4 (1 connection now open)
2017-11-05T23:00:03.917+0000 I NETWORK  [conn4] received client metadata from 127.0.0.1:51337 conn4: { driver: { name: "nodejs", version: "2.2.31" }, os: { type: "Darwin", name: "darwin", architecture: "x64", version: "16.7.0" }, platform: "Node.js v8.6.0, LE, mongodb-core: 2.1.15" }
2017-11-05T23:01:13.653+0000 I -        [conn4] end connection 127.0.0.1:51337 (1 connection now open)
2017-11-05T23:09:39.935+0000 I CONTROL  [signalProcessingThread] got signal 2 (Interrupt: 2), will terminate after current cmd ends
2017-11-05T23:09:39.937+0000 I NETWORK  [signalProcessingThread] shutdown: going to close listening sockets...
2017-11-05T23:09:39.937+0000 I NETWORK  [signalProcessingThread] closing listening socket: 6
2017-11-05T23:09:39.938+0000 I NETWORK  [signalProcessingThread] closing listening socket: 7
2017-11-05T23:09:39.938+0000 I NETWORK  [signalProcessingThread] removing socket file: /tmp/mongodb-27017.sock
2017-11-05T23:09:39.939+0000 I NETWORK  [signalProcessingThread] shutdown: going to flush diaglog...
2017-11-05T23:09:39.940+0000 I FTDC     [signalProcessingThread] Shutting down full-time diagnostic data capture
2017-11-05T23:09:39.963+0000 I STORAGE  [signalProcessingThread] WiredTigerKVEngine shutting down
2017-11-05T23:09:40.133+0000 I STORAGE  [signalProcessingThread] shutdown: removing fs lock...
2017-11-05T23:09:40.134+0000 I CONTROL  [signalProcessingThread] now exiting
2017-11-05T23:09:40.134+0000 I CONTROL  [signalProcessingThread] shutting down with code:0
