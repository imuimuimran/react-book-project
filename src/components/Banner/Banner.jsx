import React from 'react';
import bannerImage from '../../assets/banner_img.png'

const Banner = () => {
    return (
        <div className='bg-[#f3f3f3] rounded-2xl my-10'>
            <div className='flex justify-between items-center py-10 w-10/12 mx-auto'>
                <div>
                    <h1 className='text-4xl font-bold w-10/12'>Books to freshen up your bookshelf</h1>
                    <button className='btn bg-[#23be0a] text-white mt-5'>View The List</button>
                </div>
                <div>
                    <img className='' src={bannerImage} alt='' ></img>
                </div>
            </div>
        </div>
    );
};

export default Banner;