import { expect } from '@wdio/globals'
import LoginPage from '../pageObjects/login.page.js';
import ListaDeProdutosPage from '../pageObjects/listaDeProdutos.page.js';




describe('Lojinha app', () => {
    it('Realizar login na lojinha', async () => {
       
        //Arrange(Preparação)
        const usuario = 'admin2';
        const senha = 'admin';

        const loginPage = new LoginPage();
        const listaDeProdutosPage = new ListaDeProdutosPage();
        
        //Act (Ação) 
        await loginPage.logarNaLojinha(usuario, senha);

        //Assert(Assertiva)
        expect(await listaDeProdutosPage.obterTextoLblListaDeProduto()).toEqual('Lista de Produtos');
        await driver.saveScreenshot('./teste.png')
    })
})

