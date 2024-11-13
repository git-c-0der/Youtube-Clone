import {USER_ICON} from "../utils/constants";

const Comment = ({comment}) => {
    
    if(comment["name"]===undefined) return null;

    // console.log(comment);
    return (
        <div className="flex shadow-md border-gray-200 p-2 rounded-lg">
            <img width="60px" height="20px" alt="logo" src={USER_ICON} />
            <div className="px-1">
                <h1 className="font-bold">{comment["name"]}</h1>
                <h1>{comment["text"]}</h1>
            </div>
        </div>
    );
};

export default Comment;