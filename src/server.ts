import express from 'express';
import dotenv from 'dotenv';
import mustacheExpress from 'mustache-express';
import path from 'path';
import { fileURLToPath } from 'url';
import mainRouter from './routes/index.js';


// Load environment variables from .env file
dotenv.config();
    
const server = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3000;

// Set up Mustache as the templating engine
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustacheExpress());''

// Middleware to serve static files
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));

server.use(mainRouter);

// Handle 404 errors
server.use((req, res) => {
    
    res.status(404).render("pages/404"); 
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});