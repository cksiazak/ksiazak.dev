import React from "react"
import Link from "next/link"

import * as ga from "../../../lib/ga"

const NavLink = ({ href, title }) => {
  const handleNavLinkClick = () =>
    ga.event({
      action: "Clicked home button",
      params: { section: "Navigation" },
    })

  return (
    <Link href={href} onClick={handleNavLinkClick}>
      <a title={title}>{title}</a>
    </Link>
  )
}

export default NavLink
