const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

const PORT = 3000;

app.use(cors());

app.use(express.json());

app.use(
  express.static(
    path.join(__dirname, '../public')
  )
);

let inventory = [
  {
    id: 1,
    container: 'container 1',
    status: 'LOW',
    quantity: 114,
    capacity: 202
  },
  {
    id: 2,
    container: 'container 2',
    status: 'LOW STOCK',
    quantity: 4,
    capacity: 15
  },
  {
    id: 3,
    container: 'container 3',
    status: 'EMPTY',
    quantity: 0,
    capacity: 15
  }
];

app.get('/api/inventory', (req, res) => {
  res.json(inventory);
});

app.get('/', (req, res) => {
  res.sendFile(
    path.join(__dirname, '../public/index1.html')
  );
});
app.get('/test',(req, res) => {
  res.send('Test route is working!');
});

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});