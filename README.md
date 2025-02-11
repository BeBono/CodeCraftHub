# CodeCraftHub

Steps:
npm install
npm start

Test the API (/api/users/register and /api/users/login) through POSTMAN or (linux - terminal):

curl -X POST -H "Content-Type: application/json" -d '{"username": "john", "email": "email@email.com", "password": "password123"}' https://albertocarb1-5000.theiadockernext-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/api/users/register

curl -X POST -H "Content-Type: application/json" -d '{"email": "email@email.com", "password": "password123"}' https://albertocarb1-5000.theiadockernext-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/api/users/login