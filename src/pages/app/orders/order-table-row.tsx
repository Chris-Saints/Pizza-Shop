
// export interface OrderTableRowProps {}

import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { TableCell, TableRow } from "@/components/ui/table";
import { ArrowRight, Search, X } from "lucide-react";
import { OrderDetails } from "./order-details";

export function OrderTableRow() {
    return(
         <TableRow>
            <TableCell>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline" size="xs">
                            <Search className="h-3 w-3" />
                            <span className="sr-only">Detalhes do Pedidos</span>
                        </Button>
                    </DialogTrigger>

                    <OrderDetails />
                </Dialog>
                
            </TableCell>
            <TableCell className="font-mono text-xs font-medium">879asf9as7897sad9fa07s8a</TableCell>
            <TableCell className="text-muted-foreground">há 15 minutos</TableCell>
            <TableCell>
                <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-gray-500"></span>
                    <span className="font-medium text-muted-foreground">Pendente</span>
                </div>
            </TableCell>
            <TableCell className="font-medium">Christian Picoli da Costa</TableCell>
            <TableCell className="font-medium">
                R$ 149,90
            </TableCell>
            <TableCell>
                <Button variant="outline" size='xs'>
                    <ArrowRight className="mre-2 h-3 w-3" />
                    Aprovar
                </Button>
            </TableCell>
            <TableCell>
                <Button variant="ghost" size='xs'>
                    <X className="mre-2 h-3 w-3" />
                    Cancelar
                </Button>
            </TableCell>
        </TableRow>
)
}