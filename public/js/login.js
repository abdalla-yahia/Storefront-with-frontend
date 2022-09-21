

const form = document.forms
const checkbox = document.querySelector('#checbox');
const emailinput = document.getElementById('email');
const passinput = document.getElementById('password');

if (window.localStorage.getItem('email') && window.localStorage.getItem('pass')) {
    emailinput.value = window.localStorage.getItem('email');
    passinput.value  = window.localStorage.getItem('pass');
    
}

form[0].addEventListener('submit', async function () {
    if (checkbox.checked == true) {
        window.localStorage.setItem('email',emailinput.value)
        window.localStorage.setItem('pass',passinput.value)
    }
    if (document.cookie) {
        console.log(document.cookie);
    }
})





