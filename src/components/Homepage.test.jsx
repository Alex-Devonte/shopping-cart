import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./Homepage";

describe('Homepage Component', () => {
    it('renders Homepage component', () => {
        //BrowserRouter is need due to Link element needing router context
        render(<Homepage />, {wrapper: BrowserRouter});

        const shopNowButton = screen.getByRole('button', {name: /shop/i});
        expect(shopNowButton).toBeInTheDocument();
    });

    it('navigates to /shop page when "Shop Now" button is clicked', async () => {
        const user = userEvent.setup();
        render(<Homepage />, {wrapper: BrowserRouter});

        const shopNowButton = screen.getByRole('button', {name: /shop/i});

        await user.click(shopNowButton);
        expect(window.location.pathname).toEqual('/shop');
    });
});