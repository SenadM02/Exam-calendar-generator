Web tool that parses data from exam schedule and generates standardized .ics file.

# files

Ispiti.txt is created using pdftotext -layout
parser.js read data from ispiti.txt and parses names, dates, time and place of exams into ispiti.json
icsGenerator.js generates .ics file using data from ispiti.json

