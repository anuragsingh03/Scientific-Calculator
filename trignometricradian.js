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
    
    result.value=(Math.sin(result.value)).toFixed(4);
}
function cosvalue()
{
   
    result.value=(Math.cos(result.value)).toFixed(4);
}
function tanvalue()
{
    
    result.value=(Math.tan(result.value)).toFixed(4);
}
function logbase10(){
    result.value=(Math.log10(result.value)).toFixed(4);


}
function naturallog()
{
    result.value=(Math.log(result.value)).toFixed(4);

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
    result.value=(result.value**(0.5)).toFixed(4);
}
function epowerx()
{
    result.value=(Math.exp(result.value)).toFixed(4);
}
function tenpowerx()
{
    result.value=(10**result.value).toFixed(4);
}
function xsquare()
{
    result.value=(result.value**2).toFixed(4);
}
function sineinv()
{
    result.value=(Math.asin(result.value)).toFixed(4);
}
function cosinv()
{
    result.value=(Math.acos(result.value)).toFixed(4);
}
function taninv()
{
    result.value=(Math.atan(result.value)).toFixed(4);
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

