const ATTACK_VALUE = 10;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  dealPlayerDamage(damage);

  if (currentMonsterHealth <= 0) {
    alert("You won!");
  } else if (currentPlayerHealth <= 0) {
    alert("You lost!");
  }
}

attackBtn.addEventListener("click", attackHandler);