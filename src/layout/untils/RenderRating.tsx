import { Star, StarFill } from "react-bootstrap-icons";

const renderRating = (diem: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= diem) {
            stars.push(<StarFill key={i} className="text-warning" style={{ marginRight: "5px" }} />);
        } else {
            stars.push(<Star key={i} className="text-secondary" style={{ marginRight: "5px" }} />);
        }
    }
    return stars;
}

export default renderRating;