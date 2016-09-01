
function quad(){
    var a = prompt("Enter value for A", "0");
    var b = prompt("Enter value for B", "0");
    var c = prompt("Enter value for C", "0");

    var root = Math.sqrt(b*b-4*a*c);
    var root1 = (-b+root)/2*a;
    var root2 = (-b -root)/2*a; 
    
    if (root < 0) {
        document.write("The equation has no solution!")
    }else{
        if(root === 0){
            document.write("First root: " + root1 + "</br>");
            document.write("No second root!");
        }else{
            document.write("First root: " + root1 + "</br>");
            document.write("Second root: " + root2 + "</br>");
        }

    }
    
};



