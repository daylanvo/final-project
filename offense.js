var button = document.createElement("button");
button.textContent = "Click to display my favorite players.";
button.style.position = "fixed";
button.style.color = "cornflowerblue";
button.style.borderRadius = "5px";
button.style.padding = "20px";
button.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
document.body.appendChild(button);



const picList = ["gibbs.jpeg","stbrown.jpeg","laporta.jpeg","monty.jpeg"];

button.addEventListener("click", function(){
    picList.forEach(function(picList) {
      var pic = document.createElement("img");
      pic.src = picList;
      document.body.appendChild(pic);
      pic.style.margin = "20px"
      pic.style.padding = "10px"
      pic.style.border = "solid 5px black"
      pic.style.height = "270px"
      pic.style.width = "270px"
    });
});

var homeButton = document.getElementById("home");
var img = document.createElement("img");
img.src = "home.jpeg";

homeButton.innerHTML = ""; 
homeButton.appendChild(img);

/* trib helped */