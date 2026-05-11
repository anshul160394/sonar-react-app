import React from "react";

const UserCard = ({ user }) => {
  if (!user) return <div data-testid="no-user">No user found.</div>;
  return (
    <div data-testid="user-card">
      <h2 data-testid="user-name">{user.name}</h2>
      <p data-testid="user-email">{user.email}</p>
      <span data-testid="user-role" className={`role role-${user.role}`}>
        {user.role}
      </span>
    </div>
  );
};

export default UserCard;
