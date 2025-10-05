import React, { use } from 'react';
import { FaStarHalf } from "react-icons/fa";

const Book = ({ singleBook }) => {

    const {bookName, author, image, rating, category, yearOfPublishing, tags, review} = singleBook

    // way 2 to fetch data   
    // const Book = ({bookPromise}) => {
    //     const data = use(bookPromise);
    //     console.log(data);

    return (
        <div className="card bg-base-100 w-96 shadow-md border p-4">
            <figure className='p-4 bg-gray-100'>
                <img
                    className='h-[166px]'
                    src= {image}
                    alt= {bookName} />
            </figure>
            <div className="card-body">
                <div className='flex justify-between items-center'>
                    {
                        tags.map(tag => <button className='btn'>{tag}</button>)
                    }
                </div>
                <h2 className="card-title flex justify-between">
                    {bookName}
                    <div className="badge badge-secondary">{yearOfPublishing}</div>
                </h2>
                <p><b>Author: {author}</b></p>
                <p className='w-full whitespace-nowrap overflow-hidden text-ellipsis'>{review}</p>
                <div className='border-t-1 border-dashed text-gray-400'></div>
                <div className="card-actions justify-between">
                    <div className="badge badge-outline">{category}</div>
                    <div className="badge badge-outline">{rating} <FaStarHalf /></div>
                </div>
            </div>
        </div>
    );
};

export default Book;