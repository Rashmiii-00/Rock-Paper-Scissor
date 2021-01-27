/*
//console.log("hi");
var display = document.querySelector(".display_user");
//var rock = document.querySelector("li.rock");
// var option = document.getElementsByClassName("display_user");
rock.addEventListener("click()", function(){
    console.log("hi");
    var image = document.createElement("img");
    image.src = "rock.jpeg";
    display.appendChild(image);
});
*/

function rockDisplay(){
    var display = document.querySelector(".display_user");
    display.innerHTML = "<b>"+"<center>" + "You selected Rock!" +"</center>"+ "</b>"+"<br>";
    //display.innerHTML.style.fontSize = "20px";
    var line = document.createElement("br");
    display.appendChild(line);
    var image = document.createElement("img");
    image.src = "rock.jpeg";
    display.appendChild(image);
    image.classList.add("image_user");
    computer_display(0); // to tell which fn has called comp display
}

function paperDisplay(){
    var display = document.querySelector(".display_user");
    display.innerHTML = "<b>"+"<center>"+"You selected Paper!" +"</center>"+"</b>"+"<br>";
    var line = document.createElement("br");
    display.appendChild(line);
    var image = document.createElement("img");
    image.src = "paper.jpg";
    display.appendChild(image);
    image.classList.add("image_user");
    computer_display(1);
}

function scissorDisplay(){
    var display = document.querySelector(".display_user");
    display.innerHTML = "<b>"+"<center>"+"You selected Scissor!" +"</center>"+"</b>"+"<br>";
    var line = document.createElement("br");
    display.appendChild(line);
    var image = document.createElement("img");
    image.src = "scissor.jpg";
    display.appendChild(image);
    image.classList.add("image_user");
    computer_display(2);
}


function computer_display(num){
    var arr_img = ['rock_r.jpg', 'paper_r.jpg', 'scissor_r.jpg'];
    var arr_win = ['rock_paper.jpg', 'scissor_rock.jpg', 'paper_scissor.jpg'];
    var arr = ['Rock', 'Paper', 'Scissor'];

    var random_number = Math.floor(Math.random() * 3);

    var display_comp = document.querySelector(".display_computer");
    display_comp.innerHTML = "<b>"+"<center>"+"Computer selected "+ arr[random_number] +'!' +"</center>"+"</b>"+"<br>";
    var line = document.createElement("br");
    display_comp.appendChild(line);
    var image_comp = document.createElement("img");
    image_comp.src = arr_img[random_number];
    display_comp.appendChild(image_comp);
    image_comp.classList.add("image_comp");

    //for tie
    if(num === random_number){
        var win = document.querySelector(".win");
        win.innerHTML = "<b>"+"<center>"+"Its a Tie!" +"</center>"+"</b>"+"<br>";
        var line = document.createElement("br");
        win.appendChild(line);
        var image = document.createElement("img");
        image.src = "tie.png";
        win.appendChild(image);
        image.classList.add("image_tie");
    }
   // winning cases
    if(num == 0 && random_number == 1){ //rock - paper
        var win = document.querySelector(".win");
        win.innerHTML = "<b>"+"<center>"+"Rock Wraps Paper"+"</b>"+"<br>"+"<b>"+"Computer won!!" +"</center>"+"</b>"+"<br>";
        var line = document.createElement("br");
        win.appendChild(line);
        var image = document.createElement("img");
        image.src = "rock_paper.jpg";
        //image.src = "winn.jfif";
        win.appendChild(image);
        image.classList.add("image_win");
    }

    if(num == 0 && random_number == 2){ //rock - scissor
        var win = document.querySelector(".win");
        win.innerHTML =  "<b>"+"<center>"+"Rock Blunts Scissor"+"</b>"+"<br>"+"<b>"+"You won!!" +"</center>"+"<br>";
        var line = document.createElement("br");
        win.appendChild(line);
        var image = document.createElement("img");
        image.src = "scissor_rock.jpg";
       // image.src = "winn.jfif";
        win.appendChild(image);
        image.classList.add("image_win");
    }

    if(num == 1 && random_number == 0){ //paper - rock
        var win = document.querySelector(".win");
        win.innerHTML =  "<b>"+"<center>"+"Rock Wraps Paper"+"</b>"+"<br>"+"<b>"+"You won!!" +"</center>"+"<br>";
        var line = document.createElement("br");
        win.appendChild(line);
        var image = document.createElement("img");
        image.src = "rock_paper.jpg";
       //image.src = "winn.jfif";
        win.appendChild(image);
        image.classList.add("image_win");
    }

    if(num == 1 && random_number == 2){ //paper - scissor
        var win = document.querySelector(".win");
        win.innerHTML =  "<b>"+"<center>"+"Scissor Cuts Paper"+"</b>"+"<br>"+"<b>"+"Computer won!!" +"</center>"+"<br>";
        var line = document.createElement("br");
        win.appendChild(line);
        var image = document.createElement("img");
        image.src = "paper_scissor.jpg";
        //image.src = "winn.jfif";
        win.appendChild(image);
        image.classList.add("image_win");
    }

    if(num == 2 && random_number == 0){ //scissor - rock
        var win = document.querySelector(".win");
        win.innerHTML =  "<b>"+"<center>"+"Rock Blunts Scissor"+"</b>"+"<br>"+"<b>"+"Computer won!!" +"</center>"+"<br>";
        var line = document.createElement("br");
        win.appendChild(line);
        var image = document.createElement("img");
        image.src = "scissor_rock.jpg";
        //image.src = "winn.jfif";
        win.appendChild(image);
        image.classList.add("image_win");
    }

    if(num == 2 && random_number == 1){ //scissor - paper
        var win = document.querySelector(".win");
        win.innerHTML =  "<b>"+"<center>"+"Scissor Cuts Paper"+"</b>"+"<br>"+"<b>"+"You won!!" +"</center>"+"<br>";
        var line = document.createElement("br");
        win.appendChild(line);
        var image = document.createElement("img");
        image.src = "paper_scissor.jpg";
        //image.src = "winn.jfif";
        win.appendChild(image);
        image.classList.add("image_win");
    }
}

//image.src = "winn.jfif"
