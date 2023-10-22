import QRCode from "qrcode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function QrCodeBox() {
  const [link, setLink] = useState("");
  const [qr, setQr] = useState("");
  const [placeholder, setPlaceholder] = useState("e.g. https://yourlink.com");
  const [isRed, setIsRed] = useState(false);

  const GenerateQRCode = () => {
    setQr("");

    QRCode.toDataURL(
      link,
      {
        width: 200,
        margin: 2,
        color: {
          dark: "#000000",
          light: "#FFFFFF",
        },
      },
      (err, link) => {
        if (err) {
          setIsRed(true);
          setPlaceholder("Link is required.");
        }
        setQr(link);
      }
    );
  };

  return (
    <div className="qrcodebox">
      <h1> QR Code Me! </h1>
      <div className="enterLink">
        <div>
          <h2>STEP 1:</h2>
          <p> Enter Link:</p>
        </div>

        <input
          type="text"
          placeholder={placeholder}
          className={`input ${isRed ? "red-placeholder" : ""}`}
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
      </div>
      <div className="hitGenerate">
        <h2>STEP 2:</h2>
        <button onClick={GenerateQRCode}> Click here to get your code! </button>
      </div>
      {qr && (
        <>
          <img src={qr} />
          <a className="downloadBtn" href={qr} download="qrcode.png">
            Download <FontAwesomeIcon icon={faDownload} />
          </a>
        </>
      )}
    </div>
  );
}

export default QrCodeBox;
