const boxes = document.querySelectorAll(".b");



const set = ["x", "o"];
const comp = set[Math.floor(Math.random() * 2)];

let player;
let comp_turn =false;

if (comp === "x") {
  player = "o";
  comp_turn = true;
} else {
  player = "x";
}


if(comp_turn){
    comp_plays();
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }



for (let index = 0; index < boxes.length; index++) {
  boxes[index].addEventListener(
    "click",
    () => {
      if (!boxes[index].hasAttribute("g")) {
        let img = document.createElement("img");
        img.setAttribute("src","./ttt_img/"+player+".png");
        img.setAttribute("class", "t");
        boxes[index].appendChild(img);
        boxes[index].setAttribute("g", player);
        comp_turn = true;
        (async ()=>{
            await sleep(100);
            game_win();
        })();
        (async ()=>{
            await sleep(100);
            comp_plays();
        })();
      }
    },
    
  );
}


function comp_plays(){
    const pp = Math.floor(((Math.random())*9));
    if (!boxes[pp].hasAttribute("g")){
        const img = document.createElement("img");
        img.setAttribute("src","./ttt_img/"+comp+".png");
        img.setAttribute("class","t");
        boxes[pp].appendChild(img);
        boxes[pp].setAttribute("g",comp);
        comp_turn = false;
    }
    else{
        comp_plays();
    }
    (async ()=>{
        await sleep(100);
        game_win();
    })();
}



function game_win() {


  //horizantal win condition
  for (let index = 0; index < boxes.length; index += 3) {
    if (boxes[index].getAttribute("g") == "x" && boxes[index + 1].getAttribute("g") == "x" && boxes[index + 2].getAttribute("g") == "x") 
    {
        if(player === "x"){
            document.querySelector(".container").style.display = "none";
            document.querySelector(".results").innerHTML = "Player WON!!";
            return;
        }
        else{
            document.querySelector(".container").style.display = "none";
            document.querySelector(".results").innerHTML = "Computer WON!!";
            return;
        }
      

    }
    if (boxes[index].getAttribute("g") == "o" && boxes[index + 1].getAttribute("g") == "o" && boxes[index + 2].getAttribute("g") == "o")
    {
        if(player === "o"){
            document.querySelector(".container").style.display = "none";
            document.querySelector(".results").innerHTML = "Player WON!!";
            return;
        }
        else{
            document.querySelector(".container").style.display = "none";
            document.querySelector(".results").innerHTML = "Computer WON!!";
            return;
        }
      

    }
  }

  //vertical win condition
  for (let index = 0; index < 3; index++) {
    if (boxes[index].getAttribute("g") == "x" && boxes[index + 3].getAttribute("g") == "x" && boxes[index + 6].getAttribute("g") == "x"
    ) {
        if(player === "x"){
            document.querySelector(".container").style.display = "none";
            document.querySelector(".results").innerHTML = "Player WON!!";
            return;
        }
        else{
            document.querySelector(".container").style.display = "none";
            document.querySelector(".results").innerHTML = "Computer WON!!";
            return;
        }

    }
    if (boxes[index].getAttribute("g") == "o" &&boxes[index + 3].getAttribute("g") == "o" &&boxes[index + 6].getAttribute("g") == "o") {
        if(player === "o"){
            document.querySelector(".container").style.display = "none";
            document.querySelector(".results").innerHTML = "Player WON!!";
            return;
        }
        else{
            document.querySelector(".container").style.display = "none";
            document.querySelector(".results").innerHTML = "Computer WON!!";
            return;
        }

    }
  }


  //1st diagonal win condition
  if (boxes[0].getAttribute("g") == "x" &&boxes[4].getAttribute("g") == "x" &&boxes[8].getAttribute("g") == "x") {
    if(player === "x"){
        document.querySelector(".container").style.display = "none";
        document.querySelector(".results").innerHTML = "Player WON!!";
        return;
    }
    else{
        document.querySelector(".container").style.display = "none";
        document.querySelector(".results").innerHTML = "Computer WON!!";
        return;
    }

  }
  if (boxes[0].getAttribute("g") == "o" &&boxes[4].getAttribute("g") == "o" &&boxes[8].getAttribute("g") == "o") {
    if(player === "o"){
        document.querySelector(".container").style.display = "none";
        document.querySelector(".results").innerHTML = "Player WON!!";
        return;
    }
    else{
        document.querySelector(".container").style.display = "none";
        document.querySelector(".results").innerHTML = "Computer WON!!";
        return;
    };

  }

  //2nd diagonal win condition
  if (boxes[2].getAttribute("g") == "x" &&boxes[4].getAttribute("g") == "x" && boxes[6].getAttribute("g") == "x") {
    if(player === "x"){
        document.querySelector(".container").style.display = "none";
        document.querySelector(".results").innerHTML = "Player WON!!";
        return;
    }
    else{
        document.querySelector(".container").style.display = "none";
        document.querySelector(".results").innerHTML = "Computer WON!!";
        return;
    }

  }
  if (boxes[2].getAttribute("g") == "o" &&boxes[4].getAttribute("g") == "o" &&
    boxes[6].getAttribute("g") == "o") {
    if(player === "o"){
        document.querySelector(".container").style.display = "none";
        document.querySelector(".results").innerHTML = "Player WON!!";
        return;
    }
    else{
        document.querySelector(".container").style.display = "none";
        document.querySelector(".results").innerHTML = "Computer WON!!";
        return;
    }
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
    document.querySelector(".container").style.display = "none";
    document.querySelector(".results").innerHTML = "Game-Over! Draw";
  }
}


    

