import React from "react";
import {
  AvatarStyled,
  RatingStyled,
  UserDescription,
  UserInformationContainer,
  Username,
} from "./UserInformation.style";

interface UserInformationProps {
  description?: string;
  name: string;
  picture: string;
  rating: number;
}

const UserInformation: React.FC<UserInformationProps> = ({
  description,
  name,
  picture,
  rating,
}) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <Username>{name}</Username>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
};

export default UserInformation;
