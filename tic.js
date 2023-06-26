function game(tag){
    const player1 = tag;
    let player2 = 'x';
    let player_turn = 'x';


    if(player1==='x'){
        player2 = "o"
        document.querySelector(".dd").innerHTML = "Player 1 to play";
    }
    else{
        player2 = 'x';
        document.querySelector(".dd").innerHTML = "Player 2 to play";
    }
    document.querySelector(".choose").style.display = 'none';
    document.querySelector(".container").style.display = 'block';

    const boxes = document.querySelectorAll(".b");


    const controller = new AbortController();


    for (let index=0 ;index<boxes.length;index++){
        boxes[index].addEventListener('click',()=>{
        if(!boxes[index].hasAttribute("g")){
            if(player_turn === "x"){
                let img = document.createElement("img");
                img.setAttribute("src","./ttt_img/x.png");
                img.setAttribute("class","t");
                boxes[index].appendChild(img);
                boxes[index].setAttribute("g","x");
                player_turn = "o";
                if(player1 == player_turn){
                    document.querySelector(".dd").innerHTML = "Player 1 to play";
                }
                else{
                    document.querySelector(".dd").innerHTML = "Player 2 to play";
                }
                setTimeout(game_win,20);
            }
            else{
                let img = document.createElement("img");
                img.setAttribute("src","./ttt_img/o.png");
                img.setAttribute("class","t");
                boxes[index].appendChild(img);
                boxes[index].setAttribute("g","o");
                player_turn = "x";
                if(player1 == player_turn){
                    document.querySelector(".dd").innerHTML = "Player 1 to play";
                }
                else{
                    document.querySelector(".dd").innerHTML = "Player 2 to play";
                }
                setTimeout(game_win,20);
                
            }
        }
            
        },
        { signal: controller.signal } // pass an AbortSignal to this handler
        );
    }

    function game_win(){
        

        //horizantal win condition
        for (let index = 0; index <boxes.length; index+=3) {
            if(boxes[index].getAttribute("g")=="x" && boxes[index+1].getAttribute("g")=="x" && boxes[index+2].getAttribute("g")=="x"){
                if(player1 === "x"){
                    alert("Player 1 WON!!");
                }
                else{
                    alert("Player 2 Won!!");
                }
                window.location.href = "./index.html";
                return;
            }
            if(boxes[index].getAttribute("g")=="o" && boxes[index+1].getAttribute("g")=="o" && boxes[index+2].getAttribute("g")=="o"){
                if(player1 === "o"){
                    alert("Player 1 WON!!");
                }
                else{
                    alert("Player 2 Won!!");
                }
                window.location.href = "./index.html";
                return;
            }
        }

        //vertical win condition
        for (let index = 0; index <3; index++) {
            if(boxes[index].getAttribute("g")=="x" && boxes[index+3].getAttribute("g")=="x" && boxes[index+6].getAttribute("g")=="x"){
                if(player1 === "x"){
                    alert("Player 1 WON!!");
                }
                else{
                    alert("Player 2 Won!!");
                }
                window.location.href = "./index.html";
                return;
            }
            if(boxes[index].getAttribute("g")=="o" && boxes[index+3].getAttribute("g")=="o" && boxes[index+6].getAttribute("g")=="o"){
                if(player1 === "o"){
                    alert("Player 1 WON!!");
                }
                else{
                    alert("Player 2 Won!!");
                }
                window.location.href = "./index.html";
                return;
            }
        }


        //1st diagonal win condition
        if(boxes[0].getAttribute("g")=="x" && boxes[4].getAttribute("g")=="x" && boxes[8].getAttribute("g")=="x"){
            if(player1 === "x"){
                alert("Player 1 WON!!");
            }
            else{
                alert("Player 2 Won!!");
            }
            window.location.href = "./index.html";
            return;
        }
        if(boxes[0].getAttribute("g")=="o" && boxes[4].getAttribute("g")=="o" && boxes[8].getAttribute("g")=="o"){
            if(player1 === "o"){
                alert("Player 1 WON!!");
            }
            else{
                alert("Player 2 Won!!");
            }
            window.location.href = "./index.html";
            return;
        }

        //2nd diagonal win condition
        if(boxes[2].getAttribute("g")=="x" && boxes[4].getAttribute("g")=="x" && boxes[6].getAttribute("g")=="x"){
            if(player1 === "x"){
                alert("Player 1 WON!!");
            }
            else{
                alert("Player 2 Won!!");
            }
            window.location.href = "./index.html";
            return;
        }
        if(boxes[2].getAttribute("g")=="o" && boxes[4].getAttribute("g")=="o" && boxes[6].getAttribute("g")=="o"){
            if(player1 === "o"){
                alert("Player 1 WON!!");
            }
            else{
                alert("Player 2 Won!!");
            }
            window.location.href = "./index.html";
            return;
        }

        //game_over condition
        let game_over = true;
        for (let index = 0; index < boxes.length; index++) {
            if(!boxes[index].hasAttribute("g")){
                game_over=false;
                break;
            }
        }
        if(game_over){
            controller.abort();
            alert("Game  Over!Draw");
            window.location.href = "./index.html";
            return;
        }


        
    }


    

}
