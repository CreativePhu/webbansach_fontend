import React from "react";
import SachModel from "../layout/models/SachModel";
import { my_request } from "./Request";

interface dataInterface {
    danhSachSach: SachModel[];
    tongSoTrang: number;
    soSachTrenMotTrang: number;
}

interface dataInterface1 {
    sach: SachModel | null;
}

export async function getAllSach(trangHienTai: number): Promise<dataInterface> {

    // Xác định endpoint
    const duongDan: string = `http://localhost:8080/sach?sort=maSach,desc&page=${trangHienTai}&size=8`;

    // Gọi phương thức request
    return getSach(duongDan);
}

export async function getTop3Sach(): Promise<dataInterface> {

    // Xác định endpoint
    const duongDan: string = 'http://localhost:8080/sach?sort=maSach,desc&page=0&size=3';

    // Gọi phương thức request
    return getSach(duongDan);
}

export async function searchSach(tenSach: string, maTheLoai: number): Promise<dataInterface> {

    // Xác định endpoint
    const duongDan1: string = `http://localhost:8080/sach/search/findByTenSachContainingIgnoreCase?tenSach=${tenSach}&sort=maSach,desc&page=0&size=8`;
    const duongDan2: string = `http://localhost:8080/sach/search/findByDanhSachTheLoai_MaTheLoai?maTheLoai=${maTheLoai}&sort=maSach,desc&page=0&size=8`;
    const duongDan3: string = `http://localhost:8080/sach/search/findByTenSachContainingAndDanhSachTheLoai_MaTheLoai?tenSach=${tenSach}&maTheLoai=${maTheLoai}&sort=maSach,desc&page=0&size=8`;

    if (tenSach !== "" && maTheLoai === 0) {
        // Gọi phương thức request
        return getSach(duongDan1);
    } else if (tenSach === "" && maTheLoai > 0) {
        // Gọi phương thức request
        return getSach(duongDan2);
    } else {
        // Gọi phương thức request
        return getSach(duongDan3);
    }

}

export async function getOneSach(maSach: number): Promise<dataInterface1> {

    const path = `http://localhost:8080/sach/${maSach}`

    let ketQua: SachModel | null = null;

    const responseData = await my_request(path);

    // console.log(responseData)

    for (const key in responseData) {
        ketQua = {
            maSach: responseData.maSach,
            tenSach: responseData.tenSach,
            giaBan: responseData.giaBan,
            giaNiemYet: responseData.giaNiemYet,
            moTa: responseData.moTa,
            soLuong: responseData.soLuong,
            tenTacGia: responseData.tenTacGia,
            trungBinhXepHang: responseData.trungBinhXepHang
        }
    }

    return { sach: ketQua }
}

async function getSach(path: string): Promise<dataInterface> {
    const ketQua: SachModel[] = [];
    const response = await my_request(path);

    // Lấy ra json sach
    const responseData = response._embedded.saches;
    // console.log(response)

    const tongSoTrang: number = response.page.totalPages;
    const tongSoSach: number = response.page.totalElements;;

    for (const key in responseData) {
        ketQua.push({
            maSach: responseData[key].maSach,
            tenSach: responseData[key].tenSach,
            giaBan: responseData[key].giaBan,
            giaNiemYet: responseData[key].giaNiemYet,
            moTa: responseData[key].moTa,
            soLuong: responseData[key].soLuong,
            tenTacGia: responseData[key].tenTacGia,
            trungBinhXepHang: responseData[key].trungBinhXepHang
        });
    }

    return { danhSachSach: ketQua, tongSoTrang: tongSoTrang, soSachTrenMotTrang: tongSoSach };
}