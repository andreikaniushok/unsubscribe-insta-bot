const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

async function unfollowAll(limit = 20) {
  let buttons = Array.from(document.querySelectorAll('button'));
  let unfollowedCount = 0;

  for (let button of buttons) {
    if (unfollowedCount >= limit) {
      console.log(`Достигнут лимит в ${limit} отписок.`);
      break;
    }

    if (button.innerText === 'Подписки' || button.innerText === 'Following') {
      button.click();  
      
      await delay(1000);  

      let confirmButton = Array.from(document.querySelectorAll('button')).find(btn => btn.innerText === 'Отменить подписку');
      if (confirmButton) {
        confirmButton.click();  
        unfollowedCount++;
        console.log(`Отписка выполнена: ${unfollowedCount}`);
        
        await delay(2000 + Math.random() * 2000);
      } else {
        console.log("Кнопка подтверждения 'Отменить подписку' не найдена, пропускаем...");
        await delay(1000);
      }
    }
  }
  
  console.log("Скрипт завершил выполнение.");
}


unfollowAll(10);  
