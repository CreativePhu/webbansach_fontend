import DanhGiaModel from "../layout/models/DanhGiaModel";
import { my_request } from "./Request";

export async function layDanhGia(path: string): Promise<DanhGiaModel[]> {
    const ketQua: DanhGiaModel[] = [];

    // Gọi phương thức request
    const response = await my_request(path);

    // console.log(response)

    // Lấy ra json sach
    const responseData = response._embedded.suDanhGias;
    // console.log(responseData);

    for (const key in responseData) {
        ketQua.push({
            maDanhGia: responseData[key].maDanhGia,
            hang: responseData[key].hang,
            nhanXet: responseData[key].nhanXet,
        });
    }

    return ketQua;
}


export async function getNhieuSuDanhGia(maSach: number): Promise<DanhGiaModel[]> {
    // Xác định endpoint
    const duongDan: string = `http://localhost:8080/sach/${maSach}/danhSachSuDanhGia`;

    return layDanhGia(duongDan);
}