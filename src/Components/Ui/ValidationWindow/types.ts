export interface ValidationWindowProps {
    p: string;
    title: string;
    primaryButton: string;
    secondaryButton: string;
    onClick: () => void;
    onClose: () => void;
}