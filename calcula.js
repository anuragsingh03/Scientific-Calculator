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