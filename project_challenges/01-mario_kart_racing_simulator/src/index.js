const characters = [
  {
    NAME: "Mario",
    SPEED: 4,
    MANEUVERABILITY: 3,
    POWER: 3,
    POINTS: 0,
    EMOJI: "👨",
  },
  {
    NAME: "Peach",
    SPEED: 3,
    MANEUVERABILITY: 4,
    POWER: 2,
    POINTS: 0,
    EMOJI: "👸",
  },
  {
    NAME: "Yoshi",
    SPEED: 2,
    MANEUVERABILITY: 4,
    POWER: 3,
    POINTS: 0,
    EMOJI: "🐢",
  },
  {
    NAME: "Bowser",
    SPEED: 5,
    MANEUVERABILITY: 2,
    POWER: 5,
    POINTS: 0,
    EMOJI: "🐲",
  },
  {
    NAME: "Luigi",
    SPEED: 3,
    MANEUVERABILITY: 4,
    POWER: 4,
    POINTS: 0,
    EMOJI: "👨‍🔧",
  },
  {
    NAME: "Donkey Kong",
    SPEED: 2,
    MANEUVERABILITY: 2,
    POWER: 5,
    POINTS: 0,
    EMOJI: "🦍",
  },
];

// display character list
function displayCharacters() {
  console.log("\n🎮 PERSONAGENS DISPONÍVEIS 🎮");
  console.log("==============================");
  characters.forEach((char, index) => {
    console.log(`${index + 1}. ${char.EMOJI} ${char.NAME}`);
    console.log(
      `   Velocidade: ${char.SPEED} | Manobrabilidade: ${char.MANEUVERABILITY} | Poder: ${char.POWER}`
    );
    console.log("--------------------------------");
  });
}

// select characters
function selectCharacters() {
  const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    displayCharacters();

    readline.question(
      "\n🔢 Digite o número do primeiro personagem: ",
      (firstChoice) => {
        const player1Index = parseInt(firstChoice) - 1;

        readline.question(
          "🔢 Digite o número do segundo personagem: ",
          (secondChoice) => {
            const player2Index = parseInt(secondChoice) - 1;

            readline.close();

            if (
              player1Index >= 0 &&
              player1Index < characters.length &&
              player2Index >= 0 &&
              player2Index < characters.length &&
              player1Index !== player2Index
            ) {
              // Criar cópias dos personagens para não modificar os originais
              const player1 = { ...characters[player1Index] };
              const player2 = { ...characters[player2Index] };

              resolve([player1, player2]);
            } else {
              console.log(
                "❌ Escolha inválida! Por favor, escolha números diferentes entre 1 e 6."
              );
              process.exit(1);
            }
          }
        );
      }
    );
  });
}

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
  }

  return result;
}

async function logRollResult(
  characterName,
  characterEmoji,
  block,
  diceResult,
  attribute
) {
  console.log(
    `${characterName} ${characterEmoji} 🎲 rolou um dado de ${block}: ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`\n🏁 RODADA ${round}`);
    console.log("============");

    // draw block
    let block = await getRandomBlock();
    console.log(`📦 Bloco: ${block}`);

    // roll the dice
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // skill test
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.SPEED;
      totalTestSkill2 = diceResult2 + character2.SPEED;

      await logRollResult(
        character1.NAME,
        character1.EMOJI,
        "velocidade",
        diceResult1,
        character1.SPEED
      );

      await logRollResult(
        character2.NAME,
        character2.EMOJI,
        "velocidade",
        diceResult2,
        character2.SPEED
      );
    }

    if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.MANEUVERABILITY;
      totalTestSkill2 = diceResult2 + character2.MANEUVERABILITY;

      await logRollResult(
        character1.NAME,
        character1.EMOJI,
        "manobrabilidade",
        diceResult1,
        character1.MANEUVERABILITY
      );

      await logRollResult(
        character2.NAME,
        character2.EMOJI,
        "manobrabilidade",
        diceResult2,
        character2.MANEUVERABILITY
      );
    }

    if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.POWER;
      let powerResult2 = diceResult2 + character2.POWER;

      console.log(
        `\n🥊 ${character1.NAME} ${character1.EMOJI} confrontou com ${character2.NAME} ${character2.EMOJI}!`
      );

      await logRollResult(
        character1.NAME,
        character1.EMOJI,
        "poder",
        diceResult1,
        character1.POWER
      );

      await logRollResult(
        character2.NAME,
        character2.EMOJI,
        "poder",
        diceResult2,
        character2.POWER
      );

      if (powerResult1 > powerResult2 && character2.POINTS > 0) {
        console.log(
          `🎯 ${character1.NAME} venceu o confronto! 🐢 ${character2.NAME} perdeu 1 ponto!`
        );
        character2.POINTS--;
      }

      if (powerResult2 > powerResult1 && character1.POINTS > 0) {
        console.log(
          `🎯 ${character2.NAME} venceu o confronto! 🐢 ${character1.NAME} perdeu 1 ponto!`
        );
        character1.POINTS--;
      }

      if (powerResult2 === powerResult1) {
        console.log("🤝 Confronto empatado! Nenhum ponto foi perdido");
      }

      // skip points check for clashes
      console.log("-----------------------------");
      continue;
    }

    // checking the winner of the round
    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`\n⭐ ${character1.NAME} marcou um ponto!`);
      character1.POINTS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`\n⭐ ${character2.NAME} marcou um ponto!`);
      character2.POINTS++;
    } else {
      console.log("\n🤝 Empate! Nenhum ponto concedido.");
    }

    console.log("-----------------------------");
  }
}

async function declareWinner(character1, character2) {
  console.log("\n🏆 RESULTADO FINAL");
  console.log("==================");
  console.log(
    `${character1.NAME} ${character1.EMOJI}: ${character1.POINTS} ponto(s)`
  );
  console.log(
    `${character2.NAME} ${character2.EMOJI}: ${character2.POINTS} ponto(s)`
  );

  if (character1.POINTS > character2.POINTS) {
    console.log(
      `\n🎉 ${character1.NAME} ${character1.EMOJI} venceu a corrida! Parabéns! 🏆`
    );
  } else if (character2.POINTS > character1.POINTS) {
    console.log(
      `\n🎉 ${character2.NAME} ${character2.EMOJI} venceu a corrida! Parabéns! 🏆`
    );
  } else {
    console.log("\n🤝 A corrida terminou em empate!");
  }
}

async function main() {
  console.log("\n\n====================================");
  console.log("    🏎️   MARIO KART SIMULATOR  🏎️     ");
  console.log("====================================");

  const [player1, player2] = await selectCharacters();

  console.log(
    `\n🏁🚨 Corrida entre ${player1.NAME} ${player1.EMOJI} vs ${player2.NAME} ${player2.EMOJI} começando...\n`
  );

  await playRaceEngine(player1, player2);
  await declareWinner(player1, player2);
}

// run the game
main().catch(console.error);
