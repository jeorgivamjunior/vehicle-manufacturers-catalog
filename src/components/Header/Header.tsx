import { FC } from 'react';

import factoryImage from '../../assets/car.png';
import { HeaderContainer, ToolbarContainer, Title, Image } from './styled';

export const Header: FC = () => {
  return (
    <HeaderContainer position="relative">
      <ToolbarContainer>
        <Image src={factoryImage} />
        <Title variant="h4">Vehicle Manufacturers Catalog</Title>
      </ToolbarContainer>
    </HeaderContainer>
  );
};
