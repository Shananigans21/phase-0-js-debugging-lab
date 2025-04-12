const {
    logAttendeeName,
    updateTicketPrice,
    updateTicketType,
    logTicketPrice,
    addCheckedInProperty,
    removeEventProperty
  } = require('../attendee');
  
  describe('Attendee functions', () => {
    let attendee;
  
    beforeEach(() => {
      attendee = {
        name: 'Shana',
        ticketPrice: 100,
        ticketType: 'VIP',
        event: 'Concert'
      };
    });
  
    test('logAttendeeName logs the name', () => {
      console.log = jest.fn();
      logAttendeeName(attendee);
      expect(console.log).toHaveBeenCalledWith('Shana');
    });
  
    test('updateTicketPrice updates the ticket price', () => {
      updateTicketPrice(attendee, 150);
      expect(attendee.ticketPrice).toBe(150);
    });
  
    test('updateTicketType updates the ticket type', () => {
      updateTicketType(attendee, 'General');
      expect(attendee.ticketType).toBe('General');
    });
  
    test('logTicketPrice logs the ticket price', () => {
      console.log = jest.fn();
      logTicketPrice(attendee);
      expect(console.log).toHaveBeenCalledWith(100);
    });
  
    test('addCheckedInProperty adds checkedIn property as false', () => {
      addCheckedInProperty(attendee);
      expect(attendee.checkedIn).toBe(false);
    });
  
    test('removeEventProperty removes the event property', () => {
      removeEventProperty(attendee);
      expect(attendee).not.toHaveProperty('event');
    });
  });
  