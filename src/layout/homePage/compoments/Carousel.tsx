import hinh1 from '../../../images/books/benlekhoahoc.jpg'
import hinh2 from '../../../images/books/khoahocvethuupweb.jpg'
import hinh3 from '../../../images/books/mohinhhoiquy.jpg'

function Carousel() {
    return (
        <div className="container pt-5">
            <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                        <div className="row align-items-center">
                            <div className="col-5">
                                <img src={hinh1} className="float-end" style={{ width: "300px", height: "350px" }} />
                            </div>
                            <div className="col-7">
                                <h5>Bên lề khoa học</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="10000">
                        <div className="row align-items-center">
                            <div className="col-5">
                                <img src={hinh2} className="float-end" style={{ width: "300px", height: "350px" }} />
                            </div>
                            <div className="col-7">
                                <h5>Khoa học về thú thí nghiệm</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item " data-bs-interval="10000">
                        <div className="row align-items-center">
                            <div className="col-5">
                                <img src={hinh3} className="float-end" style={{ width: "300px", height: "350px" }} />
                            </div>
                            <div className="col-7">
                                <h5>Mô hình hồi quy</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
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