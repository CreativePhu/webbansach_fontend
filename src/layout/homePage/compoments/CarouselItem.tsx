import React from 'react'
import SachModel from '../../models/SachModel';
import HinHAnhModel from '../../models/HinHAnhModel';
import { getMotAnh } from '../../../api/AnhAPI';

interface CarouselItemInterface {
    book: SachModel;
}

const CarouselItem: React.FC<CarouselItemInterface> = ({ book }) => {

    const maSach: number = book.maSach;

    const [danhSachAnh, setDanhSachAnh] = React.useState<HinHAnhModel[]>([]);
    const [dangTaiDuLieu, setDangTaiDuLieu] = React.useState(true);
    const [baoLoi, setBaoLoi] = React.useState(null);

    React.useEffect(() => {
        getMotAnh(maSach).then(
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
        <div className="row align-items-center">
            <div className="col-5 text-center">
                <img src={duLieuAnh} className="float-end" style={{ width: "350px", height: "auto", maxHeight: "437px" }} />
            </div>
            <div className="col-7">
                <h5>{book.tenSach}</h5>
                <p>{book.moTa}</p>
            </div>
        </div>
    );
}
export default CarouselItem;