function loadLogin () {

// Check if the user is already logged in
var checkRequest = new XMLHttpRequest();
checkRequest.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE) {
        if 
    }
};

checkRequest.open('GET', '/check-login', true);
checkRequest.send(null);


var loginHtml = `
    <h3>Login/Register to unlock awesome features</h3>
    <input type="text" id="username" placeholder="username" />
    <input type="password" id="password" />
    <br/>
    <input type="submit" id="login_btn" value="Login" />
    <input type="submit" id="register_btn" value="Register" />
    `;
document.getElementById('login_area').innerHTML = loginHtml;

// Submit username/password to login
var submit = document.getElementById('login_btn');
submit.onclick = function () {
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          // Take some action
          if (request.status === 200) {
              alert('Logged in successfully');
          } else if (request.status === 403) {
              alert('Username/password is incorrect');
          } else if (request.status === 500) {
              alert('Something went wrong on the server');
          }
          submit.value = 'Login';
      }  
      // Not done yet
    };
    
    // Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', '/login', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));  
    submit.value = 'Logging in...';
};

var register = document.getElementById('register_btn');
register.onclick = function () {
    // Create a request object
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function () {
      if (request.readyState === XMLHttpRequest.DONE) {
          // Take some action
          if (request.status === 200) {
              alert('User created successfully');
          } else if (request.status === 500) {
              alert('Could not register the user');
          }
          register.value = 'Register';
      }  
      // Not done yet
    };
    
    // Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST', '/create-user', true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.send(JSON.stringify({username: username, password: password}));  
    register.value = 'Registering...';

};