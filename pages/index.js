import Head from 'next/head';
import Sidebar from '../components/Sidebar';

export default function Home({ trendingResults, followResults, providers }) {
  return (
    <div className=''>
      <Head>
        <title>Home / Twitter</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-black min-h-screen flex max-w-auto mx-auto'>
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  );
}
