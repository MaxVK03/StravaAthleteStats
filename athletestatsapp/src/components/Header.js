import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav style={styles.nav}>
            <Link to="/" style={styles.link}>Home</Link>
            <Link to="/search" style={styles.link}>Search Activities</Link>
        </nav>
    );
};

const styles = {
    nav: {
        display: 'flex',
        padding: '10px',
        backgroundColor: '#333',
    },
    link: {
        margin: '0 10px',
        color: '#fff',
        textDecoration: 'none',
    },
};

export default Header;
