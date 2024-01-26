
function Banner(){
    return (
        <div className="container p-5 bg-secondary text-white">
            <div className='row d-flex justify-content-center align-items-center flex-column'>
                <div className="col-5 py-4">
                    <h1 className='fw-bold text-start'>Đọc sách chính là hộ chiếu<br/>cho vô số cuộc phiêu lưu</h1>
                </div>
                <div className="col-5">
                    <p className='text-start'>Mary Pope Osborne</p>
                </div>
                <div className="col-5 d-flex justify-content-end">
                    <button type="button" className="btn btn-primary">Chi tiết tại sachviet.com</button>
                </div>
            </div>
        </div>
    )
}

export default Banner