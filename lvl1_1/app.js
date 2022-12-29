import fs from 'fs';



//Datei öffnen
fs.open('blog1.txt', 'r', (err, data) => {
    if (err) console.log(err);
    // console.log("Geöffnet");
})


// Eine Datei auslesen
fs.readFile('blog1.txt', 'utf8', (err, data) => {
    if (err) {
        // console.error(err);
        return;
    }

    // console.log(data);
});

//Neuen Ordner erstellen
fs.mkdir('./newFolder', (err) => {
    if (err) console.log(err);
    // console.log("Neuen Ordner erstellt");
})

//Ordner löschen
fs.rmdir('./newFolder', (err) => {
    if (err) console.log(err);
    // console.log("Ordner gelöscht");
})

//Ordner umbenennen
fs.rename('./blog2.txt', './neuerName.txt', (err) => {
    if (err) console.log(err);
    // console.log("unbennant");
})


fs.writeFile('./blog2.txt', "Hello World", (err) => {
    if (err) console.log(err);
    // console.log("Zweite Datei geschrieben");
})

fs.stat('./blog1.txt', (err, stats) => {
    // Überprüfe, ob es beim Abfragen der Dateiinformationen einen Fehler gab
    if (err) {
        // Wenn der Fehlercode 'ENOENT' ist, bedeutet dies, dass die Datei nicht existiert
        if (err.code === 'ENOENT') {
            console.log("Datei existiert nicht. Erstelle neue Datei...");
            fs.writeFile('./blog1.txt', "Inhalt der Datei", (err) => {
                // Überprüfe, ob es beim Erstellen der Datei einen Fehler gab
                if (err) {
                    console.error(err);
                    return;
                }
                console.log("Neue Datei erfolgreich erstellt");
            });
        } else {
            console.error(err);
            return;
        }
    } else {
        console.log("Datei gefunden. Verarbeite Datei...");
    }
});



