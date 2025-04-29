import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ClipboardList, Users, CheckSquare, Clock } from "lucide-react"

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold tracking-tight">Tableau de bord</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Demandes totales</CardTitle>
            <ClipboardList className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">+2 depuis hier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">En attente</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">-1 depuis hier</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Acceptées</CardTitle>
            <CheckSquare className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">+3 depuis la semaine dernière</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stagiaires actifs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 depuis le mois dernier</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Demandes récentes</CardTitle>
            <CardDescription>Les 5 dernières demandes de stage reçues</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {[
                { name: "Sophie Martin", date: "12 avril 2025", status: "En attente" },
                { name: "Thomas Dubois", date: "10 avril 2025", status: "En attente" },
                { name: "Emma Petit", date: "8 avril 2025", status: "Acceptée" },
                { name: "Lucas Bernard", date: "7 avril 2025", status: "Refusée" },
                { name: "Chloé Moreau", date: "5 avril 2025", status: "Acceptée" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between border-b pb-2">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                  </div>
                  <div
                    className={`text-sm ${
                      item.status === "Acceptée"
                        ? "text-green-500"
                        : item.status === "Refusée"
                          ? "text-red-500"
                          : "text-yellow-500"
                    }`}
                  >
                    {item.status}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Stagiaires par département</CardTitle>
            <CardDescription>Répartition des stagiaires actuels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { dept: "Informatique", count: 5, percentage: 42 },
                { dept: "Marketing", count: 3, percentage: 25 },
                { dept: "Ressources Humaines", count: 2, percentage: 17 },
                { dept: "Finance", count: 1, percentage: 8 },
                { dept: "Communication", count: 1, percentage: 8 },
              ].map((item, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{item.dept}</p>
                    <p className="text-sm text-muted-foreground">
                      {item.count} ({item.percentage}%)
                    </p>
                  </div>
                  <div className="h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: `${item.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
