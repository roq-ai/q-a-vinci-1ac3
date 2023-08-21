interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Agency Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Agency Owner', 'Team Member'],
  tenantName: 'Agency',
  applicationName: 'Q a Vinci',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
