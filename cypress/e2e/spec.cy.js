/*describe('Teste de Login', () => {
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
  it('Acessando um fórum', function () {
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
  it('Cadastrando-se em um novo curso', function () {
    cy.visit('https://moodle.utfpr.edu.br/login/index.php')
    cy.get('#username').type('a_+_seu_ra');
    cy.get('#password').type('yyawas86');
    cy.get('#loginbtn').click();
    cy.get('#page-wrapper a[role="menuitem"][href="https://moodle.utfpr.edu.br/?redirect=0"]').click();
    cy.get('#frontpage-category-names a[href="https://moodle.utfpr.edu.br/course/index.php?categoryid=10"]').click();
    cy.get('#region-main a[href="https://moodle.utfpr.edu.br/course/index.php?categoryid=373"]').click();
    cy.get('#region-main a[href="https://moodle.utfpr.edu.br/course/index.php?categoryid=378"]').click();
    cy.get('#region-main a[href="https://moodle.utfpr.edu.br/course/index.php?categoryid=441"]').click();
    cy.get('#region-main a[href="https://moodle.utfpr.edu.br/course/view.php?id=1463"]').click();
    cy.get('[name="enrolpassword"]').click();
    cy.get('#id_selfheader').click();
    cy.get('[name="enrolpassword"]').click();
    cy.get('[name="enrolpassword"]').type('SI27S');
    cy.get('[name="submitbutton"]').click();
    //cy.get('#yui_3_18_1_1_1764026911824_241').should('have.text', 'Sistemas Inteligentes Aplicados');
  });
});

describe('Teste de acesso a documentação', () => {
  it('acessando documentação com sucesso', () => {
    cy.visit('https://moodle.utfpr.edu.br/login/index.php')
    cy.get('#username').click();
    cy.get('#username').type('a_+_seu_ra');
    cy.get('#password').click();
    cy.get('#password').type('yyawas86');
    cy.get('#loginbtn').click();

    cy.get('#course-info-container-1457-4 span.multiline span:nth-child(2)').click();
    cy.get('#module-1982600 a.aalink').click();

    cy.url().should('include', 'pluginfile.php');
    cy.url().should('include', '.pdf')
  })

  it('acessando documentação com falha', () => {
    cy.visit('https://moodle.utfpr.edu.br/login/index.php')
    cy.get('#username').click();
    cy.get('#username').type('a_+_seu_ra');
    cy.get('#password').click();
    cy.get('#password').type('yyawas86');
    cy.get('#loginbtn').click();

    cy.get('#course-info-container-1457-4 span.multiline span:nth-child(2)').click();
    cy.get('#module-1982600 a.aalink').click();

    cy.get('#module-9999999 a.aalink').should('not.exist')
  })
});*/

describe('Teste de envio de atividade', () => {
  it.only('atividade enviada com sucesso', () => {
    cy.visit('https://moodle.utfpr.edu.br/login/index.php')
    cy.get('#username').click();
    cy.get('#username').type('a2554690', { delay: 100 });
    cy.get('#password').click();
    cy.get('#password').type('yyawas86', { delay: 100 });
    cy.get('#loginbtn').click();

    cy.get('#course-info-container-1457-4 span.multiline span:nth-child(2)').click();
    cy.get('#module-1982601 a.aalink').click();
    cy.get('#region-main button.btn').click();
    cy.get('.dndupload-target').selectFile(
      `cypress/fixtures/ExemploRelatório.docx`,
      { action: 'drag-drop', force: true }
    )

    cy.get('[name="submitbutton"]').click();
    cy.contains('Enviado para avaliação').should('be.visible')

  })

  it('atividade enviada sem sucesso', () => {
    cy.visit('https://moodle.utfpr.edu.br/login/index.php')
    cy.get('#username').click();
    cy.get('#username').type('a_+_seu_ra');
    cy.get('#password').click();
    cy.get('#password').type('yyawas86');
    cy.get('#loginbtn').click();

    cy.get('#course-info-container-1457-4 span.multiline span:nth-child(2)').click();
    cy.get('#module-1982601 a.aalink').click();
    cy.get('#region-main button.btn').click();
    cy.get('[name="submitbutton"]').click();
    cy.contains('Sem submissões').should('be.visible')

  })
});