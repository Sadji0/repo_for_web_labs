let table = document.getElementsByClassName("table_item");

(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error(response.status);
        }
    }).then((post) => {
        // console.log(table.length);
        for (let i = 1; i < table.length/4; i++) {
            let rnd = Math.floor(Math.random()*post.length);
            table[i*4].innerHTML = post[rnd].id;
            table[i*4+1].innerHTML = post[rnd].name;
            table[i*4+2].innerHTML = post[rnd].phone;
            table[i*4+3].innerHTML = post[rnd].email;
            console.log(table[i]);
        }
    }).catch((e) => {
        for (let i = 1; i < table.length/4; i++) {
            table[i*4].innerHTML = "⚠ ошибка";
            table[i*4+1].innerHTML = "⚠ ошибка";
            table[i*4+2].innerHTML = "⚠ ошибка";
            table[i*4+3].innerHTML = "⚠ ошибка";
            Swal.fire('Error:' + e);
            // alert("Error: " + e);
        }
    });
})();