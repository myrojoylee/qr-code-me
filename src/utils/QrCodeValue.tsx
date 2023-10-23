import { toDataURL, QRCodeToDataURLOptions } from "qrcode";

const options: QRCodeToDataURLOptions = {
  width: 200,
  margin: 2,
  color: {
    dark: "#000000",
    light: "#FFFFFF",
  },
};

const QrCodeValue = (value: string) => {
  let qrValue: string | undefined = undefined;

  toDataURL(value, options, (err, url) => {
    if (err) {
      console.error(err);
      return;
    }
    qrValue = url;
  });

  return qrValue;
};

export default QrCodeValue;
