import BackgroundImg from "../assets/images/MenuBG.png";
const BannerSection = () => {
  return (
    <div style={{backgroundImage: `url(${BackgroundImg})`}} className={`bg-cover bg-center`}>
      <div className="container  text-white flex justify-between max-w-[1200px] min-h-10 mx-auto items-baseline pb-2 px-2">
        <div className="max-w-2xl text-center mx-auto px-2 py-24 w-fit">
          <h1 className="md:text-[80px] text-6xl font-bold customOswaldFont customTextShadow">MENU</h1>
          <p className="CustomKellyFont not-only:text-[18px]  text-neutral-400 ">
            Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the
            "Order Online" button located below the menu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
