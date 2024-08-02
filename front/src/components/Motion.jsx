import video from "../imgs/for_motion.mp4";
import img from "../imgs/chuckchuckLogo.png";
export default function Motion() {
    const scroll = () => {};
    setInterval(scroll, 2000);
    return (
        <div className="relative">
            <video controls className="w-dvw h-dvh z-1" autoPlay muted>
                <source src={video} type="video/mp4" />
            </video>
            <img
                src={img}
                alt="1"
                className="absolute z-10 top-[40%] left-[43%] w-40"
            />
        </div>
    );
}
