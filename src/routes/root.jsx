import React from "react";
import { Link, Outlet } from "react-router-dom";
function Root(props){
    return(
        <>
        <header className="shadow-lg h-20">
          <div className="container flex flex-row justify-between items-center h-full mx-auto">
          <h1>Cineplex</h1>
            <nav>
                <ul className="flex flex-row gap-6">
                    <li>
                     <Link to={'/'}>Home</Link>
                    </li>
                    <li>
                     <Link to={'/about'}>About</Link>
                    </li>
                    <li>
                     <Link to={'/movies'}>Movies</Link>
                    </li>
                    <li>
                     <Link to={'/contact'}>Contact</Link>
                    </li>
                </ul>
            </nav>
          </div>
        </header>
        <Outlet />
        <footer>

        </footer>
        </>
    )
}export default Root