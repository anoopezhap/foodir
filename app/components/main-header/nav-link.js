"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import classes from "./nav-link.module.css";

export default function NavLink() {
  const path = usePathname();

  return (
    <>
      <li>
        <Link
          href="/meals"
          className={path.startsWith("/meals") ? classes.active : ""}
        >
          Browse Meals
        </Link>
      </li>
      <li>
        <Link
          href="/community"
          className={path.startsWith("/community") ? classes.active : ""}
        >
          Foodies Community
        </Link>
      </li>
    </>
  );
}
