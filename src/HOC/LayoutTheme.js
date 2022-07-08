import React from "react";
import HeaderTheme from "./../components/HeaderTheme/HeaderTheme";

export default function LayoutTheme({ Component }) {
  return (
    <div>
      <HeaderTheme />
      <Component />
      <footer className="h-20 bg-blue-500 w-full text-center">
        This is footer
      </footer>
    </div>
  );
}
