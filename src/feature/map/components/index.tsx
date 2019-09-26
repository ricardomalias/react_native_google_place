import * as React from "react";
import {
    Dimensions,
    PermissionsAndroid,
    Platform,
    StyleSheet,
    View
} from "react-native";
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Geolocation from "@react-native-community/geolocation";
import {Place} from "../../../models/Place";

interface MapProps {
    getNearbyPlaces: Function
    isLoadingData: boolean
    places: Array<Place>
}

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE = 37.35233141;
const LONGITUDE = -122.0312186;
const LATITUDE_DELTA = 0.05022;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

export default class MapComponent extends React.Component<MapProps>{

    state = {
        region: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
        },
    };

    constructor(props) {
        super(props);
    }

    componentDidMount(): void {
        this.displayUserLocation()
    }

    displayUserLocation() {
        if(Platform.OS == "android") {
            PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            ).then(granted => {
                console.log(granted)
                // this.displayUserLocation()
            });
        }

        Geolocation.getCurrentPosition((position) => {
            this.props.getNearbyPlaces({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            })

            this.setState({
                region: {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }
            })
        })
    }

    render(){
        let {region} = this.state
        let places = []

        if(this.props.places !== undefined) {
            places = this.props.places
        }

        return (
            <View>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={this.state.region}
                    showsUserLocation={true}>
                    {
                        places.map((place: Place, index: number) => {
                            return <Marker
                                key={index}
                                title={place.name}
                                description={place.place_id}
                                coordinate={{
                                    latitude: place.geometry.location.lat,
                                    longitude: place.geometry.location.lng
                                }}/>
                        })
                    }
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    scrollview: {
        alignItems: 'center',
        paddingVertical: 40,
    },
    map: {
        width: width,
        height: height,
    },
});
