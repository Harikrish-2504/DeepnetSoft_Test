import {useEffect, useState} from "react";
import backgroundImage from "../../assets/images/BtnBG.png";
import {useDispatch, useSelector} from "react-redux";
import {fetchMenus} from "../../redux/menu/menuSlice";
import axios from "../../Utils/axiosInstance";
import ItemCardSection from "../../components/ItemCardSection";
const MenuSection = () => {
  const dispatch = useDispatch();
  const {menus, loading, error} = useSelector((state) => state.menu);
  const [selectedMenuId, setSelectedMenuId] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    dispatch(fetchMenus());
  }, [dispatch]);
  useEffect(() => {
    if (menus.length > 0 && !selectedMenuId) {
      const firstMenuId = menus[0]._id;
      setSelectedMenuId(firstMenuId);
    }
  }, [menus, selectedMenuId]);
  useEffect(() => {
    if (selectedMenuId) {
      axios
        .get(`/menus/${selectedMenuId}`)
        .then((res) => setItems(res.data.data))
        .catch((err) => console.error("Failed to fetch items:", err));
    }
  }, [selectedMenuId]);
  const handleSelect = (menuId) => {
    setSelectedMenuId(menuId);
  };
  if (loading) return <p>Loading menus...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <div style={{backgroundImage: `url(${backgroundImage})`}} className="bg-cover bg-center">
        <div className="container max-w-[1200px] min-h-10 mx-auto text-white flex justify-between items-baseline p-6 px-2">
          <div className="flex justify-center gap-4 w-full">
            {menus.map((menu) => (
              <button
                key={menu._id}
                onClick={() => handleSelect(menu._id)}
                className={`border w-[80px] md:w-[120px] border-blue-400  text-white  text-sm md:text-lg font-medium py-3 px-5
              ${selectedMenuId === menu._id ? "bg-[#0796EF]" : "bg-black smRedTextShadow OswaldFont"}
              `}
              >
                {menu.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
      <ItemCardSection data={items} />
    </>
  );
};

export default MenuSection;
