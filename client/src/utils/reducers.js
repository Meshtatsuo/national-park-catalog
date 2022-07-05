import {
  ADD_TO_PLANNER,
  ADD_TO_FAVORITES,
  REMOVE_FROM_PLANNER,
  REMOVE_FROM_FAVORITES,
} from "./actions";

import { useReducer } from "react";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TO_PLANNER:
      return {
        ...state,
        planner_locs: [...action.planner_locs],
      };

    case REMOVE_FROM_PLANNER:
      let newPlanner = state.planner_locs.filter((loc) => {
        return loc.id !== action.id;
      });
      return {
        ...state,
        planner_locs: newPlanner,
      };

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: [...action.favorites],
      };

    case REMOVE_FROM_FAVORITES:
      let newFavorites = state.favorites.filter((loc) => {
        return loc.id !== action.id;
      });
      return {
        ...state,
        favorites: newFavorites,
      };
    default:
      return state;
  }
};

export function useLocReducer(initialState) {
  return useReducer(reducer, initialState);
}
