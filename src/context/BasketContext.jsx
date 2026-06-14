import { createContext, useContext, useState, useEffect } from "react";

// Creates an empty "container" that will hold and share basket data across the app
const BasketContext = createContext();

// export function to make the following available for other files to access. Also 2 things being exported instead of one
export function BasketProvider({ children }) {
  const [basket, setBasket] = useState(() => {
    // get stored basket data
    const saved = localStorage.getItem("basket");
    // if saved has a value, return as an array (id and quantity) else return []
    return saved ? JSON.parse(saved) : [];
  });

  // Runs after render
  useEffect(() => {
    // update and store basket number of items as a string
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  function addToBasket(product) {
    // setBasket receives the previous basket state as "prev"
    setBasket((prev) => {
      // Check if this product is already in the basket
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        // if the product already exists, loops through and increases its quantity by 1, leaving the others unchanged
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      // if the product is not in basket yet add it with a quantity of 1
      return [...prev, { ...product, quantity: 1 }];
    });
  }

  function removeFromBasket(id) {
    // setBasket receives the previous basket state as "prev"
    setBasket((prev) => {
      // Finds the item that matches the id passed in
      const existing = prev.find((item) => item.id === id);
      if (existing.quantity === 1) {
        // if only one left — remove the item from the basket entirely
        return prev.filter((item) => item.id !== id);
      }
      // if more than one, loop through and decrease its quantity by 1, leave others unchanged
      return prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      );
    });
  }

  return (
    // Makes basket, addToBasket, and removeFromBasket available to any component wrapped inside BasketProvider
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket }}>
      {children}
    </BasketContext.Provider>
  );
}

// Custom hook — any component can call useBasket() to access the basket context instead of importing BasketContext directly
export function useBasket() {
  return useContext(BasketContext);
}