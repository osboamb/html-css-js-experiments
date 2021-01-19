console.log("it works!");

let nav_element = document.getElementsByTagName("nav")[0]; //[0] is the first tag (in this case first Nav)

nav_element.addEventListener("click", function() {
    console.log("nav clicked");
}, useCapture=true);

let list_items = document.getElementsByTagName("li");

for(let i = 0; i < list_items.length; i++) {
    list_items[i].addEventListener("click", function() {
        console.log("list item " + i + " clicked");
    })
}