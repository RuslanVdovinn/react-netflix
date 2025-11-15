import { useEffect, useState } from "react";

export function FavoriteButton() {
    const [isFavorite, setIsFavorite] = useState(false);
    useEffect(() => {
    console.log('Favorite status changed:', isFavorite);
  }, [isFavorite]);
    return (
        <button onClick={() => setIsFavorite(!isFavorite)}>
            {isFavorite ? "★" : "☆"}
        </button>
    )
}
