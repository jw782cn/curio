curl -X POST -H "Content-Type: application/json" -d '{"topic":"finance"}' http://127.0.0.1:5000/create_graph
curl -X GET http://127.0.0.1:5000/current_graph_topic
curl -X POST -H "Content-Type: application/json" -d '{"question": "What is finance?"}' http://127.0.0.1:5000/ask_question
curl -X GET http://127.0.0.1:5000/get_current_graph_tree
curl -X POST -H "Content-Type: application/json" -d '{"question": "What is the difference between finance and money?"}' http://127.0.0.1:5000/ask_question
curl -X GET http://127.0.0.1:5000/get_current_graph_tree
curl -X POST -H "Content-Type: application/json" -d '{"question": "What is the difference between finance and gold?"}' http://127.0.0.1:5000/ask_question
curl -X GET http://127.0.0.1:5000/get_current_graph_tree

curl -X POST -H "Content-Type: application/json" -d '{"graph_id": "0"}' http://127.0.0.1:5000/get_graph