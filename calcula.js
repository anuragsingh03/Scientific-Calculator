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
function working()
{
    let changetheme=document.getElementById("colchange");
    let changevalue=document.getElementById("workingtype");
    let worktype=document.getElementById("chooseworking")
    if(changetheme.getAttribute("href")==="radian.css" )
    {
        changetheme.href="degree.css";
        changevalue.value="degree";
        worktype.src="trignometricdegree.js";

    }
    else{
        changetheme.href="radian.css";
        changevalue.value="radian";
        worktype.src="trignometricradian.js";
        


    }


}