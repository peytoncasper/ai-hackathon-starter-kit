const express = require('express')
const bodyParser = require('body-parser');
const {PineconeClient} = require("@pinecone-database/pinecone");
const { Configuration, OpenAIApi } = require("openai");
const {join} = require("path");

const app = express()
const port = 3001

app.use(express.static(join(__dirname, '../frontend/build')));
app.use(bodyParser.json({ extended: true }));

const pinecone = new PineconeClient();



const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


async function searchVector(vector) {
  const index = pinecone.Index("test");
  const queryRequest = {
    vector: vector,
    topK: 3,
    includeValues: true,
    includeMetadata: true,
  };
  return index.query({queryRequest})
}

async function getEmbedding(query) {
  const res = await openai.createEmbedding({
    model: "text-embedding-ada-002",
    input: [query],
  }).catch(function (error) {
    console.log(error.toJSON());
  });
  return res.data.data[0].embedding
}

app.post('/query', async (req, res) => {
  const query = req.body.query_string
  const vector = await getEmbedding(query)
  const results = await searchVector(vector)

  res.send(results.matches.map(x => {
    return {
      id: x.id,
      score: x.score
    }
  }))
})



app.listen(port, () => {
  pinecone.init({
    environment: process.env.PINECONE_ENVIRONMENT,
    apiKey: process.env.PINECONE_API_KEY,
  });
  console.log(`Example app listening on port ${port}`)
})
