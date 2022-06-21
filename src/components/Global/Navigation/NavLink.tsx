import { FC } from "react"
import Link from "next/link"

import * as ga from "../../../lib/ga"

type NavLinkProps = {
  href: string,
  title: string
}

const NavLink: FC<NavLinkProps> = ({ href, title }) => {
  const handleNavLinkClick = () =>
    ga.event({
      action: "Clicked home button",
      params: { section: "Navigation" },
    })

  return (
    <Link href={href}>
      <a title={title} onClick={handleNavLinkClick}>{title}</a>
    </Link>
  )
}

export default NavLink
