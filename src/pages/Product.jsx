import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useParams } from 'react-router-dom';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency,addToCart } = useContext(ShopContext);
  const [productsData, setProductsData] = useState(null);
  const [images, setImages] = useState('');
  const [size, setSize] = useState('');

  useEffect(() => {
    if (products.length) {
      const product = products.find((item) => item._id === productId);
      if (product) {
        setProductsData(product);
        setImages(product.image[0]);
      }
    }
  }, [productId, products]);

  return productsData && (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productsData.image.map((item, index) => (
              <img
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                onClick={() => setImages(item)}
                src={item}
                alt={`Thumbnail ${index}`}
                key={index}
              />
            ))}
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={images} alt={productsData.name} className='w-full h-auto' />
          </div>
        </div>

        {/* Product Info */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productsData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            {[...Array(4)].map((_, i) => (
              <img key={i} src={assets.star_icon} alt="star" className='w-3 5' />
            ))}
            <img src={assets.star_dull_icon} alt="star dull" className='w-3 5' />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{productsData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productsData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productsData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${item === size ? "border-orange-500" : ""}`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productsData._id,size)}
           className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return & exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* description & review section */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-4 py-6 text-sm text-gray-500'>
          <p>An ecommerce website is an online platform taht facilitates the buying and selling of products or services
            over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products,
            interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites
            have gained immense popularity due to theirconvenience, accessibility, and the global reach they offer
          </p>
          <p>E commerce websites typically display products or services along with detailed descriptions, images,
            prices, and ony avoilable variations (e.g., sizes, colors). Each product usually has its ownmdedicated
            page with relevant information
          </p>
        </div>
      </div>

      {/* display related products */}

      <RelatedProducts category={productsData.category} subCategory={productsData.subCategory}/>

    </div>
  );
};

export default Product;
