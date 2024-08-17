import { Barbershop, BarbershopService } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import { ptBR } from "date-fns/locale"
import { format } from "date-fns"
interface BookingSummaryProps {
  service: Pick<BarbershopService, "name" | "price">
  barbershop: Pick<Barbershop, "name">
  selectedDate: Date
}

const BookingSummary = ({
  service,
  barbershop,
  selectedDate,
}: BookingSummaryProps) => (
  <Card>
    <CardContent className="space-y-3 p-3">
      <div className="flex items-center justify-between">
        <h2 className="font-bold">{service.name}</h2>
        <p className="text-sm font-bold">
          {Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(Number(service.price))}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-sm">Data</h2>
        <p className="text-sm text-gray-400">
          {format(selectedDate, "d 'de' MMMM", {
            locale: ptBR,
          })}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-sm">Horário</h2>
        <p className="text-sm text-gray-400">{format(selectedDate, "HH:mm")}</p>
      </div>
      <div className="flex items-center justify-between">
        <h2 className="text-sm">Barbearia</h2>
        <p className="text-sm text-gray-400">{barbershop.name}</p>
      </div>
    </CardContent>
  </Card>
)

export default BookingSummary
