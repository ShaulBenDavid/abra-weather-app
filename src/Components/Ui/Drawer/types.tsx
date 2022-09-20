export interface DrawerProps {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler;
    useCase?: "search";
    className?: string;
}

export interface DrawerStyledProps {
    useCase?: "search";
}
