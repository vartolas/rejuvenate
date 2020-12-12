import React from "react";
import "./styles.css";
import { Link, refresh } from "react-router-dom";

export default class SmallProfileBar extends React.Component {
	followUser(userid) {
		fetch(`/api/users/follow/${userid}`, {
			method: "post",
		});
	}

	getNormalBar() {
		const { name, username, imgSrc } = this.props;

		const linkTarget = {
			pathname: this.props.uid ? "/otherUserProfile" : "/userProfile",
			state: { uid: this.props.uid },
			key: 0,
		};
		console.log(this.props.followed);
		return (
			<div id="smallProfileBar">
				<Link
					onClick={() => {
						this.forceUpdate();
					}}
					to={linkTarget}
				>
					<div id="smallProfileBarLinkPartial">
						<img id="smallProfileImg" src={imgSrc} alt="profile pic" />
						<div id="smallProfileInfo">
							<h5 id="smallProfileName">{name}</h5>
							<h6 id="smallProfileUsername">@{username}</h6>
						</div>
					</div>
				</Link>
				<div id="buttonContainer">
					{this.props.followed ? (
						<div
							onClick={() => this.props.unfollow(this.props.user)}
							id="unfollowButtonSmall"
						>
							Unfollow
						</div>
					) : (
						<div
							onClick={() => this.followUser(this.props.uid)}
							id="unfollowButtonSmall"
						>
							follow
						</div>
					)}
				</div>
			</div>
		);
	}

	getRemoveUserButton() {
		return (
			<div
				className="removeUserButton"
				onClick={() => this.props.removeUser(this.props.uid)}
			></div>
		);
	}

	getRemovableBar() {
		const { name, username, imgSrc } = this.props;

		const linkTarget = {
			pathname: this.props.uid ? "/otherUserProfile" : "/userProfile",
			state: { uid: this.props.uid },
			key: 0,
		};

		return (
			<div id="smallProfileBar">
				<Link
					onClick={() => {
						this.forceUpdate();
					}}
					to={linkTarget}
				>
					<div id="smallProfileBarLinkPartial">
						<img id="smallProfileImg" src={imgSrc} alt="profile pic" />
						<div id="smallProfileInfo">
							<h5 id="smallProfileName">{name}</h5>
							<h6 id="smallProfileUsername">@{username}</h6>
						</div>
					</div>
				</Link>
				<div
					onClick={() => this.props.removeUser(this.props.uid)}
					id="unfollowButtonSmall"
				>
					Remove
				</div>
			</div>
		);
	}

	getUnfollowableBar() {
		const { name, username, imgSrc } = this.props;

		const linkTarget = {
			pathname: this.props.uid ? "/otherUserProfile" : "/userProfile",
			state: { uid: this.props.uid },
			key: 0,
		};

		return (
			<div id="smallProfileBar">
				<Link
					onClick={() => {
						this.forceUpdate();
					}}
					to={linkTarget}
				>
					<div id="smallProfileBarLinkPartial">
						<img id="smallProfileImg" src={imgSrc} alt="profile pic" />
						<div id="smallProfileInfo">
							<h5 id="smallProfileName">{name}</h5>
							<h6 id="smallProfileUsername">@{username}</h6>
						</div>
					</div>
				</Link>
				<div
					onClick={() => this.props.unfollow(this.props.user)}
					id="unfollowButtonSmall"
				>
					Unfollow
				</div>
			</div>
		);
	}

	render() {
		const { name, username, imgSrc } = this.props;

		const linkTarget = {
			pathname: this.props.uid ? "/otherUserProfile" : "/userProfile",
			state: { uid: this.props.uid },
			key: 0,
		};

		return (
			<div>
				{this.props.canUnfollow
					? this.getUnfollowableBar()
					: this.props.removeUser
					? this.getRemovableBar()
					: this.getNormalBar()}
			</div>
		);
	}
}
