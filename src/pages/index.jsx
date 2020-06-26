import Footer from 'components/footer';
import Header from 'components/header';
import RobotList from 'containers/robotList';
import Head from 'next/head';
import {
  Button, Container, Header as H, Image,
} from 'semantic-ui-react';

export default function Home() {
  return (
    <>
      <Head>
        <title>Nabard | Fight with code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />
        <section>
          <Image src="/bg.jpg" />
        </section>
        <section style={{ paddingTop: '5vh', paddingBottom: '5vh', backgroundColor: '#fff' }}>
          <RobotList limit={4} />
        </section>
        <section style={{
          paddingTop: '5vh', paddingBottom: '5vh', backgroundImage: 'url(bg.jpg)', height: '70vh',
        }}
        >
          <Container>
            <H as="h1" inverted>What is Nabard?</H>
            <div style={{
              width: '40%', borderLeft: '5px solid #fd9008', paddingLeft: '1em', color: 'white',
            }}
            >
              <p>
                Nabard is an awesome platform for devs to have fun with each other.
                You can join us too. Just sign up and create a robot to participate in contests.
                It&apos;s super easy and ituative.
                We&apos;re looking forward to see you in the community.
              </p>
            </div>
            <Button primary style={{ marginTop: '3vh' }}>More</Button>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  );
}
