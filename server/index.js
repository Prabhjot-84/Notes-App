import express from 'express';
import Routes from './routes/api.js'

const app = express();

const PORT = 9000;

app.use(express.json());

app.use('/', Routes);

app.listen(PORT, () => {
    console.log(`Server is successfully running on PORT ${PORT}`);
});
