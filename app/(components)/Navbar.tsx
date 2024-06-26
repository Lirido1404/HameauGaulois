"use client";

import * as React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Exit from "./Exit";



export function NavigationMenuDemo() {
  const { data: session } = useSession();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="colornavitem">
            A propos de l&apos;association
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Image
                      src={"/Images/Logo21.png"}
                      width={60}
                      height={60}
                      alt="Logo"
                    />
                    <div className="mb-2 mt-4 text-lg font-medium">Accueil</div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Découvrir l&apos;esprit quartier du hameau gaulois
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/#pres" title="Présentation">
                <p className="text-xs">
                  Plonger dans l&apos;univers du hameau gaulois
                </p>
              </ListItem>
              <ListItem href="/#objectifs" title="Objectifs">
                <p className="text-xs">
                  {" "}
                  Découvrir ce qui détermine les troupes
                </p>
              </ListItem>
              <ListItem href="/#historique" title="Historique">
                <p className="text-xs">Comprendre ce qui a forgé ce quartier</p>
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="colornavitem">
            Participer et soutenir
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className=" w-[400px] flex flex-wrap p-4 md:w-[500px] lg:w-[600px] ">
              <ListItem href="/Participation" title="Actions">
                <p className="text-xs">Comprendre ce qui a forgé ce quartier</p>
              </ListItem>
              <ListItem href="/Participation/#calendrier" title="Calendrier">
                <p className="text-xs">Comprendre ce qui a forgé ce quartier</p>
              </ListItem>
              <ListItem href="/Participation/#adhesion" title="Adhésion">
                <p className="text-xs">Dons, Adhésions, Pétitions !</p>
              </ListItem>
              
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        {/*<NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink
              className={`colornavitem ${navigationMenuTriggerStyle()}`}
            >
              Contacts
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
        {session && (
          <>
            <NavigationMenuItem className="">
              <Link href="/Date" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`colornavitem ${navigationMenuTriggerStyle()}`}
                >
                  Ajout Date
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </>
        )}
        {!session && (
          <>
            <NavigationMenuItem className="pl-12 ">
              <Link href="/Account" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`colornavitem2 ${navigationMenuTriggerStyle()}`}
                >
                  Login
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </>
        )}

        {session && (
          <>
            <NavigationMenuItem className="pl-12">
              <Exit />
            </NavigationMenuItem>
          </>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
