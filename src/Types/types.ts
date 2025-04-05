// Define proper types for nav data
export interface SubItem {
  id: string;
  label: string;
  path: string;
  isInterests: boolean;
}

export interface NavItem {
  id: string;
  label: string;
  path: string;
  hasSubmenu: boolean;
  sidebar: SubItem[];
}
