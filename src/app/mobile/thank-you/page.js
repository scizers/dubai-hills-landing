import logo from "../../../images/logoDesk.png";
import Image from "next/image";
import Link from "next/link";

const ThankYouPage = () => {
  return (
    <div className="relative top-0 flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center bg-lightBlue">
      <div className="flex flex-col items-center justify-center gap-20">
        <div>
          <Image
            src={logo}
            alt="logo"
            width={152}
            height={40}
            className="object-cover"
          />
        </div>

        <div className="flex flex-col items-center mb-20">
          <h1 className="mb-3 text-[#031200] uppercase">
            Thank You <br /> for Showing interest
          </h1>
          <p className="mb-8 text-sm leading-[16.94px] text-[#027373]">
            OUR REPRESENTATIVE WILL CONNECT WITH YOU SHORTLY.
          </p>

          <Link href="/" passHref>
            <button className="px-6 w-[313px] py-3 mt-32 lg:mt-20 font-semibold  text-darkBlue transition duration-300 bg-secondary rounded-full">
              GO TO HOMEPAGE
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
