import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, title }) => (
  <Link href={href}>
    <a title={title}>{title}</a>
  </Link>
);

export default NavLink;
