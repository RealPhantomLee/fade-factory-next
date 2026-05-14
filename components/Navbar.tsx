'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navbar = () => {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <nav className="navbar" aria-label="Main Navigation">
            <div className="logo">FADE FACTORY</div>
            <ul className="nav-links">
                {['/', '/services', '/team', '/gallery', '/contact'].map(path => (
                    <li key={path}>
                        <Link 
                            href={path} 
                            className={isActive(path) ? 'active' : ''}
                            aria-current={isActive(path) ? 'page' : undefined}
                        >
                            {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};