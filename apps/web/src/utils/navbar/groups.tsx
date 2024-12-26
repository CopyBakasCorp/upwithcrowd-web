import type { NavbarItemsFromDB } from "@repo/ui/theme/types";

export const management: NavbarItemsFromDB[] = [
  {
    key: "management",
    displayName: "Management",
    description: "View and manage your management settings.",
    href: null,
    icon: "management",
    parentNavbarItemKey: "/",
    displayOrder: 1,
  },
  {
    key: "management/openiddict",
    displayName: "OpenIdDict",
    description: "Manage Open ID dict settings.",
    href: null,
    icon: "id",
    parentNavbarItemKey: "management",
    displayOrder: 1,
    requiredPolicies: ["UniRefund.Settings"],
  },
  {
    key: "management/openiddict/applications",
    displayName: "Applications",
    description: "Manage applications within Open Id Dict.",
    href: "management/openiddict/applications",
    icon: "app",
    parentNavbarItemKey: "management/openiddict",
    displayOrder: 1,
    requiredPolicies: ["OpenIddictPro.Application"],
  },
  {
    key: "management/openiddict/scopes",
    displayName: "Scopes",
    description: "View and manage scopes for Open Id Dict.",
    href: "management/openiddict/scopes",
    icon: "scope",
    parentNavbarItemKey: "management/openiddict",
    displayOrder: 1,
    requiredPolicies: ["OpenIddictPro.Scope"],
  },
  {
    key: "management/admin",
    displayName: "Admin",
    description: "Access administrative tools and settings.",
    href: null,
    icon: "management",
    parentNavbarItemKey: "management",
    displayOrder: 1,
    requiredPolicies: ["UniRefund.Settings"],
  },
  {
    key: "management/admin/languages",
    displayName: "Languages",
    description: "Manage language settings and translations.",
    href: "management/admin/languages",
    icon: "language",
    parentNavbarItemKey: "management/admin",
    displayOrder: 1,
    requiredPolicies: ["LanguageManagement.Languages"],
  },
  {
    key: "management/admin/language-texts",
    displayName: "LanguageTexts",
    description: "Edit and review language texts.",
    href: "management/admin/language-texts",
    icon: "book",
    parentNavbarItemKey: "management/admin",
    displayOrder: 1,
    requiredPolicies: ["LanguageManagement.LanguageTexts"],
  },
  {
    key: "management/saas",
    displayName: "Saas",
    description: "Manage SaaS configurations and settings.",
    href: null,
    icon: "management",
    parentNavbarItemKey: "management",
    displayOrder: 1,
    requiredPolicies: ["UniRefund.Settings"],
  },
  {
    key: "management/saas/edition",
    displayName: "Edition",
    description: "Manage SaaS editions and plans.",
    href: "management/saas/edition",
    icon: "edition",
    parentNavbarItemKey: "management/saas",
    displayOrder: 1,
    requiredPolicies: ["Saas.Editions"],
  },
  {
    key: "management/saas/tenant",
    displayName: "Tenant",
    description: "Manage SaaS tenant settings and configurations.",
    href: "management/saas/tenant",
    icon: "globe",
    parentNavbarItemKey: "management/saas",
    displayOrder: 1,
    requiredPolicies: ["Saas.Tenants"],
  },
  {
    key: "management/identity",
    displayName: "Identity",
    description: "Manage user identities and roles.",
    href: null,
    icon: "management",
    parentNavbarItemKey: "management",
    displayOrder: 1,
    requiredPolicies: ["UniRefund.Settings"],
  },
  {
    key: "management/identity/role",
    displayName: "Role",
    description: "Manage user roles and permissions.",
    href: "management/identity/role",
    icon: "role",
    parentNavbarItemKey: "management/identity",
    displayOrder: 1,
    requiredPolicies: ["AbpIdentity.Roles"],
  },
  {
    key: "management/identity/user",
    displayName: "User",
    description: "Manage user accounts and profiles.",
    href: "management/identity/user",
    icon: "identity",
    parentNavbarItemKey: "management/identity",
    displayOrder: 1,
    requiredPolicies: ["AbpIdentity.Users"],
  },
  {
    key: "management/identity/claim-type",
    displayName: "ClaimType",
    description: "Manage claim types for user identities.",
    href: "management/identity/claim-type",
    icon: "scan",
    parentNavbarItemKey: "management/identity",
    displayOrder: 1,
    requiredPolicies: ["AbpIdentity.ClaimTypes"],
  },
  {
    key: "management/identity/security-logs",
    displayName: "SecurityLogs",
    description: "View security logs and audit trails.",
    href: "management/identity/security-logs",
    icon: "lock",
    parentNavbarItemKey: "management/identity",
    displayOrder: 1,
    requiredPolicies: ["AbpIdentity.SecurityLogs"],
  },
  {
    key: "management/identity/organization",
    displayName: "Organization",
    description: "Manage organizational settings and structure.",
    href: "management/identity/organization",
    icon: "building",
    parentNavbarItemKey: "management/identity",
    displayOrder: 1,
    requiredPolicies: ["AbpIdentity.OrganizationUnits"],
  },
  {
    key: "management/audit-logs/audit-logs",
    displayName: "AuditLogs",
    description: "View and analyze audit logs.",
    href: "management/audit-logs/audit-logs",
    icon: "log",
    parentNavbarItemKey: "management",
    displayOrder: 1,
    requiredPolicies: ["AuditLogging.AuditLogs"],
  },
  {
    key: "management/text-templates/text-templates",
    displayName: "TextTemplates",
    description: "Manage and create text templates.",
    href: "management/text-templates/text-templates",
    icon: "text",
    parentNavbarItemKey: "management",
    displayOrder: 1,
    requiredPolicies: ["TextTemplateManagement.TextTemplates"],
  },
];
export const settings: NavbarItemsFromDB[] = [
  {
    key: "settings",
    displayName: "Settings",
    description: "Access settings settings and tools.",
    href: null,
    icon: "settings",
    parentNavbarItemKey: "/",
    displayOrder: 1,
  },
  {
    key: "settings/tenant",
    displayName: "Tenant",
    description: "Manage settings for tenants.",
    href: "settings/tenant",
    icon: "settings",
    parentNavbarItemKey: "settings",
    displayOrder: 1,
    requiredPolicies: ["UniRefund.Dashboard.Tenant"],
  },
];
