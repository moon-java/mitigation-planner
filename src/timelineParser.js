const fs = require("fs");
const XLSX = require("xlsx");
const args = process.argv.slice(2);
let filedata = XLSX.readFile(args[0])

let output = ""

function write(data) {
    const writableStream = fs.createWriteStream(args[1]);

    writableStream.on('error',  (error) => {
        console.log(`An error occured while writing to the file. Error: ${error.message}`);
    });

    writableStream.write(data);
}

output += "import { damageTypes, targets } from '../cooldowns/constants';\n\n";
output += "export const ";

let infoCsv = XLSX.utils.sheet_to_csv(filedata.Sheets['info'])
const infoArray = infoCsv.toString().split("\n");
let currentArrayString = infoArray[1]
currentArrayString = currentArrayString.replace(/[\n\r]/gm, "");
let infoString = currentArrayString.split(",");

let abbreviation = infoString[6];

output += abbreviation + "Info =\n";
output += "{\n";
output += '    name: "' + infoString[0] + '",\n';
output += '    abbreviation: "' + infoString[1] + '",\n';
output += '    boss: "' + infoString[2] + '",\n';
output += '    length: ' + infoString[4] + ',\n';
output += '    level: ' + infoString[5] + '\n';
output += "}\n\n";

output += 'export const ' + abbreviation + 'Skills =\n';
output += '{\n';

let skillCsv = XLSX.utils.sheet_to_csv(filedata.Sheets['skills'])
const skillArray = skillCsv.toString().split("\n");
for (let i = 1; i < skillArray.length; i++) {
    currentArrayString = skillArray[i]
    currentArrayString = currentArrayString.replace(/[\n\r]/gm, "");
    let skillString = currentArrayString.split(",");
    output += '    ' + skillString[0] + ': {\n';
    output += '        id: "' + skillString[0] + '",\n';
    output += '        name: "' + skillString[1] + '",\n';
    output += '        damageType: damageTypes.' + skillString[2] + ',\n';
    output += '        target: targets.' + skillString[3] + ',\n';
    output += '        avoidable: ' + skillString[4].toLowerCase() + ',\n';
    if (skillString[5] != "")
    {
        output += '        tankbuster: ' + skillString[5].toLowerCase() + ',\n';
    }
    if (skillString[6] != "")
    {
        output += '        interruptable: ' + skillString[6].toLowerCase() + ',\n';
    }
    if (skillString[7] != "")
    {
        output += '        notes: "' + skillString[7] + '",\n';
    }
    output += '    },\n'
}
output += '}\n\n';
output += 'export const ' + abbreviation + 'Timeline =\n';
output += '[\n';

let timelineCsv = XLSX.utils.sheet_to_csv(filedata.Sheets['timeline'])
const timelineArray = timelineCsv.toString().split("\n");
for (let i = 1; i < timelineArray.length; i++) {
    currentArrayString = timelineArray[i]
    currentArrayString = currentArrayString.replace(/[\n\r]/gm, "");
    let timelineString = currentArrayString.split(",");
    if (timelineString[4] != "")
    {
        output += '    {\n'
        output += '        ...' + abbreviation + 'Skills["' + timelineString[4] + '"],\n';
        output += '        startTime: ' + timelineString[2] + ',\n';
        output += '        endTime: ' + timelineString[3] + ',\n';
        output += '    },\n'
    }
}
output += ']'

write(output);