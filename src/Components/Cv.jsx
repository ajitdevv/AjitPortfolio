import { useNavigate } from "react-router-dom";
import Aos from "aos";
import { useEffect } from "react";
import logo from "./reminihi.png";
function Cv() {
  useEffect(() => {
    Aos.init();
  }, []);
  const navigate = useNavigate();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./reminihi.pdf"; 
    link.download = "mycv.pdf"; 
    link.click();
  };
  return (
    <>
      <div className="mt-5 flex flex-col items-center gap-10 ">
        <div>
          <img src={logo} alt="My CV" />
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
