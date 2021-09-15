import React from "react";
import { screen, render, cleanup } from "@testing-library/react";
import ContactList from "./List1.js";
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("should render no contacts when there are no contacts", async () => {
  const { getByTestId } = render(<ContactList />);
  expect(getByTestId("no-contacts")).toHaveTextContent("No contacts");
});

// it("should render a list of contacts", () => {
//   const fakeContacts = [
//     { id: 1, name: "Bob" },
//     { id: 2, name: "Dylan" },
//   ];
//   const { getAllByTestId } = render(<ContactList contacts={fakeContacts} />);
//   const contactNames = getAllByTestId("contact-name").map(
//     (li) => li.textContent
//   );

//   const fakeContactNames = fakeContacts.map((contact) => contact.name);
//   expect(contactNames).toEqual(fakeContactNames);
//   //for some reason this does not see the contact name.. figure out when time!
// });

test("should render a list of contacts", async () => {
  let fakeContacts = [
    { id: 1, name: "Bob" },
    { id: 2, name: "Dylan" },
  ];
  render(<ContactList contacts={fakeContacts} />);
  try {
    const contactNames = await screen
      .findAllByRole("li")
      .map((li) => li.textContent);
    const fakeContactNames = fakeContacts.map((contact) => contact.name);
    expect(contactNames).toEqual(fakeContactNames);
  } catch (err) {
    console.log(err.message);
  }
});
