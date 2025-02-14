"use server";

import LoginForm from "@repo/ui/theme/auth/login";
import {getTenantByNameApi, signInServerApi} from "@/actions/core/AccountService/actions";
import {getResourceData} from "@/language/core/AccountService";

export default async function Page({params}: {params: {lang: string}}) {
  const {lang} = params;
  const {languageData} = await getResourceData(lang);
  const isTenantDisabled = process.env.FETCH_TENANT !== "true";

  return (
    <LoginForm
      isTenantDisabled={isTenantDisabled}
      languageData={languageData}
      onSubmitAction={signInServerApi}
      onTenantSearchAction={getTenantByNameApi}
    />
  );
}
