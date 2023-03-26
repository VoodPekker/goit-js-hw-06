const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", handleFormSubmit);

function handleFormSubmit(em) {
  em.preventDefault();
  const { email, password } = em.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    return alert("Please fill in all the fields!");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
    em.currentTarget.reset();
  }
}
