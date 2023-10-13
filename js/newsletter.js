let form = document.querySelector("#sign-up");
let message = document.querySelector(".msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const {name, email} = e.target.elements;

    message.innerHTML = `Velkommen ${name.value}. <br> Din email ${email.value} er nu tilmeldt vores nyhedsbrev.`;
       
});