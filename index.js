'use strict';

const express = require('express');
const highwayhash = require('highwayhash');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';
const input = Buffer.from('A storage backed by high performance NVMe SSDs that provide unmatched IOPS rates with 3X replication across multiple availability zones, providing you data durability that is prepared to survive any disaster');

// App
const app = express();
app.get('/', (req, res) => {
  let key = require('crypto').randomBytes(32);
  const hashAsString = highwayhash.asString(key, input);
  res.send(`this is a hash of provided string: ${hashAsString}\n`);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);