const net = require('net');
const stdin = process.stdin;
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
  });


  conn.on('connect', () => {
    console.log("You are connected");
    console.log("Name: JC"); 
    conn.write("Name: JC"); 
    
  });

  conn.on('connect', () => {
    conn.write("Say: Do you like me?")
  });
  // interpret incoming data as text
  conn.setEncoding('utf8'); 
  conn.on('data', (data) => {
    console.log(data);
  });
  return conn;
}

module.exports = {connect};