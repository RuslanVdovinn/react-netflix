import { useState } from "react";
import { FavoriteButton } from "./FavoriteButton";
import { Modal } from "./components/ui/Modal";

export function MovieCard({ image, rating, trailerYouTubeId }) {
    const [isOpenTrailer, setIsOpenTrailer] = useState(false)

    return (
        <button className="relative w-[200px] rounded-2xl overflow-hidden
    bg-neutral-900 shadow-lg hover:scale-105 transition-transform
    will-change-transform duration-300" onClick={() => setIsOpenTrailer(true)}>

            {isOpenTrailer && (
                <Modal 
                    onClose={() => {
                        setIsOpenTrailer(false)
                    }}
                >
                <iframe 
                    width="373" 
                    height="210" 
                    src={`https://www.youtube.com/embed/${trailerYouTubeId}?amp;
                    controls=0`}
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen
                />
            </Modal>
            )}

            <img
                src={image}
                alt="Movie poster"
                className="w-full h-auto object-cover"
            />
            <div className="absolute top-2 right-2 z-10">
                <FavoriteButton />
            </div>
            <div className="absolute bottom-0 left-0 w-full
        bg-linear-to-t from-black/80 to-transparent p-2 text-sm
        text-white font-semibold">
                IMDb: {rating}
            </div>
        </button>
    )
}

