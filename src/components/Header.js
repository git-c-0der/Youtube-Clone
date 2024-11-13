import { useDispatch, useSelector } from "react-redux";
import {toggleMenu} from "../redux/appSlice";
import { useEffect, useState } from "react";
import { HAMBURGER_ICON, USER_ICON, YOUTUBE_ICON, YOUTUBE_SEARCH_API } from "../utils/constants";
import {cacheResults} from "../redux/searchSlice";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    };

    const cache = useSelector((store)=>store.search)

    useEffect(() => {
        const timer = setTimeout(() =>{
            if(cache[searchQuery]===undefined) getSuggestions();
            else setSuggestions(cache[searchQuery]);
        }, 200);

        return () => {
            clearTimeout(timer);
        }
    }, [searchQuery]);

    const getSuggestions = async () => {
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuery)
        const json = await data.json()
        dispatch(cacheResults({[searchQuery]:json[1]}));
        setSuggestions(json[1])
        // console.log(json[1])        
    }

    return (
        <div className="grid grid-flow-col m-2 p-2 shadow-lg">
            <div className="flex col-span-1">
                <img onClick={toggleMenuHandler} className="h-10 cursor-pointer" alt="options" src={HAMBURGER_ICON} />
                <a href="/">
                    <img className="w-14 mx-2 h-10" alt="logo" src={YOUTUBE_ICON} />
                </a>
            </div>
            <div className="col-span-10 px-36">
                <div>
                    <input className="w-1/2 rounded-l-full border border-gray-500 p-2 px-4" 
                            value={searchQuery} 
                            onChange={(e)=>setSearchQuery(e.target.value)} 
                            onFocus={() => setShowSuggestions(true)} 
                            onBlur={()=>setShowSuggestions(false)}
                            type="text" />
                    <button className="p-2 bg-gray-500 border border-gray-500 rounded-r-full">Search</button>

                </div>
                {showSuggestions && suggestions.length>0 && <div className="shadow-lg rounded-lg absolute p-2 my-2 border border-gray-300 bg-white">
                    <ul className="rounded-xl">
                        {
                            suggestions.map(s=><li key={s} className="px-1 mx-2 py-2 hover:bg-gray-300 w-[27rem]">🔍 {s}</li>)
                        }
                    </ul>
                </div>}                
            </div>
            

            <div className="col-span-1 flex justify-end">
                <img className="w-10 h-10" alt="user-icon" src={USER_ICON} />
            </div>
        </div>
    );
};

export default Header;