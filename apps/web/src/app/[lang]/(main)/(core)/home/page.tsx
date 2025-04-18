import {getMemberApi} from "@repo/actions/upwithcrowd/member/actions";
import {getPublicProjectsApi} from "@repo/actions/upwithcrowd/public-project/action";
import ErrorComponent from "@repo/ui/components/error-component";
import {structuredError} from "@repo/utils/api";
import {isRedirectError} from "next/dist/client/components/redirect";
import {getResourceData} from "@/language-data/core/Default";
import DashboardClient from "./client";

async function getApiRequests() {
  try {
    const requiredRequests = await Promise.all([
      getMemberApi({isValidated: true}),
      getPublicProjectsApi({projectStateType: "PA", maxResultCount: 100}),
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

export default async function Page({params}: {params: {lang: string}}) {
  const {lang} = params;
  const {languageData} = await getResourceData(lang);

  const apiRequests = await getApiRequests();
  if ("message" in apiRequests) {
    return <ErrorComponent languageData={languageData} message={apiRequests.message} />;
  }
  const [memberResponse, projectsResponse] = apiRequests.requiredRequests;
  const {items: projectItems} = projectsResponse.data;

  const projects = projectItems || [];
  const debtProjects = projects.filter((project) => project.fundCollectionType === "DBIT");
  const shareProjects = projects.filter((project) => project.fundCollectionType === "SHRE");
  const shareDebtProjects = projects.filter((project) => project.fundCollectionType === "SHRE_DBIT");
  const {items: memberItems} = memberResponse.data;
  const members = memberItems || [];
  const individualMembers = members.filter((member) => member.type.toLowerCase() === "individual");
  const organizationMembers = members.filter((member) => member.type.toLowerCase() === "organization");

  const dashboardData = {
    data: {
      filteredProjects: {
        debt: debtProjects,
        share: shareProjects,
        shareDept: shareDebtProjects,
      },
      filteredMembers: {
        individual: individualMembers,
        organization: organizationMembers,
      },
      projects,
      membersResponse: memberResponse.data,
    },
  };
  return <DashboardClient data={dashboardData.data} />;
}
