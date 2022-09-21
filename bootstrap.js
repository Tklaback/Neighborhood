var linksDisplayedVert = false;

var bounds = [
    {min:0,max:500},
    {min:500,max:850},
    {min:850, max:Number.MAX_VALUE}
];

var old = window.innerWidth;

var logo = document.getElementById('links');

var bars = document.getElementById('bars');


function dropDown(){
    logo.style.display = 'none';
    bars.style.display = 'block';
}

function bringBack(){
    logo.style.display = 'flex';
    bars.style.display = 'none';
}

function myFunc(isFirst=0){
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


function fade(element){
    
}

function displayLinks(){
    let dict = {"logo":27}
    var myDiv = document.createElement("div");
    myDiv.className = "logo";
    document.getElementById("main-hdr").appendChild(myDiv);
}


window.onload = function() {
    bars.style.display = 'none';
    myFunc(1);
  
};
addEventListener('resize', (event) => {myFunc()});
// addEventListener('resize', (event));