import { GameContainer } from "../index";
import i18n from "../../../i18n/index";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, beforeEach, vi } from "vitest";



describe("GameContainer", ()=>{

	test("should render the correct components",()=>{
		render(<GameContainer/>)
		expect(screen.getByText(i18n.GAME.START_GAME)).toBeDefined();
		const startGameBtn = screen.getByText(i18n.GAME.START_GAME);
		fireEvent.click(startGameBtn);
		expect(screen.queryByText(i18n.GAME.GAME__PAGE)).toBeDefined();
		const someHead = screen.getByTitle("Jeff Winger");
		fireEvent.click(someHead);
		expect(screen.getByTitle(/result/i)).toBeDefined();
	})
	
})





// find wat to test gameover without the render of gameContainer