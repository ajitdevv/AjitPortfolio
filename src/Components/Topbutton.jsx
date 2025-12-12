import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";


function Topbutton() {
    const [enable, setEnable] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setEnable(true);
            } else {
                setEnable(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>
            <a href="#home">
                <button
                    disabled={!enable}
                    className={`cosmic-button fixed bottom-5 right-2 z-50 transition-transform duration-300  
                    ${enable ? "opacity-100 hover:scale-110" : "opacity-0 cursor-not-allowed"}
                    `}
                >
                    <ArrowUp className="animate-bounce  mt-1"/>
                </button>
            </a>
        </div>
    );
}

export default Topbutton;
