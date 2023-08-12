interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Project Manager', 'Superintending Engineer', 'Member'],
  tenantName: 'Organization',
  applicationName: 'QENG',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};
