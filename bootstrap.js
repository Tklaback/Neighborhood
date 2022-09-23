var bounds = [
    {min:0,max:900},
    {min:900,max:1000},
    {min:1000, max:Number.MAX_VALUE}
];

var old = window.innerWidth;

var logo = document.getElementById('links');

var bars = document.getElementById('bars');

var linksDisplayedVert = false;


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
        if (linksDisplayedVert){
            displayLinks();
        }
        bringBack();
    }
}


function fade(element){
    
}

function displayLinks(){
    let arr = [["About", "https://facebook.com", "1"], ["Help", "#", "2"], ["Watch", "#", "3"], 
    ["Sponsor", "#", "4"]];
    if (!linksDisplayedVert){
        arr.forEach(element => {
            var myDiv = document.createElement("a");
            myDiv.className = "newLink";
            myDiv.textContent = element[0];
            myDiv.id = element[2];
            myDiv.href = element[1];
            document.getElementById("main-hdr").appendChild(myDiv);
            linksDisplayedVert = true;
        });
    }
    else{
        arr.forEach(element => {
            document.getElementById(element[2]).remove();
            linksDisplayedVert = false;
        });
    }
}


window.onload = function() {
    bars.style.display = 'none';
    myFunc(1);
  
};
addEventListener('resize', (event) => {myFunc()});
// addEventListener('resize', (event));