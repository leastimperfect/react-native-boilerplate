import React, {createContext} from 'react';

const appStateContext = createContext( {
	user: null,
} );

export class AppStateManager extends React.Component<any, any> {

	state = {
		user: null,
	};

	provideState() {
		return {
			...this.state,
		};
	}

	render() {
		return <appStateContext.Provider value={this.provideState()}>
			{this.props.children}
		</appStateContext.Provider>
	}
}

export const AppConsumer = appStateContext.Consumer;