import { useState, useEffect } from "react";
import { updateTheme } from "../services/api";

export default function ThemeToggle({ profileId, currentTheme }) {

    const [theme, setTheme] = useState(currentTheme || "light");

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    const applyTheme = (themeValue) => {

        if (themeValue === "dark") {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }

    };

    const toggleTheme = async () => {

        const newTheme = theme === "light" ? "dark" : "light";

        setTheme(newTheme);

        try {

            await updateTheme(profileId, newTheme);

        } catch (error) {

            console.error("Theme update failed", error);

        }

    };

    return (

        <button
            className="btn btn-outline-secondary"
            onClick={toggleTheme}
        >
            {theme === "light" ? "🌙 Dark Mode" : "☀ Light Mode"}
        </button>

    );
}