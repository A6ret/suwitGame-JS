function randComputerChoice() {
    let num = Math.round(Math.random() * 2) + 1;

    return num;
};

function spinImgCom() {
    const imgComputer = document.querySelector('section.secCom img');
    const img = ['1', '2', '3'];
    const startTime = new Date().getTime();
    let i = 0;

    setInterval(function() {
        if (i == img.length) i = 0;
        if (new Date().getTime() - startTime > 1000) {
            clearInterval;
            return;
        }
        imgComputer.setAttribute('src', 'image/computer/' + img[i++] + '.jpg');
        console.log('imgComputer');
    }, 100);
};

function comVsPlayer(playerChoice) {
    const imgComputer = document.querySelector('section.secCom img');
    let computerChoice = randComputerChoice();

    //replace img computer
    imgComputer.setAttribute('src', 'image/computer/' + computerChoice + '.jpg');
    console.log('imgComputer');

    //logic game
    // Note : 1 = batu | 2 = gunting | 3 = kertas
    if (computerChoice == playerChoice) return "SERI!";
    if (computerChoice == 3) return (playerChoice == 2) ? "MENANG!" : "KALAH!";
    if (computerChoice == 2) return (playerChoice == 3) ? "KALAH!" : "MENANG!";
    if (computerChoice == 1) return (playerChoice == 2) ? "KALAH!" : "MENANG!";
};

const formName = document.querySelector('section.formName');
const namePlayer = formName.querySelector('.name');
const submitName = formName.querySelector('.submit');

submitName.addEventListener('click', function() {
    if (namePlayer.value.length == 0) {
        alert('Nama tidak boleh kosong!');
    } else {
        //remove form name
        formName.style.display = 'none';

        //add view game section
        const gameSection = document.querySelector('div.gameSection');
        gameSection.style.visibility = 'visible';

        const pSecPlayer = document.querySelector('section.secPlayer p');
        pSecPlayer.textContent = namePlayer.value;

        //start game section
        const imgPlayer = document.querySelectorAll('section.secPlayer .containImg img');
        for (let i = 0; i < imgPlayer.length; i++) {
            imgPlayer[i].addEventListener('click', function() {
                let playerChoice = imgPlayer[i].classList[1];
                playerChoice = parseInt(playerChoice);

                //logic game
                spinImgCom();

                setTimeout(function() {
                    let result = comVsPlayer(playerChoice);

                    //embed result game
                    const boxResult = document.querySelector('section.boxResult');
                    boxResult.textContent = result;
                }, 1000);
            });
        };
    };
});