// import { useEffect, useState } from "react";
// import { FaTelegram } from "react-icons/fa";
// import { IoLogoInstagram } from "react-icons/io";
// import { useNavigate } from "react-router-dom";
// import payme from "../assets/img/payme-CR2R633X.png"
// import click from "../assets/img/click-CMY5evpT.png"

// function Check() {
//   const navigate = useNavigate()
//   const setUser = localStorage.getItem("user")
//   const token = localStorage.getItem("accessToken")
//   const userData = JSON.parse(setUser);
//   const lastname = userData?.user?.data?.formData?.firstName
//   const name = userData?.user?.data?.formData?.lastName
//   const number = userData?.user?.data?.formData?.phone
//   const [selectedMethod, setSelectedMethod] = useState("click");
//   const [isModalActive, setIsModalActive] = useState(false);
//   const [selectedCity, setSelectedCity] = useState("tashkent")
//   const [userLocation, setUserLocation] = useState(null);
//   const handleCityChange = (e) => {
//     setSelectedCity(e.target.value); // Selectdan manzilni tanlash
//   };
//   const handleButtonClick = () => {
//     setIsModalActive(!isModalActive); // Modal holatini teskari qilib qo'yamiz
//   };
//   useEffect(() => {
//     fetch('https://api.fruteacorp.uz/areas', {
//       method: 'GET', 
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`,  // Tokenni qo'shish
//       },
//     })
//     .then((res) => res.json())  // Javobni JSON formatiga aylantirish
//     .then((elem) => console.log(elem?.data))  // Ma'lumotni konsolga chiqarish
//     .catch((error) => console.error('Fetch error: ', error)); // Xatolikni tutish

//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);
//   const handleRadioChange = (e) => {
//     setSelectedMethod(e.target.value);
//   };
  

//   return (
//     <main>
//       <div className="container">
//         <h2 className="text-[24px] font-semibold mb-[15px]">
//           Buyurtmani rasmiylashtirish
//         </h2>
//         <div className="flex gap-[20px] lg:flex-row flex-col">
//           <div className="lg:w-[70%] w-[100%]">

//             <div className="border border-green-400 rounded-[10px] px-[20px] py-[16px] mb-[15px]">
//               <h3 className="sm:text-[20px] text-[16px] font-semibold mb-[15px]">
//                 Buyurta qabul qiluvchi
//               </h3>
//               <div className="flex gap-[10px] mb-[15px] lg:flex-row flex-col">
//                 <div className="flex flex-col gap-[5px]">
//                   <label className="text-[14px]">
//                     Familiya <span>*</span>
//                   </label>
//                   <input
//                     type="text"
//                     value={lastname}
//                     className="p-[10px] border border-green-400 rounded-[10px] text-[14px] lg:w-[208px] w-full focus:outline-[0]"
//                   />
//                 </div>
//                 <div className="flex flex-col gap-[5px]">
//                   <label className="text-[14px]">
//                     Isim <span>*</span>
//                   </label>
//                   <input
//                     type="text"
//                     value={name}
//                     className="p-[10px] border border-green-400 rounded-[10px] text-[14px] lg:w-[208px] w-full focus:outline-[0]"
//                   />
//                 </div>
//               </div>
//               <p className="max-w-[550px] text-[14px] text-gray-300 mb-[15px]">
//                 {`Siz koʻrsatgan telefon raqamiga buyurtma holati haqida bildirishnoma yuboramiz. Yetkazib berish vaqtini aniqlashtirish uchun kuryer siz bilan telefon orqali bogʻlanadi.`}
//               </p>
//               <div className="flex flex-col gap-[5px] mb-[15px]">
//                 <div className="flex flex-col gap-[5px]">
//                   <label className="text-[14px]">
//                     Relefon raqam <span>*</span>
//                   </label>
//                   <input
//                     type="text"
//                     value={number}
//                     className="p-[10px] border border-green-400 rounded-[10px] text-[14px] lg:w-[208px] w-full flex gap-[3px]"
//                   />
//                 </div>
//               </div>
//               <p className="max-w-[550px] text-[14px] text-red-500 mb-[15px]">
//                 {`Yetkazib berish Toshkent shahridan tashqaridagi viloyatlar uchun pochta xizmati BTS orqali amalga oshiriladi. Bu xizmat tezkor va ishonchli yetkazib berishni ta'minlaydi. Savollaringiz bo‘lsa yoki qo‘shimcha ma’lumot kerak bo‘lsa, biz bilan bog‘laning!`}
//                 <div className="flex gap-2 mt-1">
//                   <a
//                     href="https://www.facebook.com/fruteacorp/"
//                     className="flex justify-center items-center text-black"
//                   >
//                     <FaTelegram />
//                   </a>
//                   <a
//                     href="https://www.instagram.com/fruteacorp/"
//                     className="flex justify-center items-center text-black"
//                   >
//                     <IoLogoInstagram />
//                   </a>
//                 </div>
//               </p>
//               <div>
//                 <h3 className="sm:text-[20px] text-[16px] font-semibold mb-[5px]">
//                   {`yetkazib berish`}
//                 </h3>
//                 <p className="mb-[15px] max-w-[400px]">{`Topshirish manzilini tanlang`}</p>
//                 <button type="button" onClick={handleButtonClick} className=" transition-all duration-300 bg-green-400 hover:bg-green-600 hover:text-[#fff] rounded-[10px] font-medium lg:w-[300px] w-full py-[8px] text-[14px] ">Tanlash</button>
//               </div>
//             </div>


