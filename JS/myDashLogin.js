function pass()
{
    let x = document.getElementById("password");
    let y = document.getElementById("hide1");
    let z = document.getElementById("hide2");

    if(x.type === "password")
    {
        x.type = "text"
        y.style.display = "block";
        z.style.display = "none";
    }
    else
    {
        x.type = "password"
        y.style.display = "none";
        z.style.display = "block";
    }
}

function validate()
{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if(username =="nasirmitul" && password == "user")
    {
        message.textContent = "Login Successfull";
        message.style.color = "#117A65";
        setTimeout(function() 
        { 
            location.href = "myDashBorad.html";
        }, 5000);
    }
    else if(username =="" || password == "")
    {
        message.textContent = "Please fill the form";
        message.style.color = "#B03A2E";
    }
    else
    {
        message.textContent = "Wrong Username or Password";
        message.style.color = "#B03A2E";   
        /* alert("Login Failed"); */
    }
}