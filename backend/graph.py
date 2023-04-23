import json
import chatgpt

class graph():
    def __init__(self, topic):
        self.topic = topic
        self.graph = self.create_graph()
        self.chatgpt = chatgpt()
        
        
    def create_graph(self):
        # demo
        # open file "sample.json"
        with open("sample.json", "r") as f:
            graph = json.load(f)
        return graph
        
    def init_graph(self):
        # demo
        # open file "sample.json"
        graph = { "nodes" : [
            {
            "id": "0",
            "name": self.topic,
            "symbolSize": 25,
            "x": -266.82776,
            "y": 299.6904,
            "value": 28.685715,
            "category": 0
        },
            ], "links" : [], "categories" : [] }
        
        return graph
        
        
    def update_graph():
        pass
    
    def update_data():
        pass