import React from 'react'

interface PhanTrangInterface {
    trangHienTai: number;
    tongSoTrang: number;
    phanTrang: any;
}

const PhanTrang: React.FC<PhanTrangInterface> = ({ trangHienTai, tongSoTrang, phanTrang }) => {

    const danhSachTrang = [];
    if (trangHienTai === 1) {
        danhSachTrang.push(trangHienTai);
        if (tongSoTrang >= trangHienTai + 1) {
            danhSachTrang.push(trangHienTai + 1)
        }
        if (tongSoTrang >= trangHienTai + 2) {
            danhSachTrang.push(trangHienTai + 2)
        }
    } else if (trangHienTai > 1) {
        if (trangHienTai >= 3) {
            danhSachTrang.push(trangHienTai - 2)
        }
        if (trangHienTai >= 2) {
            danhSachTrang.push(trangHienTai - 1)
        }
        danhSachTrang.push(trangHienTai)
        if (tongSoTrang >= trangHienTai + 1) {
            danhSachTrang.push(trangHienTai + 1)
        }
        if (tongSoTrang >= trangHienTai + 2) {
            danhSachTrang.push(trangHienTai + 2)
        }
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className="page-item" onClick={() => phanTrang(1)}>
                    <a className="page-link" href="#products" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                {
                    danhSachTrang.map(trang => {
                        return (
                            <li key={trang} className={`page-item ${trangHienTai === trang ? "active" : ""}`} onClick={() => phanTrang(trang)}>
                                <a className="page-link" href='#products'>{trang}</a>
                            </li>
                        )
                    })
                }
                <li className="page-item" onClick={() => phanTrang(tongSoTrang)}>
                    <a className="page-link" href="#products" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default PhanTrang