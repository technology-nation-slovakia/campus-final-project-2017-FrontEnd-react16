import dispatcher from '../dispatcher';
import axios from 'axios';



//there are 4 requests for each room separetly because when I wanted use genereator it would demand additional changes to babel
// and stuff that Im not familiar with yet
export function reloadMap() {
    // to get "No 'Access-Control-Allow-Origin' header is present on the requested resource" away
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
    // https://github.com/axios/axios/issues/853 --> if nothig else work try a proxi repeater (end of this issue)

    axios.get("https://my-json-server.typicode.com/technology-nation-slovakia/fakeFrontEndDB/1").then((data) => {

        // if there is ongoing event and next event that day, API sends Array of 2,
        // the ongoing event data[0] will add red color to
        if (data.data[0].start_date){
            data.data[0].colorCaffe = '#cc291f';
        }
        console.log("got the data! CAFFE", data);
        dispatcher.dispatch({type: "RELOAD_MAP_COFFE", data});
    });
    axios.get("https://my-json-server.typicode.com/technology-nation-slovakia/fakeFrontEndDB/2").then((data) => {
        if (data.data[0].start_date){
            data.data[0].colorTerrace = '#cc291f';
        }
        console.log("got the data! TERRACE", data);
        dispatcher.dispatch({type: "RELOAD_MAP_TERRACE", data});
    });
    axios.get("https://my-json-server.typicode.com/technology-nation-slovakia/fakeFrontEndDB/3").then((data) => {
        if (data.data[0].start_date){
            data.data[0].colorGreen = '#cc291f';
        }
        console.log("got the data! GREEN", data);
        dispatcher.dispatch({type: "RELOAD_MAP_GREEN", data});
    });
    axios.get("https://my-json-server.typicode.com/technology-nation-slovakia/fakeFrontEndDB/4").then((data) => {
        if (data.data[0].start_date){
            data.data[0].colorBrown = '#cc291f';
        }
        console.log("got the data! BROWN", data);
        dispatcher.dispatch({type: "RELOAD_MAP_BROWN", data});
    });
}