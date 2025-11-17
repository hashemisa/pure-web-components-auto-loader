import {baseElement} from './base-element.js'

export class sahFooter extends baseElement{

static tagName = 'sah-footer'

static styles = /*css*/`
footer{
	width:100%;
	height:fit-content;
	display:grid;
	place-content:center;
	align-items:center;
	grid-template-columns:auto;
	gap:0;
	padding:20px;
	background-color:#eee;
}
@media screen and (max-width:640px){
	footer{
		background-color:#ccc;
	}
}
`

render = () => /*html*/`
<footer loading="${this.loading}">
	Footer!
</footer>`

/*
static observedAttributes = [...this.observedAttributes,'delay']
attr_delay(ov,nv){this.delay = nv}
delay = 0
*/

/*
connectedCallback(){
	super.connectedCallback()
}
*/

static{super.define()}

}