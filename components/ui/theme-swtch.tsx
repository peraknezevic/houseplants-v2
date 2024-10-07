"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [isChecked, setIsChecked] = useState(
    resolvedTheme === "light" ? false : true,
  );
  const checkHandler = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
    setIsChecked(!isChecked);
  };
  return (
    <div className="absolute right-4 top-4">
      <label className="inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={isChecked}
          onChange={checkHandler}
        />
        <div className="peer relative h-6 w-11 rounded-full bg-gray-200 after:absolute after:start-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-emerald-700 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"></div>
        <span className="ms-3 text-sm font-medium uppercase text-gray-900 dark:text-gray-300">
          Dark Mode
        </span>
      </label>
    </div>
  );
}
