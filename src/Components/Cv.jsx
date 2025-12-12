import { useNavigate } from "react-router-dom";
import Aos from "aos";
import { useEffect, useState } from "react";
import resume from "../assets/resume/resume.pdf";

function Cv() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    Aos.init();
      const timer = setTimeout(() => {
      setShowPopup(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const navigate = useNavigate();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "ajeetcv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    alert("Your CV is downloading... ✔️");
  };
  return (
    <>
     {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-5 rounded-xl shadow-lg w-80 text-center">
            <h2 className="text-xl text-primary mb-3">Welcome!</h2>
            <p className="mb-4 text-primary">Download for high quality PDF</p>
            <button
              onClick={() => setShowPopup(false)}
              className="cosmic-button"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <div className="mt-5 flex flex-col items-center gap-10 ">
        <div>
          <iframe
            width="100%"
            height="420px"
            src={resume + "#zoom=100&view=FitH"}
            alt="My CV"
          />
        </div>
        <div
          data-aos="fade-down"
          data-aos-offset="50"
          className="flex flex-row mb-5 justify-between w-1/2 max-sm:w-full max-sm:justify-center gap-10"
        >
          <button
            onClick={() => navigate(-1)}
            className="cosmic-button text-lg"
          >
            Back
          </button>
          <button
            onClick={() => {
              handleDownload();
            }}
            className="cosmic-button text-lg"
          >
            Download CV
          </button>
        </div>
      </div>
    </>
  );
}
export default Cv;
