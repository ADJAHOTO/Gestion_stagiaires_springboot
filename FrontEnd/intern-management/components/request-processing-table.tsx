"use client"

import * as React from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Check, X, MoreHorizontal, FileText, Mail, Phone } from "lucide-react"
import { InternRegistrationForm } from "@/components/intern-registration-form"
import { toast } from "@/hooks/use-toast"

// Données fictives pour les demandes de stage
const requestsData = [
  {
    id: "REQ-001",
    name: "Sophie Martin",
    email: "sophie.martin@email.com",
    phone: "06 12 34 56 78",
    department: "Informatique",
    school: "École Polytechnique",
    requestDate: "12 avril 2025",
    startDate: "01 juin 2025",
    endDate: "31 août 2025",
    status: "En attente",
  },
  {
    id: "REQ-002",
    name: "Thomas Dubois",
    email: "thomas.dubois@email.com",
    phone: "06 23 45 67 89",
    department: "Marketing",
    school: "HEC Paris",
    requestDate: "10 avril 2025",
    startDate: "15 juin 2025",
    endDate: "15 août 2025",
    status: "En attente",
  },
  {
    id: "REQ-003",
    name: "Emma Petit",
    email: "emma.petit@email.com",
    phone: "06 34 56 78 90",
    department: "Ressources Humaines",
    school: "Université Paris-Dauphine",
    requestDate: "8 avril 2025",
    startDate: "01 juillet 2025",
    endDate: "31 août 2025",
    status: "En attente",
  },
  {
    id: "REQ-004",
    name: "Lucas Bernard",
    email: "lucas.bernard@email.com",
    phone: "06 45 67 89 01",
    department: "Finance",
    school: "ESSEC Business School",
    requestDate: "7 avril 2025",
    startDate: "15 juillet 2025",
    endDate: "15 septembre 2025",
    status: "En attente",
  },
  {
    id: "REQ-005",
    name: "Chloé Moreau",
    email: "chloe.moreau@email.com",
    phone: "06 56 78 90 12",
    department: "Communication",
    school: "Sciences Po Paris",
    requestDate: "5 avril 2025",
    startDate: "01 août 2025",
    endDate: "31 octobre 2025",
    status: "En attente",
  },
]

export function RequestProcessingTable() {
  const [requests, setRequests] = React.useState(requestsData)
  const [selectedRequest, setSelectedRequest] = React.useState<(typeof requestsData)[0] | null>(null)
  const [detailsOpen, setDetailsOpen] = React.useState(false)
  const [registrationOpen, setRegistrationOpen] = React.useState(false)

  const handleAccept = (request: (typeof requestsData)[0]) => {
    setSelectedRequest(request)
    setRegistrationOpen(true)
  }

  const handleReject = (id: string) => {
    setRequests(requests.map((req) => (req.id === id ? { ...req, status: "Refusée" } : req)))
    toast({
      title: "Demande refusée",
      description: `La demande ${id} a été refusée.`,
    })
  }

  const handleRegistrationComplete = () => {
    if (selectedRequest) {
      setRequests(requests.map((req) => (req.id === selectedRequest.id ? { ...req, status: "Acceptée" } : req)))
      setRegistrationOpen(false)
      toast({
        title: "Stagiaire enregistré",
        description: `${selectedRequest.name} a été enregistré(e) comme stagiaire.`,
      })
    }
  }

  const handleViewDetails = (request: (typeof requestsData)[0]) => {
    setSelectedRequest(request)
    setDetailsOpen(true)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Traitement des demandes</h2>
        <p className="text-muted-foreground">Gérez les demandes de stage en attente</p>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Nom</TableHead>
              <TableHead className="hidden md:table-cell">Département</TableHead>
              <TableHead className="hidden md:table-cell">École</TableHead>
              <TableHead className="hidden md:table-cell">Date de demande</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {requests.map((request) => (
              <TableRow key={request.id}>
                <TableCell className="font-medium">{request.id}</TableCell>
                <TableCell>{request.name}</TableCell>
                <TableCell className="hidden md:table-cell">{request.department}</TableCell>
                <TableCell className="hidden md:table-cell">{request.school}</TableCell>
                <TableCell className="hidden md:table-cell">{request.requestDate}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      request.status === "Acceptée"
                        ? "success"
                        : request.status === "Refusée"
                          ? "destructive"
                          : "outline"
                    }
                  >
                    {request.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  {request.status === "En attente" ? (
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleAccept(request)}
                        className="h-8 w-8 text-green-500"
                      >
                        <Check className="h-4 w-4" />
                        <span className="sr-only">Accepter</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleReject(request.id)}
                        className="h-8 w-8 text-red-500"
                      >
                        <X className="h-4 w-4" />
                        <span className="sr-only">Refuser</span>
                      </Button>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" size="icon" className="h-8 w-8">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Plus</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem onClick={() => handleViewDetails(request)}>
                            <FileText className="mr-2 h-4 w-4" />
                            <span>Voir les détails</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => window.open(`mailto:${request.email}`)}>
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Envoyer un email</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ) : (
                    <Button variant="outline" size="sm" onClick={() => handleViewDetails(request)}>
                      Détails
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Dialogue de détails */}
      <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Détails de la demande</DialogTitle>
            <DialogDescription>Informations complètes sur la demande de stage</DialogDescription>
          </DialogHeader>
          {selectedRequest && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">ID</p>
                  <p>{selectedRequest.id}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Statut</p>
                  <Badge
                    variant={
                      selectedRequest.status === "Acceptée"
                        ? "success"
                        : selectedRequest.status === "Refusée"
                          ? "destructive"
                          : "outline"
                    }
                  >
                    {selectedRequest.status}
                  </Badge>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Nom complet</p>
                <p>{selectedRequest.name}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Email</p>
                  <p className="flex items-center">
                    <Mail className="mr-2 h-4 w-4" />
                    {selectedRequest.email}
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Téléphone</p>
                  <p className="flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    {selectedRequest.phone}
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">École</p>
                <p>{selectedRequest.school}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Département</p>
                <p>{selectedRequest.department}</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Date de demande</p>
                  <p>{selectedRequest.requestDate}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Début</p>
                  <p>{selectedRequest.startDate}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Fin</p>
                  <p>{selectedRequest.endDate}</p>
                </div>
              </div>
            </div>
          )}
          <DialogFooter>
            {selectedRequest && selectedRequest.status === "En attente" && (
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    handleAccept(selectedRequest)
                    setDetailsOpen(false)
                  }}
                >
                  <Check className="mr-2 h-4 w-4" />
                  Accepter
                </Button>
                <Button
                  variant="destructive"
                  onClick={() => {
                    handleReject(selectedRequest.id)
                    setDetailsOpen(false)
                  }}
                >
                  <X className="mr-2 h-4 w-4" />
                  Refuser
                </Button>
              </div>
            )}
            <Button variant="outline" onClick={() => setDetailsOpen(false)}>
              Fermer
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Formulaire d'enregistrement du stagiaire */}
      <Dialog open={registrationOpen} onOpenChange={setRegistrationOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Enregistrement du stagiaire</DialogTitle>
            <DialogDescription>
              Complétez les informations pour finaliser l'enregistrement du stagiaire
            </DialogDescription>
          </DialogHeader>
          {selectedRequest && (
            <InternRegistrationForm
              request={selectedRequest}
              onComplete={handleRegistrationComplete}
              onCancel={() => setRegistrationOpen(false)}
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
