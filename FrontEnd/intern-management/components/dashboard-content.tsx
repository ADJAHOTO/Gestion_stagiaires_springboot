"use client"
import { InternshipRequestForm } from "@/components/internship-request-form"
import { RequestProcessingTable } from "@/components/request-processing-table"
import { InternsList } from "@/components/interns-list"
import { DashboardOverview } from "@/components/dashboard-overview"

export function DashboardContent({ activeSection = "dashboard" }: { activeSection?: string }) {
  return (
    <div className="w-full">
      {activeSection === "dashboard" && <DashboardOverview />}
      {activeSection === "requests" && <InternshipRequestForm />}
      {activeSection === "processing" && <RequestProcessingTable />}
      {activeSection === "interns" && <InternsList />}
    </div>
  )
}
