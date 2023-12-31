# run app standalone

npm install
npm start

# run app as docker container
## cd into credit_score_service directory

## below command will build a docker image out of this project that will only exist in your local docker registry
docker build -t di-course/credit-score-service .

## below command will run the docker image as a container that listen on your host's port 3000
docker run --name credit-score-service -p 3000:3000 di-course/credit-score-service



