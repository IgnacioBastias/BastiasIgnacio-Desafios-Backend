
                                                                   RUTAS Y CURL

/user/signUp: pasamos por body email, password, telefono, nombre y direccion. Se guarda en mongoDB con password encriptada. Devuelve "SIGNUP OK", envia mail a ADMIN.

curl --location --request POST 'http://localhost:8080/user/signUp' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3ADHEplRw3Krz7fS8b1eDZ6McBCGBExRsj.I7nEkx%2B3m%2F1ylEqyxMqVvHMyA4Lu8jLSTPlUkQd4SHI' \
--data-raw '{
    "username": "ignaciobastias12@gmail.com",
    "password": "3691",
    "name": "Nacho",
    "phoneNumber": "+5492615138322",
    "addres": "Loberia 1635"
}'

/user/logIn: pasamos por body email y password. Compara password encriptada. Devuelve "Bienvenido (username)".

curl --location --request POST 'http://localhost:8080/user/logIn' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3APluvf8O3oP6q7EJ1f_TvtalP9DsgapQ4.mM1FWfVafb%2F%2BvwuRwRhNF2k5pzvKj0mKD%2BaLP72fRWg' \
--data-raw '{
    "username": "ignaciobastias12gmail.com",
    "password": "3691"
}'

/user/home: devuelve cookie y _id (mongo) del usuario logueado.

curl --location --request GET 'http://localhost:8080/user/home' \
--header 'Cookie: connect.sid=s%3AodOtSqHjMjdSZ1k_ZWdujakToExwtT3Y.AJ%2FfaHDPmC1T14XCetbqfm1VYm8keYZ1IBHCLVNXlxs'

/user/logout: Devuelve Hasta luego! cierra sesion.

curl --location --request GET 'http://localhost:8080/user/logout' \
--header 'Cookie: connect.sid=s%3ADA-l1Q-vzy3FrKiY2vXdKn7h7oPZrLtM.DkEyMjbcdBwuIXgIKMY%2Few3EAJHyXWaSu8uJ20APBtg'

ROUTER DE PRODUCTOS (/productos)

/productos devuelve lista de productos disponibles.

GET: '/productos' 
curl --location --request GET 'http://localhost:8080/productos' \
--data-raw ''

/productos/:id devuelve producto especifico por ID

GET: '/productos/:id'
curl --location --request GET 'http://localhost:8080/productos/e0f97ba8-90d1-4bc5-9a3c-d4aaa2508aca' \
--data-raw ''

/productos pasamos por body title, price, stock, descripcion y url de imagen. Agrega producto a la lista 

POST: '/productos'
curl --location --request POST 'http://localhost:8080/productos/' \
--header 'Content-Type: application/json' \
--data-raw '{
	"title": "Camisa",
	"price": "500",
	"stock": "12",
	"descripcion": "Camisa hawaiana",
	"img": "https://cdn4.iconfinder.com/data/icons/summer-401/512/clothes-hawaiian_shirt-shirt-fashion-garment-hawaiian-clothing-holidays-512.png"
}'

/:id modifica datos de producto en lista. Pasamos title price stock y descripcion modificada por body

PUT: '/:id'
curl --location --request PUT 'http://localhost:8080/productos/e0f97ba8-90d1-4bc5-9a3c-d4aaa2508aca' \
--header 'Content-Type: application/json' \
--data-raw '{
	"title": "Remera Nueva",
	"price": "1500",
	"stock": "10",
	"descripcion": "Remera Nueva Roja"
}'

/:id elimina producto especifico por ID.

DELETE: '/:id'
curl --location --request DELETE 'http://localhost:8080/productos/e0f97ba8-90d1-4bc5-9a3c-d4aaa2508aca' \
--data-raw ''

ROUTER DE CARRITO (/api/carrito)

'/carrito/' crea un nuevo carrito vacío

POST: '/carrito/'
curl --location --request POST 'http://localhost:8080/carrito/' \
--data-raw ''

'/carrito/:id' elimina carrito por ID

DELETE: '/carrito/:id'
curl --location --request DELETE 'http://localhost:8080/carrito/63e8bc4c-a5fe-4935-bc97-5df6b7b35223' \
--data-raw ''

'/carrito/:id/productos' muestra lista de productos dentro de carrito 

GET: '/carrito/:id/productos'
curl --location --request GET 'http://localhost:8080/carrito/584f50ab-a0d9-41ea-8753-6b803145a5a5/productos' \
--data-raw ''	

'/carrito/:id/productos' pasamos por body title, price, id(producto) y cantidad. Por param pasamos id de carrito, agregamos el producto.

POST: '/carrito/:id/productos'
curl --location --request POST 'http://localhost:8080/carrito/584f50ab-a0d9-41ea-8753-6b803145a5a5/productos' \
--header 'Content-Type: application/json' \
--data-raw '{
	"title": "Camisa",
	"price": "1500",
	"id": "6ef804cb-4eed-43b2-91d9-1067a4a1df26",
	"cantidad": "2"
}'

'/carrito/:id/productos/:id_prod' pasamos id de carrito y de producto por param y eliminamos el producto dentro de ese carrito.

DELETE:'/carrito/:id/productos/:id_prod'
curl --location --request DELETE 'http://localhost:8080/carrito/584f50ab-a0d9-41ea-8753-6b803145a5a5/productos/6ef804cb-4eed-43b2-91d9-1067a4a1df26' \
--data-raw ''

'/carrito/:id/buy' pasamos por param id de carrito, envia mail y WSP confirmando pedidos.

GET '/carrito/:id/buy'
curl --location --request POST 'http://localhost:8080/carrito/6387e34d6f59f1044151c119/buy'