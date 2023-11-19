
function openClose() {
    let search = document.getElementById("search-bar");
    search.classList.toggle("open-search-bar"); 
}

let toggleButton = document.getElementById("search-div");
let closeButton = document.getElementById("close");

toggleButton.addEventListener("click", openClose);
closeButton.addEventListener("click", openClose)



