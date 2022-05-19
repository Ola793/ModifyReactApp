import React, { memo } from "react";

export const SelectedLanguages = memo(
  ({ selectedLanguage, selectLanguageHandler }) => {
    const languages = ["All", "Javascript", "Ruby", "Java", "CSS", "Python"];

    return (
      <ul className = "languages">
        {languages.map((language, index) => (
          <li
            key = { index }
            style = {{
              color: selectedLanguage === language ? "#d0021b" : "#000000",
            }}
            onClick = {() => selectLanguageHandler(language)}
          >
            { language }
          </li>
        ))}
      </ul>
    );
  }
);
