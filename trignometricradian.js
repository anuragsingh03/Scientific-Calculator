let result=document.getElementById("answer");
function calculate(num)
{
    
    result.value+=num;
}
function equals(){
    
    result.value=eval(result.value);

}
function clearresult()
{
    
    result.value='';

}
function clearlast(){
   
    var len=result.value.length;
    result.value=result.value.substring(0,len-1);

}
function sinvalue()
{
    if(checkdegree())
    {
        var val=converttoradian();
        result.value=Math.sin(val);
    }
    else{
        result.value=Math.sin(result.value);
    }
    
    
}
function cosvalue()
{
   
    result.value=Math.cos(result.value);
}
function tanvalue()
{
    
    result.value=Math.tan(result.value);
}
function logbase10(){
    result.value=Math.log10(result.value);


}
function naturallog()
{
    result.value=Math.log(result.value);

}
function pivalue()
{
    result.value+=3.14159265359;

}
function evalue()
{
    result.value+=2.71828182846;

}
function factorialvalue()
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
function squareroot()
{
    result.value=result.value**(0.5);
}
function epowerx()
{
    result.value=Math.exp(result.value);
}
function tenpowerx()
{
    result.value=10**result.value;
}
function xsquare()
{
    result.value=result.value**2;
}
function sineinv()
{
    result.value=Math.asin(result.value);
}
function cosinv()
{
    result.value=Math.acos(result.value);
}
function taninv()
{
    result.value=Math.atan(result.value);
}
function comma(val)
{
    result.value+=val;
}
function xpowery()
{
    let temp=result.value.split(',');
    let x=temp[0];
    let y=temp[1];
    result.value=x**y;
}
function converttoradian()
{
    let temp=(result.value*Math.PI)/180;
    return temp;
    
    
}
function checkdegree()
{
    let x=document.getElementById("workingtype");
    return x.value.equals("degree");
}
