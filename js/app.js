document.addEventListener('DOMContentLoaded', function() {
    fetch('db.json')
        .then(response => response.json())
        .then(data => {
            const charactersContainer = document.getElementById('characters');
            data.characters.forEach(character => {
                const characterDiv = document.createElement('div');
                characterDiv.classList.add('character');
                
                const image = document.createElement('img');
                image.src = character.image;
                image.alt = character.name;
                

                const detailsDiv = document.createElement('div');
                detailsDiv.style.display = 'none'; 
                
                
                const name = document.createElement('h3');
                name.textContent = character.name;
                

                const explanation = document.createElement('p');
                explanation.textContent = character.explanation;
                
                
                const voteCount = document.createElement('p');
                voteCount.textContent = `Votes: ${character.votes}`;
                voteCount.style.display = 'block'; 
                
                const voteButton = document.createElement('button');
                voteButton.textContent = 'Vote';
                voteButton.addEventListener('click', function() {
                    if (character.votes === 0) {
                        character.votes++;
                        explanation.style.display = 'block';
                        voteCount.textContent = `Votes: ${character.votes}`;
                    } else {
                        alert('You have already voted for this character.');
                    }
                    
                });

                image.addEventListener('click', function() {
                    if (detailsDiv.style.display === 'none') {
                        detailsDiv.style.display = 'block';
                    } else {
                        detailsDiv.style.display = 'none';
                    }
                });
                
                detailsDiv.appendChild(name);
                detailsDiv.appendChild(explanation);
                detailsDiv.appendChild(voteCount);
                detailsDiv.appendChild(voteButton);
                
                characterDiv.appendChild(image);
                characterDiv.appendChild(detailsDiv);
                
                
                
                charactersContainer.appendChild(characterDiv);
            });
        });
});
