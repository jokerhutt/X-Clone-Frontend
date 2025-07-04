import { useAuth } from '../../context/Auth/AuthProvider.tsx';
import type { ModalType } from '../../lib/types/ModalType.ts';
import { FaXTwitter } from 'react-icons/fa6';
import { GoogleAuthButton } from '../ui/GoogleAuthButton.tsx';
import { HorizontalStripedText } from '../ui/HorizontalStripedText.tsx';
import { API_URL } from '../../constants/env.ts';
import { UseTempAccountButton } from './UseTempAccountButton.tsx';


type LoginViewProps = {
    setToggle: (type: ModalType) => void;

}

function LoginView ({ setToggle }: LoginViewProps) {
  
    const { setAuthId } = useAuth();
  
    function adminLoginQuick(id: number) {
      fetch(`${API_URL}/api/users/getAdminUser?id=${id}`)
        .then(res => {
          if (!res.ok) throw new Error("Admin login failed");
          return res.json();
        })
        .then(user => {
          setAuthId(user.id);
          setToggle(null);
        })
        .catch(err => {
          console.error("Admin login error:", err);
        });
    }
    return (

      <div className="w-full h-full flex flex-col border text-twitterText rounded-4xl p-8 items-center gap-6 bg-(--background-main)">
        <FaXTwitter className="text-4xl" />

        <p className="text-xl font-bold text-center">Sign in to X</p>

        <GoogleAuthButton setToggle={setToggle}>
          Sign in with Google
        </GoogleAuthButton>  

        <HorizontalStripedText> OR </HorizontalStripedText>

        <UseTempAccountButton setToggle={setToggle}/>


        <p className="text-md w-full font text-twitterTextAlt">
          Don't have an account? <span className='text-(--color-main)'>Sign up</span>
        </p>

        <p className="text-md w-full font text-twitterTextAlt">
          Are you the admin? <span onClick={() => adminLoginQuick(13)} className='text-(--color-main)'>Sign in here</span>
        </p>

    </div>




    )

}

export default LoginView;