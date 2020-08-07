# Front End Challenge - Credit Card Authorization (React Implementation)

## Description

![CC Authorization Demo](https://github.com/bryg217/frontend-challenge-credit-card-form/blob/master/cc-authorization-form.gif)

### Challenge Overview

Challenge 1 of 6 from [6 Frontend Challenges to Code](https://medium.com/better-programming/here-are-6-frontend-challenges-to-code-9952190c97cc).  It's a credit card authorization form without a
backend and **implemented in React**.

Some of the cool features include:

* Card Flipping Animation
  * Whenever CVV field is focused on, the card flips to show CVV (i.e. back) side
  * Likewise, whenever any other text field is focused on, the front of the card is shown
* Card Mirroring Form Values
  * As an example: Whenever the user types into the credit card number input field, the
    value is mirrored within the credit card's number container
* Card Event Listeners
  * If user clicks on the _Card Holder_ container, in credit card, that focuses the related
    input, which in this example would be the _Card Holder Name_ field
      * The same goes for all other containers, except for CVV field, as I do not think
        that field needs that feature
  * Additionally, whenever the expiration container is clicked it focuses on the month field
    not the year
* Basic Form Authorization
  * Error messages are displayed when appropriate

### Purpose

It's purpose is to help sharpen my skills in the following areas:

* Animations
* Form handling and validation
* Handling event listeners (e.g. when the fields change, it’ll print the values on the credit card)
* Understanding how to display and position elements on the page, especially the credit card overlapping 
  the form
* General Data Flow

### Additional Notes

* This mini-project has only been tested on Edge, Chrome, and Firefox

## Technical Overview

### Source

Given that this project was implemented in React, a component based approach was taken.  There are
three main components:

* `App`
* `CreditCard`
* `CreditCardForm`

#### App

This is the main component and it contains the "lifted" state for the "app".  Essentially, it contains
the state of the form and the state of the credit card.  Through this architecture, data flows easily
from component to component, via React props.

Note: Ideally, I like to `App` clean, where I just declare components and routes; however, for the sake of 
simplicity, I decided to not create a new "parent" component and just `App` as such.

#### Credit Card

This component is pretty self explanatory; it's the credit card component.  It passes data to its child
elements (e.g. Card Number `div`) via props, which are passed down from `App`.

#### Credit Card Form

Lastly, this component is also pretty self explanatory; it's the component that contains all of the
form fields.

### Tests

Test Cafe's testing suite was used to E2E test this project.

In order to run tests:

* On `localhost`: `npm run test-local`
* On `prod`: `npm run test-prod`

## Additional Observations

* Opportunities for Improvement
  * Refactor project to use `formik`
    * Given the objectives of this challenge, I decided to implement
      my own; however, for real world applications, I'd definitely use
      something like formik
  * Allow user to choose different types of credit cards; right now it is
    only Visa