"use strict";

window.addEventListener("load", function () {
    var form = document.querySelector("#add");
    var content = document.querySelector("#content");
    var quotes = document.querySelector(".output .quotes");

    function getQuotes() {
        quotes.innerHTML = "";
        fetch("https://limitless-citadel-88557.herokuapp.com/api/quotes").then(function (res) {
            return res.json();
        }).then(function (data) {
            var res = data.quotes;
            res.forEach(function (user) {
                quotes.innerHTML += "    <li class=\"flex jcb p-5 mt-2\">\n                                 <p>" + user.content + "</p> \n                                  <button class=\"del\" data-id=\"" + user.id + "\">del</button> \n                             </li>\n                            \n                        ";
            });
        });
    }

    getQuotes();

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        console.log(content.value);
        fetch("https://limitless-citadel-88557.herokuapp.com/api/quote", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({ content: content.value })
        }).then(function (res) {
            console.log(res);
            alert("Quote " + content.value + "  add!!!");
            content.value = "";
            getQuotes();
        }).catch(function (res) {
            console.log(res);
        });
    });
});