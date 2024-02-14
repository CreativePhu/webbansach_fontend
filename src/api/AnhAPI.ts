import HinHAnhModel from "../layout/models/HinHAnhModel";
import { my_request } from "./Request";

export async function layAnh(path: string): Promise<HinHAnhModel[]> {
    const ketQua: HinHAnhModel[] = [];

    // Gọi phương thức request
    const response = await my_request(path);

    // Lấy ra json sach
    const responseData = response._embedded.hinhAnhs;
    // console.log(responseData);

    for (const key in responseData) {
        ketQua.push({
            maHinhAnh: responseData[key].maHinhAnh,
            tenHinhAnh: responseData[key].tenHinhAnh,
            laIcon: responseData[key].laIcon,
            duongDan: responseData[key].duongDan,
            duLieuAnh: responseData[key].duLieuAnh,
        });
    }

    return ketQua;
}

export async function getMotAnh(maSach: number): Promise<HinHAnhModel[]> {
    // Xác định endpoint
    const duongDan: string = `http://localhost:8080/sach/${maSach}/danhSachHinhAnh?sort=maHinhAnh,asc&page=0&size=1`;
 
    return layAnh(duongDan);
}

export async function getNhieuAnh(maSach: number): Promise<HinHAnhModel[]> {
    // Xác định endpoint
    const duongDan: string = `http://localhost:8080/sach/${maSach}/danhSachHinhAnh`;
 
    return layAnh(duongDan);
}