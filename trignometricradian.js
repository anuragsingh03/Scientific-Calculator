
// all calculator functionality
let result=document.getElementById("answer");
function calculate(num)//execute any operation
{
    
    result.value+=num;
}
function equals(){//evaluate equation on pressing equal button
    
    result.value=eval(result.value);

}
function clearresult()//clear screen
{
    
    result.value='';

}
function clearlast(){//only remove last digit
   
    var len=result.value.length;
    result.value=result.value.substring(0,len-1);

}
function sinvalue()//sin function
{
    if(checkdegree())
    {
        var val=converttoradian();
        result.value=checkrange(Math.sin(val));
    }
    else{
        result.value=checkrange(Math.sin(result.value));
    }
    
    
}
function cosvalue()//cos function
{
    if(checkdegree())
    {
        var val=converttoradian();
        result.value=checkrange(Math.cos(val));
    }
    else{
        result.value=checkrange(Math.cos(result.value));
    }
      
}
function tanvalue()//tan function
{
    if(checkdegree())
    {
        var val=converttoradian();
        result.value=checkrange(Math.tan(val));
    }
    else{
        result.value=checkrange(Math.tan(result.value));
    }
    
  
}
function logbase10(){//log function
    result.value=Math.log10(result.value);


}
function naturallog()//natural log function
{
    result.value=Math.log(result.value);

}
function pivalue()//pi value
{
    result.value+=3.14159265359;

}
function evalue()//'e' value
{
    result.value+=2.71828182846;

}
function factorialvalue()//factorial of a number
{
    let fact=1;
    if(result.value%2===0 || result.value%2===1)
    {
    while(result.value!=1)
    {
        fact=fact*result.value;
        result.value--;

    }
    result.value=fact;
}
}
function squareroot()//to calculate square
{
    result.value=result.value**(0.5);
}
function epowerx() //e power x function
{
    result.value=Math.exp(result.value);
}
function tenpowerx()//10mpower x
{
    result.value=10**result.value;
}
function xsquare()//calculate square value
{
    result.value=result.value**2;
}
function sineinv()//sin inverse function
{if(checkdegree())
    {
        result.value=(Math.asin(result.value)*180)/Math.PI;
    }
    else{
        result.value=Math.asin(result.value);
    }
    
    
}
function cosinv()//cos inverse function
{
    if(checkdegree())
    {
        result.value=(Math.acos(result.value)*180)/Math.PI;
    }
    else{
        result.value=Math.acos(result.value);
    }
    
}
function taninv()//tan inverse function
{
    if(checkdegree())
    {
        result.value=(Math.atan(result.value)*180)/Math.PI;
    }
    else{
        result.value=Math.atan(result.value);
    }
    
}
function comma(val)//comma
{
    result.value+=val;
}
function xpowery()//x power y function
{
    let temp=result.value.split(',');
    let x=temp[0];
    let y=temp[1];
    result.value=x**y;
}
//method to check degree and convert to radian

function converttoradian()
{
    let temp=(result.value*Math.PI)/180;
    return temp;
    
    
}
function checkdegree()
{
    let x=document.getElementById("workingtype");
    return x.value=="degree";
}

function checkrange(number)
{
    if(number < 0.000001 && number > -0.000001)
    {
        return 0;
    }
    else if(number > 999999999999)
    {
        return Infinity;
    }
    else if(number < -999999999999){
        return -Infinity;
    }
    else{
        return number;
    }
}

