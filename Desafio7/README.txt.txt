ROUTER DE PRODUCTOS (/api/productos)

GET: '/' 
curl --location --request GET 'http://localhost:8080/api/productos' \
--data-raw ''

GET: '/:id'
curl --location --request GET 'http://localhost:8080/api/productos/e0f97ba8-90d1-4bc5-9a3c-d4aaa2508aca' \
--data-raw ''

POST: '/'
curl --location --request POST 'http://localhost:8080/api/productos/' \
--header 'Content-Type: application/json' \
--data-raw '{
	"title": "Camisa",
	"price": "500",
	"stock": "12",
	"descripcion": "Camisa hawaiana",
	"img": "https://cdn4.iconfinder.com/data/icons/summer-401/512/clothes-hawaiian_shirt-shirt-fashion-garment-hawaiian-clothing-holidays-512.png"
}'

PUT: '/:id'
curl --location --request PUT 'http://localhost:8080/api/productos/e0f97ba8-90d1-4bc5-9a3c-d4aaa2508aca' \
--header 'Content-Type: application/json' \
--data-raw '{
	"title": "Remera Nueva",
	"price": "1500",
	"stock": "10",
	"descripcion": "Remera Nueva Roja"
}'

DELETE: '/:id'
curl --location --request DELETE 'http://localhost:8080/api/productos/e0f97ba8-90d1-4bc5-9a3c-d4aaa2508aca' \
--data-raw ''

ROUTER DE CARRITO (/api/carrito)

POST: '/'
curl --location --request POST 'http://localhost:8080/api/carrito/' \
--data-raw ''

DELETE: '/:id'
curl --location --request DELETE 'http://localhost:8080/api/carrito/63e8bc4c-a5fe-4935-bc97-5df6b7b35223' \
--data-raw ''

GET: '/:id/productos'
curl --location --request GET 'http://localhost:8080/api/carrito/584f50ab-a0d9-41ea-8753-6b803145a5a5/productos' \
--data-raw ''	

POST: '/:id/productos'
curl --location --request POST 'http://localhost:8080/api/carrito/584f50ab-a0d9-41ea-8753-6b803145a5a5/productos' \
--header 'Content-Type: application/json' \
--data-raw '{
	"title": "Camisa",
	"price": "1500",
	"id": "6ef804cb-4eed-43b2-91d9-1067a4a1df26",
	"cantidad": "2"
}'

DELETE:'/:id/productos/:id_prod'
curl --location --request DELETE 'http://localhost:8080/api/carrito/584f50ab-a0d9-41ea-8753-6b803145a5a5/productos/6ef804cb-4eed-43b2-91d9-1067a4a1df26' \
--data-raw ''