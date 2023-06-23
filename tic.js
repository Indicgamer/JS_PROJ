let x = document.getElementById('x');
let o = document.getElementById('o');
let player = '1';

let attr = Array.from(x.attributes);
console.log(attr)




o.onclick = function(){
    player ='o';
}
x.onclick = function(){
    player ='x';
}

let box = [];

for (let index = 0; index < 9; index++) {
    box[index] = document.getElementById('bx'+(index+1));   
}

console.log(box)
for (let index = 0; index < box.length; index++) {
    box[index].addEventListener('click',function(){
        main(index);
    });
    
}

function main(index){
    console.log(player);
    if(!(box[index].firstChild)){
        if(player == 'x'){
            let x_image = document.createElement('img');
            x_image.setAttribute('src','ttt_img/close.png');
            x_image.setAttribute('class','x');
            box[index].appendChild(x_image);
            box[index].setAttribute('x',true);
            setTimeout(winner,20);
            
        }
        if(player == 'o'){
            let o_image = document.createElement('img');
            o_image.setAttribute('src','ttt_img/o.png');
            o_image.setAttribute('class','o');
            box[index].appendChild(o_image);
            box[index].setAttribute('x',true);
            setTimeout(winner,20);
           
            
            
        }
        if(player =='x'){
            player ='o';
            return;
        }
        if(player =='o'){
            player ='x';
            return;
        }
        
    }
}

function gamer(index){
    console.log(player);
    
}



function winner(){
    for (let index = 0; index < box.length; index+=3) {
        if(box[index].firstChild && box[index+1].firstChild && box[index+2].firstChild){
            if(box[index].childNodes[0].attributes[1]['value'] == 'x' && box[index+1].childNodes[0].attributes[1]['value'] == 'x' && box[index+2].childNodes[0].attributes[1]['value'] == 'x'){
                alert("X WON!!");
                location.reload();
                box[index].removeEventListener('click',function(){
                    main(index);
                })
                return;
            }
            if(box[index].childNodes[0].attributes[1]['value'] == 'o' && box[index+1].childNodes[0].attributes[1]['value'] == 'o' && box[index+2].childNodes[0].attributes[1]['value'] == 'o'){
                alert("O WON!!");
                location.reload();
                return;
            }
        }  
    }
    for (let index = 0; index < 3; index++) {
        if(box[index].firstChild && box[index+3].firstChild && box[index+6].firstChild){
            if(box[index].childNodes[0].attributes[1]['value'] == 'x' && box[index+3].childNodes[0].attributes[1]['value'] == 'x' && box[index+6].childNodes[0].attributes[1]['value'] == 'x'){
                alert("X WON!!");

                return;
            }
            if(box[index].childNodes[0].attributes[1]['value'] == 'o' && box[index+3].childNodes[0].attributes[1]['value'] == 'o' && box[index+6].childNodes[0].attributes[1]['value'] == 'o'){
                alert("O WON!!")
                return;
            }
        }  
    }
    if(box[0].firstChild && box[4].firstChild && box[8].firstChild){
        if(box[0].childNodes[0].attributes[1]['value'] == 'x' && box[4].childNodes[0].attributes[1]['value'] == 'x' && box[8].childNodes[0].attributes[1]['value'] == 'x'){
            alert("X WON!!");
            return;
        }
        if(box[0].childNodes[0].attributes[1]['value'] == 'o' && box[4].childNodes[0].attributes[1]['value'] == 'o' && box[8].childNodes[0].attributes[1]['value'] == 'o'){
            alert("O WON!!")
            return;
        }
    }
    if(box[2].firstChild && box[4].firstChild && box[6].firstChild){
        if(box[2].childNodes[0].attributes[1]['value'] == 'x' && box[4].childNodes[0].attributes[1]['value'] == 'x' && box[6].childNodes[0].attributes[1]['value'] == 'x'){
            alert("X WON!!");
            return;
        }
        if(box[2].childNodes[0].attributes[1]['value'] == 'o' && box[4].childNodes[0].attributes[1]['value'] == 'o' && box[index].childNodes[6].attributes[1]['value'] == 'o'){
            alert("O WON!!");
            return;
        }
    }
}



