import { log } from 'console';
import Tarologo from '../models/Tarologo.js';

export const getTarologo = async (req, res) => {
	// Busca todos os tarólogos no banco de dados
	try {
		const tarologos = await Tarologo.find();
		res.status(200).json(tarologos);
	} catch (error) {
		res.status(500).json({ message: 'Erro ao buscar tarólogos', error });
	}
};

export const getTarologoById = async (req, res) => {
	// Busca um tarólogo pelo ID no banco de dados
	const { id } = req.params;
	try {
		const tarologo = await Tarologo.findById(id);
		if (!tarologo) {
			return res.status(404).json({ message: 'Tarólogo não encontrado' });
		}
		res.status(200).json(tarologo);
	} catch (error) {
		res.status(500).json({ message: 'Erro ao buscar tarólogo', error });
	}
};

export const createTarologo = async (req, res) => {
	// Cria um novo tarólogo no banco de dados
	const newTarologo = new Tarologo(req.body);
	try {
		const savedTarologo = await newTarologo.save();
		res.status(201).json(savedTarologo);
	} catch (error) {
		res.status(500).json({ message: 'Erro ao criar tarólogo', error });
		console.log(req.body);
	}
};

export const updateTarologo = async (req, res) => {
	// Atualiza um tarólogo existente no banco de dados
	const { id } = req.params;
	try {
		const updatedTarologo = await Tarologo.findByIdAndUpdate(id, req.body, {
			new: true,
		});
		if (!updatedTarologo) {
			return res.status(404).json({ message: 'Tarólogo não encontrado' });
		}
		res.status(200).json(updatedTarologo);
	} catch (error) {
		res.status(500).json({ message: 'Erro ao atualizar tarólogo', error });
	}
};

export const deleteTarologoById = async (req, res) => {
	// Deleta um tarólogo do banco de dados
	const { id } = req.params;
	try {
		const deletedTarologo = await Tarologo.findByIdAndDelete(id);
		if (!deletedTarologo) {
			return res.status(404).json({ message: 'Tarólogo não encontrado' });
		}
		res.status(200).json({ message: 'Tarólogo deletado com sucesso' });
	} catch (error) {
		res.status(500).json({ message: 'Erro ao deletar tarólogo', error });
	}
};

export const deleteAllTarologos = async (req, res) => {
	try {
		await Tarologo.deleteMany({});
		res
			.status(200)
			.json({ message: 'Todos os tarólogos foram deletados com sucesso' });
	} catch (error) {
		res.status(500).json({ message: 'Erro ao deletar tarólogos', error });
	}
};
