import { Link } from "react-router-dom"
import { SearchOrder } from "../features/order/SearchOrder"

export const Header = () => {
  return (
    <header className="App-header">
      <Link to="/">
        Fast React Pizza
      </Link>
      <SearchOrder />
    </header>
  )
}