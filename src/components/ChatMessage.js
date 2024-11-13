import { USER_ICON } from "../utils/constants";

const ChatMessage = ({data}) => {
    const {name, message} = data;
    return (
        <div className="flex items-center shadow-md p-2">
            <img width="30px" height="30px" alt="logo" src={USER_ICON} />
            <span className="font-bold px-2">{name}</span>
            <span>{message}</span>
        </div>
    );
};

export default ChatMessage;