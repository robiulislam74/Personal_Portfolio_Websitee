import { useInView } from "react-intersection-observer";

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="divider bg-black h-0.5"></div>
      <footer
        ref={ref}
        className={`
          footer footer-center bg-primaryColor text-base-content rounded p-10
          transform transition-all duration-1000 ease-out
          ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <nav>
          <div className="flex flex-col items-center gap-2">
            <div className="avatar">
              <div className="w-12 rounded-full border-2 border-gray-500">
                <img src="https://i.ibb.co.com/N2Rqfg8b/Fronend-Developer1.jpg" />
              </div>
            </div>
            <span className="text-gray-400 font-russoOne text-xl font-bold">
              ROBIUL
            </span>
          </div>
        </nav>
        <aside>
          <p className="text-base md:text-lg text-gray-400">
            Copyright © 2025. All rights reserved by Robiul Islam.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
