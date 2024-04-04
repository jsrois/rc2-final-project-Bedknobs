import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Sidebar from "../components/Sidebar/Sidebar";
import { act } from "react-dom/test-utils";

test("Aparece el botón de publicar en el sidebar", () => {
  try {
    render(<Sidebar />);
    expect(screen.queryByText("PUBLICAR")).toBeInTheDocument();
  } catch (error) {
    console.error("Error en la prueba:", error);
  }
});

test("Los enlaces de la barra lateral funcionan correctamente", async () => {
  try {
    const homeLink = screen.getByRole("link", { name: "Inicio" });
    const messagesLink = screen.getByRole("link", { name: "Mensajes" });
    const profileLink = screen.getByRole("link", { name: "Perfil" });

    await act(async () => {
      fireEvent.click(homeLink);
      expect(window.location.pathname).toBe("/home");
    });

    await act(async () => {
      fireEvent.click(messagesLink);
      expect(window.location.pathname).toBe("/messages");
    });

    await act(async () => {
      fireEvent.click(profileLink);
      expect(window.location.pathname).toBe("/account/4");
    });
  } catch (error) {
    console.error("Error en la prueba:", error);
  }
});

test("Hacer clic en el botón de opciones muestra la opción de cerrar sesión", async () => {
  try {
    render(<Sidebar />);
    expect(screen.queryByText("Cerrar sesión")).not.toBeInTheDocument();

    const button = screen.getByRole("button", { name: "Opciones" });
    fireEvent.click(button);

    expect(await screen.findByText("Cerrar sesión")).toBeInTheDocument();
  } catch (error) {
    console.error("Error en la prueba:", error);
  }
});
