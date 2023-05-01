import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="nav">
                <Link to='/' className="nav-link">Home</Link>
                <Link to='/characters' className="nav-link">Characters</Link>
                <Link to='/initiative' className="nav-link">Initiative</Link>
                <a className="nav-link disabled">Spells (WIP)</a>
            </nav>

            <Outlet/>
        </>
    )
}

export default Layout