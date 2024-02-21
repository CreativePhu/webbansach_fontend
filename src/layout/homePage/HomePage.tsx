import { useParams } from 'react-router-dom';
import ListBook from '../product/ListBook'
import Banner from './compoments/Banner'
import Carousel from './compoments/Carousel'


interface HomePageProps {
    searchKey: string;
}

const HomePage: React.FC<HomePageProps> = ({ searchKey }) => {

    const { maTheLoai } = useParams();
    let maTheLoaiNumber: number = 0

    // console.log(maTheLoai)
    try {
        maTheLoaiNumber = parseInt(maTheLoai + "")
    } catch (error) {
        maTheLoaiNumber = 0
        console.log("Error: " + error)
    }
    if (Number.isNaN(maTheLoaiNumber)) {
        maTheLoaiNumber = 0
    }


    return (
        <>
            <Banner />
            <Carousel />
            <ListBook searchKey={searchKey} maTheLoai={maTheLoaiNumber} />
        </>
    )
}

export default HomePage