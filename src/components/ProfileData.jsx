import React from "react";

/**
 * Renders information about the user obtained from MS Graph
 * @param props 
 */
export const ProfileData = (props) => {
	console.log(props.assetData);



	return (
		<>
			{
				props.assetData ?
					<div id="profile-div">
						<table>
							<tr>
								<th>ID</th>
								<th>Asset Type</th>
								<th>Sub Type</th>
								<th>Serial Number</th>
								<th>Vendor Name</th>
								<th>MFGR Model Number</th>
								<th>Location</th>
								<th>IP Address</th>
								<th>MAC Address</th>
							</tr>
							{props.assetData.map((val, key) => {
								return (
									<tr key={key}>
										<td>{val.id}</td>
										<td>{val.assetType}</td>
										<td>{val.subType}</td>
										<td>{val.serialNumber}</td>
										<td>{val.vendorName}</td>
										<td>{val.mfgrModelNumber}</td>
										<td>{val.location}</td>
										<td>{val.ipAddress}</td>
										<td>{val.macAddress}</td>
									</tr>
								)
							})}
						</table>
					</div>
					:
					<div id="profile-div">
						<p><strong>First Name: </strong> {props.graphData.givenName}</p>
						<p><strong>Last Name: </strong> {props.graphData.surname}</p>
						<p><strong>Email: </strong> {props.graphData.userPrincipalName}</p>
						<p><strong>Id: </strong> {props.graphData.id}</p>
					</div>
			}
		</>
	);
};