const mapping: Record<string, string> = {
  agencies: 'agency',
  'educational-contents': 'educational_content',
  'social-accounts': 'social_account',
  'team-members': 'team_member',
  users: 'user',
  'virtual-numbers': 'virtual_number',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
