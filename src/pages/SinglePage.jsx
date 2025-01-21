import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Nav from '../components/nav/Nav';
import NavTop from '../components/nav/NavTop';
import Footer from '../components/Footer';
import { FaStar } from 'react-icons/fa';
import { GrAdd } from 'react-icons/gr';
import { LuMinus } from 'react-icons/lu';

const SingleProduct = () => {
  const { id } = useParams();
  const location = useLocation();
  const [product, setProduct] = useState(location.state || null);
  const [language, setLanguage] = useState('uz');
  const [quantity, setQuantity] = useState(1); 
  const [activeTab, setActiveTab] = useState(0); // Active tab state

  useEffect(() => {
    if (!product) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`https://api.fruteacorp.uz/products/${id}`);
          const data = await response.json();
          setProduct(data?.data);
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
      fetchProduct();
    }
  }, [id, product]);

  if (!product) {
    return <p>Loading...</p>;
  }

  const getLocalizedTitle = (item) => {
    if (language === 'uz') return item.title_uz;
    if (language === 'ru') return item.title_ru;
    return item.title_en;
  };

  const imageUrl = product.images?.[0]?.image?.name
    ? `https://api.fruteacorp.uz/images/${product.images[0].image.name}`
    : 'https://via.placeholder.com/150';

  // Functions for quantity control
  const handleIncrease = () => {
    if (quantity < product.inStock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Nav />
      <NavTop />
      <div className='container mx-auto'>
        <h3 className='mb-[20px] pt-[40px] text-sm text-[#69707E]'>
          <b className='text-black font-normal'>
            <Link to={'/'}>Bosh sahifa</Link>
          </b>{' '}
          / Turkumlar / <Link to={'/products/choy'}>Choy</Link> / {getLocalizedTitle(product)}
        </h3>
        <div className='flex xl:gap-[70px] lg:gap-[50px] gap-[30px] mb-[25px] md:flex-row flex-col border-b pb-[30px] border-green-200'>
          <div className='flex xl:min-w-[550px] xl:h-[558px] lg:min-w-[470px] lg:h-[475px] md:min-w-[350px] md:h-[360px] max-w-full sm:max-h-[500px] ss:max-h-[400px] max-h-[300px]'>
            <div className='flex flex-col gap-5'>
              <img
                className='object-contain xl:w-[84px] xl:h-[112px] w-[60px] h-[80px] select-none cursor-pointer'
                src={imageUrl}
                alt={product.name || 'Product'}
              />
            </div>
            <div>
              <img
                className='object-contain w-full h-full xl:w-[500px] xl:h-[500px] select-none'
                src={imageUrl}
                alt={product.name || 'Product'}
              />
            </div>
          </div>
          <div className='w-full'>
            <div className='border-b border-green-200 pb-[20px] mb-[30px]'>
              <h3 className='flex items-center gap-[10px]'>
                <FaStar className='text-yellow-400' />
                5 (0 Sharhlar) 0 ta buyurtma
              </h3>
              <h1 className='text-[22px] font-normal leading-[28px] mt-[10px]'>
                {getLocalizedTitle(product)}
              </h1>
              <div className='flex justify-between max-w-[300px] mt-[15px]'>
                <span className='text-[14px]'>Sotuvchi</span>
                <span className='text-[14px] underline'>Fruteacorp</span>
              </div>
            </div>
            <div className='mb-[25px]'>
              <h3 className='text-[14px] mb-[10px]'>Miqdor:</h3>
              <div className='flex gap-[10px] items-center'>
                <div className='p-[7px] flex items-center gap-[20px] border border-green-200 rounded-[4px]'>
                  <LuMinus className='cursor-pointer' onClick={handleDecrease} />
                  <span className='text-[18px]'>{quantity}</span>
                  <GrAdd className='cursor-pointer' onClick={handleIncrease} />
                </div>
                <span className='text-[#00ad3a] text-[14px]'>
                  Sotuvda {product.inStock} dona bor
                </span>
              </div>
            </div>
            <div className='mb-[25px]'>
              <h3 className='text-[14px] mb-[5px]'>Narx:</h3>
              <h3 className='text-[20px] font-medium'>{product.amount * quantity} so'm</h3>
            </div>
            <div className='flex gap-[10px] mb-[25px]'>
              <button className='w-full bg-green-600 rounded-[10px] text-white py-[15px] font-medium disabled:opacity-[0.5] disabled:cursor-wait'>
                Savatga qo'shish
              </button>
            </div>
          </div>
        </div>

        <div className='border-b w-full pb-[25px] border-green-200 mb-6'>
            <div className='max-w-[860px] mx-auto flex gap-[50px] text-[14px]'>
                <div 
                  className='relative cursor-pointer' 
                  onClick={() => setActiveTab(0)}
                >
                  <h4 className={`font-medium ${activeTab === 0 ? 'text-green-600' : 'text-black'}`}>Mahsulot tavsifi</h4>
                  {activeTab === 0 && <span className='absolute w-full h-[1px] bg-green-600 -bottom-[25px] left-0'></span>}
                </div>
                <div 
                  className='relative cursor-pointer' 
                  onClick={() => setActiveTab(1)}
                >
                  <h4 className={`font-medium ${activeTab === 1 ? 'text-green-600' : 'text-black'}`}>Fikr-mulohazalar</h4>
                  {activeTab === 1 && <span className='absolute w-full h-[1px] bg-green-600 -bottom-[25px] left-0'></span>}
                </div>
            </div>

        </div>

        <div className='max-w-[860px] mx-auto'>
                {activeTab === 0 && (
                  <div>
                    <p className='text-[14px]'>{product.extraInfoUz || 'No description available'}</p>
                  </div>
                )}
                {activeTab === 1 && (
                  <div className='flex items-center justify-center'>
                    <p className='text-[16px] font-medium'>Sharhlar mavjud emas</p> 
                  </div>
                )}
        </div>

      </div>
      <Footer />
    </>
  );
};

export default SingleProduct; 