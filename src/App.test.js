import React from "react";
import ReactShallowRenderer from "react-test-renderer/shallow";
import Slider from "./Slider/Slider";

import { shallow } from "enzyme";

test("should render Slider correctly", () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Slider />);
  expect(renderer.getRenderOutput()).toMatchSnapshot();
});

/* test("should call handleClick on button click", () => {
  const handleClick = jest.fn();
  const wrapper = shallow(<Slider numCardsToShow={3} />);
  wrapper.find("button").simulate("click");
  expect(handleClick).toHaveBeenCalled();
}); */

/* test('Should have proper border-top, border-right & background-color when disabled', () => {
  const renderedComponent = shallow(<LeftArrow disabled />);
  expect(renderedComponent).toHaveStyleRule('background-color', '#B2B2B2');
  expect(renderedComponent).toHaveStyleRule('border-top', 'solid 2px #B2B2B2', {
    modifier: ':before',
  });
  expect(renderedComponent).toHaveStyleRule('border-right', 'solid 2px #B2B2B2', {
    modifier: ':before',
  });
}); */
