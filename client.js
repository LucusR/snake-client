const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: "165.227.47.243",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log(data)
  });

  conn.on("connect", () => {
    console.log("Sucessfully connected to game server")
    conn.write("Name: LUC") 
    setTimeout(() => {
      conn.write("Move: up");}, 1000);
});

return conn;

};

module.exports = connect;