// here's what we gotta do:
// 1) start HTTP server that serves up our last wattage
// 2) hook up to waterrower (find COM port, etc)
// 3) probably do some dumping to text
var {WaterRower} = require('waterrower');
let waterrower = new WaterRower();
const http = require('http');

waterrower.on('initialized', () => {
  waterrower.reset();

    
  waterrower.on('data', d => {
    // access the value that just changed using d
    // or access any of the other datapoints using waterrower.readDataPoint('<datapointName>');
    console.log(d);
  });
})

const requestHandler = (request, response) => {
  response.end("Your last wattage was " + Math.floor(Math.random() * 300));
}

const port = 2702;
const server = http.createServer(requestHandler, (err) => {
  if(err) {
    return console.log("something bad happened ", err);
  }
  console.log("server is listening on port http://localhost:" + port);
});
server.listen(port);

console.log("hi!");