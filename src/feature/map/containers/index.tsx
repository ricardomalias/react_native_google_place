import { connect } from "react-redux";
import MapComponent from "../components";
import MapData from "../reducers";

import {getNearbyPlaces} from "../../../store/map/actions";

export default connect(
    MapData,
    {
        getNearbyPlaces
    }
)(MapComponent);
