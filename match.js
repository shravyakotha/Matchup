/*var famous = [
    ["marina", "charminar", "camelsafari", "gatewayofindia", "onam"],
    ["idlidosa", "biryani", "hawamahal", "pavbhaji", "jatayu"],
    ["chennisuperkings", "sunrisershyd", "rajasthanroyals", "mumbaiindians", "kathakali"],
    ["adiyogishivastatue", "golconda", "costume", "tajhotel", "houseboat"],
    ["tamil", "telugu", "rajasthani", "marati", "malayalam"]
]*/

/*-----------own code-----------*/
var famous = [
    ["10","20","30" , "40" , "50"],
    ["60" , "70" ,"80" ,"90" ,"100"],
    ["110" , "120" ,"130" ,"140" ,"150"],
    ["160" , "170" ,"180" ,"190" ,"200"],
    ["210" , "220" ,"230" ,"240" ,"250"]
]

//var state = ["tamilnadu", "telengana", "rajasthan", "maharashtra"];



/*var place = window.prompt("Enter the place");
var fame = window.prompt("Enter the famous thing");

var i;
for (i = 0; i < state.length; i++) {
    if (place === state[i]) {
        break;
    }
}

console.log(i);
console.log(checkFamous(i, fame));

function checkFamous(i, fame) {
    var k= 0;
    for (let j = 0; j <famous.length; j++) {
        
        if (famous[j][i] == fame) {
            k = 1;
            return true;
        }
    }
    if (k== 0) {
        return false;
    }
}*/
var place_value;

function myFunctionState1() {
    place_value = document.getElementById("myStateBtn1").value;
    //console.log(place_value);
    
}


function myFunctionState2() {
    place_value = document.getElementById("myStateBtn2").value;
    //console.log(place_value);
    
}

function myFunctionState3() {
    place_value = document.getElementById("myStateBtn3").value;
  //  console.log(place_value);
    
}

function myFunctionState4() {
    place_value = document.getElementById("myStateBtn4").value;
   // console.log(place_value);
}

function myFunctionState5() {
    place_value = document.getElementById("myStateBtn5").value;
   // console.log(place_value);
}


function myFunctionImg1() {
    var fam = document.getElementById("myImgBtn1").value;
   window.alert( checkFamous(place_value, fam));
   if(k==1){
    document.getElementById("myImgBtn1").style.backgroundColor = "green";
    fam = document.getElementById("myImgBtn1").disabled = true;
  } 
  else{
      if(count>=3)
      {
          alert("You lost this game!!!");
      }
      else{
      fam = document.getElementById("myImgBtn1").disabled = true;
    document.getElementById("myImgBtn1").style.backgroundColor = "red"; 
      }
  }
  }

function myFunctionImg2() {
    var fam = document.getElementById("myImgBtn2").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1)
    {
        fam = document.getElementById("myImgBtn25").disabled = true;
    fam = document.getElementById("myImgBtn2").disabled = true;
    document.getElementById("myImgBtn2").style.backgroundColor = "green";
    }
    else{
        if(count>=3)
        {
            alert("You lost this game!!!");
        }
        else{
        fam = document.getElementById("myImgBtn2").disabled = true;
      document.getElementById("myImgBtn2").style.backgroundColor = "red"; 
        }
    }
  

}


function myFunctionImg3() {
    var fam = document.getElementById("myImgBtn3").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn3").disabled = true;
    document.getElementById("myImgBtn3").style.backgroundColor = "green";
    }
    else{
        if(count>=3)
        {
            alert("You lost this game!!!");
        }
        else{
        fam = document.getElementById("myImgBtn3").disabled = true;
      document.getElementById("myImgBtn3").style.backgroundColor = "red"; 
        }
    }
  

}

function myFunctionImg4() {
    var fam = document.getElementById("myImgBtn4").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn4").disabled = true;
    document.getElementById("myImgBtn4").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn4").disabled = true;
    document.getElementById("myImgBtn4").style.backgroundColor = "red"; 
  }

}

function myFunctionImg5() {
    var fam = document.getElementById("myImgBtn5").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn5").disabled = true;
    document.getElementById("myImgBtn5").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn5").disabled = true;
        document.getElementBy("myImgBtn5").style.backgroundColor = "red"; 
  }

}

function myFunctionImg6() {
    var fam = document.getElementById("myImgBtn6").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn6").disabled = true;
    document.getElementById("myImgBtn6").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn6").disabled = true;
    document.getElementById("myImgBtn6").style.backgroundColor = "red"; 
  }

}

function myFunctionImg7() {
    var fam = document.getElementById("myImgBtn7").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn7").disabled = true;
    document.getElementById("myImgBtn7").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn7").disabled = true;
    document.getElementById("myImgBtn7").style.backgroundColor = "red"; 
  }

}


function myFunctionImg8() {
    var fam = document.getElementById("myImgBtn8").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn8").disabled = true;
    document.getElementById("myImgBtn8").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn8").disabled = true;
    document.getElementById("myImgBtn8").style.backgroundColor = "red"; 
  }
}

function myFunctionImg9() {
    var fam = document.getElementById("myImgBtn9").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn9").disabled = true;
    document.getElementById("myImgBtn9").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn9").disabled = true;
        document.getElementById("myImgBtn9").style.backgroundColor = "red"; 
      }
}

function myFunctionImg10() {
    var fam = document.getElementById("myImgBtn10").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn10").disabled = true;
    document.getElementById("myImgBtn10").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn10").disabled = true;
    document.getElementById("myImgBtn10").style.backgroundColor = "red"; 
  }
}

