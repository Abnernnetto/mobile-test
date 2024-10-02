import { $ } from '@wdio/globals'

export default class ListaDeProdutosPage {
    get lblListaDeProduto() { return $('android=new UiSelector().packageName("com.example.lojinha").text("Lista de Produtos")') }

    async obterTextoLblListaDeProduto(){
        return await this.lblListaDeProduto.getText();
    }
}

