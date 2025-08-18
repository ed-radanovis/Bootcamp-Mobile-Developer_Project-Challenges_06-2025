import chalk from "chalk";

const mainPrompt = [
  {
    name: "select",
    description: chalk.blue(
      "Choose the tool: => 1 - QR CODE \n        or               => 2 - PASSWORD"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Choose only between 1 and 2"),
    required: true,
  },
];

export default mainPrompt;
