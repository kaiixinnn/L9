const categories = [
  {
    name: "Information Technology",
    id: "Information Technology",
    sessions: [
      {
        id: "C218",
        name: "UI/UX Design for Apps",
        speaker: { name: "Jane Doe", org: "UX Corp" },
        description: "Learn about user interface and user experience design for mobile applications."
      },
      {
        id: "C346",
        name: "Mobile App Development",
        speaker: { name: "John Smith", org: "App Tech Inc" },
        description: "Develop skills to build mobile applications for Android and iOS."
      }
    ]
  },
  {
    name: "Financial Technology",
    id: "Fin-Tech",
    sessions: [
      {
        id: "F101",
        name: "Blockchain Basics",
        speaker: { name: "Alice Brown", org: "FinTech Solutions" },
        description: "Explore the fundamentals of blockchain technology."
      },
      {
        id: "F102",
        name: "Digital Payments",
        speaker: { name: "Bob White", org: "PayWorld" },
        description: "Understand digital payment systems and their applications."
      }
    ]
  }
];

export function getSession({ sessionId, catId }) {
  return categories
    .find(({ id }) => id === catId)
    ?.sessions.find(({ id }) => id === sessionId);
}

export function getCategory(catId) {
  return categories.find(({ id }) => id === catId);
}

export function getCategories() {
  return categories.map(({ name, id }) => ({ name, id }));
}
 