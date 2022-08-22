import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  CakeIcon,
  FollowAge,
  EditButton,
} from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>

      <ProfileData>
        <EditButton outlined>Editar Perfil</EditButton>
        <h1>Matheus Andrade</h1>
        <h2>@matheusandrade</h2>

        <p>
          Estudante da <a href="#">@UTFPR</a> e amo a <a href="#">@Helo</a>
        </p>

        <ul>
          <li>
            <LocationIcon />
            Campo Mourão, PR
          </li>
          <li>
            <CakeIcon />
            Nascido(a) em 18 de abril de 2002
          </li>
        </ul>

        <FollowAge>
          <span>
            seguindo <strong>24</strong>
          </span>
          <span>
            <strong>69 </strong> seguidores
          </span>
        </FollowAge>
      </ProfileData>

      <Feed />
    </Container>
  );
};

export default ProfilePage;
