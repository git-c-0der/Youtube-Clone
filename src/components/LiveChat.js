import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../redux/chatSlice";
import { generateRandomMsg, generateRandomName } from "../utils/helper";

const LiveChat = () => {

    const [liveMsg, setLiveMsg] = useState()

    const dispatch = useDispatch();
    const chatMessages = useSelector((store)=>store.chat.messages);

    useEffect(()=>{
        const i = setInterval(()=>{
            console.log("API Polling");
            dispatch(addMessage({
                name: generateRandomName(),
                message: generateRandomMsg(20) + " 🚀"
            }))

        }, 1000);

        return () => clearInterval(i);
    }, [])

    return (
        <>
            <div>
                <div className="p-2 ml-1 font-bold text-2xl w-full bg-white">
                    <h1>LiveChat</h1>
                </div>
                <div className="border ml-2 border-black bg-slate-200-300 p-2 w-full h-[400px] overflow-y-scroll flex flex-col-reverse">
                    {
                        chatMessages.map((msg, idx)=><ChatMessage key={idx} data={msg} />)
                    }
                    
                </div>
            </div>
            <form className="w-full border-black border m-2 p-2" 
                    onSubmit={(e)=>{
                        e.preventDefault();
                        dispatch(addMessage({
                            name: "Abhishek Maurya",
                            message: liveMsg
                        }))
                        setLiveMsg("");
                    }}>
                <input className="border border-slate-400 rounded-md p-1 mx-1 w-3/4" type="text" 
                    placeholder={"Say Something . . . "} value={liveMsg} onChange={(e)=>setLiveMsg(e.target.value)}/>
                <button className="rounded-md mx-2 px-3 py-1 w-20 bg-green-500 ">Send</button>
            </form>
        </>
    )
}

export default LiveChat;