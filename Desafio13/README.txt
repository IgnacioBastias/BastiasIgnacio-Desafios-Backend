
                                                                   RUTAS Y CURL

/productos-test: Devuelve productos Random con faker.

curl --location --request GET 'http://localhost:8080/api/productos-test' \
--header 'Cookie: connect.sid=s%3AVAUKH6FL6yuYWYI_Zl2PuzVsgdm02k3W.lXUk87hXX47zsl9aJO1ZReSSlm%2FCjrpP7A14tdiopOw'

/normalizado: normaliza mensajes guardados en ./data/mensajes.json y los devuelve, se guardan en ./data/mensajesNormalizados.json.

curl --location --request GET 'http://localhost:8080/api/normalizado' \
--header 'Cookie: connect.sid=s%3AVAUKH6FL6yuYWYI_Zl2PuzVsgdm02k3W.lXUk87hXX47zsl9aJO1ZReSSlm%2FCjrpP7A14tdiopOw'

/denormalizado: denormaliza mensajes guardados en ./data/mensajesNormalizados.json y los devuelve, se guardan en ./data/mensajesDenormalizados.json.

curl --location --request GET 'http://localhost:8080/api/denormalizado' \
--header 'Cookie: connect.sid=s%3AVAUKH6FL6yuYWYI_Zl2PuzVsgdm02k3W.lXUk87hXX47zsl9aJO1ZReSSlm%2FCjrpP7A14tdiopOw'

/signUp: pasamos por body email y password. Se guarda en mongoDB con password encriptada. Devuelve "SIGNUP OK".

curl --location --request POST 'http://localhost:8080/api/signUp' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3AVAUKH6FL6yuYWYI_Zl2PuzVsgdm02k3W.lXUk87hXX47zsl9aJO1ZReSSlm%2FCjrpP7A14tdiopOw' \
--data-raw '{
    "username": "ignaciobastias@gmail.com",
    "password": "3691"
}'

/logIn: pasamos por body email y password. Compara password encriptada. Devuelve "Bienvenido (username)".

curl --location --request POST 'http://localhost:8080/api/logIn' \
--header 'Content-Type: application/json' \
--header 'Cookie: connect.sid=s%3APluvf8O3oP6q7EJ1f_TvtalP9DsgapQ4.mM1FWfVafb%2F%2BvwuRwRhNF2k5pzvKj0mKD%2BaLP72fRWg' \
--data-raw '{
    "username": "ignaciobastias@gmail.com",
    "password": "3691"
}'

/home: devuelve cookie y _id (mongo) del usuario logueado.

curl --location --request GET 'http://localhost:8080/api/home' \
--header 'Cookie: connect.sid=s%3AodOtSqHjMjdSZ1k_ZWdujakToExwtT3Y.AJ%2FfaHDPmC1T14XCetbqfm1VYm8keYZ1IBHCLVNXlxs'

/logout: Devuelve Hasta luego! cierra sesion.

curl --location --request GET 'http://localhost:8080/api/logout' \
--header 'Cookie: connect.sid=s%3ADA-l1Q-vzy3FrKiY2vXdKn7h7oPZrLtM.DkEyMjbcdBwuIXgIKMY%2Few3EAJHyXWaSu8uJ20APBtg'