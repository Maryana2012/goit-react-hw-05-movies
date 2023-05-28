import { Link, Outlet } from "react-router-dom";

export default function FilmDetailsCard(props) {

    const { img, name, title, year, genres, overview, id} = props
       
    return (
        <>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h2>{name}</h2>
            <h3>{year}</h3>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            {genres.map(genre => { return <p key={genre.name}>{genre.name}</p> })}
            
            <ul>
                <li>
                    <Link to='cast'>Cast</Link>
                </li>
                <li>
                    <Link to='reviews'>Reviews</Link> 
                </li>
            </ul>
            <Outlet />

        </>
    )
}