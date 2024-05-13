const fs = require('node:fs');

function leseDateiInhalt(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, dat) => {
      if (err) {
	console.error(err)
	reject()
      }
      resolve(dat)
    })
  })
}

leseDateiInhalt('beispiel.txt')
  .then(inhalt => {
    console.log('Die Länge des Dateiinhalts beträgt:', inhalt.length);
  })
  .catch(err => {
    console.error('Fehler beim Lesen der Datei:', err);
  });
