import Head from 'next/head';
import Feed from '../components/Feed';
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
        <Feed />
        {/* Widgets */}

        {/* Modal */}
      </main>
    </div>
  );
}
