const USERS = [
  {
    userId: 1,
    role: "user",
    firstName: "pino",
    lastName: "rossi",
    email: "pino@jojo.io",
    password: "pino.123",
  },
  {
    userId: 2,
    role: "supervisor",
    firstName: "gianni",
    lastName: "morandi",
    email: "gianni@jojolo.io",
    password: "gianni.123",
  },
  {
    userId: 3,
    role: "admin",
    firstName: "ferdinando",
    lastName: "verdi",
    email: "verdi@jojo.io",
    password: "verdi.123",
  },
];

const REQUEST = [
  {
    requestId: 1,
    userId: 1,
    title: "ferie",
    description: "chiedo permesso per le ferie del 15/5/26",
    state: "Accepted",
    chronology: [
      {
        date: "20/05/2025",
        state: "Submitted",
        descriptionState: "submitted request",
        user: "pino rossi",
      },
      {
        date: "23/05/2025",
        state: "Accepted",
        descriptionState: "accepted request",
        user: "gianni morandi",
      },
    ],
  },
  {
    requestId: 2,
    userId: 1,
    title: "rimborso spese",
    description: "chiedo un rimborso spese di €15.00 per il pranzo",
    state: "Pending",
    chronology: [
      {
        date: "23/05/2025",
        state: "Submitted",
        descriptionState: "submitted request",
        user: "pino rossi",
      },
    ],
  },
  {
    requestId: 3,
    userId: 1,
    title: "promozione",
    description: "chiedo una promozione lavorativa",
    state: "Rejected",
    chronology: [
      {
        date: "15/05/2025",
        state: "Submitted",
        descriptionState: "submitted request",
        user: "pino rossi",
      },
      {
        date: "26/05/2025",
        state: "Rejected",
        descriptionState: "rejected request",
        user: "gianni morandi",
      },
    ],
  },
];

module.exports = { REQUEST, USERS };
