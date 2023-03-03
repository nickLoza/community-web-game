

import characters from "./characters";




interface GameTypes{
	randomPhrase: string
	phraseAuthor: string
	verifyCharacter: Function
	score: number
}

const Game = ({ 
	randomPhrase,
	phraseAuthor,
	verifyCharacter,
	score
 }: GameTypes)=>{

 	

	return (
		<div className="game-container__game game">
			<p className="game__score">
				<span>Score: {score}</span>
			</p>

			<h1 className="game__title">Who said...?</h1>
			<p className="game__phrase">"{randomPhrase}"</p>

			<ul className="game__characters characters">
				{characters.map((character)=>{
					return(
					<li key={character.name} className="characters__li">
						<img 
							className="characters__img"
							title={character.name}
							onClick={()=>{
								verifyCharacter(character.name, phraseAuthor)
							}}
							src={`../../assets/images/heads/${character.srcName}.png`} alt=""/>
					</li>
					)
				})}
			</ul>

		</div>
	)
}

export default Game;