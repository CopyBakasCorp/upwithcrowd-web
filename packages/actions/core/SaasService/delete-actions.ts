"use server";

import {structuredError, structuredResponse} from "@repo/utils/api";
import {getSaasServiceClient} from "../lib";

export async function deleteEditionByIdApi(id: string) {
  try {
    const client = await getSaasServiceClient();
    const dataResponse = await client.edition.deleteApiSaasEditionsById({id});
    return structuredResponse(dataResponse);
  } catch (error) {
    return structuredError(error);
  }
}

export async function deleteTenantByIdApi(id: string) {
  try {
    const client = await getSaasServiceClient();
    const dataResponse = await client.tenant.deleteApiSaasTenantsById({id});
    return structuredResponse(dataResponse);
  } catch (error) {
    return structuredError(error);
  }
}
