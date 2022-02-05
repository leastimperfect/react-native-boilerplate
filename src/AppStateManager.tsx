import React, {createContext} from 'react';

const appStateContext = createContext( {
	user: null,
	update: (state: any) => {}
} );

export const AppProvider = appStateContext.Provider;
export const AppConsumer = appStateContext.Consumer;
