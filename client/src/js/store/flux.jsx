// Descomentar el siguiente código y completar las funciones según sea necesario.
// const getState = ({ getStore, getActions, setStore }) => {
const getState = ({ setStore }) => {    
    return {
        store: {
            // Aquí se declaran las variables globales.
        },
        
        actions: {
            // Funciones reutilizables para modificar el store.
            getMessage: async () => {
                // Implementación para obtener el mensaje
                try {
                  let response = await fetch("URL_DE_TU_API");
                  let data = await response.json();
                  setStore({ message: data.message });
                } catch (error) {
                  console.error("Error fetching message:", error);
                }
              },
        }
    };
};

export default getState;