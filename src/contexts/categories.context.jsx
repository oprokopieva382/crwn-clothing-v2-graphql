import { createContext, useState, useEffect } from "react";
import { gql, useQuery } from "@apollo/client";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

const COLLECTIONS = gql`
  query {
    collections {
      id
      title
      items {
        id
        name
        imageUrl
        price
      }
    }
  }
`;

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  const { loading, error, data } = useQuery(COLLECTIONS);

  console.log("loading", loading);
  console.log("data", data);
  const value = { categoriesMap };
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
