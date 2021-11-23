let txt= "abcdefghijklmnopqrstuvwxyz"
let txt0 = txt.length;
console.log(txt0);

let txt1 = "Please visit Microsoft!"
let txt2 = txt1.replace("Microsoft", "BGU");
console.log(txt2);

let txt3 = txt1.concat(" and ", txt2);
console.log(txt3);

const d = new Date();
console.log(d);

function greet() {
    const d = new Date();
    var h = d.getHours();
    if (h<12) {
        let greeting ="Good Morning!";
        console.log(greeting);
        document.getElementById("1").innerHTML= greeting;
    }   
    else if (h<18){
        let greeting2 ="Good Afternoon!";
        console.log(greeting2);
        document.getElementById("1").innerHTML= greeting2;
    }
    else {
        greeting3 = "Good evening!"
        console.log(greeting3);
        document.getElementById("1").innerHTML= greeting3;
    }
}


let cars = ['toyota', 'Honda', 'mazda'];
console.log(cars);
text = "";
var i;
for (i=0; i<cars.length; i++) {
    text += cars[i] + " ";
    console.log(text);
}


var imgs = [
    "Images/PulaRuby.jpeg",
    "Images/Krembo.PNG",
    "Images/ProfiePhoto.jpeg",
];

var i=0;

function StopMotion() {
    setTimeout(() => {
        document.getElementById("SMimg").src = imgs[i];
        i++;
        if(i<imgs.length) {
         StopMotion();
     }
    
        else {
         i=0;
    }
    }, 250);
    }

var person = {firstName:    "John",
              LastName:     "Doe" ,
              id:           "5566",
fullName: function() {return this.firstName + " " + this.LastName;}
};










