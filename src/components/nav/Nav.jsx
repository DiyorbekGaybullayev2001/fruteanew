// import { useStore } from "zustand";
import useStore from '../../store/teaStore'

function Nav() {
	const { setLanguage, setUser } = useStore(); 
	const user = useStore(state => state.user); 
	const languages = [
	 { code: 'uz', flag: '🇺🇿' },
	 { code: 'ru', flag: '🇷🇺' },
	 { code: 'en', flag: '🇬🇧' },
	];
   
	const flags = i => {
	 setLanguage(i);
	};
   
	const a = async e => {
	 e.preventDefault();
	 try {
	  const url = 'http://209.38.30.188:8347/auth/getme';
   
	  const response = await fetch(url, {
	   method: 'GET',
	   headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
	   },
	  });
	  const result = await response.json();
	  console.log(result);
   
	  if (result?.data) {
	   setUser(result.data);
	  }
	 } catch (error) {
	  console.error('Error:', error);
	 }
	};
	// console.log(user);
	
   
	return (
	 <div>
	  <div className='hidden lg:flex bg-green-200 w-full justify-center text-[14px] font-medium text-custom-gray-800'>
	   <div className='border-r border-[#fff] pr-[10px] py-[10px]'>
		<a
		 href='/products'
		 className='hover:underline cursor-pointer font-semibold'
		>
		 hozir sotib olish
		</a>
	   </div>
	   <a href='/faq' className='py-[10px] px-[10px] border-r border-[#fff]'>
		savol-javob
	   </a>
	   <button onClick={a}>sotvolish</button>
	   <div className='flex gap-[10px] py-[10px] pl-[10px]'>
		{languages.map(lang => (
		 <span
		  key={lang.code}
		  className='w-7 h-6 flex justify-center cursor-pointer'
		  onClick={() => flags(lang.code)}
		 >
		  {lang.flag}
		 </span>
		))}
	   </div>
	  </div>
	 </div>
	);
   }
   
   export default Nav;
   




// import useStore from '../../store/teaStore'

// function Nav() {
// 	const { setLanguage } = useStore()
// 	const languages = [
// 		{ code: 'uz', flag: '🇺🇿' },
// 		{ code: 'ru', flag: '🇷🇺' },
// 		{ code: 'en', flag: '🇬🇧' },
// 	]
// 	const flags = i => {
// 		setLanguage(i)
// 	}
// 	// console.log(languagee);

// 	return (
// 		<div>
// 			<div className='hidden lg:flex bg-green-200 w-full justify-center text-[14px] font-medium text-custom-gray-800'>
// 				<div className='border-r border-[#fff] pr-[10px] py-[10px]'>
// 					<a
// 						href='/products'
// 						className='hover:underline cursor-pointer font-semibold'
// 					>
// 						hozir sotib olish
// 					</a>
// 				</div>
// 				<a href='/faq' className='py-[10px] px-[10px] border-r border-[#fff]'>
// 					savol-javob
// 				</a>
// 				<div className='flex gap-[10px] py-[10px] pl-[10px]'>
// 					{languages.map(lang => (
// 						<span
// 							key={lang.code}
// 							className='w-7 h-6 flex justify-center cursor-pointer'
// 							onClick={() => flags(lang.code)}
// 						>
// 							{lang.flag}
// 						</span>
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	)
// }

// export default Nav
