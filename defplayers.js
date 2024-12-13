var coltsList = ["tuff.jpg", "colts.webp","back.jpeg"]

document.addEventListener("keydown", function(event) {

    if (event.key == "1") {
        document.body.style.backgroundImage = "url(" + coltsList[0] + ")";
    } else if (event.key == "2") {
        document.body.style.backgroundImage = "url(" + coltsList[1] + ")";
    } else if (event.key == "3") {
        document.body.style.backgroundImage = "url(" + coltsList[2] + ")";
    }
});

/* w3schools */