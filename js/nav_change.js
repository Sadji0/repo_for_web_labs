window.addEventListener("load", () => {
    let reference = document.location.href.split('/');
    let queryLinks = document.querySelectorAll('nav a');

    queryLinks.forEach(elem => {
        // console.log(elem.className + " " + reference[reference.length - 1]);
        // console.log(elem.className == reference[reference.length - 1]);
        if (elem.className === reference[reference.length - 1]) {
            elem.classList.add('active');
        }
    });
});