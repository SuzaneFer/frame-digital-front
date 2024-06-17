import Image from "next/image";
import Button from "../../atoms/button/button";
import DesktopCardStyle from "./desktopCard.style";
import MicrosoftIcon from '@mui/icons-material/Microsoft';
interface DesktopCardProps {

}

const DesktopCard = ({

}: DesktopCardProps) => {
  console.log('teste teste')
  return (
    <DesktopCardStyle>
      <Image
        width={96}
        height={76}
        src={'/assets/logo-adm.svg'}
        alt="logo-adm"
      />
      <h1 className="headline-small">Frame Digital</h1>
      <h2 className="body-medium">Fixe e acompanhe suas fixações mensais de maneira rápida e eficiente</h2>
      <Button 
        type='primary' 
        label='Entrar com a Microsoft'
        icon={MicrosoftIcon}
      />
    </DesktopCardStyle>
  );
};

DesktopCard.defaultProps = {
  disabled: false,
  buttonType: 'button',
  onClick: null,
  className: '',
  icon: undefined,
  loading: false,
};

export default DesktopCard;
