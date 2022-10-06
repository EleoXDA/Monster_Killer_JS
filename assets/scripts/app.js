const ATTACK_VALUE = 10;
let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
  const damage = dealMonsterDamage(ATTACK_VALUE);
  dealPlayerDamage(damage);
}

attackBtn.addEventListener("click", attackHandler);