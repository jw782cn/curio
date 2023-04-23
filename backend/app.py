from flask import Flask
from graph import Graph

app = Flask(__name__)
graph = Graph("test")

@app.route('/')
def hello():
    return 'Hello, World!'

@app.route('/graph_name')
def get_graph_name():
    return graph.topic

if __name__ == '__main__':
    app.run(debug=True)
