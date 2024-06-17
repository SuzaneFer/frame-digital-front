import BaseButton, { ContentButton } from './button.style';
import { ElementType } from 'react';

interface ButtonProps {
  type: 'primary' | 'secondary';
  label: string;
  disabled?: boolean;
  buttonType?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  className?: string;
  icon?: ElementType;
  loading?: boolean;
}

const Button = ({
  type,
  label,
  onClick,
  disabled,
  buttonType,
  className,
  icon: Icon,
  loading,
}: ButtonProps) => {
  const getButtonContent = () => {
    return (
      <ContentButton>
        {Icon ? <Icon /> : null}
        <p className='label-large' data-cy={label}>{label}</p>
      </ContentButton>
    );
  };

  return (
    <BaseButton
      type={buttonType}
      onClick={loading ? () => null : onClick}
      className={`${className} button-${disabled ? 'disabled' : type}`}
      disabled={disabled}
      data-cy="baseButton"
    >
      {getButtonContent()}
    </BaseButton>
  );
};

Button.defaultProps = {
  disabled: false,
  buttonType: 'button',
  onClick: null,
  className: '',
  icon: undefined,
  loading: false,
};

export default Button;
