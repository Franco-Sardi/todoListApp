import styles from "./Header.module.css";


interface HeaderProps {
  onToggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className={styles.header}>
      <button className={styles.hamburger} onClick={onToggleSidebar}>
        ☰
      </button>
      <h1>Mi App</h1>
    </header>
  );
};
