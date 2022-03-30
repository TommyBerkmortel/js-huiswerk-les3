// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */console.log("-----Opdracht  1-----")
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

function getEmailDomain(emailAdres) {
    domeinNaam = emailAdres.split("@");
    return domeinNaam[1];
}

console.log(getEmailDomain("n.eeken@novi-education.nl"));
console.log(getEmailDomain("t.mellink@novi.nl"));
console.log(getEmailDomain("a.wiersma@outlook.com"));

/* Opdracht  2 */console.log("-----Opdracht  2-----")
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

const domainOne = typeOfEmail("n.eeken@novi-education.nl");
const domainTwo = typeOfEmail("t.mellink@novi.nl");
const domainThree = typeOfEmail("novi.nlaapjesk@outlook.com");
const domainFour = typeOfEmail("a.wiersma@outlook.com");

function typeOfEmail(emailAdres) {
    splittingEmailAdres = emailAdres.split("@");
    const domeinNaam = splittingEmailAdres[1];

    if (domeinNaam === "novi-education.nl") {
        return "Student";
    } else if (domeinNaam === "novi.nl") {
        return "Medewerker";
    } else {
        return "Extern";
    }
}
console.log(domainOne, domainTwo, domainThree,domainFour);

/* Opdracht  3 */console.log("-----Opdracht  3-----")
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

const emailOne = checkEmailValidity("n.eeken@novi.nl");
const emailTwo = checkEmailValidity("n.eeken@novi.nl");
const emailThree = checkEmailValidity("n.eekenanovi.nl");
const emailFour = checkEmailValidity("n.eeken@novinl.");
const emailFive = checkEmailValidity("tessmellink@novi,nl");

function checkEmailValidity(emailAdres) {
    const checkAtSign = emailAdres.includes("@");
    const checkCome = emailAdres.includes(",");
    const checkDot = emailAdres.lastIndexOf(".");
    const checkDotAtEnd = checkDot !== emailAdres.length -1;

    if (checkAtSign && !checkCome && checkDotAtEnd) {
        return "True";
    } else {
        return "False";
    }
}

console.log(emailOne, emailTwo, emailThree, emailFour,emailFive);