import { AppBar, styled, Toolbar, Typography } from '@mui/material';

export const ToolbarContainer = styled(Toolbar)`
  flex-direction: column;
`;

export const HeaderContainer = styled(AppBar)`
  background-color: #e6f2ce;
`;

export const Image = styled('img')`
  width: 170px;
  padding: 20px;
`;

export const Title = styled(Typography)`
  padding-bottom: 30px;
  font-weight: bold;
  color: #7cb800;
`;
