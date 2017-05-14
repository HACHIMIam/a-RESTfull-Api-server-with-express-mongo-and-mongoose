# a-RESTfull-Api-server-with-express-mongo-and-mongoose
a full-fledged REST API server with  basic authentication and session-based authentication and facebook authentification for a restaurant 
# usage 
create a data base conFusion 
you can add the document in the db.json file to the data base 
npm start to start the server 
and feel free to test ther server with postman 
post and the request body the username and password for registration for new user in the URL localhost:3000/users/register
login with the new user in the url localhost:3000/users/register once you login you will get a token you have to use it in the header request for the key x-access-token 
get all dishes with the url localhost:3000/users/dishes comment a particular dish  (look at  the comment schema field in the the dish model) using the url localhost:3000/users/dishes but in order for a user to comment he has to be registred you need to use his token in request header 
in order to delete or post dishes you have to be admin you can register a normal user and set the admin flag to true 
