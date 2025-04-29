"use client"

import * as React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FileText, Mail, Phone, MoreHorizontal, Search, UserCircle2, Building, Calendar } from "lucide-react"

// Données fictives pour les stagiaires
const internsData = [
  {
    id: "INT-001",
    name: "Marie Dupont",
    email: "marie.dupont@email.com",
    phone: "06 12 34 56 78",
    department: "Informatique",
    supervisor: "Jean Martin",
    startDate: "01 mars 2025",
    endDate: "31 mai 2025",
    status: "En cours",
  },
  {
    id: "INT-002",
    name: "Paul Lefebvre",
    email: "paul.lefebvre@email.com",
    phone: "06 23 45 67 89",
    department: "Marketing",
    supervisor: "Sophie Dubois",
    startDate: "15 février 2025",
    endDate: "15 mai 2025",
    status: "En cours",
  },
  {
    id: "INT-003",
    name: "Julie Moreau",
    email: "julie.moreau@email.com",
    phone: "06 34 56 78 90",
    department: "Ressources Humaines",
    supervisor: "Philippe Blanc",
    startDate: "01 janvier 2025",
    endDate: "31 mars 2025",
    status: "Terminé",
  },
  {
    id: "INT-004",
    name: "Antoine Girard",
    email: "antoine.girard@email.com",
    phone: "06 45 67 89 01",
    department: "Finance",
    supervisor: "Claire Petit",
    startDate: "15 janvier 2025",
    endDate: "15 avril 2025",
    status: "Terminé",
  },
  {
    id: "INT-005",
    name: "Camille Rousseau",
    email: "camille.rousseau@email.com",
    phone: "06 56 78 90 12",
    department: "Communication",
    supervisor: "Thomas Leroy",
    startDate: "01 avril 2025",
    endDate: "30 juin 2025",
    status: "En cours",
  },
  {
    id: "INT-006",
    name: "Lucas Bernard",
    email: "lucas.bernard@email.com",
    phone: "06 67 89 01 23",
    department: "Informatique",
    supervisor: "Jean Martin",
    startDate: "15 mai 2025",
    endDate: "15 août 2025",
    status: "À venir",
  },
  {
    id: "INT-007",
    name: "Emma Petit",
    email: "emma.petit@email.com",
    phone: "06 78 90 12 34",
    department: "Marketing",
    supervisor: "Sophie Dubois",
    startDate: "01 juin 2025",
    endDate: "31 août 2025",
    status: "À venir",
  },
]

export function InternsList() {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedIntern, setSelectedIntern] = React.useState<(typeof internsData)[0] | null>(null)
  const [detailsOpen, setDetailsOpen] = React.useState(false)

  const filteredInterns = internsData.filter(
    (intern) =>
      intern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      intern.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      intern.supervisor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      intern.status.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleViewDetails = (intern: (typeof internsData)[0]) => {
    setSelectedIntern(intern)
    setDetailsOpen(true)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Stagiaires</h2>
        <p className="text-muted-foreground">Liste des stagiaires actuels, passés et à venir</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher un stagiaire..."
            className="w-full pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" size="sm">
            Exporter
          </Button>
          <Button size="sm">Ajouter un stagiaire</Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Liste des stagiaires</CardTitle>
          <CardDescription>{filteredInterns.length} stagiaires au total</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Nom</TableHead>
                <TableHead className="hidden md:table-cell">Département</TableHead>
                <TableHead className="hidden md:table-cell">Encadrant</TableHead>
                <TableHead className="hidden md:table-cell">Période</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInterns.map((intern) => (
                <TableRow key={intern.id}>
                  <TableCell className="font-medium">{intern.id}</TableCell>
                  <TableCell>{intern.name}</TableCell>
                  <TableCell className="hidden md:table-cell">{intern.department}</TableCell>
                  <TableCell className="hidden md:table-cell">{intern.supervisor}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    {intern.startDate} - {intern.endDate}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        intern.status === "En cours" ? "default" : intern.status === "Terminé" ? "secondary" : "outline"
                      }
                    >
                      {intern.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => handleViewDetails(intern)}
                      >
                        <FileText className="h-4 w-4" />
                        <span className="sr-only">Détails</span>
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Plus</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => window.open(`mailto:${intern.email}`)}>
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Envoyer un email</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Phone className="mr-2 h-4 w-4" />
                            <span>Appeler</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <FileText className="mr-2 h-4 w-4" />
                            <span>Générer une attestation</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Dialogue de détails */}
      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Détails du stagiaire</DialogTitle>
            <DialogDescription>Informations complètes sur le stagiaire</DialogDescription>
          </DialogHeader>
          {selectedIntern && (
            <div className="space-y-6">
              <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted">
                  <UserCircle2 className="h-10 w-10" />
                </div>
                <div className="space-y-1 text-center sm:text-left">
                  <h3 className="text-xl font-semibold">{selectedIntern.name}</h3>
                  <div className="flex flex-col space-y-1 text-sm text-muted-foreground sm:flex-row sm:space-x-2 sm:space-y-0">
                    <span>{selectedIntern.id}</span>
                    <span className="hidden sm:inline">•</span>
                    <span>{selectedIntern.department}</span>
                    <span className="hidden sm:inline">•</span>
                    <Badge
                      variant={
                        selectedIntern.status === "En cours"
                          ? "default"
                          : selectedIntern.status === "Terminé"
                            ? "secondary"
                            : "outline"
                              ? "secondary"
                              : "outline"
                      }
                    >
                      {selectedIntern.status}
                    </Badge>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    {selectedIntern.email}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Téléphone</p>
                  <p className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    {selectedIntern.phone}
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Département</p>
                  <p className="flex items-center">
                    <Building className="mr-2 h-4 w-4" />
                    {selectedIntern.department}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Encadrant</p>
                  <p className="flex items-center">
                    <UserCircle2 className="mr-2 h-4 w-4" />
                    {selectedIntern.supervisor}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground">Période de stage</p>
                <p className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  Du {selectedIntern.startDate} au {selectedIntern.endDate}
                </p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setDetailsOpen(false)}>
              Fermer
            </Button>
            {selectedIntern && (
              <Button onClick={() => window.open(`mailto:${selectedIntern.email}`)}>
                <Mail className="mr-2 h-4 w-4" />
                Contacter
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
