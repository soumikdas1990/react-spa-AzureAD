import { graphConfig } from "./authConfig";
import axios from 'axios'


/**
 * Attaches a given access token to a MS Graph API call. Returns information about the user
 * @param accessToken 
 */
export async function callMsGraph(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };

    return fetch(graphConfig.graphMeEndpoint, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}
export async function getAsset(accessToken) {
    const headers = new Headers();
    const bearer = `Bearer ${accessToken}`;

    headers.append("Authorization", bearer);

    const options = {
        method: "GET",
        headers: headers
    };
    const path = 'http://localhost:8081/api/v1/assets';

    //try {
   //     axios
    //      .get(path, {
    //        headers: {
    //          Authorization:bearer 
    //        }
    //      })
    //      .then(response => response.json())
    //  } catch (e) {
    //    console.log('###############################star4', e)
    //  }

    // return axios(graphConfig.graphMeEndpoint, options)
    //     .then(response => {
    //         console.log("response", response.json())
    //     })
    //     .catch(error => console.log('error', error));
    return fetch(path, options)
        .then(response => response.json())
        .catch(error => console.log(error));
}
