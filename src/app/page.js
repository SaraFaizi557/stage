// app/page.js
"use client";

import { ThemeToggle } from "@/components/theme-toggle";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Users,
  UserCheck,
  UserX,
  Bot,
  UserPlus,
  CheckSquare,
  FileText,
} from "lucide-react";

const stats = [
  {
    label: "Total Students",
    value: 0,
    icon: Users,
    circleClass: "bg-sky-500",
  },
  {
    label: "Approved Profiles",
    value: 0,
    icon: UserCheck,
    circleClass: "bg-emerald-500",
  },
  {
    label: "Pending Profiles",
    value: 0,
    icon: UserX,
    circleClass: "bg-amber-500",
  },
  {
    label: "AI Queue",
    value: 0,
    icon: Bot,
    circleClass: "bg-red-500",
  },
];

const quickActions = [
  { label: "Review Pending", icon: UserPlus },
  { label: "AI Verification", icon: Bot },
  { label: "Approve Users", icon: CheckSquare },
  { label: "View Reports", icon: FileText },
];

const recentActivity = [
  "0 users pending approval",
  "0 profiles in AI queue",
  "0 registered companies",
];

export default function DashboardPage() {
  return (
    <div  className="min-h-screen bg-background text-foreground bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.16)_0,_transparent_55%)]">
      {/* yeh main ko apne layout ke andar sidebar ke right wale part me rakho */}
      <main className="flex min-h-screen flex-col">
        {/* CENTERED CONTENT */}
        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-6 px-4 py-6 md:px-8 lg:py-8">
          {/* TOP BAR */}
          <header className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Overview
              </p>
              <h1 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Admin Dashboard
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Manage school students, approvals &amp; AI verification.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Card className="py-2">
                <CardContent className="flex items-center gap-2 p-0 px-4 py-0">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>Academic Session 2024–25</span>
                </CardContent>
              </Card>

              {/* right top corner theme switcher */}
              <ThemeToggle />
            </div>
          </header>

          {/* STATS ROW */}
          <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.label}
                >
                  <CardContent className="flex items-center justify-between px-6 py-2">
                    <div className="space-y-1">
                      <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                        {item.label}
                      </p>
                      <p className="text-3xl font-semibold tabular-nums">
                        {item.value}
                      </p>
                    </div>
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full text-white ${item.circleClass}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </section>

          {/* QUICK ACTIONS CARD */}
          <Card>
            <CardHeader className="px-5 pb-3 pt-5">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-semibold">
                  Quick Actions
                </CardTitle>
                <CardDescription className="text-[11px]">
                  Most common admin tasks in one place.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="px-5 pb-5">
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
                {quickActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <Button
                      key={action.label}
                      type="button"
                      variant="outline"
                      className="h-9 w-full justify-center gap-2 rounded-full text-xs font-medium"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{action.label}</span>
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* RECENT ACTIVITY CARD */}
          <Card>
            <CardHeader className="px-5 pb-3 pt-5">
              <CardTitle className="text-base font-semibold text-sky-700 dark:text-sky-400">
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="px-5 pb-5">
              <div className="space-y-3">
                {recentActivity.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-lg bg-muted px-4 py-3 shadow-sm"
                  >
                    <div className="flex items-center gap-3">
                      {/* left blue strip */}
                      <div className="h-7 w-[3px] rounded-full bg-sky-600" />
                      <p className="text-xs text-muted-foreground md:text-sm">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
