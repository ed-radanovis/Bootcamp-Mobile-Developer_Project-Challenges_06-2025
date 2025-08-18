import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {
  if (err) {
    console.log("Error on application !!!");
    return;
  }

  const isSmall = result.type == 2;
  qr.generate(result.link, { small: isSmall }, (qrcode) => {
    console.log(chalk.green.bold("\n 📱 QR Code generated successfully :\n"));
    console.log(qrcode, "\n");
  });
}

export default handle;
