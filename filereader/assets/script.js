let downbtn = document.querySelector(".download-img");
let change = document.querySelector(".file-input");
let inputs = document.querySelectorAll(".input");
let btn = document.querySelector(".btn");
let img = document.querySelector(".img");
let imgdown = document.querySelector(".img-download");

let subscribers = {};
let array = [];
let but = () => change.click();

function Changes(e) {
  let files = Array.from(e.target.files);
  files.forEach((file) => {
    let reader = new FileReader();
    reader.onload = (e) => {
      img.src = e.target.result;
      let closebtn = document.createElement("i");
      imgdown.append(closebtn);
      closebtn.onclick = function () {
        closebtn.remove();
        img.src = "/assets/images/av.png";
      };
    };
    reader.readAsDataURL(file);
  });
}

function dataInfo() {
  inputs.forEach((input) => {
    let place = input.getAttribute("placeholder");
    subscribers[place] = input.value;
  });
  array.push(subscribers);
  localStorage.setItem("subscribers", JSON.stringify(array));
  array = JSON.parse(localStorage.getItem("subscribers"));
}

downbtn.addEventListener("click", but);
change.addEventListener("change", Changes);
btn.addEventListener("click", dataInfo);
