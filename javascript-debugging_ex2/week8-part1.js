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
};


let changeClass = function(){
    if (this.className === 'black') {
        this.className = 'purple';
    } else if (this.className === 'purple') {
        this.className = 'black';
    }
}

let header = document.getElementById('main-heading');
console.log(header);
header.addEventListener('mouseenter', changeClass);
header.addEventListener('mouseout', changeClass);