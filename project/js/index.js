let countText = document.querySelector('.count');
let countUpButton = document.querySelector('.countUp');
let countUp = countUpFunc();

function countUpFunc(){
    
    let count = 0;

    return function(){

        count++;

        countText.textContent = count;

    }

}

countUpButton.onclick = countUp;