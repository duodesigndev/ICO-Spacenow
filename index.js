

function toggleMenu(x) {
    x.classList.toggle("animate")
    document.getElementsByTagName('body')[0].classList.toggle('perspective')
    document.getElementsByClassName('main-container')[0].classList.toggle("animate-main")
}


function validateForm() {
    var email = document.forms["mc-embedded-subscribe-form"]["EMAIL"].value;
    if (email === "") {
    alert("Email must be filled out");
    return false;
    }
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function show(elements) {
    elements = elements.length ? elements : [elements];
    for (var index = 0; index < elements.length; index++) {
    elements[index].style.display = 'block';
    }
}

var results = getParameterByName('return');

if (results) {

    show(document.getElementById('message'));

}