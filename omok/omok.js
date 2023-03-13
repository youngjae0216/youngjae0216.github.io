const size = 10;
let turn = 1;
let win = 0;

const root = document.querySelector(".root");
const map = document.createElement("div");
const line = document.createElement("div");
map.setAttribute("class", "map");
line.setAttribute("class", "line");

setMap();

function setMap() {
    for(let i =0 ; i<size; i++){
        const row1 = document.createElement("div");
        const row2 = document.createElement("div");
        row1.setAttribute("class", "row1");
        row2.setAttribute("class", "row2");
        for(let j=0; j<size; j++){
            let id = `y${i}x${j}`;
            const item1 = document.createElement("div");
            const item2 = document.createElement("div");
            item1.setAttribute("class", "box");
            item2.setAttribute("class", "box");
            item1.setAttribute("id", id);
            item2.setAttribute("id", id);

            item1.addEventListener("click", e =>{
                if(item1.innerText === ""){
                    item1.innerText = (turn === 1 ? "O" : "X");

                    checkWinner();
                    
                    turn = turn === 1 ? 2 : 1;
                }
            });
            row1.append(item1);
            row2.append(item2);
        }
        line.append(row1);
        map.append(row2);
    }
    root.append(map);
    root.append(line);
}

function checkWinner(){
    checkGaro();
    checkSero();
    checkDaegak();
    checkReverse();

    if(win !== 0){
        alert(`player${win} WIN ! `);
    }


}

function checkGaro(){
    for(let i=0; i<size; i++){
        let count = 0;
        for(let j=0; j<size; j++){
            const id = `y${i}x${j}`;
            const box = map.querySelector(`#${id}`);
            const text = box.innerText;
            if(text === ( turn === 1 ? "O" : "X")){
                count++;
            }

            if(count >= 5){
                win = turn;
            }
        }
    }
}
function checkSero(){
    for(let i=0; i<size; i++){
        let count = 0;
        for(let j=0; j<size; j++){
            const id = `y${j}x${i}`;
            const box = map.querySelector(`#${id}`);
            const text = box.innerText;
            if(text === ( turn === 1 ? "O" : "X")){
                count++;
            }

            if(count >= 5){
                win = turn;
            }
        }
    }
}
function checkDaegak(){
    for(let i=0; i<size-4; i++){
        for(let j=0; j<size-4; j++){
            let count = 0;
            for(let k=0; k<5;k++){
                const id = `y${i+k}x${j+k}`;
                const box = map.querySelector(`#${id}`);
                const text = box.innerText;
                if(text === ( turn === 1 ? "O" : "X")){
                    count++;
                }
                
                if(count >= 5){
                    win = turn;
                }
            }
        }
    }
}
function checkReverse(){
    for(let i=4; i<size; i++){
        for(let j=0; j<size-4; j++){
            let count = 0;
            for(let k=0; k<5;k++){
                const id = `y${j+k}x${i-k}`;
                const box = map.querySelector(`#${id}`);
                const text = box.innerText;
                if(text === ( turn === 1 ? "O" : "X")){
                    count++;
                }
                
                if(count >= 5){
                    win = turn;
                }
            }
        }
    }
}

function reset(){
    turn = 1;
    win = 0;
    location.reload();
}

const resetBox = document.createElement("div");
resetBox.setAttribute("class", "reset");
resetBox.innerText = "RESET";
resetBox.addEventListener("click", e =>{
    reset();
});

const body = document.querySelector("body");
body.append(resetBox);