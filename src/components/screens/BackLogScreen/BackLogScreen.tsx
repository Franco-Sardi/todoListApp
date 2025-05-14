import { useState } from "react";
import styles from './BackLogScreen.module.css';
import { Header } from "../../ui/header/Header";
import { ListTareas } from "../../ui/ListTareas/ListTareas";
import SideBar from "../../ui/sideBar/SideBar";

export const BackLogScreen = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Se le pasa la función para que el header pueda disparar la apertura/cierre */}
      <Header onToggleSidebar={toggleSidebar} />
      <div className={styles.mainContainer}>
        {/* Se carga el sidebar con la prop "isOpen" */}
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <ListTareas />
      </div>
      {/* Opcional: Agregamos un overlay para cerrar el sidebar al hacer clic fuera */}
      {isSidebarOpen && (
        <div className={styles.overlay} onClick={toggleSidebar}></div>
      )}
    </div>
  );
};
