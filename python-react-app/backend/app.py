import os
from flask import Flask, jsonify, request, send_from_directory
from langchain.chat_models import ChatOpenAI
from langchain.schema import HumanMessage

chat = ChatOpenAI(temperature=0)

app = Flask(__name__, static_folder='../frontend/build')

@app.route('/prompt', methods=['POST'])
def prompt():
    content = request.json

    messages = [
        HumanMessage(
            content=content["prompt"]
        ),
    ]

    response = chat(messages)

    return jsonify({
        "message": response.content
    })

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=False)
