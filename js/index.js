import { generateIcs } from './icsGenerator.js';

const subjects = [
    "Fizika I",
    "Osnovi računarstva",
    "Uvod u energetske sisteme",
    "Matematika I",
    "Osnovi elektrotehnike I",
    "Osnovi programiranja",
    "Osnovi elektrotehnike II",
    "Fizika II",
    "Matematika II",
    "Tehnologije za podršku tehničkom pisanju",
    "Osnovi elektronike",
    "Mjerenja u elektrotehnici",
    "Matematika III",
    "Teorija električnih kola",
    "Objektno-orijentisano programiranje",
    "Matrične metode u elektrotehnici (EEMS)",
    "Matrične metode u elektrotehnici (RI)",
    "Signali i sistemi",
    "Teorija elektromagnetnih polja",
    "Analogna i integrisana elektronika",
    "Elektromehanička konverzija energije",
    "Električna mjerenja",
    "Električne mašine I",
    "Numeričke metode u elektrotehnici",
    "Programski alati u elektroenergetici",
    "Elektroenergetske prenosne i distributivne mreže",
    "Senzori i pretvarači",
    "Električne instalacije niskog napona",
    "Statistička teorija telekomunikacija",
    "Sekvencijalni sklopovi",
    "Modeliranje i analiza podataka",
    "Primjena inženjerskih softverskih paketa",
    "Uvod u računarske algoritme",
    "Arhitektura računara",
    "Strukture podataka",
    "Linearni dinamički sistemi i signali",
    "Mjerenja u automatici i robotici",
    "Projektovanje logičkih sistema",
    "Električne mašine II",
    "Linearni sistemi automatskog upravljanja I",
    "Energetska elektronika",
    "Električne mreže",
    "Optimizacione metode u elektrotehnici",
    "Modeliranje sistema",
    "Inteligentni sistemi u elektroenergetici",
    "Osnovi telekomunikacija",
    "Teorija informacija i kodovanje",
    "Telekomunikacioni protokoli",
    "Obrada digitalnih signala",
    "Operativni sistemi",
    "Baze podataka",
    "Funkcionalno programiranje",
    "Stohastički sistemi i estimacije",
    "Instrumentacija",
    "Modeliranje i simulacija",
    "III godina Električna postrojenja",
    "Elektromagnetna kompatibilnost",
    "Dijagnostika u elektroenergetici",
    "Operaciona istraživanja",
    "Elektroenergetske stanice",
    "Simulacija sistema",
    "Tehnika visokih napona",
    "Relejna tehnika",
    "Pametne energetske mreže",
    "Optičke telekomunikacije",
    "Digitalne telekomunikacije",
    "Telekomunikacione mreže",
    "Radijski telekomunikacijski sistemi",
    "Računarska grafika",
    "Razvoj softvera",
    "Računarske mreže",
    "Linearni sistemi automatskog upravljanja II",
    "Nelinearni sistemi upravljanja",
    "Aktuatori",
    "Projektovanje mikroprocesorskih sistema",
    "Elektromotorni pogoni",
    "Zaštitni i upravljački sistemi",
    "Proizvodnja električne energije",
    "Mehatronika",
    "Analiza elektroenergetskog sistema",
    "Upravljanje elektroenergetskog sistema",
    "Elektrane",
    "Mobilne telekomunikacije",
    "Mikroprocesorski sistemi u telekomunikacijama",
    "Mjerenja u telekomunikacijama",
    "Stelekt Windows programiranje",
    "Dizajn kompajlera",
    "Digitalni sistemi upravljanja i obrade signala I",
    "Optimalno upravljanje",
    "Projektovanje sistema na čipu",
    "Distribuirani sistemi automatizacije",
    "Obrada i analiza medicinskih slika",
    "Sistemi konverzije energije",
    "Upravljanje elektromotornih pogona",
    "Energetika i okolina",
    "Ekonomika i organizacija poslovanja u energetici",
    "Dinamika elektroenergetskog sistema",
    "Tržište električne energije",
    "Planiranje elektroenergetskih sistema",
    "Numerički postupci u projektovanju",
    "Projektovanje telekomunikacionih mreža",
    "Multimedijski sistemi i komunikacije",
    "Sistemsko programiranje",
    "Razvoj web aplikacija",
    "Digitalni sistemi upravljanja i obrade signala II",
    "Robotika i mašinska vizija",
    "Upravljanje mehatroničkim sistemima",
    "Inteligentni sistemi",
    "Izborni predmeti Klinički inženjering",
    "Principi biomedicinskog inženjeringa",
    "Prepoznavanje uzoraka"
];

window.selectedSubjects = [];

const dropdown = document.getElementById("nameDropdown");
const btnAdd = document.getElementById('btnAdd');
const btnGenerate = document.getElementById("btnGenerate");
const List = document.getElementById('list');

subjects.forEach(sub => {
    const option = document.createElement("option");
    option.text = sub;
    option.value = sub;
    dropdown.add(option);
});

btnAdd.addEventListener("click", () => {
    const selected = dropdown.value;

    if(selectedSubjects.includes(selected)){
        return;
    }

    window.selectedSubjects.push(selected);
    List.innerText = "Odabrano: " + selectedSubjects.join(", ");
})

btnGenerate.addEventListener("click", () => {
    generateIcs();
});