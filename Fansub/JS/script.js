var mn = document.getElementById("menu_btt");
var dpd = document.getElementById("menu_ul");

function dropdown()
{
    if(mn.style.display != "none")
    {
        if (dpd.style.display == "flex" ) {
            dpd.style.display = "none";
        }
        else{
            dpd.style.display = "flex";
        }
    }
}


function toggleDarkMode() {
  var body = document.body;
  body.classList.toggle("dark-mode");
}

