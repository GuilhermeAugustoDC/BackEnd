import app from './app.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL;

mongoose
	.connect(DATABASE_URL)
	.then(() => console.log('Conectado ao DB'))
	.catch((err) => console.error('Erro ao conectar ao DB', err));

app.listen(PORT, () => {
	console.log(`Servidor rodando na porta ${PORT}`);
});
