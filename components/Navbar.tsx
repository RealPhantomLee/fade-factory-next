import Link from 'next/link';

export const Navbar = () => (
    <nav className="navbar">
        <div className="logo">FADE FACTORY</div>
        <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/contact">Contact</Link></li>
        </ul>
    </nav>
);