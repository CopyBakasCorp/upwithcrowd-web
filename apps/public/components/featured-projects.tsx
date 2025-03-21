"use client";

import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {Progress} from "@/components/ui/progress";
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable} from "@tanstack/react-table";
import {MapPin, Target, Wallet} from "lucide-react";
import Image from "next/image";
import React from "react";
import {formatCurrency} from "@repo/ui/utils";
import type {Project} from "@/_types";
import {projects} from "@/_data";

const columnHelper = createColumnHelper<Project>();

const columns = [
  columnHelper.accessor("image", {
    header: "Project",
    cell: (info) => (
      <div className="relative">
        <Image
          alt={info.row.original.title}
          className="h-48 w-full rounded-t-lg object-cover"
          height={200}
          src={info.getValue()}
          width={300}
        />
        <Badge className="bg-primary text-primary-foreground absolute bottom-4 left-4">{info.row.original.badge}</Badge>
      </div>
    ),
  }),
  columnHelper.accessor("title", {
    header: "Details",
    cell: (info) => {
      const project = info.row.original;
      const fundedPercentage = (project.raised / project.goal) * 100;
      return (
        <div className="p-4">
          <div className="text-muted-foreground mb-2 flex items-center text-xs md:text-sm">
            <MapPin className="mr-1 h-3 w-3 md:h-4 md:w-4" />
            {project.location}
          </div>
          <h3 className="mb-4 text-lg font-semibold md:text-xl">{project.title}</h3>
          <div className="bg-muted-foreground/5 rounded-lg p-3 md:p-4">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs font-medium md:text-sm">Funded: {fundedPercentage.toFixed(0)}%</span>
              <span className="text-muted-foreground text-xs md:text-sm">30 days left</span>
            </div>
            <Progress className="mb-3 md:mb-4" value={fundedPercentage} />
            <div className="flex items-center justify-between text-xs md:text-sm">
              <div className="flex items-center">
                <Wallet className="text-primary mr-2 h-5 w-5" />
                <div>
                  <p className="font-semibold">{formatCurrency(project.raised)}</p>
                  <p className="text-muted-foreground text-xs">raised</p>
                </div>
              </div>
              <div className="flex items-center">
                <Target className="text-primary mr-2 h-5 w-5" />
                <div>
                  <p className="font-semibold">{formatCurrency(project.goal)}</p>
                  <p className="text-muted-foreground text-xs">goal</p>
                </div>
              </div>
            </div>
          </div>
          <Button className="mt-4 w-full">Support This Project</Button>
        </div>
      );
    },
  }),
];

export default function FeaturedProjects() {
  const table = useReactTable({
    data: projects,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <section className="bg-muted px-6 py-20">
      <div className="container mx-auto">
        <h2 className="mb-10 text-center text-3xl font-bold">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {table.getRowModel().rows.map((row) => (
            <Card className="overflow-hidden" key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <React.Fragment key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </React.Fragment>
              ))}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
