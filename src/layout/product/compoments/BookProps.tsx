import React from 'react'
import SachModel from '../../models/SachModel';
import HinHAnhModel from '../../models/HinHAnhModel';
import { getNhieuAnh } from '../../../api/AnhAPI';
import { Link } from 'react-router-dom';
import renderRating from '../../untils/RenderRating';
import { Cart, Heart } from 'react-bootstrap-icons';
import FormartPriceVN from '../../untils/FormartPriceVN';

interface BookProps {
    book: SachModel;
}

const BookProps: React.FC<BookProps> = ({ book }) => {
    const maSach: number = book.maSach;

    const [danhSachAnh, setDanhSachAnh] = React.useState<HinHAnhModel[]>([]);
    const [dangTaiDuLieu, setDangTaiDuLieu] = React.useState(true);
    const [baoLoi, setBaoLoi] = React.useState(null);

    React.useEffect(() => {
        getNhieuAnh(maSach).then(
            hinhAnhData => {
                setDanhSachAnh(hinhAnhData);
                setDangTaiDuLieu(false);
            }
        ).catch(
            error => {
                setDangTaiDuLieu(false);
                setBaoLoi(error.message);
            }
        );
    }, [] // Chi goi mot lan
    )

    if (dangTaiDuLieu) {
        return (
            <div>
                <h1>Đang tải dữ liệu</h1>
            </div>
        );
    }

    if (baoLoi) {
        return (
            <div>
                <h1>Gặp lỗi: {baoLoi}</h1>
            </div>
        );
    }

    let duLieuAnh: string = "";
    if (danhSachAnh[0] && danhSachAnh[0].duLieuAnh) {
        duLieuAnh = danhSachAnh[0].duLieuAnh;
    }
    return (
        <div className="col-md-3 mt-2">
            <div className="card">
                <Link to={`sach/${maSach}`}>
                    <img
                        src={duLieuAnh}
                        className="card-img-top"
                        alt={book.tenSach}
                        style={{ width: '100%', height: "auto", maxHeight: "380px" }}
                    />
                </Link>
                <div className="card-body">
                    <Link to={`sach/${maSach}`} style={{ textDecoration: "none" }}>
                        <h5 className="card-title text-start">{book.tenSach}</h5>
                    </Link>
                    <p className="card-text text-start">{renderRating(book.trungBinhXepHang ? book.trungBinhXepHang : 0)}</p>
                    <div className="price text-start">
                        <span className="original-price">
                            <del>{FormartPriceVN(book.giaNiemYet)}</del>
                        </span>
                        <span className="discounted-price text-danger">
                            <strong>{FormartPriceVN(book.giaBan) + "đ"}</strong>
                        </span>
                    </div>
                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            <a href="#" className="btn btn-secondary btn-block">
                                <Heart />
                            </a>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger btn-block">
                                <Cart />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookProps