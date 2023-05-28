import TrendingFilmsItem from "components/TrendingFilmsItem/TrendingFilmsItem";

export default function TrendingFilmsList(props) {
    const { results } = props;
    return (
        <>
            <ul>
                {results.map(film => <TrendingFilmsItem key={film.id}
                    name={film.title}
                    nameSecond={film.name}
                    id={ film.id} />)}
            </ul>
        </>
    )
}