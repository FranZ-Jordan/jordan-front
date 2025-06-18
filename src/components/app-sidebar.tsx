"use client"

import * as React from "react"

import {
  LucideBrush,
  LucideChartNoAxesCombined,
  LucideCombine,
  LucideDatabase,
  LucideFolderDown,
  LucideSend,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"

import {Logo} from "./ui/logo"




const data = {
  user: {
    name: "Jordan",
    email: "postventadigital@jordan.cl",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "JORDAN 360",
      logo: Logo,
      plan: "Empresas Jordan",
    },

  ],
  navMain: [
    {
      title: "Audiencias",
      url: "#",
      icon: LucideDatabase,
      isActive: true,
      items: [
        {
          title: "Audiencias",
          url: "/dashboard/audiences",
        },
        {
          title: "Segmentación",
          url: "#",
        },
        {
          title: "Historial de Cargas",
          url: "#",
        },
        {
          title: "Gestión de Listas",
          url: "#",
        },
      ],
    },
    {
      title: "Templates",
      url: "#",
      icon: LucideBrush,
      items: [
        {
          title: "Landing",
          url: "#",
        },
        {
          title: "Email",
          url: "#",
        },
        {
          title: "SMS",
          url: "#",
        },
         {
          title: "VMS",
          url: "#",
        },
         {
          title: "WhatsApp",
          url: "#",
        },
         {
          title: "Banco de Imágenes",
          url: "#",
        },
      ],
    },
    {
      title: "Envíos",
      url: "#",
      icon: LucideSend,
      items: [
        {
          title: "Email",
          url: "/dashboard/send-email",
        },
        {
          title: "SMS",
          url: "#",
        },
        {
          title: "VMS",
          url: "#",
        },
        {
          title: "WhatsApp",
          url: "#",
        },
         {
          title: "Gestión de Campañas",
          url: "#",
        },
         {
          title: "A/B Testing",
          url: "#",
        },
      ],
    },
    {
      title: "Procesos",
      url: "#",
      icon: LucideCombine,
      items: [
        {
          title: "Solicitudes de Aprobación",
          url: "#",
        },
        {
          title: "Encuestas",
          url: "#",
        },
        {
          title: "Orquestación",
          url: "#",
        },
                {
          title: "Tráfico de Entradas y Salidas",
          url: "#",
        },
      ],
    },
        {
      title: "Resultados",
      url: "#",
      icon: LucideChartNoAxesCombined,
      items: [
        {
          title: "Resultados de Envíos",	
          url: "/dashboard/shipping-results",
        },
        {
          title: "Estadísticas",
          url: "/dashboard/statistics",
        },
        {
          title: "Búsqueda por Registros",
          url: "/dashboard/search-by-records",
        },
        // {
        //   title: "Resultados de Orquestación",
        //   url: "#",
        // },
        // {
        //   title: "Resultados A/B Testing",
        //   url: "#",
        // },
        {
          title: "Descargas",
          url: "#",
          icon: LucideFolderDown,
        },
      ],
    },
    
  ],

}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
