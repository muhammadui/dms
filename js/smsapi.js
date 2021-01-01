const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = document.getElementById("pizzaOrder");
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      Swal.fire({
        icon: "success",
        imageUrl: "https://assets4.lottiefiles.com/temp/lf20_taipbM.json",
        title: "Sent",
        text: "Your message is being sent successfully",
      });

      console.log("Form successfully submitted");
      console.log("Form successfully submitted");
    })
    .catch((error) => alert(error));
};
document.querySelector("form").addEventListener("submit", handleSubmit);
