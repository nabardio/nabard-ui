import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Nabard | Fight with code</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to
          {' '}
          <a href="https://nabard.io">Nabard.io!</a>
        </h1>

        <p className="description">
          Coming soon!
        </p>
      </main>

      <footer>
        <a href="https://github.com/nabardio">GitHub</a>
      </footer>

    </div>
  );
}
