import { useState } from "preact/hooks";

const ChangeThemeButton = () => {
  const [theme, setTheme] = useState("garden");

  const toggleTheme = () => {
    const newTheme = theme === "garden" ? "forest" : "garden";
    setTheme(newTheme);
    document.querySelector("html").setAttribute("data-theme", theme);
  };

  return (
    <button className="btn btn-primary" onClick={toggleTheme}>
      {theme === "garden" ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ChangeThemeButton;
