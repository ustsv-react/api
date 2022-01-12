const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.get('/api/users', (req, res) => {
  res.status(200).send("hello world from ustsv.");
});

app.listen(port, () => {
  console.log(`Express Server is running on port ${port}`);
});
