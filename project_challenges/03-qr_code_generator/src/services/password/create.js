import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
  console.log(
    chalk.greenBright.bold("\n🔒 Password generated successfully : \n")
  );
  const password = await handle();
  console.log(chalk.yellow.bold(password, "\n"));
}

export default createPassword;
