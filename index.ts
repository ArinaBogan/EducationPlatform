import { config } from 'dotenv';
import app from './src/app';

config();

const port = process.env.PORT;

app.listen(port, () => console.log(`server is run on port ${port} `));
