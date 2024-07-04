# Description
This repo is a solution to the following prompt:

Build a component that books a one-way or return flight for specified dates.

## Requirements
The user can choose from two flight options: "One-way flight" and "Return flight". <br/><br/>
Input date fields<br/>
The date input fields represent the departure date and return dates.<br/>
The return date input is displayed if the "Return flight" option is chosen, hidden otherwise.<br/><br/>
Form validation should be done upon submission for invalid fields:<br/>
Dates are in the past.<br/>
Return date is before the departure date.<br/><br/>
Upon successful submission, a message is displayed informing the user of the selection:<br/>
One-way flight: "You have booked a one-way flight on YYYY-MM-DD"<br/>
Return-flight "You have booked a return flight, departing on YYYY-MM-DD and returning on YYYY-MM-DD"