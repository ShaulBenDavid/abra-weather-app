// Types
import { LoadingSpinnerProps } from './types';
// Styles
import { StyledSpinner } from './style';

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ className }) => {
  return (
    <StyledSpinner className={className}></StyledSpinner>
  )
}

export default LoadingSpinner;