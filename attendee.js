function logAttendeeName(attendee) {
    console.log(attendee.name);
  }
  
  function updateTicketPrice(attendee, newPrice) {
    attendee.ticketPrice = newPrice;
  }
  
  function updateTicketType(attendee, newType) {
    attendee.ticketType = newType;
  }
  
  function logTicketPrice(attendee) {
    console.log(attendee.ticketPrice);
  }
  
  function addCheckedInProperty(attendee) {
    attendee.checkedIn = false;
  }
  
  function removeEventProperty(attendee) {
    delete attendee.event;
  }
  
  // Export the functions
  module.exports = {
    logAttendeeName,
    updateTicketPrice,
    updateTicketType,
    logTicketPrice,
    addCheckedInProperty,
    removeEventProperty
  };
  