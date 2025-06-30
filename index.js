// // Your code here
// const dodger = document.getElementById("dodger")

// function moveDodgerLeft() {
//     dodger.style.left = "170px"

// }
// function moveDodgerRight(){
// dodger.style.right = "300px"}

const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    const dodgerWidth = 40; // Assuming dodger is 40px wide
    const maxRight = window.innerWidth - dodgerWidth; // Right boundary of the game field

    if (left + dodgerWidth < maxRight) {
        dodger.style.left = `${left + 1}px`;
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});