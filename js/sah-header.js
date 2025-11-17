import {baseElement} from './base-element.js'

export class sahHeader extends baseElement{

static tagName = 'sah-header'

static styles = /*css*/`
header{
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
	header{
		background-color:#ccc;
	}
}
`

render = () => /*html*/`
<header loading="${this.loading}">
	Header!
</header>`

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