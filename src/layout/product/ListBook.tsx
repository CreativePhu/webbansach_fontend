import React, { useState } from 'react'
import SachModel from '../models/SachModel'
import BookProps from './compoments/BookProps'
import { getAllSach } from '../../api/SachAPI'
import PhanTrang from '../untils/PhanTrang'

const ListBook: React.FC = () => {
    const [books, setBooks] = useState<SachModel[]>([])
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [trangHienTai, setTrangHienTai] = useState<number>(1);
    const [tongSoTrang, setTongSoTrang] = useState<number>(0)
    const [tongSoSach, setTongSoSach] = useState<number>(0)

    const phanTrang = (soTrang: number) => {
        setTrangHienTai(soTrang);
    }

    React.useEffect(() => {
        getAllSach(trangHienTai - 1).then(
            sachData => {
                setBooks(sachData.danhSachSach);
                setTongSoTrang(sachData.tongSoTrang)
                setTongSoSach(sachData.soSachTrenMotTrang)
                setIsLoading(false);
            }
        ).catch(
            error => {
                setIsLoading(false);
                setError(error.message);
            }
        );
    }, [trangHienTai] // Chi goi mot lan
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
            <div className="row mt-5 mb-3">
                {
                    books.map((book) => {
                        return (
                            <BookProps key={book.maSach} book={book} />
                        )
                    })
                }
            </div>
            <PhanTrang trangHienTai={trangHienTai} tongSoTrang={tongSoTrang} phanTrang={phanTrang} />
        </div>
    )
}

export default ListBook