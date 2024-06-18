import { Button as MaterialButton, CircularProgress, Typography } from '@mui/material';
import { ElementType } from 'react';
import ContentButton from './button.style';

interface ButtonProps {
  variant?: 'text' | 'outlined' | 'contained';
  label: string;
  disabled?: boolean;
  buttonType?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  className?: string;
  icon?: ElementType;
  loading?: boolean;
}

const Button = ({
  variant,
  label,
  onClick,
  disabled,
  buttonType,
  className,
  icon: Icon,
  loading,
}: ButtonProps) => {

  const getButtonContent = () => {
    if (loading) {
      return <CircularProgress size={24} />;
    }
    return (
      <ContentButton>
        {Icon ? <Icon /> : null}
        <Typography variant="body1" component="span">
          {label}
        </Typography>
      </ContentButton>
    );
  };

  return (
    <MaterialButton
      variant={variant}
      onClick={loading ? () => null : onClick}
      className={className}
      disabled={disabled || loading}
      type={buttonType}
    >
      {getButtonContent()}
    </MaterialButton>
  );
};

Button.defaultProps = {
  disabled: false,
  buttonType: 'button',
  onClick: null,
  className: '',
  icon: undefined,
  loading: false,
  variant: 'contained',
};

export default Button;