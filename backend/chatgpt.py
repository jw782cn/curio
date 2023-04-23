import promptlayer
import os
from dotenv import load_dotenv
from langchain.chat_models import PromptLayerChatOpenAI
from langchain.schema import (
    AIMessage,
    HumanMessage,
    SystemMessage
)


class chatgpt():
    def __init__(self):
        load_dotenv()
        openai = promptlayer.openai
        openai.organization = os.getenv("OPENAI_ORGANIZATION")
        openai.api_key = os.getenv("OPENAI_API_KEY")
        promptlayer.api_key = os.environ.get("PROMPTLAYER_API_KEY")
        
    def chat_with_messages(self, messages, model_name):
        chat = PromptLayerChatOpenAI(pl_tags=["langchain", model_name], model_name=model_name)
        response = chat(messages)
        return response