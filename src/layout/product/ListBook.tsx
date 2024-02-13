import React, { useState } from 'react'
import Book from '../models/Book'
import hinh1 from '../../images/books/benlekhoahoc.jpg'
import BookProps from './compoments/BookProps'

const ListBook: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: hinh1,
        },
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: hinh1,
        },
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: hinh1,
        },
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: hinh1,
        },
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: hinh1,
        },
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: hinh1,
        },
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: hinh1,
        },
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: hinh1,
        },
        {
            id: 1,
            title: 'Book 1',
            description: 'Description for Book 1',
            originalPrice: 50000,
            price: 45000,
            imageUrl: hinh1,
        }
    ])
    return (
        <div className="container">
            <div className="row pt-5">
                {
                    books.map((book) => {
                        return (
                            <BookProps book={book} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListBook