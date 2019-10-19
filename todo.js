
function addNewActivity(event)
{
    if (event.keyCode == 13)
    {
        var text = document.getElementById("addActivity").value;
        var childLength = document.getElementById("myActivityList").childNodes.length;
        var activity = new newActivity(text, childLengths);
        document.getElementById("myActivityList").appendChild(activity.activity);
    }
}

function dragStart(event) {
  event.dataTransfer.setData("sourceId", event.target.id);
  document.getElementById("completedTask").style.borderColor= "#0000FF";
  document.getElementById("completedTask").style.borderWidth= "5px";
  document.getElementById("pendingTask").style.borderColor= "#0000FF";
  document.getElementById("pendingTask").style.borderWidth= "5px";
}

function dragend(event, par) {
  console.log(par);
  document.getElementById("completedTask").style.borderColor= "#000000";
  document.getElementById("completedTask").style.borderWidth= "3px";
  document.getElementById("pendingTask").style.borderColor= "#000000";
  document.getElementById("pendingTask").style.borderWidth= "3px";      
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
  var data = event.dataTransfer.getData("sourceId");
  var row1 = document.getElementById(data);
  var row = row1.cloneNode(true);
  row1.remove();
  console.log(event.target);
  //event.target.appendChild(document.getElementById(data));
//   var li = document.createElement("li");
//   li.appendChild(row);
  event.target.firstChild.nextSibling.nextSibling.nextSibling.appendChild(row);
}

function addNewActivity(event)
{
    if (event.keyCode == 13)
    {
        var activity = new newActivity();
        document.getElementById("myActivityList").appendChild(activity.activity);
    }
}

function deleteActivity(activity) {
  activity.remove();
}

class newActivity {
    constructor()
    {
        this.getData();
        this.createActivity();
        this.createElements();
        this.setId();
    }

    getData() {
      var taskName = document.getElementById("taskName").value;
      var taskDesc = document.getElementById("taskDesc").value;
      var taskData = document.getElementById("taskData").value;
      this.data = {"taskName": taskName, "taskDesc": taskDesc, "taskData": taskData};
    }

    guidGenerator() {
        var S4 = function() {
           return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
        };
        return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
    }

    createElements() {
        var activityTaskName = document.createElement("td");
        activityTaskName.innerText = this.data.taskName;
        this.activity.appendChild(activityTaskName);
        var activityTaskDesc = document.createElement("td");
        activityTaskDesc.innerText = this.data.taskDesc;
        this.activity.appendChild(activityTaskDesc);
        var activityTaskData = document.createElement("td");
        activityTaskData.innerText = this.data.taskData;
        this.activity.appendChild(activityTaskData);
      }

    createActivity() {
        var activity = document.createElement("tr");
        activity.setAttribute("ondragstart", "dragStart(event)");
        activity.setAttribute("ondragend", "dragend(event, this)");
        activity.setAttribute("ondblclick", "deleteActivity(this)");
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