import { BiCategoryAlt } from 'react-icons/bi';
import { FaRegUser } from 'react-icons/fa';
import { IoIosSearch } from 'react-icons/io';
import logo from '../../assets/img/logo.png';
import { BsBagPlus } from 'react-icons/bs';
import { GiSelfLove } from 'react-icons/gi';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavTop() {
  const navigate = useNavigate();
  const [category, setCategory] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch(`https://api.fruteacorp.uz/categories`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => setCategory(data?.data));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetch(`https://api.fruteacorp.uz/products?search=${searchTerm}`, {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((data) => {
        const results = data?.data || [];
        if (results.length > 0) {
          setSearchResults(results);
          setErrorMessage('');
        } else {
          setSearchResults([]);
          setErrorMessage('Bunday mahsulot yo‘q');
        }
      })
      .catch(() => setErrorMessage('Qidiruvda xato yuz berdi. Iltimos, qayta urinib ko‘ring.'));
  };

  return (
    <div>
      <div className='container'>
        <div className='hidden lg:flex h-[40px] mt-[20px]'>
          <div className='flex items-center gap-[25px] mr-[7px]'>
            <a className='w-[250px] h-[40px] cursor-pointer' href='/'>
              <img className='h-[40px]' src={logo} alt='logo' />
            </a>
            <div className='relative h-full '>
              <select
                className='flex items-center transition-all duration-200 bg-green-200 hover:bg-green-400 px-[16px] h-full font-medium gap-2 text-[14px] rounded-[4px] text-black'
                onChange={(e) => {
                  const selectedCategoryId = e.target.value;
                  if (selectedCategoryId) {
                    navigate(`/products/${selectedCategoryId}`);
                  }
                }}
              >
                <option value=''>Katalog</option>
                {category?.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title_uz}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className='w-full ml-[2px] relative'>
            <form
              className='w-full h-full flex justify-between border-solid border-green-200 border-[1px] border-[rgba(54, 55, 64, .2)] rounded-[4px]'
              onSubmit={handleSearch}
            >
              <input
                type='text'
                className='pl-[16px] text-[14px] w-full focus:outline-none bg-transparent placeholder:text-custom-green-600'
                placeholder='Search...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button className='bg-[#daf9da] px-[32px] hover:bg-green-200' type='submit'>
                <IoIosSearch />
              </button>
            </form>
            {errorMessage && (
              <div className='absolute z-50 bg-red-100 text-red-600 w-full mt-2 p-2 rounded shadow'>
                {errorMessage}
              </div>
            )}
            {searchResults.length > 0 && (
              <div className='absolute z-50 bg-white shadow-lg w-full mt-2 rounded'>
                <ul>
                  {searchResults.map((result) => (
                    <li
                      key={result.id}
                      className='bg-slate-100 p-2 hover:bg-green-200 cursor-pointer'
                      onClick={() => navigate(`/product/${result.id}`)}
                    >
                      {result.title_uz}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className='flex gap-[8px] items-center ml-[20px]'>
            <a
              href='/cabinet'
              className='font-medium text-[14px] transition-all duration-200 hover:bg-green-200 rounded-[4px] px-[8px]'
            >
              <button className='flex items-center gap-[10px] py-[10px]'>
                <FaRegUser /> <span className='hidden xl:block'>Kabinet</span>
              </button>
            </a>
            <a
              href='/wishes'
              className='font-medium text-[14px] transition-all duration-200 hover:bg-green-200 rounded-[4px] px-[8px]'
            >
              <button className='flex items-center gap-[10px] py-[10px]'>
                <GiSelfLove />
                <span className='hidden xl:block'>Saralangan</span>
              </button>
            </a>
            <a
              href='/cart'
              className='font-medium text-[14px] transition-all duration-200 hover:bg-green-200 rounded-[4px] px-[8px]'
            >
              <button className='flex items-center gap-[10px] py-[10px]'>
                <BsBagPlus /> <span className='hidden xl:block'>Savat</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavTop;













// import { BiCategoryAlt } from 'react-icons/bi'
// import { FaRegUser } from 'react-icons/fa'
// import { IoIosSearch } from 'react-icons/io'
// import logo from '../../assets/img/logo.png'
// import { BsBagPlus } from 'react-icons/bs'
// import { GiSelfLove } from 'react-icons/gi'
// import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// function NavTop() {
	
// 	// Kamron
// 	const navigate = useNavigate()
// 	const [category, setCategory]=useState([])
// 	useEffect(() => {
// 		fetch(`https://api.fruteacorp.uz/categories`, {
// 		  method: "get",
// 		  headers: { "Content-Type": "application/json" },
// 		}).then((res) => res.json())
// 		  .then((data) => setCategory(data?.data))
// 	  }, [])



// 	return (
// 		<div>
// 			<div className='container'>
// 				<div className='hidden lg:flex h-[40px] mt-[20px]'>
// 					<div className='flex items-center gap-[25px] mr-[7px]'>
// 						<a className='w-[250px] h-[40px] cursor-pointer' href='/'>
// 							<img className='h-[40px]' src={logo} alt='logo' />
// 						</a>
// 						<div className='relative h-full '>
						

// 							<select
//                   className="flex items-center transition-all duration-200 bg-green-200 hover:bg-green-400 px-[16px] h-full font-medium gap-2 text-[14px] rounded-[4px] text-black"
//                   onChange={(e) => {
//                     const selectedCategoryId = e.target.value;
//                     if (selectedCategoryId) {
//                       navigate(`/products/${selectedCategoryId}`); // id bo'yicha mahsulotlar sahifasiga yo'naltirish
//                     }
//                   }}
//                 >
//                   <option value="">Katalog</option>
//                   {category?.map((item) => (
//                     <option key={item.id} value={item.id}> {/* id ni value sifatida berish */}
//                       {item.title_uz}
//                     </option>
//                   ))}
//                 </select>

// 						</div>
// 					</div>

// 					<div className='w-full ml-[2px] relative'>
// 						<form className='w-full h-full flex justify-between border-solid border-green-200 border-[1px] border-[rgba(54, 55, 64, .2)] rounded-[4px] '>
// 							<input
// 								type='text'
// 								className='pl-[16px] text-[14px] w-full focus:outline-none bg-transparent placeholder:text-custom-green-600'
// 								name=''
// 								id=''
// 								placeholder='Search'
// 							/>
// 							<button className='bg-[#daf9da] px-[32px] hover:bg-green-200'>
// 								<IoIosSearch />
// 							</button>
// 						</form>
// 					</div>

// 					<div className='flex gap-[8px] items-center ml-[20px]'>
// 						<a
// 							href='/cabinet'
// 							className=' font-medium  text-[14px] transition-all duration-200 hover:bg-green-200 rounded-[4px] px-[8px]'
// 						>
// 							<button className='flex items-center gap-[10px] py-[10px]'>
// 								<FaRegUser /> <span className='hidden xl:block'>Kabinet</span>
// 							</button>
// 						</a>
// 						<a
// 							href='/wishes'
// 							className='font-medium  text-[14px] transition-all duration-200 hover:bg-green-200 rounded-[4px] px-[8px]'
// 						>
// 							<button className='flex items-center  gap-[10px] py-[10px]'>
// 								<GiSelfLove />
// 								<span className='hidden xl:block'>saralangan </span>
// 							</button>
// 						</a>
// 						<a
// 							href='/cart'
// 							className=' font-medium  text-[14px] transition-all duration-200 hover:bg-green-200 rounded-[4px] px-[8px]'
// 						>
// 							<button className='flex items-center gap-[10px] py-[10px]'>
// 								<BsBagPlus /> <span className='hidden xl:block'>savat </span>
// 							</button>
// 						</a>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default NavTop









