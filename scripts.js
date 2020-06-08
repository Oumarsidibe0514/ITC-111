var idSetting = ["divLeft_Default","divLeft_CELinks","divLeft_ALinks","divLeft_RLinks","divRight","ls_Heading","rs_Heading"];

var home = {
    dispSettings : ["block","none","none","none"],
    innerHTMLSettings : ["Home link clicked. Defaul text displayed.","ITC-111","Intro to Programming <br>w/HTML, CSS & JavaScript"]
}
var classExercises = {
    dispSettings : ["none","block","none","none"],
    innerHTMLSettings : ["Defaul description for the Class Exercise Link.","Class Exercise Links","Exercise Description"]
}
var assignments = {
    dispSettings : ["none","none","block","none"],
    innerHTMLSettings : ["Defaul description for the Assignment Link.","Assignment Links","Assignment Description"]
}
var resources = {
    dispSettings : ["none","none","none","block"],
    innerHTMLSettings : ["Defaul description for the Resouce Link.","Resource Topics","Resource Catalouge"]
}
function changeLinkText(lnk) {
    let lnkObj;
    switch(lnk){
        case 'home':
            lnkObj = home;
            break;
        case 'classEx':
            lnkObj = classExercises;
            break;
        case 'assign':
            lnkObj = assignments;
            break;
        case 'resource':
            lnkObj = resources;
            break;
        default:
            break;
    }
    document.getElementById(idSetting[0]).style.display = lnkObj.dispSettings[0];
    document.getElementById(idSetting[1]).style.display = lnkObj.dispSettings[1];
    document.getElementById(idSetting[2]).style.display = lnkObj.dispSettings[2];
    document.getElementById(idSetting[3]).style.display = lnkObj.dispSettings[3];
    document.getElementById(idSetting[4]).innerHTML = lnkObj.innerHTMLSettings[0];
    document.getElementById(idSetting[5]).innerHTML = lnkObj.innerHTMLSettings[1];
    document.getElementById(idSetting[6]).innerHTML = lnkObj.innerHTMLSettings[2];
}
function changeDivRightText(txt) {  
    document.getElementById('rs_Heading').innerHTML = txt;
}
