import React from 'react'
import SachModel from '../../models/SachModel'
import hinh1 from '../../../images/books/benlekhoahoc.jpg'
import hinh2 from '../../../images/books/khoahocvethuupweb.jpg'
import hinh3 from '../../../images/books/mohinhhoiquy.jpg'
import { getTop3Sach } from '../../../api/SachAPI'
import CarouselItem from './CarouselItem'

const Carousel: React.FC = () => {
    const [books, setBooks] = React.useState<SachModel[]>([])
    const [isLoading, setIsLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        getTop3Sach().then(
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
        <div className="container pt-5">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <CarouselItem book={books[0]} />
                    </div>
                    <div className="carousel-item " data-bs-interval="10000">
                        <CarouselItem book={books[1]} />
                    </div>
                    <div className="carousel-item " data-bs-interval="10000">
                        <CarouselItem book={books[2]} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Carousel