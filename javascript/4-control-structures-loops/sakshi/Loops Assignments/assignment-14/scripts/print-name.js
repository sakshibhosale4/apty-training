const letters = {
  S: [
    " SSS ",
    " S   ",
    " SSS ",
    "   S ",
    " SSS "
  ],
  A: [
    "    A    ",
    "   A A   ",
    "  A A A  ",
    " A     A ",
    " A     A "
  ],
  K: [
    " K  K",
    " K K ",
    " KK  ",
    " K K ",
    " K  K"
  ],
  H: [
    " H  H",
    " H  H",
    " HHHH",
    " H  H",
    " H  H"
  ],
  I: [
    " III ",
    "  I  ",
    "  I  ",
    "  I  ",
    " III "
  ]
};
const word = "SAKSHI";

const output = document.getElementById("name-output");
let finalOutput = "";
const rows = letters[word[0]].length; 
for (let row = 0; row < rows; row++) {
  let line = "";
  for (const char of word) {
    line += letters[char][row] + "  "; 
  }
  console.log(line);
  finalOutput += line + "\n";
}
output.textContent = finalOutput;
