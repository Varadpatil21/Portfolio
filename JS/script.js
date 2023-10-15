// const text = document.querySelector(".typing");
// const textLoad = () => {
//     setTimeout(() => {
//         text.textContent = "Front End Developer";
//     }, 0);
//     setTimeout(() => {
//         text.textContent = "Problem Solver";
//     }, 4000);
//     setTimeout(() => {
//         text.textContent = "IT Undergrad";
//     }, 8000);
// }
// textLoad();
// setInterval(textLoad, 12000);

// const c=document.getElementById('type');
// const arr=["a","b","c"]
// for (let e of arr){
//     c.innerText=e
//    setTimeout(200);
// }

const c = document.getElementById('type');
const arr = ["a", "b", "c"];
let i = 0;

function changeText() {
    if (i < arr.length) {
        c.innerText = arr[i];
        i++;
        setTimeout(changeText, 200);
    }
}

changeText();
