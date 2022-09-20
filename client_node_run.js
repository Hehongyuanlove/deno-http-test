
const http = require("http")

let headers  = {
  "Content-Type": "multipart/form-data; boundary=--------------------------785649570449051862383470",
  "user-agent": "QiniuNodejs/7.7.0 (Windows_NT; win32; x64; )",
  "connection": "keep-alive",
  "accept": "application/json",
  "accept-encoding": "gzip, deflate"
}



const finalOptions = {
  host: "127.0.0.1",
  path: "/",
  method: "POST",
  port: 8000,
  headers
}

let req = http.request(finalOptions, (res) => {
  res.setEncoding('utf8');
  var data = "";
  res.on("data", function (chunk) {
    data += chunk;
  })
  res.on('end', function () {
    console.log(data.toString())
  })

});

req.end();

