import { Link } from "react-router-dom"

export const Header = () => {
  return (
    <header className="App-header">
      <Link to="/">
        Fast React Pizza
      </Link>
    </header>
  )
}