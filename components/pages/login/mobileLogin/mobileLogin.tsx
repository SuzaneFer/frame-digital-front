import Image from "next/image";
import Button from "../../../atoms/button/button";
import MobileCardStyle from "./mobileLogin.style";
import MicrosoftIcon from '@mui/icons-material/Microsoft';
interface MobileCardProps {

}

const MobileCard = ({

}: MobileCardProps) => {
  console.log('teste teste')
  return (
  <MobileCardStyle>
    <div className="header-card">
      <Image
        width={96}
        height={76}
        src={'/assets/logo-adm.svg'}
        alt="logo-adm"
      />
    </div>
    <div className="content-card">
      <h1 className="headline-small">Frame Digital</h1>
      <h2 className="body-medium">Fixe e acompanhe suas fixações mensais de maneira rápida e eficiente</h2>
      <Button 
        type='primary' 
        label='Entrar com a Microsoft'
        icon={MicrosoftIcon}
      />
    </div>
  </MobileCardStyle>
  );
};

MobileCard.defaultProps = {
  disabled: false,
  buttonType: 'button',
  onClick: null,
  className: '',
  icon: undefined,
  loading: false,
};

export default MobileCard;
