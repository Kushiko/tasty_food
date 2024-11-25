import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="h-[741px] flex flex-col justify-end relative">
      <div className="h-[246px] z-50 p-20 items-center rounded-3xl shadow-[0px_6.1px_61.01px_0px_#0000001A] flex justify-normal gap-20 left-1/2 transform -translate-x-1/2 absolute top-0 w-[1323px] bg-white">
        <h2 className="text-4xl w-[285px] font-bold text-[#90E051]">
          Subscribe To Our Newsletter
        </h2>
        <div className="flex text-xl items-center justify-center">
          <div className="flex border-2 border-[#90E051] rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="Enter your mail"
              className="px-4 py-2 w-64 outline-none"
            />
            <button className="px-6 py-2 bg-[#90E051] text-white font-medium hover:bg-[#73b640] transition-all">
              Subscribe now
            </button>
          </div>
        </div>

        <div className="pl-16 flex gap-2">
          <button className="h-10 w-10 text-white transition-all duration-300 flex hover:bg-[#73b640] items-center justify-center text-2xl bg-[#90E051] rounded-md">
            <FaFacebookF />
          </button>
          <button className="h-10 w-10 text-white transition-all duration-300 flex hover:bg-[#73b640] items-center justify-center text-2xl bg-[#90E051] rounded-md">
            <FaTwitter />
          </button>
          <button className="h-10 w-10 text-white transition-all duration-300 flex hover:bg-[#73b640] items-center justify-center text-2xl bg-[#90E051] rounded-md">
            <FaInstagram />
          </button>
          <button className="h-10 w-10 text-white transition-all duration-300 flex hover:bg-[#73b640] items-center justify-center text-2xl bg-[#90E051] rounded-md">
            <FaYoutube />
          </button>
        </div>
      </div>
      <div className="absolute text-black bottom-0 w-full h-[565px] bg-black opacity-30 rounded-[10.7px] z-10"></div>
      <Image
        alt="Footer"
        className="w-full h-[565px] brightness-[0.3] -z-10 absolute bottom-0"
        src="/images/footer.png"
        width={1920}
        height={1920}
      />
      <div className="text-white h-[565px] items-center z-20 container mx-auto flex justify-center gap-40">
        {/* Explore Section */}
        <div className="text-xl">
          <h2 className="text-3xl font-bold mb-8">Explore</h2>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="mr-2">&gt;</span>{" "}
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">&gt;</span>{" "}
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">&gt;</span>{" "}
              <a href="#" className="hover:underline">
                Contact us
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">&gt;</span>{" "}
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">&gt;</span>{" "}
              <a href="#" className="hover:underline">
                Team
              </a>
            </li>
            <li className="flex items-center">
              <span className="mr-2">&gt;</span>{" "}
              <a href="#" className="hover:underline">
                Our Menu
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="text-xl">
          <h2 className="text-3xl font-bold mb-8">Contact us</h2>
          <ul className="space-y-4">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16.5 9.5L21 4m-5 5.5V7M21 4H7m8 2v7m0 6H3m0-5h14m-4-6V3"
                />
              </svg>
              3rd Floor, Office 45
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M3 10l9 6 9-6-9-6-9 6z"
                />
              </svg>
              00965 - 96659986
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16.5 12L21 9M12 17.5v-9.5"
                />
              </svg>
              M.Alyaqout@4house.Co
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M12 8v4l3 3m6 1.5v2m0 1H9m12-4V2"
                />
              </svg>
              Sun - Sat / 10:00 AM - 8:00 PM
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
