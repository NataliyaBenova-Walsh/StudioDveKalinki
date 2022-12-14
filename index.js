


const onRegister = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .then(myForm.reset())
      .catch((error) => alert(error));

      
  };
  
  document
  .querySelector("form")
  .addEventListener("submit", onRegister);

  function onMobileMenu() {
    let x = document.getElementById("myTopNav");
    if (x.className == "top-nav-list") {
      x.className += " responsive";
    } else {
      x.className = "top-nav-list";
    }
  }