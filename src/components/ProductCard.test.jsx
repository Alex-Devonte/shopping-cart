import { describe, expect, it, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from 'react-router-dom';
import ProductCard from './ProductCard';
import { CartContext } from './CartProvider';


//Create mock object to be used as prop in component
const mockProduct = {
    id: 1,
    title: 'Sample Product',
    price: 19.99,
    image: 'sample-image.jpg',
};

describe('ProductCard Component', () => {
    const mockCartContext = {
        addToCart: vi.fn()
    }

    it('renders ProductCard component', () => {
        render(<ProductCard product={mockProduct}/>, {wrapper: BrowserRouter});
    });

    it('quantity value updates when user types', async () => {
        const user = userEvent.setup();
        render(<ProductCard product={mockProduct}/>, {wrapper: BrowserRouter});

        //Get the quantity input
        const quantityInput = screen.getByLabelText(/quantity/i);


        //Simulate input value change
        await user.type(quantityInput, '5');

        //Check that the state updated correctly
        expect(quantityInput.value).toBe('5');
    });

    it('add to cart button is rendered and disabled on start', () => {
        render(
            <CartContext.Provider value={mockCartContext}>
                <ProductCard product={mockProduct} />
            </CartContext.Provider>,
            { wrapper: BrowserRouter }
        );

        const addToCartBtn = screen.getByRole('button', {name: /Add to cart/i});
        expect(addToCartBtn).toBeDisabled();
    });

    it('add to cart button becomes enabled after entering a valid quantity', async () => {
        const user = userEvent.setup();
        
        render(
            <CartContext.Provider value={mockCartContext}>
              <ProductCard product={mockProduct} />
            </CartContext.Provider>,
            { wrapper: BrowserRouter }
        );

          const quantityInput = screen.getByLabelText(/quantity/i);
          const addToCartBtn = screen.getByRole('button', { name: /Add to cart/i });
        
          await user.type(quantityInput, '5');
          expect(addToCartBtn).not.toBeDisabled();
    });
});
