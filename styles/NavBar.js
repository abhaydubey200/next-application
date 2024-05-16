import Link from 'next/link';

const NavBar = () => {
  return (
    <nav className="fixed bottom-0 w-full bg-gray-800 text-white">
      <ul className="flex justify-around">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/page2">Page 2</Link>
        </li>
        <li>
          <Link href="/page3">Page 3</Link>
        </li>
        <li>
          <Link href="/page4">Page 4</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
