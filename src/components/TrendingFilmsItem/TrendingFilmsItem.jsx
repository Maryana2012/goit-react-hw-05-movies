import { Link } from "react-router-dom"

export default function TrendingFilmsItem(props) {

    const { name, nameSecond, id } = props;
    return (
        <>
            <li>
                <Link to={`${id}`}>{name}{nameSecond}</Link>
            </li>
        </>
    )
}