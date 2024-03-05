function vypoctiMesic() {
    const cislo = parseInt(document.getElementById("cisloMesice").value);
    const mesice = [
        "leden",
        "únor",
        "březen",
        "duben",
        "květen",
        "červen",
        "červenec",
        "srpen",
        "září",
        "říjen",
        "listopad",
        "prosinec"
    ];

    if (!isNaN(cislo) && cislo >= 1 && cislo <= 12) {
        alert("Název měsíce: " + mesice[cislo - 1]);
    } else {
        alert("Neplatné číslo měsíce");
    }
}

document.getElementById("vypoctiMesic").addEventListener("click", vypoctiMesic);

document.addEventListener("DOMContentLoaded", function() {
    var numbersDisplayed = false; 
    var output = document.getElementById("output");

    document.getElementById("sudyCisla").addEventListener("click", function() {
        if (!numbersDisplayed) {
            var numbers = "";
            for (var i = 2; i <= 20; i += 2) {
                numbers += i + "<br>";
            }
            output.innerHTML = numbers;
            output.style.display = "block";
            numbersDisplayed = true; 
        }
    });
});

const correctPasswords = ["honzik1212", "amigojechuj", "totojetezkasracka"];

function verifyPassword() {
    let enteredPassword = document.getElementById("password").value;

    if (correctPasswords.includes(enteredPassword)) {
        alert("Správné heslo! Vítejte!");
    } else {
        alert("Nesprávné heslo. Zadejte znovu.");
    }
}

document.getElementById("submitButton").addEventListener("click", verifyPassword);

function vypoctiDen() {
    const cislo = parseInt(document.getElementById("cisloDne").value);
    const dny = [
        "Pondělí",
        "Úterý",
        "Středa",
        "Čtvrtek",
        "Pátek",
        "Sobota",
        "Neděle"
    ];

    if (!isNaN(cislo) && cislo >= 1 && cislo <= 7) {
        alert("Dnes je " + dny[cislo - 1] + ".");
    } else {
        alert("Neplatné číslo dne v týdnu.");
    }
}

document.getElementById("vypisDne").addEventListener("click", vypoctiDen);

function vypisFibonacci() {
    var fibonacciSeznam = document.getElementById("vypisFibonacci");
    fibonacciSeznam.innerHTML = "";

    var prvniClen = 0;
    var druhyClen = 1;

    fibonacciSeznam.innerHTML += "<li>" + prvniClen + "</li>";
    fibonacciSeznam.innerHTML += "<li>" + druhyClen + "</li>";

    for (var i = 2; i < 10; i++) {
        var dalsiClen = prvniClen + druhyClen;
        fibonacciSeznam.innerHTML += "<li>" + dalsiClen + "</li>";

        prvniClen = druhyClen;
        druhyClen = dalsiClen;
    }
};

var soucet = 0;

function zpracujCislo() {
    var cisloInput = document.getElementById("cisloInput");
    var cislo = parseInt(cisloInput.value);

    if (cislo === 0) {
        alert("Součet zadaných čísel je: " + soucet);
        soucet = 0; 
    } else {
        soucet += cislo;
    }

    cisloInput.value = "";
}




