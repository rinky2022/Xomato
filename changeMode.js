function toggleMode()
{
    var mode = document.body;
    var headermode =document.getElementById("header"); 
    mode.classList.toggle("darkMode");
    headermode.classList.toggle("darkMode");
}