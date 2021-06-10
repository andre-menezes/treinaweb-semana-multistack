import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Avatar, Rating } from "@material-ui/core";

export const UserInformationContainer = styled("div")`
  align-items: center;
  background-color: ${({ theme }) => theme.palette.grey[50]};
  display: grid;
  gap: ${({ theme }) => `${theme.spacing(0.5)} ${theme.spacing(2)}`};
  grid-template-columns: 60px 1fr;
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
    "avatar name"
    "avatar rating"
    "avatar description";
  padding: ${({ theme }) => theme.spacing(3)};
`;

export const Username = styled("div")`
  color: ${({ theme }) => theme.palette.text.primary};
  font-weight: bolder;
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  grid-area: name;
`;

export const UserDescription = styled("div")`
  color: ${({ theme }) => theme.palette.text.secondary};
  font-size: ${({ theme }) => theme.typography.body2.fontSize};
  grid-area: description;
`;

export const AvatarStyled = styled(Avatar)`
  aspect-ratio: 1;
  grid-area: avatar;
  height: initial;
  width: 100%;
`;

export const RatingStyled = styled(Rating)`
  font-size: 14px;
  grid-area: rating;
`;
