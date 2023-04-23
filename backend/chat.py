from chatgpt import *

class chat():
    def __init__(self):
        self.chat = chatgpt()
        self.messages = []
    
    def ask_question(self, question):
        self.messages.append(HumanMessage(content=question))
        response = self.chat(self.messages)
        self.messages.append(AIMessage(content=response))
        return response
    






if __name__ == '__main__':
    chat = chatgpt()
    messages = [
        SystemMessage(content="Hello"),
        HumanMessage(content="Hi"),
        AIMessage(content="Hello"),
        HumanMessage(content="How are you?"),
        AIMessage(content="I am fine, thanks. And you?"),
    ]
    response = chat(messages)
    print(response)
