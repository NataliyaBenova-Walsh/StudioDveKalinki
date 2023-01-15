


const onRegister = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    console.log(formData);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      
      .then(() => alert("Thank you for your submission"))
      .then(myForm.reset())
      
      .catch((error) => alert(error));

      
  };
  
  document
  .querySelector(".register-form")
  .addEventListener("submit", onRegister);

  document
  .querySelector(".subscribe-form")
  .addEventListener("submit", onRegister);

  document
  .querySelector(".contact-form")
  .addEventListener("submit", onRegister);

  function onMobileMenu() {
    let x = document.getElementById("myTopNav");
    if (x.className == "top-nav-list") {
      x.className += " responsive";
    } else {
      x.className = "top-nav-list";
    }
  }


  function onSelect() {
    var x = document.getElementById("activity").value;
    console.log(x)
    
    if(x=='Dve-Kalinki-1-visit' || x=='fika') {
  
      document.getElementById("date-field").style.display="block";
    } else {
      document.getElementById("date-field").style.display="none";
    }
  }

  function formStatus() {
    
  }
  
 