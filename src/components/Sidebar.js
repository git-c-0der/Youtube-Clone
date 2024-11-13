import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);

    // Early return pattern
    if(!isMenuOpen) return null;

    return (
        <div className="w-48 shadow-lg p-5">
            <ul className="p-2">
                <li><Link to="/">Home</Link></li>
                <li>Videos</li>
                <li>Shorts</li>
                <li>Live</li>
            </ul>
            <h1 className="pt-5 font-bold">Subscriptions</h1>
            <ul className="p-2">
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>

            <h1 className="pt-5 font-bold">Watch Later</h1>
            <ul className="p-2">
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    );
};

export default Sidebar;