function myFunctionImg11() {
    var fam = document.getElementById("myImgBtn11").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn11").disabled = true;
    document.getElementById("myImgBtn11").style.backgroundColor = "green";
    }
    else{
    document.getElementById("myImgBtn1").style.backgroundColor = "red"; 
  }
}

function myFunctionImg12() {
    var fam = document.getElementById("myImgBtn12").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn12").disabled = true;
    document.getElementById("myImgBtn12").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn12").disabled = true;
    document.getElementById("myImgBtn12").style.backgroundColor = "red"; 
  }
}

function myFunctionImg13() {
    var fam = document.getElementById("myImgBtn13").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn13").disabled = true;
    document.getElementById("myImgBtn13").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn13").disabled = true;
    document.getElementById("myImgBtn13").style.backgroundColor = "red"; 
  }
}

function myFunctionImg14() {
    var fam = document.getElementById("myImgBtn14").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn14").disabled = true;
    document.getElementById("myImgBtn14").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn14").disabled = true;
    document.getElementById("myImgBtn14").style.backgroundColor = "red"; 
  }
}

function myFunctionImg15() {
    var fam = document.getElementById("myImgBtn15").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn15").disabled = true;
    document.getElementById("myImgBtn15").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn15").disabled = true;
    document.getElementById("myImgBtn15").style.backgroundColor = "red"; 
  }
}

function myFunctionImg16() {
    var fam = document.getElementById("myImgBtn16").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn16").disabled = true;
    document.getElementById("myImgBtn16").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn16").disabled = true;
        document.getElementById("myImgBtn16").style.backgroundColor = "red"; 
      }
}

function myFunctionImg17() {
    var fam = document.getElementById("myImgBtn17").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn17").disabled = true;
    document.getElementById("myImgBtn17").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn17").disabled = true;
    document.getElementById("myImgBtn17").style.backgroundColor = "red"; 
  }
}

function myFunctionImg18() {
    var fam = document.getElementById("myImgBtn18").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn18").disabled = true;
    document.getElementById("myImgBtn18").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn18").disabled = true;
    document.getElementById("myImgBtn18").style.backgroundColor = "red"; 
  }
}

function myFunctionImg19() {
    var fam = document.getElementById("myImgBtn19").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn19").disabled = true;
    document.getElementById("myImgBtn19").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn19").disabled = true;
    document.getElementById("myImgBtn19").style.backgroundColor = "red"; 
  }
}

function myFunctionImg20() {
    var fam = document.getElementById("myImgBtn20").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn20").disabled = true;
    document.getElementById("myImgBtn20").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn20").disabled = true;
    document.getElementById("myImgBtn20").style.backgroundColor = "red"; 
  }
}

function myFunctionImg21() {
    var fam = document.getElementById("myImgBtn21").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn21").disabled = true;
    document.getElementById("myImgBtn21").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn21").disabled = true;
    document.getElementById("myImgBtn21").style.backgroundColor = "red"; 
  }
}

function myFunctionImg22() {
    var fam = document.getElementById("myImgBtn22").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn22").disabled = true;
    document.getElementById("myImgBtn22").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn22").disabled = true;
    document.getElementById("myImgBtn22").style.backgroundColor = "red"; 
  }
}

function myFunctionImg23() {
    var fam = document.getElementById("myImgBtn23").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn23").disabled = true;
    document.getElementById("myImgBtn23").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn23").disabled = true;
    document.getElementById("myImgBtn23").style.backgroundColor = "red"; 
  }
}

function myFunctionImg24() {
    var fam = document.getElementById("myImgBtn24").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn24").disabled = true;
    document.getElementById("myImgBtn24").style.backgroundColor = "green";
    }
    else{
        fam = document.getElementById("myImgBtn24").disabled = true;
    document.getElementById("myImgBtn24").style.backgroundColor = "red"; 
  }
}
function myFunctionImg25() {
    var fam = document.getElementById("myImgBtn25").value;
    window.alert(checkFamous(place_value, fam));
    if(k==1){
    fam = document.getElementById("myImgBtn25").disabled = true;
    document.getElementById("myImgBtn25").style.backgroundColor = "green";
    }
    else{
    fam = document.getElementById("myImgBtn25").disabled = true;
    document.getElementById("myImgBtn25").style.backgroundColor = "red";
     
  }
}

var k;
var score = 0;
var count = 0;
function checkFamous(place_value, fam) {
    for (let i = 0; i < famous.length; i++) {

        if (famous[i][place_value] === fam) {
            k = 1;
            // console.log("Place value is " + k);
            // console.log(place_value);
            
            score=score+1;
            return "RIGHT" + "\nSCORE :" +score;
            
           // return true;
        
        }
    }
   k = 0;
   count++;
    return "WRONG";
    //return false;
}



/* -------------*/


window.onload=function(){
    //------referred from js tutorial-----//


   show = setInterval(start);

   //-----------------------------------//
}

//--------own code---------//
function start(){
    clearInterval(show);
    var minutes = 60 * 1;
    display= document.querySelector('#time');
    displayTime = startTimer(minutes, display);
}

//-referred from stack overflow--//
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    temp = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        trackTime = minutes + ":" + seconds;
        if (--timer < 0) {
            timer = duration;
            if(score > 0){
                alert("Game Over!! Your SCORE:"+score);
                window.open("home.html");
            }
            else{
                alert("Game Over!! Sorry You lost this game");
                window.open("home.html");
            }
            display.style.color ="red";
            clearInterval(temp);
            window.open("home.html");
            return;
        }
    }, 1000);
}
//-------------------------------//
