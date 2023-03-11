import i18n from "../../../i18n/index";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, beforeEach, vi } from "vitest";
import GameOver from "../GameOver";
import StartScreen from "../StartScreen";
import CorrectScreen from "../CorrectScreen";




describe("GameButtons",()=>{
	test("should execute prop resetGame on click",()=>{
		const mockHandler = vi.fn();
		const gameOver = render(<GameOver resetGame={mockHandler} score={0}/>);
		expect(gameOver.getByText(i18n.GAME.RESET__GAME)).toBeDefined();
		const resetBtn = gameOver.getByText(i18n.GAME.RESET__GAME);
		fireEvent.click(resetBtn)
		expect(mockHandler).toHaveBeenCalledOnce()
	}),
	test("should execute prop startGame on click",()=>{
		const mockHandler = vi.fn();
		const startScreen = render(<StartScreen start={mockHandler}/>);
		expect(startScreen.getByText(i18n.GAME.START_GAME)).toBeDefined();
		const startBtn = startScreen.getByText(i18n.GAME.START_GAME);
		fireEvent.click(startBtn)
		expect(mockHandler).toHaveBeenCalledOnce()
	}),
	test("should execute prop nextQuote on click",()=>{
		const mockHandler = vi.fn();
		const correctScreen = render(<CorrectScreen nextGuess={mockHandler} score={0}/>);
		expect(correctScreen.getByText(i18n.GAME.NEXT_QUOTE)).toBeDefined();
		const resetBtn = correctScreen.getByText(i18n.GAME.NEXT_QUOTE);
		fireEvent.click(resetBtn)
		expect(mockHandler).toHaveBeenCalledOnce()
	})

})