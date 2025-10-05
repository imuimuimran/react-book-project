import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    // const [books, setBooks] = useState([]);
    // Fetch Data using useEffect method
    // useEffect(() => {
    //     fetch('booksData.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             setBooks(data);
    //         })
    // }, []);



    // way 2 to fetch data
    // const bookPromise = fetch('/booksData.json')
    //     .then(res => res.json())


    return (
        <div className='my-10'>
            <h1 className='text-3xl text-center font-bold py-6'>Books</h1>
            <Suspense fallback={<span className="loading loading-bars loading-xl"></span>}>

                {/* way 2 to fetch data */}
                {/* <Book bookPromise= {bookPromise}></Book> */}

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {
                        data.map(
                            (singleBook) =>
                                <Book
                                    key={singleBook.bookId}
                                    singleBook={singleBook}>
                                </Book>
                        )
                    }
                </div>

                {/* <Book data = {data}></Book> */}
            </Suspense>
        </div>
    );
};

export default Books;