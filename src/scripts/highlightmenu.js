document.addEventListener("DOMContentLoaded",function(){
    const currentPathname = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    const blogLink = document.querySelector('.blogLink');



  

    navLinks.forEach(link=> {
        const linkPathname = new URL(link.href).pathname;

        if (linkPathname == currentPathname){
            link.classList.add('current');
        } else if(currentPathname.includes('post')) {       
        blogLink.classList.add('current'); 
        }

    });
});