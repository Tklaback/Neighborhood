var bounds = [
    {min:0,max:500},
    {min:500,max:850},
    {min:850, max:Number.MAX_VALUE}
];

var old = window.innerWidth;

var elem = document.getElementById('links');


function dropDown(){
    elem.style.display = 'none';
}

function bringBack(){
    elem.style.display = 'flex';
}

function myFunc(){
    let oldGroup;
    let curGroup;
    let current = window.innerWidth;
    for (let num=0;num<bounds.length;num++){
        if (old > bounds[num].min && old < bounds[num].max){
            oldGroup = num;
            break;
        }
    }
    for (let num=0;num<bounds.length;num++){
        if (current > bounds[num].min && current < bounds[num].max){
            curGroup = num;
            break;
        }
    }
    if ((oldGroup === 1 && curGroup === 0) || curGroup === 0){
        // console.log(oldGroup, curGroup);
        dropDown();
        old = current;
    }
    else if (oldGroup === 0 && curGroup === 1){
        bringBack();
    }
}


window.onload = function() {
  myFunc(1);
};
addEventListener('resize', (event) => {myFunc()});
// addEventListener('resize', (event));