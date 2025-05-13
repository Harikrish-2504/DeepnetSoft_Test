import ItemBanner from "../assets/images/itemsBannerBG.png";
import LeftBanner from "../assets/images/itemLeftimg.png";
import RightBanner from "../assets/images/itemRightimg.png";
import juice from "../assets/images/juice.png";
import shake from "../assets/images/shake.png";

const ItemCardSection = ({data}) => {
  return (
    <div className="flex p-1 w-full sm:h-[550px] bg-cover bg-center" style={{backgroundImage: `url(${ItemBanner})`}}>
      <div className="flex h-full justify-between items-center w-full">
        <img className="h-[85%] w-25 hidden sm:block" src={LeftBanner} alt="Side Banner" />
        <div className="border m-2 min-w-[80%] flex relative justify-center items-center min-h-[300px] border-white">
          <img
            className="left-[0] w-[80px] sm:w-[110px] sm:h-[150px] h-[110px] sm:left-[-33px] top-[-20px] absolute sm:top-[-75px]"
            src={juice}
            alt="juice"
          />
          <img
            className="bottom-0 h-[100px] right-0 md:h-[150px] md:bottom-[-20px] absolute md:right-[-8px]"
            src={shake}
            alt="shake"
          />
          <div className="w-full h-full justify-center flex flex-col items-center">
            <div className="gap-2 max-w-[200px] sm:gap-5 sm:max-w-[100%] flex justify-center items-center mx-7">
              <div className="w-[40px] bg-gray-400 h-[2px] md:w-[80px]"></div>
              <h1 className="truncate text-center sm:text-[50px] font-bold max-w-[500px] customTextShadow OswaldFont text-white text-[30px]">
                {data?.description?.toUpperCase() || "Menu Description"}
              </h1>
              <div className="md:w-[80px] bg-gray-400 h-[2px] w-[40px]"></div>
            </div>

            <div className="pb-5 grid mb-[50px] px-5 gap-4 pt-8 grid-cols-12 sm:gap-[60px] place-items-center">
              {data?.items?.length > 0 ? (
                data.items.map((item, index) => (
                  <div key={index} className="w-full  flex max-w-[500px] col-span-12 flex-col gap-2 sm:col-span-6">
                    <h1 className="text-lg sm:text-2xl customOswaldFont  text-white">
                      {item.name?.toUpperCase()} ............. ${item.price}
                    </h1>
                    <p className="text-sm max-w-full sm:text-lg text-gray-600 CustomKellyFont text-justify">
                      {item.description}
                    </p>
                  </div>
                ))
              ) : (
                <p className="col-span-12 text-white text-center">No items found</p>
              )}
            </div>
          </div>
        </div>

        <img
          className="object-contain w-[50px] hidden min-[768px]:w-[80px] max-h-[85%] min-[640px]:block min-[1024px]:w-[100px] min-[700px]:w-[60px] h-auto"
          src={RightBanner}
          alt="Right Banner"
        />
      </div>
    </div>
  );
};

export default ItemCardSection;
