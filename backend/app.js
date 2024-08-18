const express = require('express');
const cors = require('cors');
const { db } = require('./db/db');
const fs = require('fs/promises'); // Importar la versión asíncrona de fs
const path = require('path');
const app = express();

require('dotenv').config();

const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());  


const routesPath = path.join(__dirname, 'routes');

const loadRoutes = async () => {
  try {
    const files = await fs.readdir(routesPath);
    for (const file of files) {
      const routePath = path.join(routesPath, file);
      const route = require(routePath);
      app.use('/api/v1', route);
    }
  } catch (error) {
    console.error('Error al cargar rutas:', error);
  }
};

const server = async () => {
  try {
    await db();
    await loadRoutes();
    app.listen(PORT, () => {
      console.log('listening to port:', PORT);
    });
  } catch (error) {
    console.error('Error en el servidor:', error);
  }
};

server();