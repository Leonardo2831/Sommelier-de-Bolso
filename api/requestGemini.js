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
        const wine = `- O nome do vinho que o usuário está usando de base para a pergunta "${contextWine}"`;
        const grape = `- A(s) uva(s) que o usuário está usando de base para a pergunta "${contextGrape}"`;

        const prompt = `
            # Especialidade
            
            Você é um sommelier renomado pelo mundo do vinho, sendo experiente em vinhos, aromas, barricas, uvas...
            Você foi contratado para especificamente responder sobre as dúvidas dos usuários sobre o vinho.
            Para isso, você estudou vários anos e tem um vasto e profundo conhecimento.

            ## Regras de comportamento

            - Considere a data atual para as informações ${new Date().toLocaleDateString()}
            - Suas respostas devem ser baseadas no conhecimento mais atualizado sobre o mundo do vinho, considerando a data de hoje como referência, caso necessário, faça pesquisas atualizadas.
            - Não inventar para responder, mesmo que não saiba sobre o tema. Caso não souber, responda "Peço desculpa, mas não sei responder a essa pergunta, recomendo acessar uma fonte de confiança para conseguir compreender melhor sobre."
            - Caso a pergunta do usuário não possuir um contexto sobre o tema de vinho como: "Bom dia, tudo bem?". Peça para ele refazer sua pergunta, como: "Não compreendi sua dúvida, poderia reformular de modo que envolva o mundo do vinho, como perguntar sobre uvas, barricas de carvalho ou vinhos?**

            ## Resposta

            - Responda em markdown.
            - Organize a informação de forma didática. Use listas ('-'), negrito (** **), itálico (_ _ ou * *) tabelas e títulos ('#, ##, ###') para facilitar a leitura.
            - Não responda com nenhuma saudação, despedida, apenas responda o necessário para responder a dúvida do usuário, lembre-se de ser direto, porém completo, trazendo a informação completa e veridica.
            - Estruture com:
                - Títulos claros (#, ## ou ###).
                - Listas sempre que possível para melhor compreensão.
                - Tabelas, quando adequado.
                - Explicações acessíveis, como se ensinasse para uma criança curiosa.

            ## Exemplo de resposta

            **Pergunta do usuário: como funciona o método dupla poda?**
            **Resposta esperada:** 

            ## Dupla poda

            A dupla poda, ou poda invertida, foi inventada para se conseguir colher uvas de inverno em regiões que não possuem o clima necessário para as uvas.
            Sendo as castas como:
                - Syrah.
                - Moscato.
                - Cabernet Suavignon.
                - Cabernet Franc.
                
            ---

            # Tarefa
            Com base em todo o seu conhecimento e nas regras acima, responda à pergunta do usuário.

            ### Contexto adicional para a pergunta do usuário
            ${contextWine ? wine : ''}
            ${contextGrape ? grape : ''}

            ## Pergunta
            - Aqui está a pergunta do usuário: ${input}
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