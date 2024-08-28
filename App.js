let Boxes=document.querySelectorAll(".box")
let resetgame=document.querySelector("#reset_btn");
let winner_container=document.querySelector(".winner_container");
let msg=document.querySelector("#msg");
let newgame=document.querySelector("#new_btn");
let turnO=true; 
// playerx,playero
 let winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

Boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){
            box.innerText="O"
            turnO=false;
        }
        else{ box.innerText="X"
        turnO=true;

        }
        box.disabled=true;
        checkWinner();
    })
})
const checkWinner=()=>{
    for(let pattern of winpatterns){
        let pos1val=Boxes[pattern[0]].innerText;
        let pos2val=Boxes[pattern[1]].innerText;
        let pos3val=Boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                console.log('winner', pos1val);
                showWinner(pos1val);
            }
        }
    } 
}
const showWinner=(winner)=>{
    msg.innerText=(`congratulations winner is ${winner}`);
    winner_container.classList.remove("hide");
    disableBoxes();
}
const disableBoxes=()=>{
    for(let box of Boxes){
        box.disabled=true;
    }

}
const enableBoxes=()=>{
    for(let box of Boxes){
        box.disabled=false;
        box.innerText="";
    }

}
const resetboxes=()=>{
    turnO=true;
    enableBoxes();
    winner_container.classList.add(" hide");

}
newgame.addEventListener("click",resetboxes);
resetgame.addEventListener("click",resetboxes);
