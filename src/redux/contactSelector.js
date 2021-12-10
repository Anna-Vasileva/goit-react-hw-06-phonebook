export const getFilter = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;

export const getVisibleContact = (state) => {
  const filter = getFilter(state);
  const contacts = getContacts(state);
  const normalizeFilter = filter.toLowerCase();
  return contacts.filter((el) =>
    el.name.toLowerCase().includes(normalizeFilter)
  );
};
