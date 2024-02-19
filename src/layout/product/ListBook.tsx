import React, { useState } from 'react'
import SachModel from '../models/SachModel'
import BookProps from './compoments/BookProps'
import { getAllSach, searchSach } from '../../api/SachAPI'
import PhanTrang from '../untils/PhanTrang'

interface ListBookProps {
    searchKey: string;
    maTheLoai: number
}

const ListBook: React.FC<ListBookProps> = ({ searchKey, maTheLoai }) => {
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
        if (searchKey !== "" || maTheLoai > 0) {
            searchSach(searchKey, maTheLoai).then(
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
        } else {
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
        }
    }, [trangHienTai, searchKey, maTheLoai] // Chi goi mot lan
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
    if (books.length === 0) {
        return (
            <div id='products' className="container">
                <div className="row mt-5 mb-3">
                    <h1>Không tìm thấy sách bạn cần !</h1>
                </div>
            </div>
        )
    } else {
        return (
            <div id='products' className="container">
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


}

export default ListBook