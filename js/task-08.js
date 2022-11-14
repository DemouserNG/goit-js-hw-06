
const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    
    const formElements = event.currentTarget.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email.lenght === 0 || password.lenght === 0) {
        alert('Заповніть поле');
        return;
    };
    const formData = {
        email,
        password,
    };
    console.log(formData);

    form.reset();

};
