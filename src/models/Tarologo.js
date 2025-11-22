import mongoose from 'mongoose';

const tarologoSchema = new mongoose.Schema({
	
	nome: { type: String, required: true },
	email: { type: String, required: true },
	whatsapp: { type: String, required: true },
	telegram: { type: String, required: false },
	instagram: { type: String, required: false },
	youtube: { type: String, required: false },
	tiktok: { type: String, required: false },
	facebook: { type: String, required: false },

});

const Tarologo = mongoose.model('Tarologo', tarologoSchema);

export default Tarologo;
