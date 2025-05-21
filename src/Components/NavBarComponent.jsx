import { NavLink } from "react-router";

/**
 * @returns This component is responsible for Each page navigation.
 */
const NavBarComponent = () => {
    return (
        <header className="fixed top-0 left-0 w-full bg-white shadow-md border-b border-gray-200 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo / Brand */}
                    <div className="text-3xl font-extrabold text-teal-600 tracking-tight">
                        <NavLink to="/" end>
                            Domain Decoder
                        </NavLink>
                    </div>

                    {/* Nav Links */}
                    <nav className="flex space-x-10">
                        <NavLink
                            to="/dns-lookup"
                            end
                            className={({ isActive }) =>
                                `text-lg font-semibold relative
                                 after:content-[''] after:absolute after:bottom-0 after:left-1/2
                                 after:h-0.5 after:w-full after:bg-teal-400
                                 after:transform after:-translate-x-1/2 after:origin-center after:transition-transform after:duration-300
                                 ${
                                   isActive
                                     ? "text-teal-400 after:scale-x-100"
                                     : "text-teal-700 after:scale-x-0 hover:text-teal-500 hover:after:scale-x-100"
                                 }`
                            }
                        >
                            DNS Lookup
                        </NavLink>

                        <NavLink
                            to="/ssl-viewer"
                            end
                            className={({ isActive }) =>
                                `text-lg font-semibold relative
                                 after:content-[''] after:absolute after:bottom-0 after:left-1/2
                                 after:h-0.5 after:w-full after:bg-teal-400
                                 after:transform after:-translate-x-1/2 after:origin-center after:transition-transform after:duration-300
                                 ${
                                   isActive
                                     ? "text-teal-400 after:scale-x-100"
                                     : "text-teal-700 after:scale-x-0 hover:text-teal-500 hover:after:scale-x-100"
                                 }`
                            }
                        >
                            SSL Cert Viewer
                        </NavLink>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default NavBarComponent;
