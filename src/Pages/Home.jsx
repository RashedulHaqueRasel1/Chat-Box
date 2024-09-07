
import HomePage from './HomePage';
import Chat from './Chat';
import { useContext } from 'react';
import { AuthContext } from '../Auth/Provider/AuthProvider';
import Login from './Login';
import SendMessage from './SendMessage';





const Home = () => {

    const { user } = useContext(AuthContext)


    return (
        <div className="container mx-auto p-4 text-center mt-4 ">
            {user ?
                <>
                    <div className='border-dashed border-2 border-sky-500'>
                        <HomePage></HomePage>
                        <Chat></Chat>
                        <SendMessage></SendMessage>
                    </div>
                </>
                :
                <>
                    <Login></Login>
                </>
            }
 

        </div>




    );
};

export default Home;