import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const app = express();
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.API_KEY_GEMINI);

app.post('/api/requestGemini', async (req, res) => {
    if(req.method !== 'POST'){
        return res.status(405).end(`O método não ${req.method} não é permitido!`);
    }

    const { input, contextWine, contextGrape } = req.body;

    if(!input){
        return res.status(400).json({ message: "Faltando o texto de entrada!" });
    }

    const modelFlash = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    try {
        const wine = `- O nome do vinho que o usuário está usando de base para a pergunta "${input}"`;
        const grape = `- A(s) uva(s) que o usuário está usando de base para a pergunta "${input}"`;
        const prompt = `
            - Aqui está a pergunta do usuário: ${input} 
            ${contextWine ? wine : ''}
            ${contextGrape ? grape : ''}
        `;

        const result = await modelFlash.generateContent(prompt);
        const response = result.response;

        return res.status(200).json({ message: response.text() });
    } catch (error) {
        console.error("Erro na requisição para a IA:", error);
        return res.status(500).json({ error: "Erro interno do servidor" });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log('servidor na porta ' + PORT));