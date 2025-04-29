"use client"

import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { ClipboardList, Users, CheckSquare, LayoutDashboard } from "lucide-react"

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = React.useState("dashboard")

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar variant="inset">
          <SidebarHeader className="flex items-center justify-between p-4">
            <h2 className="text-xl font-bold">Gestion Stagiaires</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={activeSection === "dashboard"}
                      onClick={() => setActiveSection("dashboard")}
                    >
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      <span>Tableau de bord</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={activeSection === "requests"}
                      onClick={() => setActiveSection("requests")}
                    >
                      <ClipboardList className="mr-2 h-4 w-4" />
                      <span>Demandes de stage</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={activeSection === "processing"}
                      onClick={() => setActiveSection("processing")}
                    >
                      <CheckSquare className="mr-2 h-4 w-4" />
                      <span>Traitement des demandes</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={activeSection === "interns"}
                      onClick={() => setActiveSection("interns")}
                    >
                      <Users className="mr-2 h-4 w-4" />
                      <span>Stagiaires</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <div className="mt-auto p-4">
            <ModeToggle />
          </div>
          <SidebarRail />
        </Sidebar>
        <SidebarInset>
          <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
            <SidebarTrigger />
            <div className="font-semibold">{getSectionTitle(activeSection)}</div>
          </header>
          <main className="flex-1 p-6">{React.cloneElement(children as React.ReactElement, { activeSection })}</main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

function getSectionTitle(section: string): string {
  switch (section) {
    case "dashboard":
      return "Tableau de bord"
    case "requests":
      return "Demandes de stage"
    case "processing":
      return "Traitement des demandes"
    case "interns":
      return "Stagiaires"
    default:
      return "Gestion de Stagiaires"
  }
}
