import LinkButton from '../../ui/LinkButton';

function EmptyFavorites() {
  return (
    <div className="px-3 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="mt-7 font-semibold">
        Your favorites list is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyFavorites;
