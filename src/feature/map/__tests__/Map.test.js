import React from 'react';
import renderer from 'react-test-renderer';
import Map from "../components";
import {shallow, mount} from "enzyme";


describe('<Map />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Map getNearbyPlaces={()=>{}} isLoadingData={false} places={[]}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('with shallow', () => {
        const wrapper = shallow(<Map getNearbyPlaces={()=>{}} isLoadingData={false} places={[]} />);

        expect(wrapper.find('MapView')).toBeDefined();
        expect(wrapper.find('MapView')).toHaveLength(1);
    });
});
