let num = document.querySelector(".num");
let percent = document.querySelector(".percent");
let i = 0;
 const updatePercent=setInterval(() => {
    if (i < 101) {
        num.innerText = i;
        i++;
    }
    else{
        percent.innerText = "";
    }
}, 50);

