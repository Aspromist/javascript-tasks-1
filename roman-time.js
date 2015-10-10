var hours = process.argv[2];
var minutes = process.argv[3];
var h = parseInt(hours);
var m = parseInt(minutes);
var leftRom = ["", "X", "XX", "XXX", "XL", "L"];
var rightRom = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

function filterZero(num) {
    if (num == "") {
        return "--";
    } else {
            return num;
        }
}

function arabToRom(arabNum) {
    var first = (arabNum - arabNum % 10) / 10;
    var last = arabNum % 10;
    return leftRom[first] + rightRom[last];
}

if (h >= 0 && h <= 23 && m >= 0 && m <= 59) {
    console.log(filterZero(arabToRom(h)),":",filterZero(arabToRom(m))); 
} else {
        console.log("Время указано не верно");
    }
