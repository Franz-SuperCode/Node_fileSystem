import fs from 'fs';

const check = (neuerInhalt) => {
    fs.writeFile('./blog1.txt', neuerInhalt, (err) => {
        // Überprüfe, ob es beim Erstellen der Datei einen Fehler gab
        if (err) {
            console.error(err);
            return;
        }
        console.log("Neue Datei erfolgreich erstellt");
    });
}

//Falls die Datei nicht da ist, erstelle eine neue
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
        console.log("Datei gefunden. Verarbeite Datei mit neuem Inhalt...");
        check("Das hier ist der neue INHALT")
    }
});