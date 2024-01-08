import { Link } from "react-router-dom"

const Nav = ({selected, setSelected}) => {
  
  const setPage = (e) => {
    e.target.innerText === 'Add property' ? setSelected('Add') : setSelected('Home')
  }


  return (
    <nav>
        <Link className={selected==="Home" ? 'selected' : ''} onClick={setPage} to='/'>Home page</Link>
        <Link className={selected==='Add' ? 'selected' : ''} onClick={setPage} to='/add'>Add property </Link>
      </nav>
  )
}

export default Nav