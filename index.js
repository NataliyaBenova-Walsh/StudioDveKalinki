


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
      
      .then(() => alert("Успешна регистрация"))
      .then(myForm.reset())
      
      .catch((error) => alert(error));

      
  };
  
  document
  .querySelector(".register-form")
  .addEventListener("submit", onRegister);

  const onSubscribe = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      
      .then(() => alert("Успешно се абонирахте за нашия бюлетин"))
      .then(myForm.reset())
      
      .catch((error) => alert(error));

      
  };

  document
  .querySelector(".subscribe-form")
  .addEventListener("submit", onSubscribe);

  const onContactUs = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    console.log(formData);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
    
      .then(() => alert("Успешно се свързахте с нас. Очаквайте отговор скоро"))
      .then(myForm.reset())
      .catch((error) => alert(error));

      
  };

  document
  .querySelector(".contact-form")
  .addEventListener("submit", onContactUs);

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

  
  
 