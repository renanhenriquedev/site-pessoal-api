//Como iniciar uma aplicação Back End - chamar as portas da aplicação atraves do dotenv que é uma biblioteca para gerenciar as variavéis de ambiente
require('./config/dotenv');


// chamar o express para que possamos dar o start no nosso servidor 
const express = require('express')
const { initDatabase } = require('./config/db');
const cors = require('cors');


const experienciasRoute = require('./routes/experienciasRoute');
const portfolioRoute = require('./routes/projetosRoute')   ;
const informacoesRoute = require('./routes/informacoesRoute');
const authRoute = require('./routes/authRoute');


const app = express()

const port = process.env.APP_PORT || 5000;

// Criando rota principal

app.get('/', (req, res) => {
    res.send('Seja bem-vindo à API do Meu Site Pessoal!');
});

app.use(cors())
app.use(express.json());

// todas as requisições que estiverem indo nessa rota vão passar pelo experienciasRoute
app.use('/api/experiencias', experienciasRoute);

app.use('/api/portfolio', portfolioRoute);

app.use('/api/informacoes', informacoesRoute);

app.use('/api/auth', authRoute)

// Colocando o servidor para rodar
initDatabase();

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
    console.log(`HOST: ${process.env.DB_HOST}`);
    console.log(`HOST: ${process.env.USER}`);
    console.log(`HOST: ${process.env.DB_PASS}`);
    console.log(`HOST: ${process.env.DB_NAME}`);

})