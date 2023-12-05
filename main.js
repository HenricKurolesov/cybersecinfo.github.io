function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


function myFunction1() {
    navigator.clipboard.writeText('ilkon1gonfriz@gmail.com')
    alert("Coped!");
}
function myFunction2() {
    navigator.clipboard.writeText('henrykurolesov@gmail.com')
    alert("Coped!");
}



document.getElementById('like-btn').addEventListener('click', function () {
    this.classList.toggle('liked');
});

document.getElementById('dislike-btn').addEventListener('click', function () {
    this.classList.toggle('disliked');
});













