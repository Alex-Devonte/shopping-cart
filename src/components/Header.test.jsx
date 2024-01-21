import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe('Header Component', () => {
    it('renders Header component and links correctly', () => {
        //BrowserRouter is need due to Link element needing router context
        render(<Header />, {wrapper: BrowserRouter});

        const homeLink = screen.getByRole('link', {name: /home/i});
        const shopLink = screen.getByRole('link', {name: /shop/i});
        const cartLink = screen.getByRole('link', {name: /cart/i});

        expect(homeLink).toBeInTheDocument();
        expect(shopLink).toBeInTheDocument();
        expect(cartLink).toBeInTheDocument();
    });

    it('navigates to correct routes', async () => {
        const user = userEvent.setup();
        render(<Header />, {wrapper: BrowserRouter});

        const homeLink = screen.getByRole('link', {name: /home/i});
        const shopLink = screen.getByRole('link', {name: /shop/i});
        const cartLink = screen.getByRole('link', {name: /cart/i});

        await user.click(homeLink);
        expect(window.location.pathname).toEqual('/');

        await user.click(shopLink);
        expect(window.location.pathname).toEqual('/shop');

        await user.click(cartLink);
        expect(window.location.pathname).toEqual('/cart');

    });
});