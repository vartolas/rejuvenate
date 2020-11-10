import React from "react";
import "./styles.css";
import AdminDashboardSearchBar from '../../react-components/AdminDashboardSearchBar';

export default class AdminDashboard extends React.Component {


	render() {
		return (

      <div id='dashboardContainer'>
        <div class='dashboardSegment' id='profileDashboardSegment'>

        </div>
        <div class='dashboardSegment' id='postDashboardSegment'>
        <AdminDashboardSearchBar />
        </div>
      </div>

		);
	}
}
