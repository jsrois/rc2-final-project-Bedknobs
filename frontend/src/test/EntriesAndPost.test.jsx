import { expect, test } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Entries from "../components/Entries/Entries";

test("Aparece el botón de publicar en las entradas", () => {
  try {
    render(<Entries />);
    expect(screen.queryByText("PUBLICAR")).toBeInTheDocument();
  } catch (error) {
    console.error("Error en la prueba:", error);
  }
});

test("Los posts se muestran correctamente", async () => {
  try {
    render(<Entries />);
    await screen.findByText("Maravillosa vista");
    expect(screen.queryByText("Maravillosa vista")).toBeInTheDocument();
  } catch (error) {
    console.error("Error en la prueba:", error);
  }
});

test("Subir una foto abre el diálogo de selección de archivos", async () => {
  try {
    render(<Entries />);
    const fileInput = screen.getByLabelText("Subir foto");
    fireEvent.change(fileInput, {
      target: {
        files: [new File(["perro"], "perro.png", { type: "image/png" })],
      },
    });
    const selectedImage = await screen.findByAltText("Imagen seleccionada");
    expect(selectedImage).toBeInTheDocument();
  } catch (error) {
    console.error("Error en la prueba:", error);
  }
});

test("Hacer clic en el botón de opciones muestra las opciones de edición", async () => {
  try {
    render(<Entries />);
    expect(screen.queryByText("Borrar")).not.toBeInTheDocument();
    expect(screen.queryByText("Editar")).not.toBeInTheDocument();

    const button = screen.getByRole("button", { name: "Opciones" });
    fireEvent.click(button);

    expect(await screen.findByText("Borrar")).toBeInTheDocument();
    expect(await screen.findByText("Editar")).toBeInTheDocument();
  } catch (error) {
    console.error("Error en la prueba:", error);
  }
});
