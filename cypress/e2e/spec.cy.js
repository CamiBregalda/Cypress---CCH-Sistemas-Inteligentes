describe('Teste de Login', () => {
  it('Login com sucesso', () => {
    cy.visit('https://moodle.utfpr.edu.br/my/courses.php')
    cy.get('#username').type('a_+_seu_ra');
    cy.get('#password').type('sua_senha');
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
    cy.get('#username').type('a_+_seu_ra');
    cy.get('#password').type('sua_senha');
    cy.get('#loginbtn').click();
    cy.get('#user-menu-toggle').click();
    cy.get('#carousel-item-main a[href="https://moodle.utfpr.edu.br/grade/report/overview/index.php"]').click({ force: true });
    cy.get('#grade-report-overview-52079_r4_c0 a').click();
    cy.get('#row_497813_52079 a.gradeitemheader').click();
    cy.get('#region-main td.submissionnotgraded').should('have.text', 'Não há notas');
  })

  it('Verificando a nota em um curso com nota atribuída', function () {
    cy.visit('https://moodle.utfpr.edu.br/my/courses.php')
    cy.get('#username').type('a_+_seu_ra');
    cy.get('#password').type('sua_senha');
    cy.get('#loginbtn').click();
    cy.get('#user-menu-toggle').click();
    cy.get('#carousel-item-main a[href="https://moodle.utfpr.edu.br/grade/report/overview/index.php"]').click({ force: true });
    cy.get('#grade-report-overview-52079_r4_c0 a').click();
    cy.get('#row_497813_52079 a.gradeitemheader').click();
    cy.get('#region-main td.submissionnotgraded').should('have.text', 'Não há notas');
  })
});

describe('Teste de acesso a um fórum', () => {
  it('Acessando um fórum', function() {
    cy.visit('https://moodle.utfpr.edu.br/my/courses.php')
    cy.get('#username').type('a_+_seu_ra');
    cy.get('#password').type('sua_senha');
    cy.get('#loginbtn').click();
    cy.get('#page-container-0 a[href="https://moodle.utfpr.edu.br/course/view.php?id=1457"][tabindex="-1"] div.card-img-top').click();
    cy.get('#module-1627226 a.aalink').click();
    cy.get('#page-header h1.h2').should('have.text', 'Avisos e Informes');
  });
});

describe('Teste Cadastro em Curso', () => {
  it('Cadastrando-se em um novo curso', function() {
    cy.visit('https://moodle.utfpr.edu.br/login/index.php')
    cy.get('#username').type('a_+_seu_ra');
    cy.get('#password').type('sua_senha');
    cy.get('#loginbtn').click();
    cy.get('#page-wrapper a[role="menuitem"][href="https://moodle.utfpr.edu.br/?redirect=0"]').click();
    cy.get('#frontpage-category-names a[href="https://moodle.utfpr.edu.br/course/index.php?categoryid=10"]').click();
    cy.get('#region-main a[href="https://moodle.utfpr.edu.br/course/index.php?categoryid=373"]').click();
    cy.get('#region-main a[href="https://moodle.utfpr.edu.br/course/index.php?categoryid=378"]').click();
    cy.get('#region-main a[href="https://moodle.utfpr.edu.br/course/index.php?categoryid=441"]').click();
    cy.get('#region-main a[href="https://moodle.utfpr.edu.br/course/view.php?id=1460"]').click();
    cy.get('[name="enrolpassword"]').click();
    cy.get('#id_selfheader').click();
    cy.get('[name="enrolpassword"]').click();
    //cy.get('[name="enrolpassword"]').type('PC27S');
    cy.get('[name="submitbutton"]').click();
    cy.get('#yui_3_18_1_1_1764026911824_241').should('have.text', '\n    Você está inscrito no curso.\n    \n        ×\n        Ignorar essa notificação\n    \n ');
    cy.get('#sectionid-11967-title a').should('have.text', 'Programação Concorrente e Distribuída (PC27S)');
  });
});
