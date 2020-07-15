import styles from './navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<ul className={styles.navbarNav}>
				<li className={styles.navItem}>
					<Link href="/">
						<a className={styles.navLink}>
							<i className="fas fa-home"></i>
							<span className={styles.linkText}>Home</span>
						</a>
					</Link>
				</li>

				<li className={styles.navItem}>
					<Link href="/">
						<a className={styles.navLink}>
							<i className="far fa-smile-beam"></i>
							<span className={styles.linkText}>About Me</span>
						</a>
					</Link>
				</li>

				<li className={styles.navItem}>
					<Link href="/">
						<a className={styles.navLink}>
							<i className="fas fa-laptop-code"></i>
							<span className={styles.linkText}>Work</span>
						</a>
					</Link>
				</li>

				<li className={styles.navItem}>
					<Link href="/">
						<a className={styles.navLink}>
							<i className="fas fa-tools"></i>
							<span className={styles.linkText}>Skills</span>
						</a>
					</Link>
				</li>

				<li className={styles.navItem}>
					<Link href="/">
						<a className={styles.navLink}>
							<i className="fas fa-file-alt"></i>
							<span className={styles.linkText}>Resume</span>
						</a>
					</Link>
				</li>

				<li className={styles.navItem}>
					<Link href="/">
						<a className={styles.navLink}>
							<i className="fab fa-linkedin-in"></i>
							<span className={styles.linkText}>LinkedIn</span>
						</a>
					</Link>
				</li>

				<li className={styles.navItem}>
					<Link href="/">
						<a className={styles.navLink}>
							<i className="fab fa-github"></i>
							<span className={styles.linkText}>Github</span>
						</a>
					</Link>
				</li>

				<li className={styles.navItem}>
					<Link href="/">
						<a className={styles.navLink}>
							<i className="fab fa-facebook"></i>
							<span className={styles.linkText}>Facebook</span>
						</a>
					</Link>
				</li>
			</ul>

			<style jsx>{`
				i {
					font-size: 2rem;
					margin: 0 1.5rem;
					text-align: center;
				}
			`}</style>
		</nav>
	);
}

export default Navbar;