import chalk from "chalk";

const promptQRCode = [
  {
    name: "link",
    description: chalk.yellow("Insert the link to generate the QR CODE"),
  },
  {
    name: "type",
    description: chalk.cyan(
      "Choose between the QRCode types: => 1 - NORMAL \n        or                               => 2- TERMINAL"
    ),
    pattern: /^[1-2]+$/,
    message: chalk.red.italic("Choose only between 1 and 2"),
    required: true,
  },
];

export default promptQRCode;
