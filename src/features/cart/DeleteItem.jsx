import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';

export function DeleteItem({pizzaId}) {
  const dispatch = useDispatch();

  return (
    <Button type="small" onClick={() => dispatch(DeleteItem(pizzaId))}>
      Delete
    </Button>
  );
}
