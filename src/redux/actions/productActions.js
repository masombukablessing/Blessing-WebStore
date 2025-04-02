// Product actions

export const fetchProducts = () => {
    return (dispatch) => {
      // Simulate fetching products from an API
      const products = [
        {
          id: 1,
          name: 'Wireless Headphones',
          price: 1500,
          image: 'https://unsplash.com/photos/a-pair-of-headphones-sitting-on-top-of-each-other-A6hzRnwR3vM', // Real image
        },
        {
          id: 2,
          name: 'Smartphone',
          price: 8000,
          image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8', // Real image
        },
        {
          id: 3,
          name: 'Laptop',
          price: 20000,
          image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8', // Real image
        },
      ];
      dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: products });
    };
  };
  