import { useMemo } from "react"
import { useMatch, useParams } from "react-router-dom"
import { MOVIES } from "./movies.data"

export function MovieDetails() {
    const { id } = useParams()
    const movie = useMemo(() => {
        return MOVIES.find(movie => movie.trailerYouTubeId === id)
    }, [id])
    if (!movie) return <p className="text-center mt-10 text-gray-400">Movie not found!</p>
    return (
        <div className="min-h-screen px-6 py-10 bg-black text-white">
            <div className="flex flex-col md:flex-row gap-10 items-start">
                <img
                    src={movie.image}
                    alt="Movie Poster"
                    className="w-2/3 md:w-1/3 rounded-xl shadow-lg object-cover"
                />

                <div className="flex-1 space-y-4">
                    <h1 className="text-4xl font-bold">{movie.name}</h1>
                    <p className="text-sm text-gray-400">IMDb: {movie.rating}</p>
                    <p className="text-gray-300 text-sm">
                        Это краткое описание фильма. Здесь можно добавить жанр, продолжительность и тд
                    </p>
                </div>
            </div>
        </div>
    )
}
