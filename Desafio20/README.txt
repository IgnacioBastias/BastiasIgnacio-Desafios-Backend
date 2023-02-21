ROUTES Y cURL

POST 'http://localhost:8080/api/add' 

--data-raw '{
    "name": "buje",
    "price": "180",
    "stock": "10"
}'

Pasamos por body name, price y stock de los productos a agregar. Guarda en base de datos y devuelve datos del producto cargado junto con _id

GET 'http://localhost:8080/api/list' 

Devuelve lista de name y price de todos los productos (no devuelve stock ni _id)