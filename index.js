let rule_book= document.getElementById("rules");
let home_first=document.getElementById("fr");
let home_second=document.getElementById("sr");
let home_win= document.getElementById("win");
let home_loss=document.getElementById("loss");
let home_draw=document.getElementById("draw");
let home_next=document.getElementById("next");
let home_score=document.getElementById("score");
let home_final=document.getElementById("final");
document.getElementById("s2").value=localStorage.getItem("your_score");
document.getElementById("us2").value=localStorage.getItem("pc_score");
function open_rule() {
    rule_book.classList.add("show"); 
}
function close_rule() {
    rule_book.classList.remove("show");
}
function who_win(my_choice){
    let computer_choice=Math.floor(Math.random()*3);
    if((my_choice==='0' && computer_choice===1) || (my_choice==='1' && computer_choice===2) || (my_choice==='2' && computer_choice===0)){
        let user= document.getElementById("s2").value;
        let x=Number(user);
        x +=1;
        localStorage.setItem("your_score", x);
        document.getElementById("s2").value=localStorage.getItem("your_score");
        let win= document.getElementById("win1");
        let win_sign=document.getElementById("win2");
        let loss= document.getElementById("loss0");
        let loss_sign=document.getElementById("loss1");
        document.getElementById("rule").style.left="75.5rem";
        home_next.classList.add("show_next");
        if(my_choice==='0'){
            win.setAttribute("src", "./image/Group 2.svg");
            win_sign.setAttribute("src", "./image/icons8-fist-67 1 (1).png");
            loss.setAttribute("src", "./image/Group 3 (1).svg");
            loss_sign.setAttribute("src", "./image/17911 1.png");
            document.getElementById("loss1").style.left="59.7rem";     
            document.getElementById("loss1").style.top="12.5rem";  
            document.getElementById("win2").style.left="4.5rem";
            document.getElementById("win2").style.top="5rem";    
        }else if(my_choice==="1"){
            win.setAttribute("src", "./image/Group 3 (1).svg");
            win_sign.setAttribute("src", "./image/17911 1.png");
            loss.setAttribute("src", "./image/Group 1.svg");
            loss_sign.setAttribute("src", "./image/icons8-hand-64 1.png");
            document.getElementById("win2").style.left="5.8rem";  
            document.getElementById("win2").style.top="5.2rem";
            document.getElementById("loss1").style.left="58.6rem";    
            document.getElementById("loss1").style.top="12rem";         
        }else{
            win.setAttribute("src", "./image/Group 1.svg");
            win_sign.setAttribute("src", "./image/icons8-hand-64 1.png");
            loss.setAttribute("src", "./image/Group 2.svg");
            loss_sign.setAttribute("src", "./image/icons8-fist-67 1 (1).png");
            document.getElementById("win2").style.left="4.8rem"; 
            document.getElementById("win2").style.top="4.8rem";
            document.getElementById("loss1").style.left="58.4rem"; 
            document.getElementById("loss1").style.top="12rem";  
        }
        home_first.classList.add("show_first");
        home_second.classList.add("show_second");
        home_win.classList.add("show_win");
    }else if((my_choice==='0' && computer_choice===2) || (my_choice==='1' && computer_choice===0) || (my_choice==='2' && computer_choice===1)){
        let user= document.getElementById("us2").value;
        let x=Number(user);
        x +=1;
        localStorage.setItem("pc_score", x);
        document.getElementById("us2").value=localStorage.getItem("pc_score");
        let win= document.getElementById("pc_win");
        let win_sign=document.getElementById("pc_win1");
        let loss= document.getElementById("loss6");
        let loss_sign=document.getElementById("loss7");
        if(my_choice==="0"){
            win.setAttribute("src", "./image/Group 2.svg");
            win_sign.setAttribute("src", "./image/icons8-fist-67 1 (1).png");
            loss.setAttribute("src", "./image/Group 1.svg");
            loss_sign.setAttribute("src", "./image/icons8-hand-64 1.png");
            document.getElementById("pc_win1").style.left="27.7rem";
            document.getElementById("loss7").style.left="4.8rem";
            document.getElementById("loss7").style.top="4.8rem";  
        }else if(my_choice==="1"){
            win.setAttribute("src", "./image/Group 3 (1).svg");
            win_sign.setAttribute("src", "./image/17911 1.png");
            loss.setAttribute("src", "./image/Group 2.svg");
            loss_sign.setAttribute("src", "./image/icons8-fist-67 1 (1).png");
            document.getElementById("pc_win1").style.left="29rem";
            document.getElementById("pc_win1").style.top="12.5rem";
            document.getElementById("loss7").style.left="4.6rem";
            document.getElementById("loss7").style.top="4.8rem";  
        }else{
            win.setAttribute("src", "./image/Group 1.svg");
            win_sign.setAttribute("src", "./image/icons8-hand-64 1.png");
            loss.setAttribute("src", "./image/Group 3 (1).svg");
            loss_sign.setAttribute("src", "./image/17911 1.png");
            document.getElementById("loss7").style.left="5.8rem";
            document.getElementById("loss7").style.top="5rem";  
            document.getElementById("pc_win1").style.left="28rem";
            document.getElementById("pc_win1").style.top="12rem";
        }
        home_first.classList.add("show_first");
        home_second.classList.add("show_second");
        home_loss.classList.add("loss_show");
    }else{
        let you_pick= document.getElementById("draw1");
        let you_pick_sign=document.getElementById("draw2");
        let pc_pick= document.getElementById("draw3");
        let pc_pick_sign=document.getElementById("draw4");
        if(my_choice==="0"){
            you_pick.setAttribute("src", "./image/Group 2.svg");
            you_pick_sign.setAttribute("src", "./image/icons8-fist-67 1 (1).png");
            pc_pick.setAttribute("src", "./image/Group 2.svg");
            pc_pick_sign.setAttribute("src", "./image/icons8-fist-67 1 (1).png");
            document.getElementById("draw2").style.left="27.7rem";
            document.getElementById("draw2").style.top="11.9rem";
            document.getElementById("draw4").style.left="62.8rem";
        }else if(my_choice==="1"){
            you_pick.setAttribute("src", "./image/Group 3 (1).svg");
            you_pick_sign.setAttribute("src", "./image/17911 1.png");
            pc_pick.setAttribute("src", "./image/Group 3 (1).svg");
            pc_pick_sign.setAttribute("src", "./image/17911 1.png");
            document.getElementById("draw2").style.left="29rem";
            document.getElementById("draw2").style.top="12.3rem";
            document.getElementById("draw4").style.left="64.2rem";
            document.getElementById("draw4").style.top="12.2rem";
        }else{
            you_pick.setAttribute("src", "./image/Group 1.svg");
            you_pick_sign.setAttribute("src", "./image/icons8-hand-64 1.png");
            pc_pick.setAttribute("src", "./image/Group 1.svg");
            pc_pick_sign.setAttribute("src", "./image/icons8-hand-64 1.png");
            document.getElementById("draw2").style.left="28rem";
            document.getElementById("draw2").style.top="12rem";
            document.getElementById("draw4").style.left="63.2rem";
            document.getElementById("draw4").style.top="12rem";
        }
        home_first.classList.add("show_first");
        home_second.classList.add("show_second");
        home_draw.classList.add("show_draw");
    }
}
function playagain(){
    home_first.classList.remove("show_first");
    home_second.classList.remove("show_second");
    home_win.classList.remove("show_win");
    home_next.classList.remove("show_next");
    document.getElementById("rule").style.left="85rem";
}
function play_again(){
    home_first.classList.remove("show_first");
    home_second.classList.remove("show_second");
    home_loss.classList.remove("loss_show");
}
function play_again_form_draw(){
    home_first.classList.remove("show_first");
    home_second.classList.remove("show_second");   
    home_draw.classList.remove("show_draw");
}
function result(){
    home_win.classList.remove("show_win");
    home_score.classList.add("show_score");
    home_final.classList.add("show_final");
    home_next.classList.remove("show_next");
    document.getElementById("rule").style.left="85rem";
}
function home_return(){
    home_first.classList.remove("show_first");
    home_second.classList.remove("show_second");
    home_score.classList.remove("show_score");
    home_final.classList.remove("show_final");
}