function RandNumb() {
    return 1 + Math.floor(Math.random() * 11 + 1);
}

function users_table() {
    let table = document.getElementsByClassName("table_item");
    fetch(`https://jsonplaceholder.typicode.com/users?id=${RandNumb()}&id=${RandNumb()}&id=${RandNumb()}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        })
        .then((post) => {
            for (let i = 1; i < table.length / 4; i++) {
                if (i <= post.length) {
                    table[i * 4].innerHTML = post[i - 1].id;
                    table[i * 4 + 1].innerHTML = post[i - 1].name;
                    table[i * 4 + 2].innerHTML = post[i - 1].phone;
                    table[i * 4 + 3].innerHTML = post[i - 1].email;
                } else {
                    table[i * 4].innerHTML = "⚠ ошибка";
                    table[i * 4 + 1].innerHTML = "⚠ ошибка";
                    table[i * 4 + 2].innerHTML = "⚠ ошибка";
                    table[i * 4 + 3].innerHTML = "⚠ ошибка";
                }
            }
        })
        .catch((e) => {
            alert("Ошибка получения json данных\n\n" + e);
            for (let i = 1; i < table.length / 4; i++) {
                table[i * 4].innerHTML = "⚠ ошибка";
                table[i * 4 + 1].innerHTML = "⚠ ошибка";
                table[i * 4 + 2].innerHTML = "⚠ ошибка";
                table[i * 4 + 3].innerHTML = "⚠ ошибка";
            }
        })
        .finally(() => {
            document.querySelectorAll('#myElement')[0].style.display = 'none';
            document.querySelectorAll('.block_table')[0].style.display = 'block';
        });
}

window.addEventListener("load", () => {
    setTimeout(users_table, 100);
});