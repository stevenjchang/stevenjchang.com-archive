import { useState, useEffect } from 'react';

import { AppProps } from 'next/app';
import '../styles/global.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from 'next/link';

import { supabase } from '@/api';

// const MyApp_old = ({ Component, pageProps }: AppProps) => (
//   <Component {...pageProps} />
// );

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<{} | null>(null);
  async function checkUser() {
    const user1 = supabase.auth.user();
    setUser(user1);
  }

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async () =>
      checkUser()
    );
    checkUser();
    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return (
    <div>
      <nav className="p-6 border-b border-gray-300">
        <Link href="/">
          <span className="mr-6 cursor-pointer">Home</span>
        </Link>
        {user && (
          <Link href="/create-post">
            <span className="mr-6 cursor-pointer">Create Post</span>
          </Link>
        )}
        <Link href="/profile">
          <span className="mr-6 cursor-pointer">Profile</span>
        </Link>
        {user && (
          <Link href="posts/my-posts">
            <span className="mr-6 cursor-pointer">My Posts</span>
          </Link>
        )}
      </nav>
      <div className="py-8 px-16">
        <Component {...pageProps} />
      </div>
    </div>
  );
}
export default MyApp;
