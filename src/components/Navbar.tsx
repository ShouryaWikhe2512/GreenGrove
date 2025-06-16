import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { HomeIcon, LogIn, LogOut, Sprout } from "lucide-react";
import ModeToggle from "./ModeToggle";
import { stackServerApp } from "@/stack";
import { getUserDetails } from "@/actions/user.action";
import { UserButton } from "@stackframe/stack";

async function Navbar() {
  const user = await stackServerApp.getUser();
  const app = stackServerApp.urls;
  const userProfile = await getUserDetails(user?.id);

  return (
    <nav className="sticky top-0 w-full z-50 border-b bg-gradient-to-r from-green-100/30 via-green-200/20 to-green-100/30 backdrop-blur-md supports-[backdrop-filter]:bg-white/30 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center h-16 justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Sprout className="text-green-700 w-6 h-6" />
            <Link
              href="/"
              className="text-2xl font-bold text-green-800 font-mono tracking-wide"
            >
              GreenGrove
            </Link>
          </div>

          {/* Greeting */}
          {userProfile?.name && (
            <span className="text-[14px] text-green-700 dark:text-green-500 italic">
              {`Hello, ${userProfile?.name.split(" ")[0]}`}
            </span>
          )}

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              className="flex items-center gap-2 text-green-800"
              asChild
            >
              <Link href="/plants">
                <Sprout className="w-4 h-4" />
                <span className="hidden lg:inline">Plants</span>
              </Link>
            </Button>

            <Button
              variant="ghost"
              className="flex items-center gap-2 text-green-800"
              asChild
            >
              <Link href="/">
                <HomeIcon className="w-4 h-4" />
                <span className="hidden lg:inline">Home</span>
              </Link>
            </Button>

            <ModeToggle />

            {user ? (
              <>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-green-800"
                  asChild
                >
                  <Link href={app.signOut}>
                    <LogOut className="w-4 h-4" />
                    <span className="hidden lg:inline">Sign Out</span>
                  </Link>
                </Button>
                <UserButton />
              </>
            ) : (
              <>
                <Button
                  variant="ghost"
                  className="flex items-center gap-2 text-green-800"
                  asChild
                >
                  <Link href={app.signIn}>
                    <LogIn className="w-4 h-4" />
                    <span className="hidden lg:inline">Sign In</span>
                  </Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
