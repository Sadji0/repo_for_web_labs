(() => {
    let table = document.getElementsByClassName("table_item");
    console.log(table.length);
    // for (let i = 1; i < table.length/4; i++) {
    //     console.log(i);
    //     let rnd = Math.floor(Math.random()*post.length);
    //     fetch('https://jsonplaceholder.typicode.com/users/'+rnd)
    //     .then((response) => {
    //         if (response.ok) {
    //             return response.json();
    //         } else {
    //             throw new Error(response.status);
    //         }
    //     }).then((post) => {
    //         table[i*4].innerHTML = post[rnd].id;
    //         table[i*4+1].innerHTML = post[rnd].name;
    //         table[i*4+2].innerHTML = post[rnd].phone;
    //         table[i*4+3].innerHTML = post[rnd].email;
    //         console.log(table[i]);
    //     }).catch((e) => {
    //             table[i*4].innerHTML = "⚠ ошибка";
    //             table[i*4+1].innerHTML = "⚠ ошибка";
    //             table[i*4+2].innerHTML = "⚠ ошибка";
    //             table[i*4+3].innerHTML = "⚠ ошибка";
    //     });
    // }
})();

document.addEventListener("DOMContentLoaded", function() {
    // document.getElementById("myElement").setAttribute("")    
});