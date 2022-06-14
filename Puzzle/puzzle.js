let getPuzzle = document.querySelector('#puzzle');
let getTile = getPuzzle.getElementsByClassName('tile')
let getTurns = document.querySelector('.turns')
let getTime = document.querySelector('.time')



let currentTile;
let otherTile;
let moves = 0;


//REMOVE BORDERS FIRST
for(let i=0; i<getTile.length;i++){
    getTile[i].setAttribute("style", "border:0px")
}

//FUNCTION TO SHUFFLE IMAGE TILES
function shuffle(){
    moves = 0; //set moves to 0
    getTurns.innerHTML = moves + " Moves" //update inner html
    
    
    
    
    
    
    let tileNo = [1,2,3,4,5,6,7,8,9]   //TILE NUMBERS IN ARRAY
    tileNo.sort(function(a,b){return 0.5 - Math.random()}); // SORT ARRAY RANDOMLY
    getPuzzle.innerHTML = null  // SET INNERHTML TO NULL
    // console.log(getPuzzle)

    //LOOP TO CREATE DIV ELEMENTS
  for(let i=0 ;i<tileNo.length; i++){
    
    var createDiv = document.createElement("div")   //CREATE DIV ELEMENTS
    createDiv.classList.add("tile")   //ADD "TILE" CLASS
    createDiv.id = `tile${tileNo[i]}` // ADD ID
    createDiv.setAttribute("draggable","true")  //set attributr to drag
    getPuzzle.appendChild(createDiv)  //APPEND THE CREATED DIV TO THE PUZZLE ID ELEMENT


   //DRAG FUNCTIONALITY 

   createDiv.addEventListener('dragstart',dragStart);
   createDiv.addEventListener('dragover',dragOver);
   createDiv.addEventListener('dragenter',dragEnter);
   createDiv.addEventListener('dragleave',dragLeave);
   createDiv.addEventListener('drop',dragDrop);
   createDiv.addEventListener('dragend',dragEnd);
   
  }//loop end
  
   

}//shuffle





// 

//DRAG TILE EVENT LISTENER CALLBACK FUNCTIONS
function dragStart(){
    currentTile = this;
    // console.log(currentTile)
    
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
}

function dragLeave(){

}

function dragDrop(){
    otherTile = this;
    // console.log(otherTile)
    
}

function dragEnd(){
    let currImg = currentTile.id  //get elements ID
    let otherImg = otherTile.id

    
    

  

    //swap
    currentTile.id = otherImg  //swap IDs
    otherTile.id = currImg;
    moves++ //increment moves
    getTurns.innerHTML = moves + " Moves"  //update moves innerhtml
    
    setTimeout(checkForWin,500); //check if player has won
    
    
    
    
    
}

//CHECK FOR WIN
function checkForWin(){
    
    counter =0;  // CORRECT IMAGE COUNTER
    let getIDs = document.querySelectorAll('.tile')
    for(let i=0; i<getIDs.length;i++){
        if(getIDs[i].id === 'tile'+parseInt(i+1)){ //CHECK IF ALL THE IMAGES ARE EQUAL TO TILE NO.
            counter++
           
        }  
    }
    if(counter === 9){
        for(let i=0; i<getTile.length;i++){
            getTile[i].setAttribute("style", "border:0px")
        }
        alert("You have Won!")
        
    }
          

}








