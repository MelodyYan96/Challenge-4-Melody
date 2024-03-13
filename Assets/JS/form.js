// submit form to enter blog page:

let submitForm = document.querySelector('.login');

submitForm.addEventListener("submit",(e) => {
    e.preventDefault();
 
    let username = document.getElementById("username");
    let title = document.getElementById("title");
    let content = document.getElementById("content");


    if(username.value !== "" && title.value !== "" && content !== ""){
        window.location.href="blog.html"
    }
})

// store blog data in localStorage:
let formDetails = [username.value, title.value, content.value];

localStorage.setItem('formDetails', formDetails);


// darkMode activation:

let darkMode = localStorage.getItem('darkmode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {

  document.body.classList.add('darkmode');

  localStorage.setItem('darkMode','enabled');
}


 const disableDarkMode = () => {
    
  document.body.classList.remove('darkMode');

  localStorage.setItem('darkMode',null);
} 

if (darkMode === "enabled"){
    enableDarkMode();
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
   if (darkMode !== "enabled"){
    enableDarkMode();
   } else {
    disableDarkMode();
   }
})