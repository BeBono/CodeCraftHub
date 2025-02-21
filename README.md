# CodeCraftHub

Be aware to update the .evn and docker-copuse files with credentials.
# *******

Steps:
npm install
npm start

Test the API (/api/users/register and /api/users/login) through POSTMAN or (linux - terminal):

curl -X POST -H "Content-Type: application/json" -d '{"username": "BeTo", "email": "beto@email.com", "password": "password123"}' https://albertocarb1-5000.theiadockernext-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/api/users/register

curl -X POST -H "Content-Type: application/json" -d '{"email": "beto@email.com", "password": "password123"}' https://albertocarb1-5000.theiadockernext-1-labs-prod-theiak8s-4-tor01.proxy.cognitiveclass.ai/api/users/login


# ****************************

# Run it thorugh Containerization (Build and start the containers):
docker-compose up --build
