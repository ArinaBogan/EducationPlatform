import app from './src/app';
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT;

app.listen(port, () => console.log(`server is runnnig on port ${port} `));
