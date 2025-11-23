"use client";

import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function TopHeader() {
  return (
    <header className="flex h-14 items-center justify-between border-b bg-white px-6">
      {/* LEFT: icon + title */}
      <div className="flex items-center gap-3">
        {/* small rounded square with grid, like screenshot */}
        <button className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-300 bg-neutral-100">
          <div className="grid h-4 w-4 grid-cols-2 gap-[2px]">
            <span className="rounded-sm bg-neutral-300" />
            <span className="rounded-sm bg-neutral-300" />
            <span className="rounded-sm bg-neutral-300" />
            <span className="rounded-sm bg-neutral-300" />
          </div>
        </button>

        <span className="text-xl font-semibold tracking-tight">Admin</span>
      </div>

      {/* RIGHT: circle + language + auth links */}
      <div className="flex items-center gap-6">
        {/* grey circle placeholder (can be avatar later) */}
        <div className="h-7 w-7 rounded-full bg-neutral-300" />

        {/* language dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="rounded-md bg-[#f5f7ff] px-4 py-1.5 text-sm font-medium">
              FR
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="border-0 bg-[#f5f7ff] px-6 py-2 text-sm font-medium"
          >
            <DropdownMenuItem className="cursor-pointer bg-transparent px-0 py-1 hover:bg-transparent">
              FR
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer bg-transparent px-0 py-1 hover:bg-transparent">
              EN
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer bg-transparent px-0 py-1 hover:bg-transparent">
              AR
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* auth links */}
        <div className="flex items-center gap-4 text-sm">
          <Link href="/login" className="hover:underline">
            Log in
          </Link>
          <Link href="/signup" className="font-medium hover:underline">
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}
