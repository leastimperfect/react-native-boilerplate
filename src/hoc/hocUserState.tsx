import React, {Component, FunctionComponent} from 'react';
import {AppConsumer} from '../AppStateManager';

export function hocUserState( WrappedComponent: typeof Component | ( ( p: any ) => JSX.Element ) ) : FunctionComponent {

	class HOCUserState extends Component< {user: any, update: (state: any) => void} > {

		private loginFields = {
			username: 'Username',
			password: 'Password',
		};

		private registrationFields = {
			name: 'Full name',
			username: 'Username',
			password: 'Password',
			passwordConfirm: 'Password confirmation',
		};

		constructor( props: any ) {
			super( props );
		}

		/**
		 *
		 * @param formData
		 * @param fields Object contains
		 * @param fieldMessage
		 */
		requiredInputValid( formData: any, fields: any, fieldMessage = false ) {
			console.log( formData, fields );

			for ( const fieldKey in fields ) {
				const msg: string = fieldMessage ? fields[fieldKey] : `${fields[fieldKey]} is required.`;

				if ( ! formData[fieldKey] ) {
					alert( msg );
					return false;
				}
			}

			return true;
		}

		userRegister = ( data: { name: string, username: string, password: string, passwordConfirm: string } ) => {
			// Try to log in with username and password
			return new Promise( res => {
				if ( this.requiredInputValid( data, this.registrationFields ) ) {

					alert( 'Todo: Registration logic.' );
					this.props.update( {
						user: {
							userName: data.username,
							name: 'Jon Doe',
							avatar: '',
						}
					} );
					return res( true );
				}
				res( false );
			} );

		}

		userLogin = ( data: { username: string, password: string } ) : Promise<boolean> => {
			// Try to log in with username and password
			return new Promise( res => {
				if ( this.requiredInputValid( data, this.loginFields ) ) {
					this.props.update( {
						user: {
							username: data.username,
							name: 'Jon Doe',
							avatar: '',
						}
					} );
					return res( true );
				}
				res( false );
			} );
		}

		render() {
			return <WrappedComponent
				{...this.props}
				userLogin={this.userLogin}
				userRegister={this.userRegister}
			/>;
		}
	}

	return props => <AppConsumer>{ value => <HOCUserState user={value.user} update={value.update} {...props} /> }</AppConsumer>;
}