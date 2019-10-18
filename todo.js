function dragStart(event) {
  event.dataTransfer.setData("Text", event.target.id);
  document.getElementById("i1").style.borderColor= "#0000FF";
  document.getElementById("i1").style.borderWidth= "4px";
  document.getElementById("i2").style.borderColor= "#0000FF";
  document.getElementById("i2").style.borderWidth= "4px";
}

function dragging(event, par) {
  par.style.fontcolor = "FF0000";
}

function dragend(event, par) {
  console.log(par);
  document.getElementById("i1").style.borderColor= "#000000";
  document.getElementById("i1").style.borderWidth= "1px";
  document.getElementById("i2").style.borderColor= "#000000";
  document.getElementById("i2").style.borderWidth= "1px";      
}

function allowDrop(event, par) {
  event.preventDefault();
  par.style.borderColor= "#00FF00";
}

function disallowDrop(event, par) {
  par.style.borderColor= "#0000FF";
}

function drop(event) {
  event.preventDefault();
  var data = event.dataTransfer.getData("Text");
  var row1 = document.getElementById(data);
  var row = row1.cloneNode(true);
  row1.remove();
  console.log(event.target);
  //event.target.appendChild(document.getElementById(data));
//   var li = document.createElement("li");
//   li.appendChild(row);
  event.target.firstChild.nextSibling.appendChild(row);
}

function add(event)
{
    if (event.keyCode == 13)
    {
        var text = document.getElementById("act").value;
        var childLength = document.getElementById("myList").childNodes.length;
        var activity = new newActivity(text, childLength);
        document.getElementById("myList").appendChild(activity.activity);
    }
}

class newActivity {
    constructor(text, childLength)
    {
        this.text = text;
        this.childLength = childLength;
        this.createElement();
        this.createActivity();
        this.setId();
    }

    guidGenerator() {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    createElement() {
        var activity = document.createElement("p");
        activity.innerText = this.text;
        this.element = activity;
    }

    createActivity() {
        var activity = document.createElement("li");
        activity.appendChild(this.element);
        activity.setAttribute("ondragstart", "dragStart(event)");
        activity.setAttribute("ondrag", "dragging(event, this)");
        activity.setAttribute("ondragend", "dragend(event, this)");
        activity.setAttribute("draggable", "true");
        this.activity = activity;
    }

    setId () {
        var id = "dragtarget" + this.guidGenerator();
        this.activity.setAttribute("id", id);
    }
}

addEventListener("keydown", function(event) {
if (event.keyCode == 27)
    document.body.style.background = "violet";
});
addEventListener("keyup", function(event) {
if (event.keyCode == 27)
    document.body.style.background = "";
});