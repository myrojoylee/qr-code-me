import QRCode from "qrcode";
import { useState } from "react";

function QrCodeBox() {
  const [link, setLink] = useState("");
  const [qr, setQr] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      link,
      {
        width: 500,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      },
      (err, link) => {
        if (err) return console.error(err);

        console.log(link);
        setQr(link);
      }
    );
  };

  return (
    <div className="qrcodebox">
      <h1> QR Code Me! </h1>
      <input
        type="text"
        placeholder="e.g. https://yourlink.com"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />
      <button onClick={GenerateQRCode}> Generate! </button>
      {qr && (
        <>
          <img src={qr} />
          <button href={qr} download="qrcode.png">
            Download
          </button>
        </>
      )}
    </div>
  );
}

export default QrCodeBox;
