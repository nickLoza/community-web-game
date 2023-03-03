import { useState } from "react";
import GameOver  from "./GameOver";
import Game  from "./Game";
import StartScreen from "./StartScreen";
import CorrectScreen from "./CorrectScreen";
import { quotesList } from "../../quotes-db/quotes";

type GameStateTypes = "start"|"playing"|"win"|"loss";

export function GameContainer(){

	const [ gameState, setGameState ] = useState<GameStateTypes>("start");
	const [ score, setScore ] = useState<number>(0)

	// to make sure user gets different quotes
	const [ seenQuotesIndex, setSeenQuotesIndex] = useState<Array<number>>([]);


	const [ actualPhrase, setActualPhrase ] = useState<string>("")
	const [ actualAuthor, setActualAuthor ] = useState<string>("")

	function getRandomPhrase(){
		let nonCheckedIndex = Math.floor(Math.random()*quotesList.length);
		if(!seenQuotesIndex.includes(nonCheckedIndex)){
			setActualPhrase(quotesList[nonCheckedIndex].quote)
			setActualAuthor(quotesList[nonCheckedIndex].author)
			setSeenQuotesIndex(prevArray=>[...prevArray, nonCheckedIndex])
		}else{
			getRandomPhrase()
		}

	}

	function startGame(){
		setGameState("playing");
		getRandomPhrase()
	}
	function resetGame(){
		setScore(0)
		setSeenQuotesIndex([])
		setGameState("playing");
		getRandomPhrase()

	}

	function verifyCharacter(userGuess:string, phraseAuthor: string){
		if(phraseAuthor === userGuess){
			setScore(prevScore=>prevScore+1)
			setGameState("win")
			return
		}
		setGameState("loss")
	}

	function renderSwitch(){
		switch(gameState){
			case "start": return <StartScreen start={startGame}/>;
			case "playing": return <Game randomPhrase={actualPhrase} phraseAuthor={actualAuthor} verifyCharacter={verifyCharacter} score={score}/>
			case "loss": return <GameOver resetGame={resetGame} score={score}/>
			case "win": return <CorrectScreen nextGuess={startGame} score={score}/>
		}
	}

	return (
		<div className="game-container">
			{renderSwitch()}
		</div>
	)
}

