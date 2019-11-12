import React from 'react';
import ProfileVideo from '../components/ProfileVideo';
import PlayerBanner from '../components/PlayerBanner';
import ProfileNav from '../components/ProfileNav';
import GameStats from '../components/GameStats';

const ProfilePage = () => {
    return (
        <>
            <ProfileVideo />
            <ProfileNav />
            <PlayerBanner />
            <GameStats />    
        </>
    )
}

export default ProfilePage;