import Link from 'next/link';
export const Header = ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' },
  ];
  return (
    <nav className="navbar navbar-light bg-light">
      <Link href="/">
        <a className="navbar-brand">GitTix</a>
      </Link>

      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">
          {links
            .filter((linkConfig) => linkConfig)
            .map(({ label, href }) => (
              <li className="nav-item" key={href}>
                <Link href={href}>
                  <a className="nav-link">{label}</a>
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </nav>
  );
};