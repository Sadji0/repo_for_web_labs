window.addEventListener("load", () => {
    let reference = document.location.href.split('/');

    switch(reference[reference.length - 1]){
        case '':
        case 'index.html':
            document.querySelectorAll('nav a')[0].classList.add('active');
            break;
        case 'portfolio.html':
            document.querySelectorAll('nav a')[3].classList.add('active');
            break;
    }
});