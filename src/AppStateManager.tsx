import React, {createContext} from 'react';

const appStateContext = createContext( {
	user: null,
} );

export const AppProvider = appStateContext.Provider;
export const AppConsumer = appStateContext.Consumer;

export class AppStateManager {
	private state: any;
	private setState: (s: any) => void;

	constructor( state: any, setState: (s: any) => void ) {
		this.state = state;
		this.setState = setState;
	}


}