import React from "react";

export const Avatar = ({ image, isNew }) => {
  return (
    <div className="avatar">
      <img className="photo" src={image} alt="avatar" />
      {isNew && <p className="badge">new</p>}
      {/* 헐 조건부렌더링이 여기서 */}
    </div>
  );
};
