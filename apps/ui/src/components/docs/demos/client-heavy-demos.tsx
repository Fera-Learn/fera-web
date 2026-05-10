"use client";

import { Button } from "@repo/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@repo/ui/carousel";
import {
  type ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@repo/ui/chart";
import { Card, CardDescription, CardHeader, CardTitle } from "@repo/ui/card";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
} from "@repo/ui/sidebar";
import { toast } from "@repo/ui/sonner";
import { ToggleGroup, ToggleGroupItem } from "@repo/ui/toggle-group";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

const chartData = [
  { month: "Jan", shipped: 8, reviewing: 3 },
  { month: "Feb", shipped: 12, reviewing: 4 },
  { month: "Mar", shipped: 16, reviewing: 5 },
  { month: "Apr", shipped: 11, reviewing: 2 },
];

const chartConfig = {
  shipped: {
    label: "Shipped",
    color: "var(--chart-1)",
  },
  reviewing: {
    label: "Reviewing",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function ToggleGroupDemo() {
  return (
    <ToggleGroup defaultValue="grid" type="single">
      <ToggleGroupItem aria-label="Grid view" value="grid">
        Grid
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="List view" value="list">
        List
      </ToggleGroupItem>
      <ToggleGroupItem aria-label="Board view" value="board">
        Board
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export function SidebarLayoutDemo() {
  return (
    <div className="max-w-4xl overflow-hidden rounded-[1.75rem] border border-border/80">
      <SidebarProvider defaultOpen>
        <div className="flex min-h-[320px] w-full">
          <Sidebar collapsible="none">
            <SidebarHeader>
              <div className="rounded-2xl border border-sidebar-border/80 bg-sidebar-accent/40 p-3">
                <p className="text-sm font-medium text-sidebar-foreground">
                  Fera UI
                </p>
                <p className="text-xs text-sidebar-foreground/70">
                  Docs navigation
                </p>
              </div>
            </SidebarHeader>
            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Start here</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton isActive>Overview</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>Installation</SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
              <SidebarSeparator />
              <SidebarGroup>
                <SidebarGroupLabel>Components</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <SidebarMenuButton>Button</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>Dialog</SidebarMenuButton>
                    </SidebarMenuItem>
                    <SidebarMenuItem>
                      <SidebarMenuButton>Sidebar</SidebarMenuButton>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            </SidebarContent>
          </Sidebar>
          <SidebarInset className="min-h-[320px] rounded-none bg-background shadow-none">
            <div className="flex h-full items-center justify-center p-6 text-sm text-muted-foreground">
              Main content stays beside the navigation shell.
            </div>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}

export function CarouselGalleryDemo() {
  return (
    <Carousel className="w-full max-w-xl">
      <CarouselContent>
        {["Tokens", "Patterns", "Components"].map((title) => (
          <CarouselItem className="basis-full sm:basis-1/2" key={title}>
            <Card className="rounded-[1.5rem]">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                  One reusable surface in the gallery.
                </CardDescription>
              </CardHeader>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export function ChartRevenueDemo() {
  return (
    <ChartContainer className="max-w-xl" config={chartConfig}>
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis axisLine={false} dataKey="month" tickLine={false} />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        <Bar dataKey="shipped" fill="var(--color-shipped)" radius={10} />
        <Bar dataKey="reviewing" fill="var(--color-reviewing)" radius={10} />
      </BarChart>
    </ChartContainer>
  );
}

export function SonnerToastDemo() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button
        onClick={() =>
          toast.success("Component published", {
            description: "The shared button docs are now live in the library.",
          })
        }
      >
        Success toast
      </Button>
      <Button
        onClick={() =>
          toast("Review requested", {
            description:
              "A reviewer has been invited to check the latest changes.",
          })
        }
        variant="outline"
      >
        Default toast
      </Button>
    </div>
  );
}
