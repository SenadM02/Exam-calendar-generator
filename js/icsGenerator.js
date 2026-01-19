import { v4 as uuidv4 } from 'https://esm.sh/uuid';

export async function generateIcs(){

    const response = await fetch('../data/ispiti.json');
    const events = await response.json();

    const now = new Date();
    const stringNow= now.toISOString();
    const created = stringNow.replace(/[-:]/g, '').slice(0,-5) + 'Z';

    let ics = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//fukingics//EN"
    ];

    events.forEach(event =>{
        selectedSubjects.forEach(subject => {
            if(event.event == subject){
                const uid = uuidv4();
                ics.push(
                    "BEGIN:VEVENT",
                    "UID:" + uid,
                    "CREATED:" + created,
                    "DTEND:" + event.endDate,
                    "DTSTAMP:" + created,
                    "DTSTART:" + event.startDate,
                    "LAST-MODIFIED:" + created,
                    "SUMMARY:" + event.event,
                    "LOCATION:" + event.place,
                    "END:VEVENT"
                );
            }
        });
    });

    ics.push("END:VCALENDAR");

    const icsString = ics.join('\r\n');

    const blob = new Blob([icsString], {
        type: 'text'
    });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'KalendarIspita.ics';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}