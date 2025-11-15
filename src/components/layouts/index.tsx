import { PropsWithChildren } from "react";
import Header from "../ui/header";

const MainLayout: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <main>
    <Header />
    {children}
    </main>
  );
};

export default MainLayout;