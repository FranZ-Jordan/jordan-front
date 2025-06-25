import BreadcrumbNav from "@/components/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideSend, LucideSendToBack, Send } from "lucide-react";

export default function SendEmail() {
  return (
    <>
      <BreadcrumbNav />
        <div className="w-full max-w-6xl mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            <Card className="w-full h-full flex flex-col justify-between">
              <CardHeader>
                <CardTitle>Usar una campaña para realizar el envío</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col items-center justify-center text-center">
                <CardDescription className="mb-4">
                  Selecciona esta opción si requieres realizar un envío de una campaña existente.
                </CardDescription>
                <LucideSendToBack className="w-12 h-12 text-green-500" />
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full" variant="outline">
                  Enviar Campaña
                </Button>
              </CardFooter>
            </Card>

            <Card className="w-full h-full flex flex-col justify-between">
              <CardHeader>
                <CardTitle>Realizar un envío</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col items-center justify-center text-center">
                <CardDescription className="mb-4">
                  Selecciona esta opción si necesitas hacer un envío seleccionando una plantilla, agregando la base de contactos y configurando los parámetros del mail como el remitente y el asunto.
                </CardDescription>
                <LucideSend className="w-12 h-12 text-green-500" />
              </CardContent>
              <CardFooter>
                <Button type="submit" className="w-full">
                  Crear Envío
                </Button>
              </CardFooter>
            </Card>

          </div>
        </div>
    </>
  );
}