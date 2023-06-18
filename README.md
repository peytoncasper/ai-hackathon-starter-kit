# 🛣️ The Fork in the Road 🍴

Building an application leveraging Language Learning Models (LLMs) poses an important decision to make. If you're developing an application using off-the-shelf OpenAI API capabilities like querying GPT-3.5 or GPT-4, you can comfortably rely on the Node.js example application. If you're looking to go down a more custom path, then the Python example application provides a better starting point.

## 1️⃣ Node.js-React App: Your Fast Lane 🚀

This starter app serves as an excellent base for web apps leveraging readily available APIs such as OpenAI, ElevenLabs, and Pinecone. 

📦 What's in the box? 
A nimble Node.js Express app that embeds data with OpenAI, stores that info in Pinecone, and offers a simple frontend to return top results for a given query. 

## 2️⃣ Python-React App: The Road Less Traveled 🌳

If your ambitions are set towards leveraging Open Source Software (OSS) models such as Falcon LLM, models on HuggingFace, LangChain, or custom models that aren't wrapped neatly in an API, then this is your starting point. This approach requires more legwork but grants you maximum flexibility in implementation.

A Python backend is a robust choice for a hackathon setting, it frees you from the nitty-gritty details of tokenizing input, pickling the model, and more. Thanks to Python libraries like HuggingFace, most of this is already handled for you.

🎁 What's in the box? 
A streamlined Python Flask App that exposes Falcon LLM via an API endpoint, coupled with a React App allowing users to submit a question and receive a response from Falcon LLM.

# 🎈 Extras 🌈

In addition to the two starter apps, we've included some extra integrations for your convenience. These currently cover the following topics:

1️⃣ **Pinecone** 🌲

Stay tuned for more exciting extras! ⏳
