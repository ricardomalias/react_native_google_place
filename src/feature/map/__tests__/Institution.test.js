import React from 'react';
import renderer from 'react-test-renderer';
import Institution from "../components";
import {shallow, mount} from "enzyme";
import sinon from "sinon"
import {InstitutionMenuItems} from "../containers/InstitutionMenuItems";


describe('<Institution />', () => {
    it('renders correctly', () => {
        const tree = renderer.create(<Institution />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('with shallow', () => {
        const wrapper = shallow(<Institution />);

        expect(wrapper.find('FlContainer')).toBeDefined();
        expect(wrapper.find('FlContainer')).toHaveLength(1);
    });

    // it('with mount', () => {
    //     const permissions = ["READ_OWN_GRADE"]
    //     Text.prototype.componentDidMount = jest.fn(e => e);
    //     mount(<Institution getInstitutionMemberPermission={() => {}} isLoadingData={false} permissions={permissions} />);
    //     const spy = sinon.spy(Institution.prototype, "componentDidMount");
    //     expect(spy).toHaveBeenCalledTimes(1);
    //     // const wrapper = mount(<Text>oi</Text>);
    //     // console.log(wrapper.debug())
    // });

    it('with permission has at least 1 child', () => {
        const permissions = ["READ_OWN_GRADE"]
        const wrapper = mount(<Institution getInstitutionMemberPermission={() => {}} isLoadingData={false} permissions={permissions} />);
        wrapper.setState(InstitutionMenuItems)
        wrapper.update();

        expect(wrapper.find('InstitutionMenuList')).toHaveLength(1)

        // console.log(wrapper.debug());
    });

    it('without permission has 0 child', () => {
        const permissions = []
        const wrapper = mount(<Institution getInstitutionMemberPermission={() => {}} isLoadingData={false} permissions={permissions} />);
        wrapper.setState(InstitutionMenuItems)
        wrapper.update();

        expect(wrapper.find('InstitutionMenuList')).toHaveLength(0)
    });
});