'use client'
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { Tooltip } from "react-tooltip";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
    const path = usePathname();
    return (
        <>
            <Tooltip id="login" place="bottom" />
            <Tooltip id="signup" place="bottom" />
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">NoteStack</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${path === '/' ? 'active' : ''}`} aria-current="page" href={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${path === '/about' ? 'active' : ''}`} href={'/about'}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={'/contact'} style={{ color: path !== '/contact' ? '#BDBDBE' : 'white' }} className={`nav-link`}>Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={'/login'} style={{ color: path !== '/login' ? '#BDBDBE' : 'white' }} className={`nav-link`} data-tooltip-content="Login to Your Account." data-tooltip-id='login'>Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={'/signup'} style={{ color: path !== '/signup' ? '#BDBDBE' : 'white' }} className={`nav-link`} data-tooltip-content="Create a New Account" data-tooltip-id='signup'>Signup</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}