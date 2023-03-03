



interface GameOverTypes {
	resetGame: any
	score: number
}

function GameOver({resetGame, score}: GameOverTypes){
	return(
		<div className="game-container__screen">
			<h1 className="game-container__screen-title">GameOver</h1>
			<h2 className="game-container__screen-score">Your highest score: <span>{score}</span></h2>
			<img 
				className="game-container__screen-gif" 
				src={`../../assets/images/results/loss/${Math.ceil(Math.random() * 5)}.gif`} 
				alt="result gif"/>
			<button 
				onClick={resetGame}
				className="game-container__screen-btn">RESET GAME
			</button>
		</div>
	)
}


export default GameOver;