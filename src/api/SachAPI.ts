import React from "react";
import SachModel from "../layout/models/SachModel";
import { my_request } from "./Request";

interface dataInterface {
    danhSachSach: SachModel[];
    tongSoTrang: number;
    soSachTrenMotTrang: number;
}

export async function getAllSach(trangHienTai: number): Promise<dataInterface> {

    // Xác định endpoint
    const duongDan: string = `http://localhost:8080/sach?sort=maSach,desc&page=${trangHienTai}&size=4`;

    // Gọi phương thức request
    return getSach(duongDan);
}

export async function getTop3Sach(): Promise<dataInterface> {

    // Xác định endpoint
    const duongDan: string = 'http://localhost:8080/sach?sort=maSach,desc&page=0&size=3';

    // Gọi phương thức request
    return getSach(duongDan);
}

async function getSach(path:string) : Promise<dataInterface> {
    const ketQua: SachModel[] = [];
    const response = await my_request(path);

    // Lấy ra json sach
    const responseData = response._embedded.saches;
    console.log(response)

    const tongSoTrang: number = response.page.totalPages;
    const tongSoSach: number = response.page.totalElements;    ;

    for (const key in responseData) {
        ketQua.push({
            maSach: responseData[key].maSach,
            tenSach: responseData[key].tenSach,
            giaBan: responseData[key].giaBan,
            giaNiemYet: responseData[key].giaNiemYet,
            moTa:responseData[key].moTa,
            soLuong:responseData[key].soLuong,
            tenTacGia:responseData[key].tenTacGia,
            trungBinhXepHang:responseData[key].trungBinhXepHang
        });
    }

    return {danhSachSach: ketQua, tongSoTrang: tongSoTrang, soSachTrenMotTrang: tongSoSach};
}