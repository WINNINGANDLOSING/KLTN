import robot_img from "../assets/Saul.png";
import { Link } from "react-router-dom";

// bg-gradient-to-r from-teal-100 to-blue-100
// from-teal-100 to-blue-100
function HomePage() {
  return (
    <div className="flex items-center justify-center hero h-[85vh] bg-gradient-to-r ">
      <div className="hero-content text-center min-w-[200px] ">
        <div className="max-w-md flex-1">
          <img
            className="block w-[200px] h-auto mx-auto"
            src={robot_img}
          ></img>
          <h1 className="text-2xl lg:text-5xl font-bold [&::selection]:text-base-content brightness-100 contrast-150 [&::selection]:bg-blue-950 ">Xin chào! Mình là</h1>
          
          <h1 className="text-3xl lg:text-5xl bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent mt-5 text-5xl font-extrabold leading-[1.15]  sm:text-6xl text-center">
            LEGAL CHATBOT
          </h1>
          <p className="py-6 font-semibold lg:text-lg text-sm">
            Giải đáp thắc mắc các vấn đề pháp luật
          </p>
          <Link to="/chat">
            <button className="btn btn-info">Bắt đầu ngay</button>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default HomePage;
