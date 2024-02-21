import React from 'react'
import DanhGiaModel from '../../models/DanhGiaModel';
import { getNhieuSuDanhGia } from '../../../api/DanhGiaAPI';

interface BookReviewProps {
    maSach: number
}

const BookReview: React.FC<BookReviewProps> = ({ maSach }) => {

    const [listReview, setListReview] = React.useState<DanhGiaModel[]>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    const [error, setError] = React.useState<String | null>(null)

    React.useEffect(() => {
        getNhieuSuDanhGia(maSach).then(data => {
            setIsLoading(false);
            setListReview(data);
        }).catch(error => {
            setIsLoading(false)
            setError(error)
        })
    }, [maSach])

    if (isLoading) {
        return <h1>Đang tải dữ liệu</h1>
    }

    if (error) {
        return <h1>Error: {error}</h1>
    }

    return (
        <div className="container">
            <div className="row">
                <h3>Đánh giá sản phẩm</h3>
            </div>
            {
                listReview.map(danhgia => {
                    return (
                        <div key={danhgia.maDanhGia} className="row">
                            <div className="col-6">{danhgia.hang}</div>
                            <div className="col-6">{danhgia.nhanXet}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BookReview