import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs"
import Link from "next/link"

export const Navigation = () => {
    return (
        <nav className="bg-[var(--background)] border-b border-[var(--foreground)]/10" >
            <div className="max-w-7xl mx-auto p-4">
                <div className="flex justify-between h-12 items-center">
                    <div className="flex shrink-0">
                        <Link href="/" className="text-xl font-semibold text-[var(--foreground)]">
                            nextjs
                        </Link >
                    </div>
                    <div className="flex items-center gap-4">
                        <SignedOut >
                            <SignInButton>
                                <button className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700">
                                    Sign In
                                </button>
                            </SignInButton>
                            <SignUpButton>
                                <button className="px-2 py-1 text-sm border border-neutral-300 dark:border-neutral-600 dark:text-neutral-200 dark:hover:bg-neutral-700">
                                    Sign Up
                                </button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <Link href="/user-profile">
                                Profile
                            </Link>
                            <SignOutButton />
                            {/* <UserButton /> */}
                        </SignedIn>
                    </div>
                </div>
            </div>
        </nav>
    )
}