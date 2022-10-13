import {useCallback, useMemo} from "react";
import {useLocalStorage} from "react-use";

const FavouriteButton = ({ id }) => {
  const [favouritesString, setFavouritesString] = useLocalStorage('favourites','[]');

  const isFavourite = useMemo(() => JSON.parse(favouritesString).includes(id), [favouritesString, id]);
  const toggleFavourite = useCallback(() => {
    const array = JSON.parse(favouritesString);
    setFavouritesString(JSON.stringify(array.includes(id) ? array.filter(a => a !== id) : [...array, id]));
  }, [favouritesString, id])

  return (
    <div onClick={toggleFavourite} className="favourite">
      {isFavourite ? '❤' : '🤍'}
    </div>
  )
}

export default FavouriteButton;