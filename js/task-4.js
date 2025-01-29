const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value.trim();
    
    if (email === "" || password === "") {
       alert("All form fields must be filled in");
    }
    else {
        const loginFormData = {
            [form.elements.email.name] : email, 
            [form.elements.password.name] : password
        }
        console.log(loginFormData);
        form.reset();
    }
};