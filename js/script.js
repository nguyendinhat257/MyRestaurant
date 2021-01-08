var linkImage = [
    "img/background-1.jpg",
    "img/background.jpg",
    "img/background-1.jpg"
];
var Img = document.getElementById("picture-side-bar");
var Items = document.querySelectorAll(".icon span");
var vals = Object.values(Items);
var index;
document.body.addEventListener('click',(ele)=>{
    index = vals.indexOf(ele.target);
    if( index != -1) {       
        Img.src = linkImage[index];
        changeValues();
    }
})
function changeValues() {
    var showIndex = document.getElementById("show-index");
    if(index != -1) {
        showIndex.innerHTML = "0" + (index + 1) + "/03";
    }
}