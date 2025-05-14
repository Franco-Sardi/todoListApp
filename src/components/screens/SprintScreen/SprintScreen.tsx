import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSprint } from "../../../hooks/useSprint";
import { Sprint } from "../../ui/Sprint/Sprint";
import styles from "./SprintScreen.module.css";
import { Header } from "../../ui/header/Header";
import SideBar from "../../ui/sideBar/SideBar";
import { ISprint } from "../../../types/ISprint";

export const SprintScreen: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { sprints } = useSprint();
  const [sprint, setSprint] = useState<ISprint | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  useEffect(() => {
    const data = sprints.find((s) => s.id === id);
    if (data) setSprint(data);
  }, [id, sprints]);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <div>
      {/* Se le pasa la función para abrir/cerrar el sidebar */}
      <Header onToggleSidebar={toggleSidebar} />
      <div className={styles.mainContainer}>
        {/* Se envían las props para manejar la visibilidad */}
        <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className={styles.contentContainer}>
          {sprint ? <Sprint sprint={sprint} /> : <p>Cargando sprint...</p>}
        </div>
      </div>
      {/* Overlay para cerrar el sidebar al hacer clic fuera (en mobile) */}
      {isSidebarOpen && (
        <div className={styles.overlay} onClick={toggleSidebar}></div>
      )}
    </div>
  );
};
