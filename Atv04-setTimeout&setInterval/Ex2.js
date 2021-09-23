function change(color) {
    if (color == "green") {
        return "yellow"; 
    }
    else if (color ==  "yellow" ) {
     return "red";
}
   else {
       return "green";
   }
}

let color = "";
setInterval(() => {
    color = change(color);
    console.log(color);
}, 3000);