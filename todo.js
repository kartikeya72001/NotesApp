var x = [];
var maintext = [];
var i=0;
function Add()
{
    x.push(document.getElementById("textfield").value);
    maintext.push(document.getElementById("mainText").value);
    console.log(x);
    console.log(maintext);

    for(i;i<x.length;i++)
    {
        var para = document.createElement('h2');
        var node = document.createTextNode(x[i]);
        para.appendChild(node);
        para.id = i;
        para.className = "para";
        para.style.fontSize = "3rem";
        para.style.padding = "3rem";
        para.style.margin = "0";
        var element = document.getElementById("root");
        element.appendChild(para);

        var textf = document.createElement('pre');
        var textnode = document.createTextNode(maintext[i]);
        textf.appendChild(textnode);
        textf.id = "text"+i;
        textf.className = "mainText";
        textf.style.display = "none";
        textf.style.fontSize = "1.5rem";
        var elementfield = document.getElementById("root");
        elementfield.appendChild(textf);
    }
    document.getElementById("textfield").value = "";
    document.getElementById("mainText").value = "";
}
function Pop()
{
    var size = x.length;
    var elmnt = document.getElementById(size-1);
    var textelmnt = document.getElementById("text"+(size-1));
    x.pop();
    maintext.pop();
    textelmnt.remove();
    elmnt.remove();
}
function Clear()
{
    while(x.length>0)
    {
        var elmnt = document.getElementById(x.length-1);
        var textelmnt = document.getElementById("text"+(x.length-1));
        maintext.pop();
        x.pop();
        textelmnt.remove();
        elmnt.remove();
    }
}