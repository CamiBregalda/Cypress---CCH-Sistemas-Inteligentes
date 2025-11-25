describe('Teste de Login', () => {
  it('Login com sucesso', () => {
    cy.visit('https://moodle.utfpr.edu.br/my/courses.php')
    cy.get('#username').type('a2272717');
    cy.get('#password').type('Guilherme.15');
    cy.get('#loginbtn').click();
    cy.get('#topofscroll').should('be.visible');
  })
  it('Login falho', () => {
    cy.visit('https://moodle.utfpr.edu.br/login/index.php');
    cy.get('#username').type('a_+_seu_ra');
    cy.get('#password').type('sua_senha');
    cy.get('#loginbtn').click();
    cy.get('#region-main div.alert').should('have.text', 'Nome de usuário ou senha errados. Por favor tente outra vez.')
  })
  
});

describe('Teste Nota no Curso', () => {
  it('Verificando a nota em um curso sem nota atribuída', function () {
    cy.visit('https://moodle.utfpr.edu.br/my/courses.php')
    cy.get('#username').type('a2272717');
    cy.get('#password').type('Guilherme.15');
    cy.get('#loginbtn').click();
    cy.get('#user-menu-toggle').click();
    cy.get('#carousel-item-main a[href="https://moodle.utfpr.edu.br/grade/report/overview/index.php"]').click({ force: true });
    cy.get('#grade-report-overview-52079_r4_c0 a').click();
    cy.get('#row_497813_52079 a.gradeitemheader').click();
    cy.get('#region-main td.submissionnotgraded').should('have.text', 'Não há notas');
  })

  it('Verificando a nota em um curso com nota atribuída', function () {
    cy.visit('https://moodle.utfpr.edu.br/my/courses.php')
    cy.get('#username').type('a2272717');
    cy.get('#password').type('Guilherme.15');
    cy.get('#loginbtn').click();
    cy.get('#user-menu-toggle').click();
    cy.get('#carousel-item-main a[href="https://moodle.utfpr.edu.br/grade/report/overview/index.php"]').click({ force: true });
    cy.get('#grade-report-overview-52079_r4_c0 a').click();
    cy.get('#row_497813_52079 a.gradeitemheader').click();
    cy.get('#region-main td.submissionnotgraded').should('have.text', 'Não há notas');
  })
});
