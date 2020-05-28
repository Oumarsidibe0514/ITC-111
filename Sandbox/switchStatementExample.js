// Switch statement - gives multiple outcomes based on the value condition

var seasons = 'green';

switch(seasons) {
    case 'summer':
        console.log('It\'s summer');
        break;
    case 'fall':
        console.log('It\'s fall');
        break;
    case 'winter':
        console.log('It\'s winter');
        break;
    case 'spring':
        console.log('It\'s spring');
        break;
    default:
            console.log('there are only 4 seasons broh!');
            break;
}

//For resources page

var changeLinkText ="lnk";
    // Condition checks which link was click by passing value to the 'lnk' variable
    // the visibility of the corresponding div is updated accordingly.

    switch(lnk) {
        case "home":
            document.getElementById('divLeftDefault').style.display = "block";
            document.getElementById('divLeft_CELinks').style.display = "none";
            document.getElementById('divLeft_ALinks').style.display = "none";
            document.getElementById('divRight').innerHTML = "Home Link clicked. Default text displayed.";
            document.getElementById('ls_Heading').innerHTML = "ITC-111";
            document.getElementById('rs_Heading').innerHTML = "Intro to Programming<br> w/HTML, CSS & Javascript";
            break;
        case "classEx":
            document.getElementById('divLeftDefault').style.display = "none";
            document.getElementById('divLeft_CELinks').style.display = "block";
            document.getElementById('divLeft_ALinks').style.display = "none";
            document.getElementById('divRight').innerHTML = "Defaut description for Class Exercise Link.";
            document.getElementById('ls_Heading').innerHTML = "Class Exercises";
            document.getElementById('rs_Heading').innerHTML = "Exercise Description";
            break;
        case "assign":
            document.getElementById('divLeftDefault').style.display = "none";
            document.getElementById('divLeft_CELinks').style.display = "none";
            document.getElementById('divLeft_ALinks').style.display = "block";
            document.getElementById('divRight').innerHTML = "Defaut description for Assignment Link.";
            document.getElementById('ls_Heading').innerHTML = "Assignments";
            document.getElementById('rs_Heading').innerHTML = "Assignment Brief";
            break;
        default:
            document.getElementById('divLeftDefault').style.display = "block";
            document.getElementById('divLeft_CELinks').style.display = "none";
            document.getElementById('divLeft_ALinks').style.display = "none";
            document.getElementById('divRight').style.display = "none";
            break;
    }