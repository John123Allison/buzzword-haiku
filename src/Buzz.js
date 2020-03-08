import React from 'react';

var buzzwords = require('buzzwords')
var syllable = require('syllable')

/* constants for syllables in a haiku */
const LINE_ONE_THREE = 5;
const LINE_TWO = 7;

export default function Buzz() {
	let lineOne = generateLine(5);
	let lineTwo = generateLine(7);
	let lineThree = generateLine(5);

	/* render */
	return (
		<div className="main">
			<div className = "header">
				<h1>The next big thing is...</h1>
			</div>
			<div className = "haiku">
				<p>{lineOne}</p>
				<p>{lineTwo}</p>
				<p>{lineThree}</p>
			</div>
		</div>
	);
}

function randomWord() {
	/* index of word we will pick out */
	let index = Math.floor((Math.random() * buzzwords.length) + 1); 

	/* pull a word from the array using that index */
	let word = buzzwords[index];
	return word;
}

function generateLine(maxSyllableLength) {
	let line = "";
	let numSyllables = 0;
	
	while(numSyllables !== maxSyllableLength) {
		let word = randomWord()
		console.log("searching..." + word); // debug

		if(syllable(word) + numSyllables <= maxSyllableLength) {
				line = line + " " + word;
				numSyllables += syllable(word);
			}
	}
	console.log("generated line: " + line);

	return line;
}
