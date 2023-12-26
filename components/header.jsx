import { themes } from "@/utils/data";
import styles from './header.module.scss';

const Header = () => {
    const onThemeSelect = (updatedTheme) => {
        const oldTheme = localStorage.getItem("theme");
        if (updatedTheme === oldTheme) return;

        const body = document.getElementsByTagName("body")[0];
        body.classList.remove(`theme-${oldTheme}`);
        body.classList.add(`theme-${updatedTheme}`);
        localStorage.setItem("theme", updatedTheme);
    };

    return (
        <header className={styles.header}>
            <div className={styles.themesList}>
                {themes.map((t,i) => {
                    return (
                        <div 
                            style={{ backgroundColor: t.bgColor }}
                            className={styles.theme} 
                            key={i} 
                            onClick={() => onThemeSelect(t.name)} 
                        />
                    );
                })}
            </div>
        </header>
    );
};

export default Header;