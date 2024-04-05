const bgMusic = document.getElementById("bgMusic");
        const muteButton = document.getElementById("muteButton");

        muteButton.addEventListener("click", function() {
            if (bgMusic.muted) {
                bgMusic.muted = false;
                muteButton.textContent = "Mute";
            } else {
                bgMusic.muted = true;
                muteButton.textContent = "Unmute";
            }
        });

        document.getElementById("calculate").addEventListener('click', calculator);

        function calculator() {
            var nom1 = document.getElementById("first").value
            var nom2 = document.getElementById("second").value

            if ((nom1.toUpperCase()=== "MAYHEM" && nom2.toUpperCase()=== "MOLLY") ||
                (nom1.toUpperCase()=== "MOLLY" && nom2.toUpperCase()=== "MAYHEM") ||
                (nom1.toUpperCase()=== "TAKWA" && nom2.toUpperCase()=== "OSEMA") ||
                (nom1.toUpperCase()=== "OSEMA" && nom2.toUpperCase()=== "TAKWA")) {
                document.getElementById("res").innerHTML=nom1 + " & " + nom2+ " your love percentage is "+ "100%"
            }
            else{
                document.getElementById("res").innerHTML=nom1 + " & " + nom2+ " your love percentage is "+(Math.floor(Math.random() * 100) + 1).toString()+"%"
            }
        }
        const words = ['Husband', 'Love of my life', 'Dearest', 'Darling', 'Baby']
        const typingSpeed = 100
        const delayBetweenWords = 1000
        let index = 0
        let letterIndex = 0
        let currentWord = ''
        function typeNextLetter() {
            if (letterIndex < currentWord.length) {
                document.getElementById('typing-text').textContent += currentWord[letterIndex];
                letterIndex++;
                setTimeout(typeNextLetter, typingSpeed);
            } else {
                setTimeout(typeNextWord, delayBetweenWords);
            }
        }
        
        function typeNextWord() {
            document.getElementById('typing-text').textContent = ''
            currentWord = words[index]
            index = (index + 1) % words.length
            letterIndex = 0
            typeNextLetter()
        }
        typeNextWord();
        