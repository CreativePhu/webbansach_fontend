import React, { useState } from 'react'
import SachModel from '../models/SachModel'
import BookProps from './compoments/BookProps'
import { getAllSach } from '../../api/SachAPI'

const ListBook: React.FC = () => {
    const [books, setBooks] = useState<SachModel[]>([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    React.useEffect(() => {
        getAllSach().then(
            sachData => {
                setBooks(sachData);
                setIsLoading(false);
            }
        ).catch(
            error => {
                setIsLoading(false);
                setError(error.message);
            }
        );
    }, [] // Chi goi mot lan
    )

    if (isLoading) {
        return (
            <div>
                <h1>Đang tải dữ liệu</h1>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <h1>Gặp lỗi: {error}</h1>
            </div>
        );
    }

    return (
        <div className="container">
            <div className="row pt-5">
                {
                    books.map((book) => {
                        return (
                            <BookProps key={book.maSach} book={book} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ListBook