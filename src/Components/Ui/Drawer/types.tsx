export interface DrawerProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler;
    useCase?: "search";
}

export interface DrawerStyledProps {
    useCase?: "search";
}
