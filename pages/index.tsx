import React from "react";
import type { NextPage } from "next";

import Button from "@components/Button";
import AppThemeContext from "@components/ui/AppThemeContext";
import Example from "@components/Navbar";

const Home: NextPage = () => {
  const { changeTheme } = React.useContext(AppThemeContext);

  return (
    <>
      <Example />
      <Button
        bgColor="bg-purple-500 dark:bg-purple-300"
        hoverBgColor="hover:bg-purple-600 dark:hover:bg-purple-400"
        activeBgColor="active:bg-purple-700 dark:active:bg-purple-500"
        fgColor="text-white dark:text-black"
        onClick={changeTheme}
      >
        Text
      </Button>
    </>
  );
};

export default Home;
