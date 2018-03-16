const email = document.getElementsByClassName("email")[0];
const zip = document.getElementsByClassName("zip")[0];

function validateEmail() {
    if (email.value === "" || zip.value === "") {
        alert("Email and ZIP code are required");
    } 
    else {
        alert("Thank you for your support!");
    }

}
