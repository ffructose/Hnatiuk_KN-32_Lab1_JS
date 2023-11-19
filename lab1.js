var arrBirthdayCard = [];

arrBirthdayCard[0] = {
    Name: "Люда",
    Data: "21.11.1997",
    Phone: "+380664561213"
}

arrBirthdayCard[1] = {
    Name: "Аня",
    Data: "21.06.2004",
    Phone: "+380969052222"
}

arrBirthdayCard[2] = {
    Name: "Олена",
    Data: "30.05.1973",
    Phone: "+380991234567"
}

arrBirthdayCard[3] = {
    Name: "Юмі",
    Data: "31.10.2023"
}

arrBirthdayCard[4] = {
    Name: "Міша",
    Data: "19.11.1999",
}

var html = "";
var isPartying = 0;


function output(item, i, array) {

    var currentDate = new Date();

    var text = item['Data'];

    var notification = "";

    var date1 = new Date(text.replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1'));

    if (currentDate.getMonth() == date1.getMonth()) {
        if (currentDate.getDate() == date1.getDate()) {
            notification = "День Народження у " + item['Name'] + " сьогодні! Бігом дзвони: <br>";
            if (!item['Phone']){
                notification = notification + "йой, а номеру телефона нема((";
            }
            else{
                notification = notification + item['Phone'];
            }
        }
        else if (currentDate.getDate() > date1.getDate()) {
        }
        else if ((date1.getDate() - currentDate.getDate()) <= 3) {
            notification = "День Народження у " + item['Name'] + " за "
                + (date1.getDate() - currentDate.getDate()) + " дні, відправ листівку";
            

        }
        else {
        }
    }
    else {
    }


    html = html + "<td>" + notification + "</td>";
    html = html + "</tr>";
}

function result() {
    html = "<table style = 'table'>";

    html = html + "<tr><td>В кого ж скоро свята?</td><tr>" 
    arrBirthdayCard.forEach(output);
    html = html + "</table>";
    document.getElementById('rezult').innerHTML = html;
}