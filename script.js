var container=document.querySelector(".container")
    var bookcontainer2=document.querySelector(".book-container2")
    var bookauthor=document.querySelector("#bookauthor")
    var booktitle=document.querySelector("#booktitle")
    var textarea=document.querySelector("#textarea")
    
    function add() {
    if (booktitle.value.trim() === "" || bookauthor.value.trim() === "") {
        alert("Please enter both book title and author.");
        return;
    }
    var div = document.createElement("div");
    var h2 = document.createElement("h2");
    var h5 = document.createElement("h5");
    var p = document.createElement("p");
    
    h2.textContent = booktitle.value;
    h5.textContent = bookauthor.value;
    p.innerHTML = textarea.value + "<br/><button onclick='remove2(event)'>Delete</button>";
    
    div.append(h2, h5, p);
    container.append(div);
    
    // Clear input fields
    booktitle.value = "";
    bookauthor.value = "";
    textarea.value = "Short Description..";
    
    popupbox.style.display = "none";
    overlay.style.display = "none";
}

    var popupbox=document.querySelector(".popupbox")
    var overlay=document.querySelector(".overlay")
    function show(){
        popupbox.style.display="block";
        overlay.style.display="block";
    }
    function hide(){
        popupbox.style.display="none";
        overlay.style.display="none";
    }
    function remove2(event){
        event.target.parentElement.parentElement.remove()
    }
    function remove(event){
        event.target.parentElement.remove()
    }