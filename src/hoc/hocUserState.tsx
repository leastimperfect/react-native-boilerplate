import React, {Component, FunctionComponent} from 'react';
import {AppConsumer} from '../AppStateManager';

export function hocUserState( WrappedComponent: typeof Component | ( ( p: any ) => JSX.Element ) ) : FunctionComponent {

	class HOCUserState extends Component< {user: any, update: (state: any) => void} > {
		constructor( props: any ) {
			super( props );
		}

		userLogin = ( userName: string, password: string ) : Promise<any> => {
			// Try to log in with username and password
			return new Promise( res => {
				this.props.update( {
					user: {
						userName,
						name: 'Jon Doe',
						avatar: '',
					}
				} );
				if ( ! userName ) {
					alert( 'Username is required.' );
				} else if ( ! password ) {
					alert( 'Password is required.' );
				} else {
					console.log( `Logged in as ${userName} with password ${'*'.repeat( password.length )}` );
					return res( true );
				}
				res( false );
			} );
		}

		render() {
			return <WrappedComponent
				{...this.props}
				userLogin={this.userLogin}
			/>;
		}
	}

	return props => <AppConsumer>{ value => <HOCUserState user={value.user} update={value.update} {...props} /> }</AppConsumer>;
}