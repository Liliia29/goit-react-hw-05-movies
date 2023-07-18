import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {
  StyledLink,
  Header,
  LinksList,
  Container,
  Main,
} from './SharedLayout.styled';
import Loader from 'components/Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <nav>
            <LinksList>
              <li>
                <StyledLink to="/">Home</StyledLink>
              </li>
              <li>
                <StyledLink to="/movies">Movies</StyledLink>
              </li>
            </LinksList>
          </nav>
        </Container>
      </Header>
      <Main>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </Main>
    </>
  );
};

export default SharedLayout;
