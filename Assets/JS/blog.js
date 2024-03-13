// darkMode activation:

let darkMode = localStorage.getItem('darkmode');
const darkModeToggle = document.querySelector('#sun2');

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


// blog contents in localStorage:

let blogContents = document.querySelectorAll('#blog-contents');

let blogContentsString = JSON.stringify(blogContents);

localStorage.setItem("blogContents", blogContents)

localStorage.setItem("blogContentsString", blogContentsString);


