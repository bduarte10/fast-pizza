import { useSelector } from 'react-redux';
import { getFavorites } from './favSlice';
import MenuItem from '../menu/MenuItem';
import EmptyFavorites from './EmptyFavorites';

function Favorites() {
  const favorites = useSelector(getFavorites);

  if (!favorites.length) {
    return <EmptyFavorites />;
  }
  return (
    <ul className="mt-10 divide-y divide-stone-200 px-2">
      {favorites?.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}
export default Favorites;
