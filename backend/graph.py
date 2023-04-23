import json
import chatgpt

class TreeNode:
    def __init__(self, id, value, name, children=None):
        self.id = id
        self.value = value
        self.children = children if children is not None else []
        self.name = name

def tree_to_json(node, x=0, y=0):
    nodes = []
    links = []

    if node is not None:
        node_json = {
            "id": str(node.id),
            "name": node.name,
            "symbolSize": node.value,
            "x": x,
            "y": y,
            "value": node.value,
            "category": 0
        }
        nodes.append(node_json)

        y_gap = 10
        for i, child in enumerate(node.children):
            child_nodes, child_links = tree_to_json(child, x + 10, y + (i * y_gap))
            nodes.extend(child_nodes)

            links.append({"source": str(node.id), "target": str(child.id)})
            links.extend(child_links)

    return nodes, links

def convert_tree_to_json(tree, topic):
    nodes, links = tree_to_json(tree)

    json_data = {
        "nodes": nodes,
        "links": links,
        "categories": [{"name": topic}]
    }

    return json.dumps(json_data, indent=4)

def tree_to_text(node, indent=0):
    if node is None:
        return ""

    text = "    " * indent + "+-- " + node.name + "\n"

    for child in node.children:
        text += tree_to_text(child, indent + 1)

    return text


class graph():
    def __init__(self, topic):
        self.topic = topic
        self.root = TreeNode(0, topic, topic)
        # graph is json for frontend
        self.graph = self.create_graph()
        self.chatgpt = chatgpt()
         
    def get_graph(self):
        '''
        return json file for frontend
        '''
        return convert_tree_to_json(self.root, self.topic)

    def get_text(self):
        '''
        return text file for query
        '''
        return tree_to_text(self.root)

    def create_graph(self):
        # demo
        # open file "sample.json"
        with open("sample.json", "r") as f:
            graph = json.load(f)
        return graph

    def init_graph(self):
        # demo
        # open file "sample.json"
        graph = {"nodes": [
            {
                "id": "0",
                "name": self.topic,
                "symbolSize": 100,
                "x": 0,
                "y": 0,
                "value": self.topic,
                "category": 0
            },
        ], "links": [], "categories": [{
            "name": self.topic
        }]}
        return graph
    
    def get_tree(self):
        
        

    def update_graph(self,):
        
        pass

    def update_data(self):
        pass
