"use client"

import Link from "next/link"
import { Button } from "../ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu"

const menus = [
  {
    title: "Home",
    href: "/",
    children: [],
  },
  {
    title: "Theory",
    href: "#",
    children: [
      {
        title: "Tenses",
        href: "/tenses",
      },
      {
        title: "Modals",
        href: "/modals",
      },
      {
        title: "SEOM",
        href: "/seom",
      },
      {
        title: "ADA",
        href: "/ada",
      },
      {
        title: "Comparative",
        href: "/comparative",
      },
      {
        title: "Gerund",
        href: "/gerund",
      },
    ],
  },
  {
    title: "Practice",
    href: "#",
    children: [
      {
        title: "Question",
        href: "/question",
      },
      {
        title: "Statement",
        href: "/statement",
      },
      {
        title: "Role Play",
        href: "/role-play",
      },
    ],
  },
  {
    title: "Exams",
    href: "#",
    children: [],
  },
]

export default function Navbar() {
  return (
    <div className="bg-white shadow-lg border-b-2 border-indigo-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center space-x-2 text-2xl font-bold text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <span className="text-3xl">📚</span>
              <span>Practice English</span>
            </Link>
          </div>

          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {menus.map((item) => {
                if (item.children.length > 0) {
                  return (
                    <NavigationMenuItem key={item.title}>
                      <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-fit">
                          {item.children.map((child) => {
                            return (
                              <li key={child.title}>
                                <NavigationMenuLink asChild>
                                  <Link href={child.href}>{child.title}</Link>
                                </NavigationMenuLink>
                              </li>
                            )
                          })}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  )
                }

                return (
                  <NavigationMenuItem key={item.title}>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link href={item.href}>{item.title}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              })}

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Button
                    variant="secondary"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white hover:text-white"
                  >
                    <Link href="#">Log In</Link>
                  </Button>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </div>
  )
}
