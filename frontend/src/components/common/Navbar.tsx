import styles from "./styles/Navbar.module.css"

import Image from 'next/image'

import facebook from "../../../public/facebook.png"
import instagram from "../../../public/instagram.png"

export default function Navbar() {
    return(
       <div className={styles.topbar}>
        <div className={styles.title}>
          <h1>Anniesland Christmas Trees</h1>
        </div>
        <div className={styles.nav}>

          <a href="https://www.instagram.com/annieslandchristmastrees/" target="_blank"><Image src={instagram} alt="Instagram Logo" className={styles.logo} /></a>
          <a href="https://www.facebook.com/Annieslandchristmastrees/" target="_blank"><Image src={facebook} alt="Facebook Logo" className={styles.logo} /></a>
          <div>
            <p>+44 7936 372761</p>
            <p>+44 7710 441771</p>
          </div>
        </div>
      </div>
    )
}