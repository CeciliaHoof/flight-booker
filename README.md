# Description
This repo is a solution to the following prompt:

Build a component that books a one-way or return flight for specified dates.

## Requirements
The user can choose from two flight options: "One-way flight" and "Return flight".
Input date fields
The date input fields represent the departure date and return dates.
The return date input is displayed if the "Return flight" option is chosen, hidden otherwise.
Form validation should be done upon submission for invalid fields:
Dates are in the past.
Return date is before the departure date.
Upon successful submission, a message is displayed informing the user of the selection:
One-way flight: "You have booked a one-way flight on YYYY-MM-DD"
Return-flight "You have booked a return flight, departing on YYYY-MM-DD and returning on YYYY-MM-DD"