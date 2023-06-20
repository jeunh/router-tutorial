import React from "react";
import { useParams } from "react-router-dom";

const profileData = {
  gildong: {
    name: '홍길동',
    description: '홍길동입니다.'
  },
  gildong2: {
    name: '홍길동2',
    description: '홍길동2입니다.'
  }
}

const Profile = () => {
  const {username} = useParams();
  const profile = profileData[username];
  if(!profile) {
    return <div>존재하지 않는 유저입니다.</div>;
  }
  return (
    <div>
      <h3>{username}({profile.name})</h3>
      <p>{profile.description}</p>
    </div>
  )
}

export default Profile;