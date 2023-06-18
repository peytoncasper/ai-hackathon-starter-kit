

## Theres a Fork in the Road

There is an important decision that you need to make when building out an application that leverages LLMs. If you're building an application that 
only leverages the off the shelf OpenAI API capabilities such as querying GPT-3.5 or GPT-4 then you can easily leverage the Node.js example application
that is based on Vercel's AI app.

1. Leveraging the Node.js-React App Example

This starter app works great for web apps that can leverage off the shelf APIs like OpenAI, ElevenLabs, and Pinecone.

A simple starter app is provided that provides a Node.js Express app which embeds data with OpenAI and stores that information in Pinecone as well as providing a simple frontend for returning top results for a given query.

2. Leveraging the Python-React App Example

This starter app is a better fit if you're looking to leverage OSS models such as Falcon LLM, models on HuggingFace, LangChain or simply leverage models that
aren't wrapped by a nice API then you're going to need to start here. This approach provides more flexibility in the implementation, but is required 
because custom models need to be loaded into memory and exposed via an API. 

Leveraging a Python backend is the simplest approach for a Hackthon, because you don't have to worry about lower level details of how to tokenize your input, pickeling the model or anything else. For the most part, this is taken care of Python libraries such as HuggingFace and others.

As a result, a simple starter app is provided that provides a Python Flask App which exposes Falcon LLM via an API endpoint along with a React App that lets the user type in a question and receive a response from Falcon LLM. 

## Extras

In addition to providing two simple skeletons for getting started, there are additional folders for various integrations that are typically used. These currently cover the following topics.

1. Pinecone