import React from "react";
import SachModel from "../layout/models/SachModel";
import { my_request } from "./Request";

export async function getAllSach(): Promise<SachModel[]> {

    // Xác định endpoint
    const duongDan: string = 'http://localhost:8080/sach';

    // Gọi phương thức request
    return getSach(duongDan);
}

export async function getTop3Sach(): Promise<SachModel[]> {

    // Xác định endpoint
    const duongDan: string = 'http://localhost:8080/sach?sort=maSach,desc&page=0&size=3';

    // Gọi phương thức request
    return getSach(duongDan);
}

async function getSach(path:string) : Promise<SachModel[]> {
    const ketQua: SachModel[] = [];
    const response = await my_request(path);

    // Lấy ra json sach
    const responseData = response._embedded.saches;
    console.log(responseData);

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

    return ketQua;
}