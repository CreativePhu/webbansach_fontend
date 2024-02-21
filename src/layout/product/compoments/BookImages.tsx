import React from 'react'
import { getNhieuAnh } from '../../../api/AnhAPI';
import HinHAnhModel from '../../models/HinHAnhModel';

interface BookImagesProps {
    bookId: number;
}

const BookImages: React.FC<BookImagesProps> = ({ bookId }) => {

    const [ListBook, setListBook] = React.useState<HinHAnhModel[]>([]);
    const [imageAt, setImageAt] = React.useState<any>(null)
    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    const [error, setError] = React.useState<String | null>(null)

    React.useEffect(() => {
        getNhieuAnh(bookId).then(data => {
            setIsLoading(false);
            setListBook(data);
        }).catch(error => {
            setIsLoading(false)
            setError(error)
        })
    }, [bookId])

    React.useEffect(() => {
        if (ListBook.length > 0) {
            setImageAt(ListBook[0].duLieuAnh)
        }
    }, [ListBook])

    if (isLoading) {
        return <h1>Đang tải dữ liệu</h1>
    }

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <div className="row">
            <div>
                {
                    imageAt && <img style={{ width: "100%", height: "500px" }} src={imageAt} />
                }
            </div>
            <div className='mt-2 d-flex flex-row'>
                {
                    ListBook.map((book, index) => {
                        return (
                            <div key={index} className="col-3" style={{ boxSizing: "border-box" }}>
                                <img style={{ width: "100%", height: "110px", padding: "5px" }} src={book.duLieuAnh} onClick={() => setImageAt(book.duLieuAnh)} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default BookImages