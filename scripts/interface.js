
document.addEventListener('DOMContentLoaded', ()=> {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick);

    })

})

function handleClick (event) {

   let square = event.target; 
   let position = square.id
   let vencedor = ""
   
   

   if (playerTime == 0) {
      vencedor = " O Gato"   
   } else {
      vencedor = " O Cachorro"
   }

   if (handleMove(position)){
        setTimeout(()=>{
            alert("O Jogo Acabou - O vencedor foi: " + vencedor)

        }, 10);

   }

    
  
     
   updateSquare(position);
   
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}' ></div> ` 


}

function updateSquares() {
    let squares = document.querySelectorAll(".square");
    squares.forEach((square)=>{
    
    let position = square.id        
    let symbol = board[position];
    
    
    square.innerHTML = `<div class='${symbol}' ></div> ` 
    })
}     
        
    
       var botao = document.getElementById("botao");
       botao.addEventListener("click", restart);

       function restart() {

       board = ['','','','','','','','',''];
       playerTime = 0;
       gameOver = false;

       updateSquares()

       }
       
       
                     
       
      
       

        
      


   
