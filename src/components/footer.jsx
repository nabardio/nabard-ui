import { Grid, Container } from 'semantic-ui-react';
import Link from 'components/link';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#a6a5a4', paddingTop: '2vh', marginTop: '5vh',
    }}
    >
      <Container>
        <Grid columns="equal" verticalAlign="middle" padded="vertically">
          <Grid.Row>
            <Grid.Column>
              <Link href="/#">About</Link>
              <Link href="/#">Contact us</Link>
            </Grid.Column>
            <Grid.Column textAlign="center">
              <Link href="https://github.com/nabardio">GitHub</Link>
              <Link href="https://nabard.io/api/docs">API</Link>
            </Grid.Column>
            <Grid.Column textAlign="right">
              <Link href="/#">Terms</Link>
              <Link href="/#">Privacy</Link>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Link href="https://www.freepik.com/free-photos-vectors/background">
                Some vectors created by freepik - www.freepik.com
              </Link>
              <Link href="https://creativecommons.org/licenses/by/4.0/">Licensed under CC BY 4.0</Link>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </footer>
  );
}
