import React from "react";
import ScoreStars from "../score_stars";
import { shallow } from "enzyme";

const setup = () => {
  const props = {
    disableScore: false,
    score: 2.5,
  };

  const scoreStarsWrapper = shallow(<ScoreStars {...props} />);

  return {
    scoreStarsWrapper,
    props
  };
};

describe("ScoreStars", () => {
  const { scoreStarsWrapper, props } = setup();
  const stars = scoreStarsWrapper.find("i");
  test("should render five stars", () => {

    expect(stars.length).toEqual(5);

  });

  test("renders the correct full and empty stars", () => {

    expect(stars.find(".fa-star-half-o").length).toEqual(1);
    expect(stars.find(".fa-star").length).toEqual(2);
    expect(stars.find(".fa-star-o").length).toEqual(2);

  });

});
