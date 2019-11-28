loop = 0;
name = "ffr";
while (loop<4) {
    if(loop==2)
        fname();
    else
        document.writeln("happy bday to you<br>");
    
    loop = loop + 1;
        
}
document.write("end");

function fname(params) {
    document.write("h b t "+ name +"<br>");
}