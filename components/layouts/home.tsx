"use client";
import { useCallback, useEffect, useState } from "react";
import Hero from "../sections/hero";
import Popup from "../sections/popup";
import Projects from "../sections/projects";
import Stacks from "../sections/stacks";
import Story from "../sections/story";

const HomeContainer = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopupHandler = () => {
    setIsPopupOpen(true);
  };
  const closePopupHandler = () => {
    setIsPopupOpen(false);
  };

  // ESC Key Handler
  const escKeyHandler = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closePopupHandler();
    }
  }, []);

  // Add Event Listener
  useEffect(() => {
    window.addEventListener("keydown", escKeyHandler);
    return () => window.removeEventListener("keydown", escKeyHandler);
  }, [escKeyHandler]);
  return (
    <main className="relative">
      {/* Popup */}
      {isPopupOpen && <Popup closePopupHandler={closePopupHandler} />}
      <Hero />
      <Story openPopupHandler={openPopupHandler} />
      <Stacks />
      <Projects />
    </main>
  );
};

export default HomeContainer;
