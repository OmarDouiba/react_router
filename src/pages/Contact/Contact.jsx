import React from 'react';
import { Outlet } from 'react-router-dom';

export function Contact() {
  return (
    <>
      <div>Contact</div>
      <Outlet />
    </>
  );
}
