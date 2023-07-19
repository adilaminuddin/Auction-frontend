'use client'
import React, { useEffect, useState } from 'react';
import { Switch } from '@material-tailwind/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';

const ThemeSwitcher: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const isDarkModeEnabled = localStorage.getItem('isDarkMode') === 'true';
    setIsDarkMode(isDarkModeEnabled);
  }, []);

  const handleThemeChange = (isChecked: boolean) => {
    setIsDarkMode(isChecked);
    localStorage.setItem('isDarkMode', isChecked.toString());

    // Ubah tema pada tag <html>
    const htmlTag = document.querySelector('html');
    if (htmlTag) {
      htmlTag.classList.toggle('dark', isChecked);
    }
  };

  return (
    <div>
      <Switch
        color="blue"
        checked={isDarkMode}
        onChange={handleThemeChange}
        checkedChildren={<MoonIcon className="text-yellow-500" />}
        uncheckedChildren={<SunIcon className="text-yellow-500" />}
      />
      <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  );
};

export default ThemeSwitcher;