//             <div className="border border-green-400 rounded-[10px] px-[20px] py-[16px] mb-[15px]">
//               <h3 className="cursor-pointer w-full flex justify-between items-center sm:text-[20px] text-[16px] font-semibold ">
//                 {`24 soat ichida yetkazamiz`}
//               </h3>
//             </div>

//             <div className="border border-green-400 rounded-[10px] px-[20px] py-[16px] ">
//               <h3 className="sm:text-[20px] text-[16px] font-semibold mb-[16px]">{`Tolov turi`}</h3>
//               <div className="flex flex-col gap-[15px]">
//       <label className="p-[12px] bg-green-400 rounded-[10px] flex items-center cursor-pointer">
//         <input
//           type="radio"
//           name="paymentMethod"
//           value="payme"
//           checked={selectedMethod === 'payme'}
//           onChange={handleRadioChange}
//           className="w-[20px] h-[20px]"
//         />
//         <span className="ml-[15px] text-[14px] flex items-center gap-[5px]"><img className="w-12 h-8 object-contain" src={payme} alt="payme" /> orqali</span>
//       </label>
//       <label className="p-[12px] bg-green-400 rounded-[10px] flex items-center cursor-pointer">
//         <input
//           type="radio"
//           name="paymentMethod"
//           value="click"
//           checked={selectedMethod === 'click'}
//           onChange={handleRadioChange}
//           className="w-[20px] h-[20px]"
//         />
//         <span className="ml-[15px] text-[14px] flex items-center gap-[5px]"><img className="w-12 h-8 object-contain" src={click} alt="click" /> orqali</span>
//       </label>
//     </div>



//             </div>

