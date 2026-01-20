import fs from 'fs';

const Data = fs.readFileSync('assets/docs/ispiti.txt', 'utf8');

const regexFromTxt = /(?<=\s{2})(?:\(?[a-zA-ZčćžšđČĆŽŠĐ]+\)?[\s-]+){1,10}(?:\d{2}\/\d{2}\/\d{2}\s+[a-zA-ZčćžšđČĆŽŠĐ]+\s+){2}\s+\d+(?::\d+)?\s+\w+(?:[,\s]+(?!\d+\/)\w+){0,3}\s+(?:\d{2}\/\d{2}\/\d{2}\s+[a-zA-ZčćžšđČĆŽŠĐ]+\s+){4}\s+\d+(?::\d+)?\s+\w+(?:,\s+\w+){0,3}/g
const regexForSubject = /^(.*?)(?=\s\d)/;
const regexForBlock1 = /((?:\d{2}\/\d{2}\/\d{2}\s){2})(\d+(?::\d+)?)\s(\w+(?:[,\s]+(?!\d+\/)\w+){0,3})/;
const regexForBlock2 = /((?:\d{2}\/\d{2}\/\d{2}\s){4})(\d+(?::\d+)?)\s(\w+(?:[,\s]+(?!\d+\/)\w+){0,3})/;

const dateSt = "00";
const dateEnd = "10";
function formatDate(rawDate, rawTime, sec){
    if(rawTime.length == 1){
        rawTime = "0" + rawTime + "00";
    }else if(rawTime.length == 2) {
        rawTime = rawTime + "00";
    }else if(rawTime.length > 2){
        rawTime = rawTime.slice(0,2) + rawTime.slice(3,5);
    }
    return "20" +  rawDate.slice(-2) + rawDate.slice(-5,-3) + rawDate.slice(-8,-6) + "T" + rawTime + sec;
}

const array = Data.match(regexFromTxt);
const cleanArray = array.map(item => {
    return item
        .replace(/(?:^|\s)(?:datum|dan|ponedjeljak|utorak|srijeda|četvrtak|petak)(?=\s|$)/giu, "")
        .replace(/\s+/g, " ");
});

let events = [];
let subjects = [];

cleanArray.forEach(item => {
    const subjectArr = item.match(regexForSubject);
    const subject = subjectArr ? subjectArr[1].trim() : "Unknown";
    //subjects.push('"'+subject+'"');
    const block1 = item.match(regexForBlock1);
    const block2 = item.match(regexForBlock2);
    if(block1){
        const datesString = block1[1];
        const time = block1[2];
        const place = block1[3];

        const dates = datesString.match(/\d{2}\/\d{2}\/\d{2}/g);
        dates.forEach(date => {
            events.push({
                event: subject,
                startDate: formatDate(date, time, dateSt),
                endDate: formatDate(date, time, dateEnd),
                place: place
            })
        });
    }
    if(block2){
        const datesString = block2[1];
        const time = block2[2];
        const place = block2[3];

        const dates = datesString.match(/\d{2}\/\d{2}\/\d{2}/g);
        dates.forEach(date => {
            events.push({
                event: subject,
                startDate: formatDate(date, time, dateSt),
                endDate: formatDate(date, time, dateEnd),
                place: place
            })
        });
    }
});

const eventsString = JSON.stringify(events, null, 2);

//const sub = JSON.stringify(subjects, null, 2);
//const sub = subjects.join(',\n');
//fs.writeFileSync("assets/docs/subjects.txt", sub);

try{
    fs.writeFileSync("data/ispiti.json", eventsString);
} catch (err) {
    console.log("error", err);
}