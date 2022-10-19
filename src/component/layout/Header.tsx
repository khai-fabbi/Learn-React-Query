import * as React from 'react'
import { Link, NavLink } from 'react-router-dom'
import clsx from 'clsx'
export interface HeaderProps {}
const LINK_LIST = [
  {
    to: '/home',
    title: 'Home',
  },
  {
    to: '/post',
    title: 'Post',
  },
]
export default function Header(props: HeaderProps) {
  return (
    <section className="bg-gradient-to-b from-blue-500 to-blue-300 min-h-16 flex justify-center">
      <ul className="flex gap-x-10 my-auto">
        {LINK_LIST.map((item) => (
          <li key={item.title}>
            <NavLink
              to={item.to}
              className={({ isActive }) =>
                clsx(
                  `font-semibold text-xl ${
                    isActive ? 'text-red-500' : undefined
                  }`
                )
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  )
}
