import { themes } from "@/utils/data";
import Image from "next/image";

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
        <header className={"header"}>
            <div class="container mx-auto">
                <div className={"themes-list"}>
                    {themes.map((t,i) => {
                        return (
                            <div 
                                style={{ backgroundColor: t.bgColor }}
                                className={"theme"} 
                                key={i} 
                                onClick={() => onThemeSelect(t.name)} 
                                data-cursor-text={t.label}
                            >
                                { t.imgSrc && <Image src={`/images/themes/${t.imgSrc}`} alt={t.name} width={40} height={40} /> }
                            </div>
                        );
                    })}
                </div>

                <div>
                    <p>Frontend Developer</p>
                </div>
            </div>
        </header>
    );
};

export default Header;