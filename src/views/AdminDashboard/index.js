import React from "react";
import "./styles.css";
import AdminDashboardSearchBar from '../../react-components/AdminDashboardSearchBar';

export default class AdminDashboard extends React.Component {


	render() {
		return (

      <div id='dashboardContainer'>

        <div className='dashboardSegment' id='profileDashboardSegment'></div>

        <div className='dashboardSegment' id='postDashboardSegment'>
					<h1 className='dashboardHeader'>Posts and Comments</h1>
        	<AdminDashboardSearchBar />
        </div>

      </div>

		);
	}
}
