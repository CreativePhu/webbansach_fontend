import React from 'react'
import SachModel from '../../models/SachModel';
import HinHAnhModel from '../../models/HinHAnhModel';
import { getNhieuAnh } from '../../../api/AnhAPI';

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
                <img
                    src={duLieuAnh}
                    className="card-img-top"
                    alt={book.tenSach}
                    style={{ height: '200px' }}
                />
                <div className="card-body">
                    <h5 className="card-title">{book.tenSach}</h5>
                    <p className="card-text">{book.moTa}</p>
                    <div className="price">
                        <span className="original-price">
                            <del>{book.giaNiemYet}</del>
                        </span>
                        <span className="discounted-price">
                            <strong>{book.giaBan}</strong>
                        </span>
                    </div>
                    <div className="row mt-2" role="group">
                        <div className="col-6">
                            <a href="#" className="btn btn-secondary btn-block">
                                <i className="fas fa-heart"></i>
                            </a>
                        </div>
                        <div className="col-6">
                            <button className="btn btn-danger btn-block">
                                <i className="fas fa-shopping-cart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookProps