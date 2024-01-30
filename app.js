const form = document.getElementById("form");
const fName = document.getElementById("name");
const email = document.getElementById("email");
const phonenum = document.getElementById("phone");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    validate();
});

const sendData = (fullnameVal, sRate, count) => {
    if (sRate === count) {
        Swal.fire({
            title: "We've got your message, " + "\n" + fullnameVal,
            text: "Will get back to you soon:)",
            icon: "success",
            confirmButtonText: 'OK',
            customClass: {
                popup: 'custom-swal',
                confirmButton: 'custom-confirm-button-class',
            }
        });
    }
};

const successMsg = (fullnameVal) => {
    let inputCon = document.getElementsByClassName('input_box');
    let count = inputCon.length - 1;
    for (let i = 0; i < inputCon.length; i++) {
        if (inputCon[i].className === "input_box success") {
            let sRate = 0 + i;
            sendData(fullnameVal, sRate, count);
        } else {
            return false;
        }
    }
};



const setSuccessFor = (input) => {
    const formControl = input.parentElement; // .input_box
    formControl.className = "input_box success";
};

const validate = () => {
    const fullnameVal = fName.value.trim();
    const emailVal = email.value.trim();
    const phonenumVal = phonenum.value.trim();
    const messageVal = message.value.trim();

    // validation fullname
    if (fullnameVal === "") {
        setErrorFor(fName, 'Please Enter Your Full Name');
    } else {
        setSuccessFor(fName);
    }

    // validation email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailVal === "") {
        setErrorFor(email, 'Please Enter Your Email');
    }
    else {
        setSuccessFor(email);
    }

    // validation Phone Number
    if (phonenumVal === "") {
        setErrorFor(phonenum, 'Please Enter Your Phone Number');
    }
     else {
        setSuccessFor(phonenum);
    }

    // validation Message
    if (messageVal === "") {
        setErrorFor(message, 'Please Enter Your Message');
    } else {
        setSuccessFor(message);
    }

    successMsg(fullnameVal);
};
