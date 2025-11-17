import { memo, useEffect, useState } from "react";

function FavoriteButton() {
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

export default memo(FavoriteButton)
