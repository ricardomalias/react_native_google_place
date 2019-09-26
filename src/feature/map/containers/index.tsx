import { connect } from "react-redux";
import MapComponent from "../components";
import MapData from "../reducers";

// import {getInstitutionMemberPermission} from "../../../store/map/actions";

export default connect(
    MapData,
    {
        // getInstitutionMemberPermission
    }
)(MapComponent);
