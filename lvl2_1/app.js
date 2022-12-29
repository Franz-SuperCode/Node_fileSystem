import fs from 'fs';
import data from "./data.js";
// console.log(data);

console.log(testJSON)
let dataAsJson = JSON.stringify(data);
// console.log(dataAsJson);

fs.writeFile('./data.json', dataAsJson, (err) => {
    if (err) console.log(err);
    console.log("erfolgreich in JSON gepackt")
})




fs.readFile('data.json', (err, data) => {
    if (err) console.log(err); // Wirf einen Fehler, falls das Lesen der Datei fehlschlägt

    const objects = JSON.parse(data); // Parse den Text in ein JavaScript-Objekt
    let txt = ''; // Initialisiere eine leere Zeichenkette, in die wir später unseren Text schreiben werden

    // Iteriere über das Array von Objekten und füge jedes Objekt der Zeichenkette hinzu
    for (const obj of objects) {
        txt += `${obj.id} - ${obj.title}\n${obj.description}\n\n`;
    }

    fs.writeFile('data.txt', txt, (err) => { // Schreibe die Zeichenkette in die neue .txt Datei
        if (err) console.log(err); // Wirf einen Fehler, falls das Schreiben der Datei fehlschlägt
        console.log('Die Datei wurde gespeichert!');
    });
});
