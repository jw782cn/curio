from chatgpt import *


class Chat():
    def __init__(self, model_name='gpt-4'):
        self.chatgpt = chatgpt(model_name=model_name)
        self.messages = [SystemMessage(content="")]
        with open("backend/prompt/chat_system_message.txt", "r") as f:
            self.messages = [SystemMessage(content=f.read())]

    def ask_question(self, question):
        self.messages.append(HumanMessage(content=question))
        response = self.chatgpt(self.messages)
        self.messages.append(response)
        return response.content

    def suggest_new_questions(self):
        with open("backend/prompt/explain_more.txt", "r") as f:
            explain_more_prompt = [HumanMessage(content=f.read().format(
                messages_content=[message.content for message in self.messages]))]
        explain_more_questions = self.chatgpt(explain_more_prompt).content

        with open("backend/prompt/in_depth.txt", "r") as f:
            in_depth_prompt = [HumanMessage(content=f.read().format(
                messages_content=[message.content for message in self.messages]))]
        in_depth_questions = self.chatgpt(in_depth_prompt).content

        with open("backend/prompt/in_width.txt", "r") as f:
            in_width_prompt = [HumanMessage(content=f.read().format(
                messages_content=[message.content for message in self.messages]))]
        in_width_questions = self.chatgpt(in_width_prompt).content

        return explain_more_questions, in_depth_questions, in_width_questions


if __name__ == '__main__':
    chat = Chat()
    chat.ask_question(question="What is finance?")
    chat.ask_question(
        question="What is the difference between finance and money?")
    chat.ask_question(
        question="What is the difference between finance and gold?")

    for message in chat.messages:
        print(message.content)
        print()

    print()

    for question in chat.suggest_new_questions():
        print(question)
