Microserviços 

npm init -y, para iniciar o node 

npm i express, instala o pacote json 

npm i nodemon --save-dev, fica fazendo o hot upload em momento de dev

npm i dotenv, é o cara que sabe puxar arquivos do .env

instalar a extensão Thunder Client

add a linha no package.json "start": "nodemon index.js"

add a linha no package.json "start": "node index.js", "start:dev": "nodemon index.js" em ambiente produtivo 

Não esquecer do arquivo .env com a port

npm i uuid - gera id's evita fazer contador

Barramento: 
npm init -y 

npm i express axios 

npm i nodemon --save-dev

Para rodar: 
npm i axios express nodemon uuid

*em todas as pastas rodar os install* 

## Entrega de realease 
``` git tag 1.0.0 -a "Entrega dia 20.05 - este é um exemplo ```
Não esquecer de fazer o push das tags 


## Docker
- para rodar o docker: 
```
docker build -t nomeDockerHub/tag`

kubectl apply -f lembretes.yaml

#Pode deletar tbm com o proprio yaml -> kubectl delete -f lembretes.yaml
```

### Validar código yaml
https://www.yamllint.com/
