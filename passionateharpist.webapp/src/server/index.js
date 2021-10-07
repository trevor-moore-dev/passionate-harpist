import express from 'express';
import { renderer } from './renderer';

const PORT = process.env.PORT || 3000;

// initialize the application and create the routes
const app = express();
app.get('/', renderer);
app.get('/contact', renderer);
app.get('/gallery', renderer);
app.get('/social-media', renderer);
app.use(express.static('build'));
app.use(express.static('build-server'));

// start the app
app.listen(PORT, () => console.log("Passionate Harpist listening on port " + PORT + "..."));