



interface CorrectTypes {
	nextGuess: any
	score: number
}

function CorrectScreen({nextGuess, score}: CorrectTypes){
	return(
		<div className="game-container__screen">
			<h1 className="game-container__screen-title">CORRECT!</h1>
			<h2 className="game-container__screen-score">Score: <span>+{score}</span></h2>
			<img 
				className="game-container__screen-gif" 
				src={`../../assets/images/results/win/${Math.ceil(Math.random() * 5)}.gif`} 
				alt="result gif"/>
			<button 
				onClick={nextGuess}
				className="game-container__screen-btn">NEXT QUOTE
			</button>
		</div>
	)
}


export default CorrectScreen;