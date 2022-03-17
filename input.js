const {UP, DOWN, LEFT, RIGHT, MSG1, MSG2, MSG3} = require("./constants");

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  }
  if (key === "w") {
    connection.write(UP)
  }
  if (key === "a") {
    connection.write(LEFT)
  }
  if (key === "s") {
    connection.write(DOWN)
  }
  if (key === "d") {
    connection.write(RIGHT)
  }
  if (key === "t") {
    connection.write(MSG1)
  }
  if (key === "r") {
    connection.write(MSG2)
  }
  if (key === "b") {
    connection.write(MSG3)
  }
};

module.exports = setupInput;





