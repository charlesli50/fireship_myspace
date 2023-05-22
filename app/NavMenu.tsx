import Link from "next/link";
import styles from "./NavMenu.module.css";
import Image from "next/image";

export default function NavMenu() {
  return (
    <nav className={styles.nav}>
      <Link href={"/"}>
        <Image
          src={"/logo.svg"}
          width={216}
          height={216}
          alt="next myspace logo"
        />
      </Link>
      <ul className={styles.links}>
        <li>
          <Link href={"/about"} className={styles.link}>
            About
          </Link>
        </li>
        <li>
          <Link href={"/blog"} className={styles.link}>
            Blog
          </Link>
        </li>
        <li>
          <Link href={"/users"} className={styles.link}>
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
}
