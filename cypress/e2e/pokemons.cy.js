describe('Покупка аватара', function () {                                // название набора тестов
    it('e2e тест на покупку нового аватара для тренера № 1', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
         cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');   // вводим логин
         cy.get('#password').type('USER_PASSWORD');        // вводим пароль
         cy.get('.auth__button').click();                        // нажимаем кнопку Подтвердить
         cy.wait(2000);
         cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
         cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
         cy.get(':nth-child(1) > .shop__button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');                     // вводим номер карты
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');                             // вводим CVV карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');                           // вводим срок действия карты
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GIGA CHAD');                           // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
         cy.wait(2000);
         cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');     // проверяем наличие и видимость сообщения о успешной покупке
         cy.get('.payment__font-for-success').should('be.visible'); // проверяем наличие и видимость сообщения о успешной покупке
     });

     it('e2e тест на покупку нового аватара для тренера № 2', function () {   // название теста
        cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');   // вводим логин
        cy.get('#password').type('USER_PASSWORD');        // вводим пароль
        cy.get('.auth__button').click();                        // нажимаем кнопку Подтвердить
        cy.wait(2000);
        cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
        cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
        cy.get(':nth-child(2) > .shop__button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');                     // вводим номер карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');                             // вводим CVV карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');                           // вводим срок действия карты
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GIGA CHAD');                           // вводим имя владельца действия карты
        cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
        cy.wait(2000);
        cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');     // проверяем наличие и видимость сообщения о успешной покупке
        cy.get('.payment__font-for-success').should('be.visible'); // проверяем наличие и видимость сообщения о успешной покупке
    });

     it('e2e тест на покупку нового аватара для тренера № 3', function () {   // название теста
        cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');   // вводим логин
        cy.get('#password').type('USER_PASSWORD');        // вводим пароль
        cy.get('.auth__button').click();                        // нажимаем кнопку Подтвердить
        cy.wait(2000);
        cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
        cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
        cy.get(':nth-child(3) > .shop__button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');                     // вводим номер карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');                             // вводим CVV карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');                           // вводим срок действия карты
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GIGA CHAD');                           // вводим имя владельца действия карты
        cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
        cy.wait(2000);
        cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');     // проверяем наличие и видимость сообщения о успешной покупке
        cy.get('.payment__font-for-success').should('be.visible'); // проверяем наличие и видимость сообщения о успешной покупке
    });
    
    it('e2e тест на покупку нового аватара для тренера № 4', function () {   // название теста
        cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');   // вводим логин
        cy.get('#password').type('USER_PASSWORD');        // вводим пароль
        cy.get('.auth__button').click();                        // нажимаем кнопку Подтвердить
        cy.wait(2000);
        cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
        cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
        cy.get(':nth-child(4) > .shop__button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');                     // вводим номер карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');                             // вводим CVV карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');                           // вводим срок действия карты
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GIGA CHAD');                           // вводим имя владельца действия карты
        cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
        cy.wait(2000);
        cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
        cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
        cy.get('.payment__font-for-success').contains('Покупка прошла успешно');     // проверяем наличие и видимость сообщения о успешной покупке
        cy.get('.payment__font-for-success').should('be.visible'); // проверяем наличие и видимость сообщения о успешной покупке
    });
    it('e2e тест на покупку нового аватара для тренера № 5', function () {   // название теста
       cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
       cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');   // вводим логин
       cy.get('#password').type('USER_PASSWORD');        // вводим пароль
       cy.get('.auth__button').click();                        // нажимаем кнопку Подтвердить
       cy.wait(2000);
       cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
       cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
       cy.get(':nth-child(5) > .shop__button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
       cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');                     // вводим номер карты
       cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');                             // вводим CVV карты
       cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');                           // вводим срок действия карты
       cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GIGA CHAD');                           // вводим имя владельца действия карты
       cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
       cy.wait(2000);
       cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
       cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
       cy.get('.payment__font-for-success').contains('Покупка прошла успешно');     // проверяем наличие и видимость сообщения о успешной покупке
       cy.get('.payment__font-for-success').should('be.visible'); // проверяем наличие и видимость сообщения о успешной покупке
   });
   it('e2e тест на покупку нового аватара для тренера № 6', function () {   // название теста
      cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
      cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');   // вводим логин
      cy.get('#password').type('USER_PASSWORD');        // вводим пароль
      cy.get('.auth__button').click();                        // нажимаем кнопку Подтвердить
      cy.wait(2000);
      cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
      cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
      cy.get(':nth-child(6) > .shop__button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
      cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');                     // вводим номер карты
      cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');                             // вводим CVV карты
      cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');                           // вводим срок действия карты
      cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GIGA CHAD');                           // вводим имя владельца действия карты
      cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
      cy.wait(2000);
      cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
      cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
      cy.get('.payment__font-for-success').contains('Покупка прошла успешно');     // проверяем наличие и видимость сообщения о успешной покупке
      cy.get('.payment__font-for-success').should('be.visible'); // проверяем наличие и видимость сообщения о успешной покупке
  });
  it('e2e тест на покупку нового аватара для тренера № 7', function () {   // название теста
     cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
     cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');   // вводим логин
     cy.get('#password').type('USER_PASSWORD');        // вводим пароль
     cy.get('.auth__button').click();                        // нажимаем кнопку Подтвердить
     cy.wait(2000);
     cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
     cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
     cy.get(':nth-child(7) > .shop__button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
     cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');                     // вводим номер карты
     cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');                             // вводим CVV карты
     cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');                           // вводим срок действия карты
     cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GIGA CHAD');                           // вводим имя владельца действия карты
     cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
     cy.wait(2000);
     cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
     cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
     cy.get('.payment__font-for-success').contains('Покупка прошла успешно');     // проверяем наличие и видимость сообщения о успешной покупке
     cy.get('.payment__font-for-success').should('be.visible'); // проверяем наличие и видимость сообщения о успешной покупке
 });
 it('e2e тест на покупку нового аватара для тренера № 8', function () {   // название теста
    cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
    cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');   // вводим логин
    cy.get('#password').type('USER_PASSWORD');        // вводим пароль
    cy.get('.auth__button').click();                        // нажимаем кнопку Подтвердить
    cy.wait(2000);
    cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
    cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
    cy.get(':nth-child(8) > .shop__button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
    cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');                     // вводим номер карты
    cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');                             // вводим CVV карты
    cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');                           // вводим срок действия карты
    cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GIGA CHAD');                           // вводим имя владельца действия карты
    cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
    cy.wait(2000);
    cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
    cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
    cy.get('.payment__font-for-success').contains('Покупка прошла успешно');     // проверяем наличие и видимость сообщения о успешной покупке
    cy.get('.payment__font-for-success').should('be.visible'); // проверяем наличие и видимость сообщения о успешной покупке
});
it('e2e тест на покупку нового аватара для тренера № 9', function () {   // название теста
   cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
   cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');   // вводим логин
   cy.get('#password').type('USER_PASSWORD');        // вводим пароль
   cy.get('.auth__button').click();                        // нажимаем кнопку Подтвердить
   cy.wait(2000);
   cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
   cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
   cy.get(':nth-child(9) > .shop__button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
   cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');                     // вводим номер карты
   cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');                             // вводим CVV карты
   cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');                           // вводим срок действия карты
   cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GIGA CHAD');                           // вводим имя владельца действия карты
   cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
   cy.wait(2000);
   cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
   cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
   cy.get('.payment__font-for-success').contains('Покупка прошла успешно');     // проверяем наличие и видимость сообщения о успешной покупке
   cy.get('.payment__font-for-success').should('be.visible'); // проверяем наличие и видимость сообщения о успешной покупке
});
it('e2e тест на покупку нового аватара для тренера № 10', function () {   // название теста
   cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
   cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');   // вводим логин
   cy.get('#password').type('USER_PASSWORD');        // вводим пароль
   cy.get('.auth__button').click();                        // нажимаем кнопку Подтвердить
   cy.wait(2000);
   cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
   cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
   cy.get(':nth-child(10) > .shop__button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
   cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');                     // вводим номер карты
   cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');                             // вводим CVV карты
   cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');                           // вводим срок действия карты
   cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GIGA CHAD');                           // вводим имя владельца действия карты
   cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
   cy.wait(2000);
   cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
   cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
   cy.get('.payment__font-for-success').contains('Покупка прошла успешно');     // проверяем наличие и видимость сообщения о успешной покупке
   cy.get('.payment__font-for-success').should('be.visible'); // проверяем наличие и видимость сообщения о успешной покупке
});
it('e2e тест на покупку нового аватара для тренера № 11', function () {   // название теста
   cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
   cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');   // вводим логин
   cy.get('#password').type('USER_PASSWORD');        // вводим пароль
   cy.get('.auth__button').click();                        // нажимаем кнопку Подтвердить
   cy.wait(2000);
   cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
   cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
   cy.get(':nth-child(11) > .shop__button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
   cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');                     // вводим номер карты
   cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');                             // вводим CVV карты
   cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');                           // вводим срок действия карты
   cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GIGA CHAD');                           // вводим имя владельца действия карты
   cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
   cy.wait(2000);
   cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
   cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
   cy.get('.payment__font-for-success').contains('Покупка прошла успешно');     // проверяем наличие и видимость сообщения о успешной покупке
   cy.get('.payment__font-for-success').should('be.visible'); // проверяем наличие и видимость сообщения о успешной покупке
});
it('e2e тест на покупку нового аватара для тренера № 12', function () {   // название теста
   cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт https://pokemonbattle.ru/
   cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN');   // вводим логин
   cy.get('#password').type('USER_PASSWORD');        // вводим пароль
   cy.get('.auth__button').click();                        // нажимаем кнопку Подтвердить
   cy.wait(2000);
   cy.get('.header__container > .header__id').click({ force: true }); // Клик в шапке на аву тренера
   cy.get('[href="/shop"]').click();                               // нажимаем кнопку Магазин
   cy.get(':nth-child(12) > .shop__button').first().click({ force: true });   // кликаем Купить у первого доступного аватара
   cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996');                     // вводим номер карты
   cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');                             // вводим CVV карты
   cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');                           // вводим срок действия карты
   cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('GIGA CHAD');                           // вводим имя владельца действия карты
   cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
   cy.wait(2000);
   cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
   cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
   cy.get('.payment__font-for-success').contains('Покупка прошла успешно');     // проверяем наличие и видимость сообщения о успешной покупке
   cy.get('.payment__font-for-success').should('be.visible'); // проверяем наличие и видимость сообщения о успешной покупке
});
 });