
var plainText = prompt("Text eingeben");
var verschiebung = 1;
var cipherText;


var charCodeKleinA = "a".charCodeAt(0);
var charCodeKleinZ = "z".charCodeAt(0);
var charCodeGrossA = "A".charCodeAt(0);
var charCodeGrossZ = "Z".charCodeAt(0);


function zeichenTransformieren(charCode, startAsciiCode) {

  var indexImAlphabet = charCode - startAsciiCode;
  var transformiertCode = indexImAlphabet + verschiebung;

  if (transformiertCode > 25) {
    transformiertCode -= 26;
  }
  else if (transformiertCode < 0) {
    transformiertCode += 26;
  }
  return startAsciiCode + transformiertCode;
}

function textTransformieren(ausgangstext) {
  var ergebnis = "";

  for (var i = 0; i < ausgangstext.length; i++) {
    var charCode = ausgangstext.charCodeAt(i);

    if (charCode >= charCodeGrossA && charCode <= charCodeGrossZ) {

      charCode = zeichenTransformieren(charCode, charCodeGrossA);
    }
    else if (charCode >= charCodeKleinA && charCode <= charCodeKleinZ) {
      charCode = zeichenTransformieren(charCode, charCodeKleinA);
    }
    ergebnis += String.fromCharCode(charCode);
  }

  return ergebnis;
}

cipherText = textTransformieren(plainText);

console.log("Aus '" + plainText + "' wird '" + cipherText + "'.");

verschiebung *= -1;
plainText = textTransformieren(cipherText);

alert("Aus '" + cipherText + "' wird '" + plainText + "'.");
