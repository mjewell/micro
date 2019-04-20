import React from 'react';
import { Button } from 'reactstrap';

export default function LogOut({ onLogOut }) {
  return (
    <Button
      onClick={e => {
        e.preventDefault();
        localStorage.removeItem('loggedIn');
        onLogOut();
      }}
    >
      Log Out faster
    </Button>
  );
}
