"use client";

import type {GetApiProjectResponse} from "@ayasofyazilim/upwithcrowd-saas/UPWCService";
import TanstackTable from "@repo/ayasofyazilim-ui/molecules/tanstack-table";
import {useParams} from "next/navigation";
import {tableData} from "./project-table-data";

function ProjectTable({response}: {response: GetApiProjectResponse}) {
  const {lang} = useParams<{lang: string}>();
  const columns = tableData.projects.columns(lang);
  const table = tableData.projects.table();

  return <TanstackTable {...table} columns={columns} data={response.items || []} rowCount={response.totalCount} />;
}
export default ProjectTable;
