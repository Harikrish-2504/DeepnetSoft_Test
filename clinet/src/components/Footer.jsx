const Footer = () => {
  return (
    <div className=" bg-neutral-800  py-2  px-4">
      <div className="container max-w-[1200px] min-h-10 mx-auto">
        <div className="flex justify-between flex-col md:flex-row items-center w-full h-10">
          <p className="text-[14px] text-[#857878]">&copy; 2024 Your Deepnetsoft Solutions. All rights reserved.</p>

          <p className="text-[14px] text-[#857878]">
            <span className="m-2">Terms & Conditons</span>
            <span>Privacy Poilicy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
