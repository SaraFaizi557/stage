// app/page.js
"use client";

import {
  Card,
  CardHeader,
  CardTitle,
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

const statCards = [
  {
    label: "Total Students",
    value: 0,
    iconBg: "#0b74c4",
    icon: Users,
  },
  {
    label: "Approved Profiles",
    value: 0,
    iconBg: "#2f9e44",
    icon: UserCheck,
  },
  {
    label: "Pending Profiles",
    value: 0,
    iconBg: "#f2a500",
    icon: UserX,
  },
  {
    label: "AI Queue",
    value: 0,
    iconBg: "#e03131",
    icon: Bot,
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
  // return (
    // <div className="min-h-screen bg-muted/40">
    //   <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 md:px-6">
    //     {/* Top bar */}
    //     <header className="flex items-center justify-between">
    //       <h1 className="text-2xl font-semibold tracking-tight">
    //         Admin Dashboard
    //       </h1>
    //       <span className="text-sm text-muted-foreground">
    //         Welcome, Admin!
    //       </span>
    //     </header>

    //     {/* Top statistic cards */}
    //     <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
    //       {statCards.map((card) => {
    //         const Icon = card.icon;
    //         return (
    //           <Card
    //             key={card.label}
    //             className="rounded-xl border border-border bg-card shadow-sm"
    //           >
    //             <CardContent className="flex flex-col items-center justify-center gap-3 py-5">
    //               {/* colored circle + icon */}
    //               <div
    //                 className="flex h-12 w-12 items-center justify-center rounded-full text-white"
    //                 style={{ backgroundColor: card.iconBg }}
    //               >
    //                 <Icon className="h-6 w-6" />
    //               </div>
    //               <div className="text-2xl font-semibold text-foreground">
    //                 {card.value}
    //               </div>
    //               <div className="text-[11px] font-medium text-muted-foreground">
    //                 {card.label}
    //               </div>
    //             </CardContent>
    //           </Card>
    //         );
    //       })}
    //     </section>

    //     {/* Quick Actions */}
    //     <section>
    //       <Card className="rounded-xl border border-border bg-card shadow-sm">
    //         <CardHeader className="pb-3">
    //           <CardTitle className="text-sm font-semibold text-foreground">
    //             Quick Actions
    //           </CardTitle>
    //         </CardHeader>
    //         <CardContent>
    //           <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
    //             {quickActions.map((action) => {
    //               const Icon = action.icon;
    //               return (
    //                 <Button
    //                   key={action.label}
    //                   variant="outline"
    //                   className="flex w-full items-center justify-start gap-2 rounded-full border-[#0b74c4] text-xs md:text-sm text-[#0b74c4] hover:bg-[#0b74c4]/5"
    //                 >
    //                   <Icon className="h-4 w-4" />
    //                   <span>{action.label}</span>
    //                 </Button>
    //               );
    //             })}
    //           </div>
    //         </CardContent>
    //       </Card>
    //     </section>

    //     {/* Recent Activity */}
    //     <section>
    //       <Card className="rounded-xl border border-border bg-card shadow-sm">
    //         <CardHeader className="pb-3">
    //           <CardTitle className="text-sm font-semibold text-foreground">
    //             Recent Activity
    //           </CardTitle>
    //         </CardHeader>
    //         <CardContent className="space-y-3">
    //           {recentActivity.map((item, idx) => (
    //             <div
    //               key={idx}
    //               className="flex items-center gap-3 rounded-lg bg-muted/60 px-4 py-3 text-xs md:text-sm"
    //             >
    //               {/* left blue line */}
    //               <div className="h-6 w-[3px] rounded-full bg-[#0b74c4]" />
    //               <span className="text-muted-foreground">{item}</span>
    //             </div>
    //           ))}
    //         </CardContent>
    //       </Card>
    //     </section>
    //   </main>
    // </div>
  // );
}
