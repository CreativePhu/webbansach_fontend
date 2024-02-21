import React from 'react'
import SachModel from '../models/SachModel';
import { getOneSach } from '../../api/SachAPI';
import { useParams } from 'react-router-dom';
import BookImages from './compoments/BookImages';
import BookReview from './compoments/BookReview';

const BookDetail: React.FC = () => {

    const [book, setBooks] = React.useState<SachModel | null>(null)
    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    const [error, setError] = React.useState<String | null>(null)

    let { maSach } = useParams();
    let bookId: number = 0;

    try {
        bookId = parseInt(maSach + "");
        if (Number.isNaN(bookId)) {
            bookId = 0
        }
    } catch (error) {
        bookId = 0;
        console.error("Error: " + error)
    }

    React.useEffect(() => {
        getOneSach(bookId).then(data => {
            setBooks(data.sach)
            setIsLoading(false)
        })
            .catch(data => {
                setIsLoading(false)
                setError(data.message)
            })
    }, [maSach])

    if (isLoading) {
        return <h1>Đang tải dữ liệu ....</h1>
    }

    if (error) {
        return <h1>Error: {error}</h1>
    }

    if (!book) {
        return <h1>Sách có mã là {bookId} không tồn tại</h1>
    }

    return (
        <div className="container">
            <div className="row mt-4 mb-4">
                <div className="col-4">
                    <BookImages bookId={bookId} />
                </div>
                <div className="col-8">
                    <div className="row">
                        <div className="col-8">
                            <h3>Đánh giá chi tiết về sách</h3>
                        </div>
                        <div className="col-4">
                            <h3>Phần đặt hàng</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-4 mb-4">
                <BookReview maSach={bookId} />
            </div>
        </div>
    )
}

export default BookDetail