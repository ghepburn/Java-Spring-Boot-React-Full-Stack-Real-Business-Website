import React, { Component } from "react";
import UserManager from "../managers/UserManager";
import User from './authContext/User';
import AuthContext from './authContext/AuthContext';

import BookingContext from './bookingContext/BookingContext';
import Booking from "./bookingContext/Booking";

import Notification from './notificationContext/Notification';
import NotificationContext from "./notificationContext/NotificationContext";

import Craft from './craftContext/Craft';
import CraftContext from "./craftContext/CraftContext";

import Settings from "./settingsContext/Settings";
import SettingsContext from "./settingsContext/SettingsContext";
import GetawayContext from "./getawayContext/GetawayContext";


class GlobalState extends Component {
	state = {
		user: new User(null),
		notification: new Notification(null, null, null),
		bookings: [],
		crafts: [],
		settings: new Settings(),
		getaways: []
	};


	// NOTIFICATION CONTEXT ------------------------------------


	sendNotification = (notification) => {
		this.setState({notification: notification});
		return notification;
	}

	removeNotification = (notification) => {
		this.setState({notification: new Notification(null, null, null)});
	}


	// AUTH CONTEXT ------------------------------------


	loginUser = async (user) => {
		this.setState({user:user});
		return user;
	}

	logoutUser = async () => {
		let user = new User(null);
		this.setState({user: user});
		return user;
	}

	changeUser = (user) => {
		this.setState({user: user});
		return user;
	}


	// BOOKING CONTEXT ------------------------------------


	setBookings = (bookings) => {
		this.setState({bookings: bookings});
	}

	editBooking = (booking) => {
		let bookings = this.state.bookings;
		for (let count =0; count < bookings.length; count++) {
			if (bookings[count].id == booking.id) {
				bookings[count] = booking;
			}
		}

	}

	addBooking = (booking) => {
		let bookings = this.state.bookings;
		bookings.push(booking);
		this.setState({bookings: bookings});
	}

	removeBooking = (bookingId) => {
		let bookings = this.state.bookings.filter(booking => booking.id != bookingId);
		this.setState({bookings: bookings});	
	}

	getBooking = (bookingId) => {
		let bookings = this.state.bookings;
		let booking = bookings.filter(booking => booking.id == bookingId)[0];
		return new Booking(booking.id, booking.startDate, booking.endDate, booking.isBooked, booking.isAvailable, booking.bookedDate, booking.bookedBy, booking.getawayId);
	}
 

	// CRAFT CONTEXT ------------------------------------
	getCrafts = (craftId) => {
		let craft = this.state.crafts.filter(craft => craft.id == craftId)[0];
		return craft;
	}

	setCrafts = (crafts) => {
		this.setState({crafts: crafts});
	}

	addCraft = (craft) => {
		let crafts = this.state.crafts
		crafts.push(craft);
		this.setCrafts(crafts);
	}

	removeCraft = (craftId) => {
		let crafts = this.state.crafts.filter(craft => craft.id != craftId);
		this.setCrafts(crafts);
	}

	editCraft = (craft) => {
		let crafts = this.state.crafts;
		for (let count=0; count < crafts.length; count++) {
			if (crafts[count].id === craft.id) {
				crafts[count] = craft;
			}
		}
	}

	// ADMIN SETTINGS CONTEXT ------------------------------------

	setSettings = (settings) => {
		this.setState({settings: settings});
	}

	// GETAWAY CONTEXT ------------------------------------

	setGetaways = (getaways) => {
		this.setState({getaways: getaways});
	}

	render() {
		return (
			<React.Fragment >
				<GetawayContext.Provider value={{getaways: this.state.getaways, setGetaways: this.setGetaways}} >
					<SettingsContext.Provider value={{settings: this.state.settings, setSettings: this.setSettings}} >
						<BookingContext.Provider value={{bookings: this.state.bookings, addBooking: this.addBooking, removeBooking: this.removeBooking, editBooking: this.editBooking, setBookings: this.setBookings, getBooking: this.getBooking}}>
							<AuthContext.Provider value={{user: this.state.user, loginUser: this.loginUser, logoutUser: this.logoutUser, changeUser: this.changeUser}} >
							<NotificationContext.Provider value={{notification: this.state.notification, sendNotification: this.sendNotification, removeNotification: this.removeNotification}} >
								<CraftContext.Provider value={{crafts: this.state.crafts, setCrafts: this.setCrafts, editCraft: this.editCraft, addCraft: this.addCraft, removeCraft: this.removeCraft, getCraft: this.getCraft}} >

									{this.props.children}

								</CraftContext.Provider>
							</NotificationContext.Provider >
							</AuthContext.Provider >
						</BookingContext.Provider >
					</SettingsContext.Provider>
				</GetawayContext.Provider>
          </React.Fragment >
		);
	}

}

export default GlobalState;