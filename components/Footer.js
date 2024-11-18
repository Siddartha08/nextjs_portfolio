// components/Footer.js
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #343a40;
  color: white;
  padding-top: 4rem; 
  padding-bottom: 2rem;

`;

const Container = styled.div`
  width: 80%; // Adjust as needed
  margin: 0 auto; 
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap; 
  margin-right: -15px;
  margin-left: -15px;
`;

const Column = styled.div`
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;

  @
media (min-width: 768px) {
    flex: 0 0 50%; 
    max-width: 50%;
  }
`;

const Heading = styled.h5`
  margin-bottom: 0.5rem;
`;

const List = styled.ul`
  padding-left: 0;
  list-style: none;
`;

const ListItem = styled.li`
  margin-bottom: 0.5rem;
`;

const Link = styled.a`
  color: white;
  text-decoration: none; 

  &:hover {
    text-decoration: underline;
  }
`;

const Address = styled.address`
  margin-bottom: 1rem;
  font-style: normal; 
  line-height: 1.5;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Container>
        <Row>
          <Column>
            <Heading>Links</Heading>
            <List>
              <ListItem>
                <Link href="https://www.linkedin.com/in/james-j-p-emery-26318679/" legacyBehavior>
                  LinkedIn
                </Link>
              </ListItem>
              <ListItem>
                <Link href="https://github.com/Siddartha08" legacyBehavior>
                  GitHub
                </Link>
              </ListItem>
            </List>
          </Column>
          <Column>
            <Heading>Contact</Heading>
            <Address>
              <strong>James P. (JP) Emery</strong>
              <br />
              Houston, Texas
              <br />
              Email: jemery89@gmail.com
              <br />
              Phone: (918) 406-2760
            </Address>
          </Column>
        </Row>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
