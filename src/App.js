
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';
import BookEvent from './components/BookEvent';

function App() {
  const [hash, setHash] = useState(window.location.hash);
  const isBooking = hash === '#book-event';

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.title = isBooking ? 'Book an Event | Amit Sound System' : 'Amit Sound System';
    if (isBooking) {
      window.scrollTo(0, 0);
    } else if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [hash, isBooking]);

  return (
    <div>
      <Header />
      {isBooking ? <BookEvent /> : <Body />}
    </div>
  );
}

export default App;
