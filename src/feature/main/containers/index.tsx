import { connect } from "react-redux";
import MainComponent from "../components";
import mainData from "../reducers";

export default connect(
    mainData,
    {

    }
)(MainComponent);


