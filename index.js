const calculateDiscountedPrice = require('./discountCalculator');
const {
  logAttendeeName,
  updateTicketPrice,
  updateTicketType,
  logTicketPrice,
  addCheckedInProperty,
  removeEventProperty,
} = require('./attendee');

debugger;

console.log(calculateDiscountedPrice(10, 20)); // test

// Optional: test these functions manually
const attendee = {
  name: "Jane Doe",
  ticketPrice: 50,
  ticketType: "regular",
  event: "Concert"
};

logAttendeeName(attendee);
updateTicketPrice(attendee, 75);
logTicketPrice(attendee);
updateTicketType(attendee, "VIP");
addCheckedInProperty(attendee);
removeEventProperty(attendee);

console.log(attendee);
