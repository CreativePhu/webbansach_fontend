import ListBook from '../product/ListBook'
import Banner from './compoments/Banner'
import Carousel from './compoments/Carousel'


interface HomePageProps {
    searchKey: string;
}

const HomePage: React.FC<HomePageProps> = ({ searchKey }) => {
    return (
        <>
            <Banner />
            <Carousel />
            <ListBook searchKey={searchKey} />
        </>
    )
}

export default HomePage