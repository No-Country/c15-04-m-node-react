import { createStore } from "redux";

// Define la acción para cerrar el SidePanel
const closeSidePanel = () => ({
	type: "CLOSE_SIDE_PANEL",
});

// Define el estado inicial
const initialState = {
	isSidePanelOpen: true,
};

// Define el reducer para actualizar el estado
const reducer = (state = initialState, action: any) => {
	switch (action.type) {
		case "CLOSE_SIDE_PANEL":
			return {
				...state,
				isSidePanelOpen: false,
			};
		default:
			return state;
	}
};

// Crea la tienda de Redux
const store = createStore(reducer);

export default store;
