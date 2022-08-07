// Type
export type AlertSeverity = "error" | "success";
// Props
export interface AlertBoxProps {
    children: React.ReactNode;
    severity: AlertSeverity;
    className?: string;
}
// Styled props
export interface StyledAlertProps {
    severity: AlertSeverity;
}