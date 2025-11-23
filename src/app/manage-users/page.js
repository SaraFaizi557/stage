// app/manage-users/page.js
"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const filters = [
  { id: "all", label: "Tous" },
  { id: "pending", label: "En attente" },
  { id: "approved", label: "Approuvés" },
  { id: "rejected", label: "Rejetés" },
];

const users = [
  {
    id: 1,
    name: "Mohid Faizi",
    email: "mohidfaizpro@gmail.com",
    studentNumber: "12341234",
    school: "EST Casablanca",
    status: "approved",
  },
  {
    id: 2,
    name: "Mohamed HOUSNI",
    email: "mohamedhousni1990@gmail.com",
    studentNumber: "123",
    school: "EST Casablanca",
    status: "approved",
  },
];

export default function ManageUsersPage() {
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredUsers =
    statusFilter === "all"
      ? users
      : users.filter((u) => u.status === statusFilter);

  return (
    <div
      className="
        min-h-screen bg-background
        bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.16)_0,_transparent_55%)]
        text-foreground
      "
    >
      <main className="flex min-h-screen flex-col">
        {/* CENTERED CONTENT */}
        <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-4 py-8 md:px-8">
          {/* TOP BAR */}
          <header className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Manage Users
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Review, approve or reject student accounts.
              </p>
            </div>

            <ThemeToggle />
          </header>

          {/* FILTER BUTTONS */}
          <div className="flex justify-start">
            <div className="inline-flex gap-2 rounded-full bg-background/80 p-1 shadow-sm">
              {filters.map((f) => (
                <Button
                  key={f.id}
                  type="button"
                  size="sm"
                  variant={statusFilter === f.id ? "default" : "outline"}
                  onClick={() => setStatusFilter(f.id)}
                  className="
                    rounded-full px-4 text-xs font-medium
                    shadow-sm
                  "
                >
                  {f.label}
                </Button>
              ))}
            </div>
          </div>

          {/* USERS TABLE CARD */}
          <Card className="mt-2 py-0 overflow-hidden rounded-2xl bg-card/95 shadow-[0_16px_25px_rgba(15,23,42,0.06)]">
            {/* blue header bar like screenshot */}
            <div className="bg-sky-800 px-6 py-3 text-xs font-semibold text-sky-50">
              <div className="grid grid-cols-[2fr_1.2fr_1.4fr_0.9fr_0.9fr] gap-3">
                <span>Utilisateur</span>
                <span>Numéro étudiant</span>
                <span>Établissement</span>
                <span>Statut</span>
                <span className="text-right">Actions</span>
              </div>
            </div>

            <CardContent className="p-0">
              <Table>
                <TableBody>
                  {filteredUsers.map((user) => (
                    <TableRow
                      key={user.id}
                      className="border-b last:border-0 bg-card hover:bg-muted/60"
                    >
                      {/* User col */}
                      <TableCell className="py-4 pl-6 pr-3 align-middle">
                        <div className="text-sm font-semibold">
                          {user.name}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {user.email}
                        </div>
                      </TableCell>

                      {/* Student number */}
                      <TableCell className="py-4 px-3 align-middle text-sm">
                        {user.studentNumber}
                      </TableCell>

                      {/* School */}
                      <TableCell className="py-4 px-3 align-middle text-sm">
                        {user.school}
                      </TableCell>

                      {/* Status badge */}
                      <TableCell className="py-4 px-3 align-middle">
                        <Badge
                          className="
                            rounded-full bg-emerald-500/15
                            px-3 py-1 text-[11px] font-medium
                            text-emerald-700
                            dark:bg-emerald-500/20 dark:text-emerald-300
                          "
                        >
                          Approved
                        </Badge>
                      </TableCell>

                      {/* Action button */}
                      <TableCell className="py-4 pr-6 text-right align-middle">
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="
                            rounded-full border border-muted-foreground/30
                            bg-background px-4 text-[11px] font-medium
                          "
                        >
                          Rejeter
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}

                  {filteredUsers.length === 0 && (
                    <TableRow>
                      <TableCell
                        colSpan={5}
                        className="py-10 text-center text-sm text-muted-foreground"
                      >
                        No users in this status.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
