import React from 'react'
import { getNhieuAnh } from '../../../api/AnhAPI';
import HinHAnhModel from '../../models/HinHAnhModel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

interface BookImagesProps {
    bookId: number;
}

const BookImages: React.FC<BookImagesProps> = ({ bookId }) => {

    const [ListBook, setListBook] = React.useState<HinHAnhModel[]>([]);
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

    if (isLoading) {
        return <h1>Đang tải dữ liệu</h1>
    }

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <div className="row">
            <div className='col-12'>
                <Carousel showArrows={true} showIndicators={true} >
                    {
                        ListBook.map((hinhAnh) => (
                            <div key={hinhAnh.maHinhAnh}>
                                <img src={hinhAnh.duLieuAnh} alt={`${hinhAnh.tenHinhAnh}`} style={{ maxWidth: "250px" }} />
                            </div>
                        ))
                    }
                </Carousel>
            </div>
        </div>
    )
}

export default BookImages