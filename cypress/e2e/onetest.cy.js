describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1');
         cy.get('#loginButton').click();
         cy.get('#messageHeader').contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
    })
    
    
    
    
    it('Проверка логики восстановления пароля', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('germanBOG@dolnikov.ru');
    cy.get('#restoreEmailButton').click();
    cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');

    })
    
    
    
    
    it('Верный логин и не верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio228');
        cy.get('#loginButton').click();
        cy.get('#messageHeader').contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })

   
   
   it('Не верный логин и верный пароль', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germa222n@dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Такого логина или пароля нет');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
   })


    it('Логин введен без @', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('germa222ndolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Нужно исправить проблему валидации');

   })
 

   it('Введем логин сторчными буквами', function () {
    cy.visit('https://login.qa.studio/');
    cy.get('#mail').type('GerMan@Dolnikov.ru');
    cy.get('#pass').type('iLoveqastudio1');
    cy.get('#loginButton').click();
    cy.get('#messageHeader').contains('Авторизация прошла успешно');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');

   })









 }) 

 describe('Покупка аватара', function () {

    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru');
         cy.get(':nth-child(1) > .auth__input').type('strogov.maximik@yandex.ru');
         cy.get('#password').type('Aleks7914');
         cy.get('.auth__button').click();
         cy.get('.header__btns > :nth-child(4)').click();
         cy.get('.available > button').first().click(); 
         cy.get('.credit').type('4620869113632996');                    
         cy.get('.k_input_ccv').type('125');                          
         cy.get('.k_input_date').type('1225');
         cy.get('.k_input_name').type('NAME');
         cy.get('.pay-btn').click(); 
         cy.get('#cardnumber').type('56456');                            
         cy.get('.payment__submit-button').click();    
         cy.contains('Покупка прошла успешно').should('be.visible');   

     })
 }) 