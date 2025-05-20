
import { NavLink } from "react-router";

/**
 * @returns This page is responsible for Each page navigation.
 */
const NavBar = () => {
    return (
        <>
            <header className="fixed top-0 left-0 w-full bg-white shadow-md border-b border-gray-200 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo / Brand */}
                        <div className="text-3xl font-extrabold text-blue-600 tracking-tight">
                            Domain Decoder
                        </div>

                        {/* Nav Links */}
                        <nav className="flex space-x-10">
                            <NavLink
                                to="/dns-lookup"
                                end
                                className="text-lg text-gray-700 font-semibold hover:text-blue-600 relative
                            after:content-[''] after:absolute after:bottom-0 after:left-1/2
                            after:h-0.5 after:w-full after:bg-blue-600
                            after:transform after:-translate-x-1/2 after:scale-x-0
                            after:origin-center after:transition-transform after:duration-300
                            hover:after:scale-x-100"
                            >
                                DNS Lookup
                            </NavLink>

                            <NavLink
                                to="/ssl-viewer"
                                end
                                className="text-lg text-gray-700 font-semibold hover:text-blue-600 relative
                            after:content-[''] after:absolute after:bottom-0 after:left-1/2
                            after:h-0.5 after:w-full after:bg-blue-600
                            after:transform after:-translate-x-1/2 after:scale-x-0
                            after:origin-center after:transition-transform after:duration-300
                            hover:after:scale-x-100"
                            >
                                SSL Cert Viewer
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar;