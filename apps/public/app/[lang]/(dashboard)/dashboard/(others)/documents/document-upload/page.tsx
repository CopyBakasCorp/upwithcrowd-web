import {getApiFileTypeGroupRulesetApi} from "@repo/actions/upwithcrowd/file-type-group/actions";
import ErrorComponent from "@repo/ui/components/error-component";
import {FileUpload} from "@repo/ui/upwithcrowd/file-upload/index";
import {structuredError} from "@repo/utils/api";
import {auth} from "@repo/utils/auth/next-auth";
import {isRedirectError} from "next/dist/client/components/redirect";
import {getResourceData} from "@/language/core/AccountService";

async function getApiRequests() {
  try {
    const session = await auth();
    const requiredRequests = await Promise.all([
      getApiFileTypeGroupRulesetApi({namespace: "OrganizationOfficialDocuments"}, session),
    ]);
    const optionalRequests = await Promise.allSettled([]);
    return {requiredRequests, optionalRequests};
  } catch (error) {
    if (!isRedirectError(error)) {
      return structuredError(error);
    }
    throw error;
  }
}

export default async function Page({
  params,
}: {
  params: {
    lang: string;
  };
}) {
  const {lang} = params;
  const {languageData} = await getResourceData(lang);
  const apiRequests = await getApiRequests();

  if ("message" in apiRequests) {
    return <ErrorComponent languageData={languageData} message={apiRequests.message} />;
  }

  const [fileTypeGroupTestResponse] = apiRequests.requiredRequests;
  return <FileUpload propertyId="dd1e83c0-57a8-8439-c731-3a17f2dbc603" ruleset={fileTypeGroupTestResponse.data} />;
}
