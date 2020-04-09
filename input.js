const stdin = process.stdin;
let connection ;

const setupInput = (conn) => {
  connection = conn;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  handleUserInput();
  return stdin;
};

const handleUserInput = () => {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    } 
  });
  stdin.on('data', (key) => {
    if (key === 'a') {
      connection.write('Move: left');
    }
    if (key === 's') {
      connection.write('Move: down');
    } 
    if (key === 'd') {
      connection.write('Move: right');
    }
    if (key === 'w') {
      connection.write('Move: up');
    }
  });
  return stdin
}



module.exports = {setupInput};
