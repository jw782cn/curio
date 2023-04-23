from flask import Flask, request, jsonify
from chat import Chat
from graph import Graph

app = Flask(__name__)
chat = Chat(model_name='gpt-3.5-turbo')
graphs = {}
local_storage = {"current_graph": "None"}

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/current_graph_topic', methods=['GET'])
def get_graph_name():
    if local_storage["current_graph"] == "None":
        return "None"
    current_graph = str(local_storage["current_graph"])
    return graphs[current_graph].topic

# curl -X POST -H "Content-Type: application/json" -d '{"topic":"bitcoin"}' http://127.0.0.1:5000/create_graph
@app.route('/create_graph', methods=['POST'])
def create_graph():
    topic = request.json['topic']
    graph = Graph(topic)
    length = len(graphs)
    graphs[str(length)] = graph
    if local_storage["current_graph"] == "None":
        local_storage["current_graph"] = str(length)
    return str(length)

@app.route('/get_current_graph_id')
def get_current_graph_id():
    current_graph = local_storage["current_graph"]
    if current_graph is None:
        return "None"
    else:
        return str(current_graph)

@app.route('/get_graph', methods=['post'])
def get_graph():
    graph_id = request.json['graph_id']
    return graphs[graph_id].get_graph()

@app.route('/get_current_graph_tree', methods=['GET'])
def get_current_graph_tree():
    current_graph = local_storage["current_graph"]
    if current_graph is None:
        return "None"
    else:
        return graphs[current_graph].get_text()

if __name__ == '__main__':
    app.run(debug=True)
