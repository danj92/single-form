export interface NavigationItem {
    label: string;
    path: string;
    requires?: () => boolean;
}
