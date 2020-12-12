import React from "react";
import "./styles.css";
import PostSearchBar from '../../react-components/PostSearchBar';
import UserSearchBar from '../../react-components/UserSearchBar';

export default class AdminDashboard extends React.Component {


	render() {
		return (

      <div id='dashboardContainer'>

        <div className='dashboardSegment' id='profileDashboardSegment'>
					<h1 className='dashboardHeader'>Users</h1>
					<UserSearchBar />
				</div>

        {/* <div className='dashboardSegment' id='postDashboardSegment'>
					<h1 className='dashboardHeader'>Posts and Comments</h1>
					<PostSearchBar />
        </div> */}

      </div>

		);
	}
}
