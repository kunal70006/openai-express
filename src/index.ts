import * as dotenv from 'dotenv';
import express from 'express';
import * as bodyParser from 'body-parser';
import { Configuration, OpenAIApi } from 'openai';
import cors from 'cors';

dotenv.config();
const configuration = new Configuration({
  apiKey: process.env.KEY,
});
const openai = new OpenAIApi(configuration);
const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(cors());

async function aiRes(promptText: string) {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: promptText,
    temperature: 0,
    max_tokens: 60,
    top_p: 1,
    frequency_penalty: 0.5,
    presence_penalty: 0,
  });
  return response.data;
}

router.post('/api', async (req, res) => {
  const response = await aiRes(req.body.prompt);
  res.json(response);
});

const port = process.env.PORT || 3000;

app.listen(port);
app.use('/', router);
