import i18n from "../../../i18n/index";
import { render,fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";

import Game from "../Game";



describe("Game",()=>{

	test("should render content",()=>{
		const testPhrase = "test phrase"; 
		const testAuthor = "test author"; 
		const mockHandler = vi.fn();
		const GameComponent = render(<Game randomPhrase={testPhrase} phraseAuthor={testAuthor} verifyCharacter={mockHandler} score={0}/>)
		expect(GameComponent.queryByText(i18n.GAME.SCORE)).toBeDefined();
		const characterImg = GameComponent.getByTitle("Jeff Winger");
		fireEvent.click(characterImg);
		expect(mockHandler).toHaveBeenCalledOnce();
	})
})