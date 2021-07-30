import * as express from 'express';
import * as morgan from 'morgan';
import apiRouter from './routes';

const app = express();

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', apiRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
