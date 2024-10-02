import { expect } from '@wdio/globals'


describe('Lojinha app', () => {
    it('Realizar login na lojinha', async () => {
       
        
        //O padrão Triple A
        //Arrange(Preparação)
        const usuario = 'admin2';
        const senha = 'admin';
        const txtUsuario = $('android=new UiSelector().packageName("com.example.lojinha").className("android.widget.EditText").instance(0)')
        const txtSenha = $('//android.view.View[@text="Senha"]/../android.widget.EditText')
        const btnEntrar = $('android=new UiSelector().text("ENTRAR")');
        const lblListaDeProduto = $('android=new UiSelector().packageName("com.example.lojinha").text("Lista de Produtos")');
        
        //Act (Ação)
        //Espera explicita
        //await driver.pause(5000)

        //Espera implicita
        await txtUsuario.waitForDisplayed();
        await txtSenha.waitForDisplayed();
        //setValue, ele limpa o campo e depois preenche
        //addValue, ele já preenche o valor
        await txtUsuario.setValue(usuario);
        await txtSenha.setValue(senha);
        await btnEntrar.click();
        const listaDeProduto = await lblListaDeProduto.getText();



        //Assert(Assertiva)
        expect(listaDeProduto).toEqual('Lista de Produtos');
        await driver.saveScreenshot('./teste.png')
    })
})

