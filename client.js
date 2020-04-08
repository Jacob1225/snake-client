const net = require('net');
/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: "135.23.222.148",
    port: 50541
  });

  conn.on('data', (data) => {
    console.log("successfully connected to game server");
    conn.write("Name: JC");

  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
}; 

module.exports = connect;