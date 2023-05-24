function sendMail(){
    var params ={
        name :document.getElementById('name').value,
        email:document.getElementById('email').value,
        message:document.getElementById('message').value,
    };

const serviceID="service_uafeodo";
const templateID="template_ea6tvz6"

if(params.name==""||params.email==""||params.message==""){

    alert("please text message and email")
}
else{





emailjs.send(serviceID,templateID,params)
.then(
    res =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("your message sent successfully")


    }
)
.catch((err) => console.log(err));
}
}
