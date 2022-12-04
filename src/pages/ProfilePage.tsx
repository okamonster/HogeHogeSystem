import { BottomBar } from "../parts/BottomBar";
import { ProfileHeader } from "../parts/ProfileHeader";
import { ProfileView } from "../views/ProfileView";

export const ProfilePage = () => {

    return(
        <>
            <ProfileHeader/>
            <ProfileView/>
            <BottomBar/>
        </>
    );
}



