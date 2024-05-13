verdoppeln(5, function(ergebnis) {
  console.log('Das Ergebnis ist:', ergebnis);
});

function verdoppeln(zahl, callback) {
	zahl *= 2
	callback(zahl)
}
