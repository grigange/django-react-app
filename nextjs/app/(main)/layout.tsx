import React, { ReactNode} from "react";
import Menu from "../components/Menu";
function layout({ children }: { children: ReactNode }) {
  return (
    <main className="flex relative h-screen w-screen overflow-hidden">
      <Menu active={true} />
      <section className="flex flex-col gap-4 w-full h-full overflow-y-auto bg-bg1 relative">
        {children}
      </section>
    </main>
  );
}

export default layout;
