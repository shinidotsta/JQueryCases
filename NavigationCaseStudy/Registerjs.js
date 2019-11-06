function hadWhitespace(evt)
{
    if(evt.keyCode == 32)
        {
            alert("Space not allowed");
            return false;
        }
        return true;
}

function Length()
{
    var uname=document.getElementById("uname");
    
 
    if(uname.value.length<5)
    {
        document.getElementById("msg1").style.visibility="visible";
    }
    else{
        document.getElementById("msg1").style.visibility="hidden";
    }
}

function ChekMail()
{
    var email=document.getElementById("email");
    var pattern=/^([a-z A-Z 0-9 \.]+)@([a-z A-Z 0-9]+).([a-z A-z]{2,20})$/ ;
    //console.log(email.value);

    if(pattern.test(email.value))
    {
        document.getElementById("msg2").style.visibility="hidden";
    }
    else
    {
        document.getElementById("msg2").style.visibility="visible";

    }
}
function chekPswd()
{
    var pswd=document.getElementById("pswd");
 //  var regex= /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;
       var regex=/^[A-Za-z]\w{7,14}$/;
    console.log(pswd.value);
   if(regex.test(pswd.value))
   {
    document.getElementById("msg3").style.visibility="hidden";

   }
   else
   {
       document.getElementById("msg3").style.visibility="visible";

   }
}

function verify()
 {
    var a=new Date();
    console.log(a.getFullYear());
    var m=a.getFullYear();
    var b=document.getElementById('calendar').value;
    var d=new Date(b);
    console.log(a.getFullYear());
   var n= d.getFullYear();
   var y=m-n;
    console.log(y);
 if(y>=18)
 {
    document.getElementById("msg5").style.visibility="hidden";

 }
 else{
    document.getElementById("chkbox").style.visibility="visible";
    document.getElementById("msg5").style.visibility="visible";

 }
    }

    function checkchar()
   {
       var x=document.getElementById("bio").value.length;
       if(140-x>=0)
       {
       document.getElementById("count").innerHTML=140-x;
       }
   }

   