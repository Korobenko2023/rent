// import { createSelector } from "@reduxjs/toolkit";

export const selectAutos = state => state.autos.autosItems;

export const selectVisible = state => state.autos.visibleItems;

export const selectIsLoading = state => state.autos.isLoading;

export const selectError = state => state.autos.error;

export const selectCurrentPage = (state) => state.autos.currentPage;

export const selectTotalPages = (state) => state.autos.totalPages;



// export const selectVisibleContacts = createSelector(
//   [selectContacts, selectFilter],
//   (contacts, filter) => {
//     return contacts.filter(contact => contact.name.toLowerCase()
//       .includes(filter.toLowerCase().trim()))
//   }
// );
