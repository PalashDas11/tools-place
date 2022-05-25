import React from 'react';
import './Myprofile.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import avatar from "../../img/user.png"

const MyProfile = () => {
    const [user] = useAuthState(auth)
  
    return (
        <div className="">
            <div className="profile-img">
               {
                   user?.reloadUserInfo?.photoUrl ? <>
                   <img src={user?.reloadUserInfo?.photoUrl} alt="" />
                   </>:
                   <>
                   <img src={avatar} alt="" srcset="" />
                   </>
               } 
            </div>
            <div className="md:w-1/2 mx-auto pt-10">
                <h2 className="text-xl font-semibold pb-5">Name-:  {user?.reloadUserInfo.displayName}</h2>
                <h2 className="text-xl font-semibold pb-5">email-:   {user?.reloadUserInfo.email}</h2>
            </div>
        </div>
    );
};

export default MyProfile;