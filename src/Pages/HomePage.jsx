import { useContext } from "react";
import { AuthContext } from "../Auth/Provider/AuthProvider";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";


const HomePage = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        Swal.fire({
            position: "top-center",
            icon: "success",
            title: "LogOut Success",
            showConfirmButton: false,
            timer: 1500
          });
    }

    // console.log(user)
    return (
        <div className="">


            <h1 className="text-3xl font-bold mt-10">Welcome to Chat Box</h1>
            <p className="mt-2">Start Group chatting now!</p>

            <div className="flex justify-around">
                <div className="flex justify-around">
                    <img src={user.photoURL} alt="" className="object-cover w-10 h-10 mt-3 mr-3 rounded-full" />
                    <p className="mt-5">{user?.displayName}</p>
                </div>

                <button className="btn bg-red-500 text-white hover:bg-rose-500" onClick={handleLogOut}>Log Out</button>
            </div>

        </div>
    );
};

export default HomePage;