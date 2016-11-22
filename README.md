# Example of using [sttp](http://github.com/alikhil/sttp) protocol

### Tutorial


```js
var DataPacker = require("sttp").DataPacker;

var data = { name: "Sergey", univeristy: "Innopolis University" };
var packer = new DataPacker(aesKey);

var pack = packer.pack(data);

// transfer using some channel
// init packer on the same way using the same aesKey(use AuthDataPacker to send aesKey)

var unpackedData = packer.unpack(pack);

```

[Read more](http://github.com/alikhil/sttp).

### Quick start
```sh
git clone https://github.com/jeaced/node-server/
cd node-server
npm install
node .
```
