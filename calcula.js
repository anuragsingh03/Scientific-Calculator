function calculate(num)
{
    let result=document.getElementById("answer");
    result.value+=num;
}
function equals(){
    let result=document.getElementById("answer");
    result.value=eval(result.value);

}
function clearresult()
{
    var result=document.getElementById("answer");
    result.value='';

}
function clearlast(){
    var result=document.getElementById("answer");
    var len=result.value.length;
    result.value=result.value.substring(0,len-1);

}


function togglemode()
{
    let changetheme=document.getElementById("theme");
    let darkmode=document.getElementById("switch");
    if(changetheme.getAttribute("href")==="lightcal.css")//difference between changetheme.getAttribute("href") && changetheme.href ?
    {
        changetheme.href="darkcal.css";
        darkmode.value="light mode";

    }
    else{
        darkmode.value="dark mode";
        changetheme.href="lightcal.css";


    }
}