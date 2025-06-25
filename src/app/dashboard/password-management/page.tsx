"use client";

import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import BreadcrumbNav from "@/components/BreadcrumbNav";

export default function ChangePasswordForm() {
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const handleChangePassword = () => {
    // Aquí puedes agregar lógica de validación y llamada a API
    if (newPassword !== confirmPassword) {
      alert("Las nuevas claves no coinciden")
      return
    }
    alert("Cambio de clave enviado")
  }

  return (

    <>
    <BreadcrumbNav />
    <div className="min-x-auto flex items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-xl rounded-2xl p-6">
        <CardContent className="space-y-6">
          <h2 className="text-2xl font-semibold text-center">Cambiar Clave</h2>

          <div className="space-y-2">
            <Label htmlFor="currentPassword">Ingrese la clave actual</Label>
            <Input
              id="currentPassword"
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Clave actual"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="newPassword">Ingrese la clave nueva</Label>
            <Input
              id="newPassword"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Nueva clave"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Repita la clave nueva</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Repita la nueva clave"
            />
          </div>

          <Button className="w-full" onClick={handleChangePassword}>
            Cambiar Clave
          </Button>
        </CardContent>
      </Card>
    </div>
    </>





  )
}