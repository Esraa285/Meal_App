let fName = document.getElementById('name');
let fEmail = document.getElementById('email');
let fPhone = document.getElementById('phone');
let fAge = document.getElementById('age');
let fPassword = document.getElementById('password');
let fRepassword = document.getElementById('Repassword');
let btns = document.getElementById('btns');

function validationData(ele) {
    let regex = {
        name: /^[A-Za-z]{3,}( [A-Za-z]{3,})?$/,
        email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/,
        phone:/^(010|011|012|015)[0-9]{8}$/,
        age:/^(?:[1-9][0-9]?|100)$/,
        password:/^.{6,}$/,
        Repassword:/^.{6,}$/
    };

    if (regex[ele.id].test(ele.value)) {
        ele.classList.add("is-valid");
        ele.classList.remove("is-invalid");
    } else {
        ele.classList.add("is-invalid");
        ele.classList.remove("is-valid");
    }

    checkMatchingPassword();
    checkAllValid();
}
function checkMatchingPassword() {
    if (fPassword.value !== "" && fRepassword.value !== "") {
        if (fPassword.value === fRepassword.value) {
            fRepassword.classList.add("is-valid");
            fRepassword.classList.remove("is-invalid");
        } else {
            fRepassword.classList.add("is-invalid");
            fRepassword.classList.remove("is-valid");
        }
    }
}

function checkAllValid() {
    if(fName.classList.contains("is-valid") && fEmail.classList.contains("is-valid") &&
        fPhone.classList.contains("is-valid") && fAge.classList.contains("is-valid") &&
    fPassword.classList.contains("is-valid") && fRepassword.classList.contains("is-valid")) 
    {
  
        btns.classList.remove("d-none");
    }
}
   function clearForm() {
    fName.value = "";
    fEmail.value = "";
    fPhone.value = "";
    fAge.value = "";
    fPassword.value = "";
    fRepassword.value = "";

    fName.classList.remove('is-valid', 'is-invalid');
    fEmail.classList.remove('is-valid', 'is-invalid');
    fPhone.classList.remove('is-valid', 'is-invalid');
    fAge.classList.remove('is-valid', 'is-invalid');
    fPassword.classList.remove('is-valid', 'is-invalid');
    fRepassword.classList.remove('is-valid', 'is-invalid');
    btns.classList.add('d-none'); 
}

