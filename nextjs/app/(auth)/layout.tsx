import React, { ReactNode } from "react";
import Menu from "../components/Menu";

function layout({ children }: { children: ReactNode }) {
  return (
    <main className="w-screen h-screen m-auto bg-bg1">
        {children}
    </main>
  );
}

export default layout;
