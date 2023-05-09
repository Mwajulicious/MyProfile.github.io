

const signUp = e => {
    let fname = document.getElementById('fname').value,
        address = document.getElementById('address').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;
        comment = document.getElementById('comment').value;

     // Create user object
  const user = { fname:fname, address:address, email:email, pwd:pwd, comment:comment };
  const users=JSON.parse(localStorage.getItem("users"))||[];
  users.push(user);

  // Save user to localStorage
  localStorage.setItem("users", JSON.stringify(users));

  alert("submitted!");

  // Redirect to sign in page
  window.location.href = "./signin.html";
}

function signIn(event) {
    event.preventDefault();
    // Get form values
    const name= document.getElementById("name").value;
    const pwd = document.getElementById("pwd").value;
  
    // Retrieve user from localStorage
    // const user = JSON.parse(localStorage.getItem("user"));
  
    // Check if user exists and password is correct
    


  //   if (user && user.name === admin && user.pwd === pwd) {
  //     // Redirect to user profile page
  //     window.location.href = "./last.html";
  //   } else {
  //     // Display error message
  //     alert("Invalid email or password");
  //   }
  // }
  if (name === "admin" && pwd === "pwd") {
    let users = JSON.parse(localStorage.getItem("users"))||[];
    let contactinfo = "";
    for(let a = 0;a < users.length;a++) {
          contactinfo += "<h1>" + (a+1) + "</h1>";
          contactinfo += "<p><strong>NAME:</strong>" + users[a].fname + "</p>";
          contactinfo += "<p><strong>EMAIL:</strong>" + users[a].email + "</p>";
          contactinfo += "<p><strong>ADDRESS:</strong>" + users[a].address + "</p>";
          contactinfo += "<p><strong>COMMENT:</strong>" + users[a].comment + "</p>";
      }
      document.getElementById("info").innerHTML=contactinfo;
  } else {
    alert("invalid username or password");
  };
  
};

