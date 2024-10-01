import chalk from "chalk";

const log = console.log;

log(
  chalk.rgb(255, 204, 255).underline("Agnès") +
    ": " +
    chalk.rgb(255, 204, 255)("notre maîtresse du DOM!")
);

log(
  chalk.rgb(204, 255, 204).underline("Géraldine") +
    ": " +
    chalk.rgb(204, 255, 204)("notre marraine des Dragibus!")
);

log(
  chalk.rgb(153, 204, 255).underline("Annabelle") +
    ": " +
    chalk.rgb(153, 204, 255)("notre prêtresse du Satanisme!")
);

log(
  chalk.rgb(255, 235, 153).underline("Toto") +
    ": " +
    chalk.rgb(255, 235, 153)("notre mascotte bienveillante!")
);
