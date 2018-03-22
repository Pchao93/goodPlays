import React from "react";
import Session from "../session";
import { shallow } from "enzyme";

const setupDefaultSignup = () => {
  const props = {
    sessionAction: "signup",
    errors: [],
    signup: jest.fn(),
    login: jest.fn(),
  };

  const sessionWrapper = shallow(<Session {...props} />);

  return {
    sessionWrapper,
    props
  };
};

const setupErrorSignup = () => {
  const props = {
    sessionAction: "signup",
    errors: ["error1", "error2", "error3"],
  };

  const sessionErrorWrapper = shallow(<Session {...props} />);

  return {
    sessionErrorWrapper,
    props
  };
};

describe("Session", () => {
  const { sessionWrapper, props } = setupDefaultSignup();
  const inputs = sessionWrapper.find("input");
  test("should render three inputs", () => {

    expect(inputs.length).toEqual(3);

  });

  const errors = sessionWrapper.find(".error-container");
  test("should not render errors by default", () => {
    expect(errors.length).toEqual(0);
  });
  
  test("signup should be called on submit", () => {
    const form = sessionWrapper.find("form");
    form.props().onSubmit({
      preventDefault: () => {}
    });
    expect(props.signup.mock.calls.length).toBe(1);
  });

  test("should update inputs on change", () => {
    const username = inputs.first();
    username.props().onChange({
      preventDefault: () => {},
      target: {value: "d"},
    });
    expect(sessionWrapper.state().username).toBe("d");
  });

  const { sessionErrorWrapper, errorProps } = setupErrorSignup();
  const errors2 = sessionErrorWrapper.find(".error-container");
  const error = errors2.find("li");
  test("should render errors if they are present", () => {
    expect(errors2.length).toEqual(1);
    expect(error.length).toEqual(3);
  });



});
