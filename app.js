'use strict';

require('./mongo/db/config');
const http = require('http');
const CRUD = require('./mongo/CRUD');

// const _user = {
//   name: 'Leandro Fortaleza Neves Bomfim',
// 	email: 'leandro@gmail.com',
// 	cpf: '949.027.022-03',
// 	estado: 'Rio Grande do Norte',
// 	senha: '123456'
// }

http.createServer((req,res) => {
	switch (req.url) {
		case '/api/userTerapeuta/create':
			CRUD.create(req,res);
			console.log('ta indo');
			break;
		default:
			res.end("rota não encontrada");
			break;
	}
}).listen(3000, () => console.log('Rodando na porta 3000'));
