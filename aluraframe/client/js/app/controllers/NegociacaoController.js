class NegociacaoController{
			
		constructor(){
			let $ = document.querySelector.bind(document);
				this._inputData = $("#data");
				this._inputQuantidade = $("#quantidade");
				this._inputValor = $("#valor");
		}
		
	adiciona(event){
		event.preventDefault();

		console.log(typeof(this._inputData.value));
		console.log(this._inputData.value);
		
		let data = new Date(this._inputData.value.split('-'));
		console.log(data);
	
		//adicionar a negociação em uma lista
	}

}