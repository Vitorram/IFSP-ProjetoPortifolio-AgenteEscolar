const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async create(req, res) {
    const { nome, email } = req.body;

    try {
      const professor = await prisma.professores.create({
        data: {
          nome,
          email,
        },
      });

      return res.status(201).json(professor);
    } catch (error) {
      if (error.code === 'P2002') { 
        return res.status(400).json({ error: 'Email já cadastrado' });
      }
      return res.status(500).json({ error: 'Erro ao criar professor', details: error.message });
    }
  },
};
