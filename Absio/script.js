//var securedContainer = require('absio-secured-container');

function Login(username, password, passphrase){
 window.securedContainer.logIn(username, password, pasphrase);;
 window.location = "Home.html"
}
function Register(password, passphrase, reminder){
  const UserID =window.securedContainer.register(password, reminder, passphrase);
  return UserID;
}
