import { useRef, useState } from "react";
// import { db, auth } from "./firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../Auth/Firebase/Firebase.config";
import img from '../assets/upload.jpg'

const SendMessage = () => {
    const [message, setMessage] = useState("");
    const [image, setImage] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();
        const { uid, displayName, photoURL } = auth.currentUser;

        // console.log(auth.currentUser)

        if (message.trim() !== "") {
            await addDoc(collection(db, "messages"), {
                text: message,
                name: displayName,
                uid,
                photo: photoURL,
                ph: image,
                createdAt: serverTimestamp(),
            });
            setMessage("");

        }
    };


    const inputRef = useRef(null)

    const handleImageClick = () => {
        inputRef.current.click()

    }

    const handleImage = (e) => {
        // e.preventDefault();
        const file = e.target.files[0];
        console.log(file)
        setImage(file)
    }

    console.log(image)

    return (
        <div className="  w-full  items-center flex justify-center">
            <form onSubmit={sendMessage}>

                <div className="flex relative rounded-md w-full px-4 max-w-xl mb-4 ">
                    <input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your message..."
                        className="w-full p-3 rounded-md border-2 border-r-white rounded-r-none border-gray-300 placeholder-gray-500 dark:placeholder-gray-300 dark:bg-gray-500dark:text-gray-300 dark:border-none "
                    />

                    <button
                        className="inline-flex items-center gap-2 bg-blue-500 btn text-white text-lg font-semibold   px-6 rounded-r-md "
                        type="submit"
                    >
                        <span>Send</span>
                    </button>

                </div>


                <div onClick={handleImageClick}>
                    <img src={img} alt="" className="h-10 w-10 object-cover" />
                    <input type="file" ref={inputRef} onChange={handleImage} style={{ display: "none" }} />
                </div>

            </form>

            {
                image ? <><img src={URL.createObjectURL(image)} alt="" /></> : <></>
            }




        </div>
    );
};

export default SendMessage;
