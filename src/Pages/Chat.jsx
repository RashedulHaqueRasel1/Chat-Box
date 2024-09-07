import { useState, useEffect } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../Auth/Firebase/Firebase.config";

const Chat = () => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const q = query(collection(db, "messages"), orderBy("createdAt"));
        const unsubscribe = onSnapshot(q, (snapshot) => {
            let messagesArray = [];
            snapshot.forEach((doc) => {
                messagesArray.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messagesArray);
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="">
            <div className="bg-blue-300  text-black w-80  lg:w-[900px] ml-2 lg:ml-72 md:ml-0 m-10  p-2 rounded-lg overflow-y-auto h-60">

                {messages.map((message) => (
                    <div key={message.id} className="text-left">
                        <p><strong>{message.name}</strong> : {message.text}</p>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default Chat;