//           </div>
//           <div className="border border-green-400 rounded-[10px] px-[20px] py-[16px] w-[100%] lg:w-[320px] h-[max-content]">
//             <div className="flex justify-between items-center mb-[15px]">
//               <h4 className="text-[20px] font-medium">{`Buyurtmangiz`}</h4>
//               <button onClick={()=>navigate("/")} className="underline text-[14px] text-gray-600 hover:text-gray-800">
//                   {`savatga otish`}
//               </button>
//             </div>
//             <div className="flex flex-col gap-[5px] text-[12px] mb-[15px]">
//               <div className="flex justify-between">
//                 <div>
//                 {`Mahsulotlar`} <span>{`(3):`}</span>
//                 </div>
//                 <div>
//                   90000 som
//                 </div>
//               </div>
//               <div className="flex justify-between">
//                 <div>
//                   Yetkazib berish
//                 </div>
//                 <div>
//                   bepul
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {isModalActive && (
//   <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//     <div className="bg-white p-[20px] rounded-[10px] w-[80%] max-w-[600px]"> {/* Modal uchun kenglikni o'zgartirdik */}
//       <h3 className="text-[20px] font-semibold mb-[10px]">Modal Title</h3>
//       <p className="text-[14px]">Bu yerda modal mazmuni bo'ladi.</p>

//       {/* Select input */}
//       <select
//         className="p-[10px] border border-green-400 rounded-[10px] text-[14px] lg:w-[208px] w-full"
//         value={selectedCity}
//         onChange={handleCityChange}
//       >
//         <option value="tashkent">Toshkent</option>
//         <option value="bukhara">Buxoro</option>
//       </select>

//       {/* Google Maps iframe */}
//       {userLocation && (
//         <div className="mt-4">
//           <iframe
//             width="100%" // 100% kenglik
//             height="300" // Balandligini belgilash
//             frameBorder="0"
//             style={{ border: 0, marginTop: "10px" }}
//             src={`https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${userLocation.lat},${userLocation.lng}&zoom=12`}
//             allowFullScreen
//           ></iframe>
//         </div>
//       )}

//       {/* Modalni yopish tugmasi */}
//       <button
//         type="button"
//         onClick={handleButtonClick} // Modalni yopish
//         className="mt-[10px] transition-all duration-300 bg-red-400 hover:bg-red-600 hover:text-[#fff] rounded-[10px] font-medium w-full py-[8px] text-[14px]"
//       >
//         Yopish
//       </button>
//     </div>
//   </div>
// )}

//     </main>
//   );
// }

// export default Check;


import { useEffect, useState } from "react";
import { FaTelegram } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import payme from "../assets/img/payme-CR2R633X.png";
import click from "../assets/img/click-CMY5evpT.png";

function Check() {
  const navigate = useNavigate();
  const setUser = localStorage.getItem("user");
  const token = localStorage.getItem("accessToken");
  const userData = JSON.parse(setUser);
  const lastname = userData?.user?.data?.formData?.firstName;
  const name = userData?.user?.data?.formData?.lastName;
  const number = userData?.user?.data?.formData?.phone;

  const [selectedMethod, setSelectedMethod] = useState("click");
  const [isModalActive, setIsModalActive] = useState(false);
  const [selectedCity, setSelectedCity] = useState("tashkent");
  const [userLocation, setUserLocation] = useState(null);

  const cities = {
    tashkent: { lat: 41.2995, lng: 69.2401 },
    bukhara: { lat: 39.7795, lng: 64.4203 }
  };
  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
    setUserLocation(cities[city]); // Tanlangan shaharga mos koordinatalarni olish
  };

  const handleButtonClick = () => {
    setIsModalActive(!isModalActive); // Modal holatini teskari qilib qo'yamiz
  };
  
  

  useEffect(() => {
    // Geolokatsiyani olish
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setUserLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    }

    fetch('http://209.38.30.188:8347/areas', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,  // Tokenni qo'shish
      },
    })
    .then((res) => res.json())  // Javobni JSON formatiga aylantirish
    .then((elem) => console.log(elem?.data))  // Ma'lumotni konsolga chiqarish
    .catch((error) => console.error('Fetch error: ', error)); // Xatolikni tutish

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleRadioChange = (e) => {
    setSelectedMethod(e.target.value);
  };

  return (
    <main>
      <div className="container">
        <h2 className="text-[24px] font-semibold mb-[15px]">
          Buyurtmani rasmiylashtirish
        </h2>
        <div className="flex gap-[20px] lg:flex-row flex-col">
          <div className="lg:w-[70%] w-[100%]">
            <div className="border border-green-400 rounded-[10px] px-[20px] py-[16px] mb-[15px]">
              <h3 className="sm:text-[20px] text-[16px] font-semibold mb-[15px]">
                Buyurta qabul qiluvchi
              </h3>
              <div className="flex gap-[10px] mb-[15px] lg:flex-row flex-col">
                <div className="flex flex-col gap-[5px]">
                  <label className="text-[14px]">
                    Familiya <span>*</span>
                  </label>
                  <input
                    type="text"
                    value={lastname}
                    className="p-[10px] border border-green-400 rounded-[10px] text-[14px] lg:w-[208px] w-full focus:outline-[0]"
                  />
                </div>
                <div className="flex flex-col gap-[5px]">
                  <label className="text-[14px]">
                    Isim <span>*</span>
                  </label>
                  <input
                    type="text"
                    value={name}
                    className="p-[10px] border border-green-400 rounded-[10px] text-[14px] lg:w-[208px] w-full focus:outline-[0]"
                  />
                </div>
              </div>
              <p className="max-w-[550px] text-[14px] text-gray-300 mb-[15px]">
                {`Siz koʻrsatgan telefon raqamiga buyurtma holati haqida bildirishnoma yuboramiz. Yetkazib berish vaqtini aniqlashtirish uchun kuryer siz bilan telefon orqali bogʻlanadi.`}
              </p>
              <div className="flex flex-col gap-[5px] mb-[15px]">
                <div className="flex flex-col gap-[5px]">
                  <label className="text-[14px]">
                    Relefon raqam <span>*</span>
                  </label>
                  <input
                    type="text"
                    value={number}
                    className="p-[10px] border border-green-400 rounded-[10px] text-[14px] lg:w-[208px] w-full flex gap-[3px]"
                  />
                </div>
              </div>
              <p className="max-w-[550px] text-[14px] text-red-500 mb-[15px]">
                {`Yetkazib berish Toshkent shahridan tashqaridagi viloyatlar uchun pochta xizmati BTS orqali amalga oshiriladi. Bu xizmat tezkor va ishonchli yetkazib berishni ta'minlaydi. Savollaringiz bo‘lsa yoki qo‘shimcha ma’lumot kerak bo‘lsa, biz bilan bog‘laning!`}
                <div className="flex gap-2 mt-1">
                  <a
                    href="https://www.facebook.com/fruteacorp/"
                    className="flex justify-center items-center text-black"
                  >
                    <FaTelegram />
                  </a>
                  <a
                    href="https://www.instagram.com/fruteacorp/"
                    className="flex justify-center items-center text-black"
                  >
                    <IoLogoInstagram />
                  </a>
                </div>
              </p>
              <div>
                <h3 className="sm:text-[20px] text-[16px] font-semibold mb-[5px]">
                  {`yetkazib berish`}
                </h3>
                <p className="mb-[15px] max-w-[400px]">{`Topshirish manzilini tanlang`}</p>
                <button type="button" onClick={handleButtonClick} className=" transition-all duration-300 bg-green-400 hover:bg-green-600 hover:text-[#fff] rounded-[10px] font-medium lg:w-[300px] w-full py-[8px] text-[14px] ">Tanlash</button>
              </div>
            </div>

            <div className="border border-green-400 rounded-[10px] px-[20px] py-[16px] mb-[15px]">
              <h3 className="cursor-pointer w-full flex justify-between items-center sm:text-[20px] text-[16px] font-semibold ">
                {`24 soat ichida yetkazamiz`}
              </h3>
            </div>

            <div className="border border-green-400 rounded-[10px] px-[20px] py-[16px] ">
              <h3 className="sm:text-[20px] text-[16px] font-semibold mb-[16px]">{`Tolov turi`}</h3>
              <div className="flex flex-col gap-[15px]">
                <label className="p-[12px] bg-green-400 rounded-[10px] flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="payme"
                    checked={selectedMethod === "payme"}
                    onChange={handleRadioChange}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="ml-[15px] text-[14px] flex items-center gap-[5px]">
                    <img className="w-12 h-8 object-contain" src={payme} alt="payme" /> orqali
                  </span>
                </label>
                <label className="p-[12px] bg-green-400 rounded-[10px] flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="click"
                    checked={selectedMethod === "click"}
                    onChange={handleRadioChange}
                    className="w-[20px] h-[20px]"
                  />
                  <span className="ml-[15px] text-[14px] flex items-center gap-[5px]">
                    <img className="w-12 h-8 object-contain" src={click} alt="click" /> orqali
                  </span>
                </label>
              </div>
            </div>
          </div>
          <div className="border border-green-400 rounded-[10px] px-[20px] py-[16px] w-[100%] lg:w-[320px] h-[max-content]">
            <div className="flex justify-between items-center mb-[15px]">
              <h4 className="text-[20px] font-medium">{`Buyurtmangiz`}</h4>
              <button onClick={() => navigate("/")} className="underline text-[14px] text-gray-600 hover:text-gray-800">
                {`savatga otish`}
              </button>
            </div>
            <div className="flex flex-col gap-[5px] text-[12px] mb-[15px]">
              <div className="flex justify-between">
                <div>
                  {`Mahsulotlar`} <span>{`(3):`}</span>
                </div>
                <div>
                  90000 som
                </div>
              </div>
              <div className="flex justify-between">
                <div>
                  Yetkazib berish
                </div>
                <div>
                  bepul
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalActive && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <div className="bg-white p-[20px] rounded-[10px] w-[80%] max-w-[600px]">
      <h3 className="text-[20px] font-semibold mb-[10px]">Manzilni tanlash</h3>
      <p className="text-[14px]">Iltimos, biror bir shaharga manzilni tanlang:</p>

      {/* City Selection Dropdown */}
      <select
        className="p-[10px] border border-green-400 rounded-[10px] text-[14px] lg:w-[208px] w-full mt-[10px]"
        value={selectedCity}
        onChange={handleCityChange}
      >
        <option value="tashkent">Toshkent</option>
        <option value="bukhara">Buxoro</option>
      </select>

      {/* Google Maps Iframe */}
      {userLocation && (
              <div className="mt-4">
                <iframe
                  width="100%" 
                  height="300" 
                  frameBorder="0"
                  style={{ border: 0, marginTop: "10px" }}
                  src={`https://www.google.com/maps/embed/v1/view?key=YOUR_GOOGLE_MAPS_API_KEY&center=${userLocation.lat},${userLocation.lng}&zoom=12`}
                  allowFullScreen
                ></iframe>
              </div>
            )}

      {/* Close Button */}
      <button
        type="button"
        onClick={handleButtonClick} // Modalni yopish
        className="mt-[10px] transition-all duration-300 bg-red-400 hover:bg-red-600 hover:text-[#fff] rounded-[10px] font-medium w-full py-[8px] text-[14px]"
      >
        Yopish
      </button>
    </div>
  </div>
)}

    </main>
  );
}

export default Check;
