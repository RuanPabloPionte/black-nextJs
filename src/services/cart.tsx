import { useEffect } from "react";
// Função para atualizar a lista de entradas no carrinho
const updateCartEntries = (cart) => {
  return cart.reduce((list, product) => {
    const entryIndex = findEntryIndex(list, product);

    if (entryIndex === -1) {
      list.push(createNewEntry(product));
    } else {
      incrementQuantity(list, entryIndex);
    }

    return list;
  }, []);
};

// Função para encontrar o índice de uma entrada no carrinho
const findEntryIndex = (list, product) => {
  return list.findIndex((entry) => entry.product.id === product.id);
};

// Função para criar uma nova entrada no carrinho
const createNewEntry = (product) => {
  return {
    product,
    quantity: 1,
  };
};

// Função para incrementar a quantidade de uma entrada no carrinho
const incrementQuantity = (list, index) => {
  list[index].quantity++;
};

useEffect(() => {
  const entriesList = updateCartEntries(cart);
  entriesList.sort((a, b) => a.product.id - b.product.id);
  setCartEntries(entriesList);
}, [cart]);
