import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';
import { Heart } from 'lucide-react';
import { useState } from 'react';
import {
  addToFavorites,
  getFavorites,
  removeFromFavorites,
} from '../favorites/favSlice';
import { useEffect } from 'react';

function MenuItem({ pizza }) {
  const [fav, setFav] = useState(false);
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  const dispatch = useDispatch();
  const favorites = useSelector(getFavorites);

  useEffect(() => {
    const isFav = favorites.find((pizza) => pizza.id === id);
    setFav(isFav);
  }, [favorites, id]);

  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: id,
      name: name,
      quantity: 1,
      unitPrice: unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  const handleFav = () => {
    if (fav) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(pizza));
    }
  };

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <div className="grid grid-cols-3 ">
          <div className="col-span-2">
            <p className="font-medium">{name}</p>
            <p className="text-sm capitalize italic text-stone-500">
              {ingredients.join(', ')}
            </p>
          </div>
          <div className="flex items-start justify-end">
            <Button type="base" onClick={handleFav}>
              <Heart
                className="h-5 w-5 cursor-pointer select-none"
                fill={fav ? '#f44336' : 'none'}
              />
            </Button>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
          {!soldOut &&
            (isInCart ? (
              <div className="flex items-center gap-3">
                <UpdateItemQuantity
                  pizzaId={id}
                  currentQuantity={currentQuantity}
                />
                <DeleteItem pizzaId={id} />
              </div>
            ) : (
              <Button type="small" onClick={handleAddToCart}>
                Add to cart
              </Button>
            ))}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
