// function Footer() {
//     return (
//       <footer>
//         <p>Copyright &copy; 2023 Creative Care Package. All rights reserved.</p>
//       </footer>
//     );
//   }
  
//   export default Footer;

import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
      <footer className={styles.footer}>
        {/* Copyright information */}
        <div className={styles.copyright}>
          &copy; {new Date().getFullYear()} Creative Care Package. All rights reserved.
        </div>
  
        {/* Contact information */}
        <div className={styles.contact}>
          <a href="mailto:info@creativecarepackage.com">info@creativecarepackage.com</a>
        </div>
  
        {/* Social media links */}
        <div className={styles.social}>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  