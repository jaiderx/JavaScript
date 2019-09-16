 class Negociacao{
	 
	 constructor(Dta,Qtd,Vlr){
		 this._data = new Date(Dta.getTime());
		 this._quantidade = Qtd;
		 this._valor = Vlr;
		 Object.freeze(this);
	 }
	 
	 get Volume(){
		 return this._quantidade * this._valor;
	 }
	 
	 get Data(){
		 return new Date(this._data.getTime());
	 }
	 
	 get Quantidade(){
		 return this._quantidade;
	 }
	 
	 get Valor(){
		 return this._valor;
	 }
	 

 }