      var count=1;                   //variable to decide which player has the current chance 

      var win=document.getElementById("win"); 
      var x1=document.getElementById("x1");
      var o1=document.getElementById("o1");
      var c1=0;
      var c2=0;
      var audio =  new Audio('http://soundbible.com/grab.php?id=480&type=mp3');


function fill(control)   //main function which has main control

 {
    if (count<=9)   //game comtinues for 9 turns 

    {
          if(count%2!=0)  // if it is odd the chance is for x variable
        {
            document.getElementById(control.id).innerHTML="X";
           {
             if(checkwin())    // check winfunction if it returns true x is  winner
               {
                 win.innerHTML = " X  wins"
                 c1++;     //for counting how many times x has won
                 x1.innerHTML=c1; //displays score on the game
                 disabled()    //function to disable all the buttons if the  a player has won
                 audio.play();//function to play audio if a player has won
               }
            }
        }
        else  // same condition above but for the winner "O"
        {
          document.getElementById(control.id).innerHTML="0";
            {
              if(checkwin())
                {
                  win.innerHTML="O  wins"
                  c2++;
                  o1.innerHTML=c2;
                  disabled() 
                  audio.play();
                }
            }
        }count++
    }else
        {
            win.innerHTML="Its A Tie";
            disabled();
        }
  }
function checkwin()   //all the winning logic
        {
             if(checkCondition('s1','s2','s3') || checkCondition('s4','s5','s6') || checkCondition('s7','s8','s9') ||
             checkCondition('s1','s4','s7') || checkCondition('s2','s5','s8') || checkCondition('s3','s6','s9') ||
             checkCondition('s1','s5','s9') || checkCondition('s3','s5','s7'))
                {
                   return true;
                }
        }
function checkCondition(s1,s2,s3)
      {
           if(getData(s1)!=""&& getData(s2)!=""&& getData(s3)!=""&&getData(s1)==getData(s2)&&getData(s2)==getData(s3) )
            {
                return true;   //checks if all the three values are same
            }
      }
function getData(s)//gets the elemnt and returns the innerHTML value to  checkConditon function
    {
        return document.getElementById(s).innerHTML; 
    }
function disabled()//Disables the buttons when winner is found
    {
         for(i=1;i<=9;i++)
          {
               document.getElementById("s"+i).disabled = true;  //function to disable button after a certain player has won
          }
    }
function reset()   // function to reset values
    {
      for(i=1;i<=9;i++)
        {
            document.getElementById("s"+i).innerHTML="";
            document.getElementById("win").innerHTML="";
            document.getElementById("s"+i).disabled =false;
        }count=1;
    }
function restart()  //function to restast the game
    {
      for(i=1;i<=9;i++)
         {
            document.getElementById("s"+i).innerHTML="";
            document.getElementById("win").innerHTML="";
            document.getElementById("s"+i).disabled =false;
            c1=0;
            c2=0;
            document.getElementById("x1").innerHTML="0";
            document.getElementById("o1").innerHTML="0";
         }count= 1;
    }