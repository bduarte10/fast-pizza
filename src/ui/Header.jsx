import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/Username';
import { LucideHeart } from 'lucide-react';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <div className="flex gap-3">
        <Link to="/fav">
          <LucideHeart size={20} />
        </Link>
        <Username />
      </div>
    </header>
  );
}

export default Header;
