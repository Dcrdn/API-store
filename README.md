### Before running:

You need to setup your Postgres Database.

For this I'll assume you have postgres installed and you know your password and user.

You need to login with your user in Postgres and then run the following scripts:

CREATE DATABASE store;

CREATE TABLE products (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  price FLOAT
);

INSERT INTO products (name, price) 
        VALUES ('PANTS', '5'),
               ('TSHIRT', '20'),
               ('HAT', '7.5');

## Configurate conf.js

You need to go to conf.js and modify the user and password according to yours.


### Run project with:

## 'node index.js'

Open (http://localhost:3001) in your browser to see if it is working.


### GET

## '/'

Welcome message

### POST

## '/totalPants'

Receives a JSON in format: {'Pants': qty}
Where qty is the number of Pants that I want to know the total price.

## '/getTShirts'

Receives a JSON in format: {'Tshirt': qty}
Where qty is the number of Tshirts that I want to know the total price.

## '/totalHats'

Receives a JSON in format: {'Hats': qty}
Where qty is the number of Hats that I want to know the total price.

## '/total'

Receives a JSON in format: {'items': [elements]} 
Where elements is a list of products that I want to know the total price.
I.E.: {'items':['T-Shirt','Pants','T-Shirt','Hat']}
