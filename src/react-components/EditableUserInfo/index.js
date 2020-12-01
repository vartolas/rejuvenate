import React from "react";
import "./styles.css";
import {
	getFavouriteThings,
	getFavouriteThingsToImages,
} from "../../userData.js";

import FavouriteThing from "../FavouriteThing";

export default class UserInfo extends React.Component {
	state = {
		editable: false,
		canRemoveFavourites: false,
		canAddFavourites: false,
	};

	displayViewableBio() {
		return (
			<div id="viewableBio" className="bio">
				<span className="breakLongWords">{this.props.user.bio}</span>
			</div>
		);
	}

	displayEditableBio() {
		return (
			<div id="editableBioContainer">
				<textarea id="editableBio" maxLength="100" className="bio" type="text">
					{this.props.user.bio}
				</textarea>
				<span id="bioCharLimitNotice">100 character limit</span>
			</div>
		);
	}

	removeFavourite(favourite) {
		const favourites = this.props.user.favouriteThings;
		favourites.splice(favourites.indexOf(favourite), 1);
		this.props.setFavourites(favourites);
	}

	addFavourite(favourite) {
		const favourites = this.props.user.favouriteThings;
		favourites.push(favourite);
		this.props.setFavourites(favourites);
		this.enableRemovingFavourites();
	}

	saveEdits() {
		this.props.setBio(document.querySelector("#editableBio").value);

		this.setState((state, props) => ({
			editable: false,
			canAddFavourites: false,
			canRemoveFavourites: false,
		}));
	}

	enableRemovingFavourites(favourties) {
		this.setState((state, props) => ({
			editable: true,
			canAddFavourites: false,
			canRemoveFavourites: true,
		}));
	}

	enableAddingFavourites(favourties) {
		this.setState((state, props) => ({
			editable: true,
			canAddFavourites: true,
			canRemoveFavourites: false,
		}));
	}

	toggleEditState() {
		if (this.state.editable) {
			this.saveEdits();
		} else {
			this.enableRemovingFavourites();
		}
	}

	displayRemovableFavourites() {
		return (
			<div>
				<div
					onClick={this.enableAddingFavourites.bind(this)}
					id="addFavouriteThingsButton"
				>
					<span id="plusSymbol">+</span>
				</div>
				{this.props.user.favouriteThings.map((f, index) => {
					return (
						<FavouriteThing
							key={index}
							onEditableButtonClick={this.removeFavourite.bind(this)}
							addable={false}
							removable={true}
							index={index}
							name={f}
							imgSrc={getFavouriteThingsToImages()[f]}
						/>
					);
				})}
			</div>
		);
	}

	displayAddableFavourites() {
		const unusedFavs = getFavouriteThings().filter(
			(f) => !this.props.user.favouriteThings.includes(f)
		);
		return (
			<div>
				{unusedFavs.map((f, index) => {
					return (
						<FavouriteThing
							key={index}
							onEditableButtonClick={this.addFavourite.bind(this)}
							setFavourites={this.props.setFavourites}
							addable={true}
							removable={false}
							index={index}
							name={f}
							imgSrc={getFavouriteThingsToImages()[f]}
						/>
					);
				})}
			</div>
		);
	}

	displayUneditableFavourites() {
		return (
			<div>
				{this.props.user.favouriteThings.map((f, index) => {
					return (
						<FavouriteThing
							key={index}
							setFavourites={this.props.setFavourites}
							addable={false}
							removable={false}
							index={index}
							name={f}
							imgSrc={getFavouriteThingsToImages()[f]}
						/>
					);
				})}
			</div>
		);
	}

	render() {
		const {
			firstName,
			lastName,
			username,
			profilePic,
			numFollowers,
			numFollowing,
			bio,
			favouriteThings,
		} = this.props.user;

		return (
			<div id="userInfo">
				{/* Need to pull image, name, username, list of followers, list of users following, bio */}
				<div className="userInfoComponent" id="userInfoMain">
					<img src={profilePic} alt="profile pic" />
					<h1>{firstName + " " + lastName}</h1>
					<h3>@{username}</h3>
					{/*<ul>
            <li><b>Followers</b><br /><span className='follow-amount'>{ numFollowers }</span></li>
            <li><b>Following</b><br /><span className='follow-amount'>{ numFollowing }</span></li>
          </ul>*/}
					<div onClick={this.toggleEditState.bind(this)} id="bigProfileButton">
						{this.state.editable ? "Save Changes" : "Edit Profile"}
					</div>
					{this.state.editable
						? this.displayEditableBio()
						: this.displayViewableBio()}
				</div>
				<div className="userInfoComponent" id="favouriteThings">
					{/* Need to pull favourite things here, and use the user's name */}
					<h4>{firstName + "'s Favourites"}</h4>
					{/* These images are just placeholders for now and should NOT be submitted!! */}
					<div id="favouriteThingsContainer">
						{!this.state.editable ? this.displayUneditableFavourites() : ""}
						{this.state.canAddFavourites ? this.displayAddableFavourites() : ""}
						{this.state.canRemoveFavourites
							? this.displayRemovableFavourites()
							: ""}
					</div>
				</div>
			</div>
		);
	}
}
