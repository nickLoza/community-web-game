

interface StartScreenType{
	start: React.MouseEventHandler<HTMLButtonElement>
}

function StartScreen({start}:StartScreenType){
	return(
		<div className="game-container__screen">
			<h1 className="game-container__screen-title">Guess who said the quote!</h1>
			<p className="game-container__screen-p">Click the button below to start the game</p>
			<button 
				onClick={start}
				className="game-container__screen-btn">START GAME
			</button>
		</div>
	)
}


export default StartScreen;