import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import TestAxios from "./Api1.js";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";

jest.mock("axios");

it("should display loading text", () => {
  const { getByTestId } = render(<TestAxios />);
  expect(getByTestId("loading-text")).toHaveTextContent("loading...");
});

//here we're testing a button click so need it's id
it("should load and display the data", async () => {
  const url = "/greeting";
  const { getByTestId } = render(<TestAxios url={url} />);

  axiosMock.get.mockResolvedValueOnce({
    data: {
      greeting: "Hello, World",
    },
  });

  fireEvent.click(getByTestId("fetchButton"));

  const greetingData = await waitFor(() => getByTestId("data"));

  expect(greetingData).toHaveTextContent("Hello, World");
  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
});
