import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs"

inquirer
  .prompt([
    {
        "message" : "Enter your text: ",
        "name" : "text"
    }
  ])
  .then((answers) => {
    var qr_svg = qr.image(answers.text);
    qr_svg.pipe(fs.createWriteStream('answers.jpg'));
  })
  .catch((error) => {
    if (error.isTtyError) {
        "Prompt couldn't be rendered in the current environment"
    } else {
        "Something else went wrong"
    }
  });