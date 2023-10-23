import QrCodeValue from "../utils/QrCodeValue";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function QrCodeBox() {
  const [value, setValue] = useState<string>("");
  const [qr, setQr] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>(
    "e.g. https://yourlink.com"
  );

  const GenerateQRCode = () => {
    setQr("");
    const qrValue = QrCodeValue(value);
    if (!qrValue) {
      setPlaceholder("Link is required.");
      return;
    } else {
      setQr(qrValue);
    }
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
          value={value}
          onChange={(e) => setValue(e.target.value)}
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
