/**
 * Custom Elements
 * @copyright	SAH:2023
 * @author		S.A.H:<hashemi.sa@gmail.com>
 * @version		1.0.0:2023.07.01
 * @class
 * @public
 * @require		Chrome 76+ | Firefox 90+ | Safari 14.1+
 *
 * JS module without webserver:
 * Firefox: about:config > security.fileuri.strict_origin_policy:0
 * Chrome: start with the --allow-file-access-from-files flag
 */

// To do!
//import config from '../config.js'
//import * as library from './library.js'
//import styles from './components.css' with {type:'css'}
//import {baseStyle} from './components.css' with {type:'css'}

export class baseElement extends HTMLElement{

static tagName = 'base-element'
static observedAttributes = ['loading',]

#internals = null
_sheet = null
_style = null
_main = null
_section = null
//interval = null
loading = 'lazy'

constructor(...arg){
	super(...arg)

	this.attachShadow({mode:'open'})
	this.shadowRoot.innerHTML = this.#renderRoot()
	this.#internals = this.attachInternals()

	this._main = this.shadowRoot.querySelector('main')
	this._section = this._main.querySelector('section')

	//this.addEventListener('unhandledrejection',this)
	//this.addEventListener('click',this.onClick.bind(this))
}

/*
handleEvent(e){this[`on${e.type}`]?.(e)}

onunhandledrejection(e){
	console.error(this.constructor.name,'Error:',e?.message ?? e?.reason ?? e?.cause ?? '')
	this.dispatchEvent(new CustomEvent('error',{detail:e}))
}
*/

//onClick(e){}
//onChange(e){}

connectedCallback(){
	// To do: with import -> {type:'css'}
	//this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets,baseStyle]

	this.shadowRoot.adoptedStyleSheets = [this._sheet = new CSSStyleSheet()]
	this._sheet.replaceSync(this.constructor.stylesRoot + this.constructor.styles)

	this.update()
}

disconnectedCallback(){
	//this.interval && clearInterval(this.interval)
}

adoptedCallback(){}

update(){
	this._section.innerHTML = this.render()
	this.#internals.states?.add('--loaded')
}

attributeChangedCallback(atn,ov,nv){this[`attr_${atn}`]?.(ov,nv)}

attr_loading(ov,nv){this.loading = nv}

get lang(){return this.getAttribute('lang') ?? document.documentElement?.lang ?? 'fa'}
set lang(v='fa'){}
get dir(){return this.getAttribute('dir') ?? document.documentElement?.dir ?? getComputedStyle(document.documentElement)?.direction ?? 'rtl'}
set dir(v='rtl'){}

static stylesRoot = /*css*/`
:host{
	display:block;
	width:100%;
	height:100%;
}
:host,
:host *{box-sizing:border-box}
:host([hidden]){display:none}
:host([disabled]){
	pointer-events:none;
	cursor:default;
}
:host([resize]){
	resize:both;
	overflow:hidden;
}
main,
main.loading{
	position:relative;
	width:100%;
	height:100%;
	overflow:hidden;
	user-select:none;
}
main.loading{cursor:wait}
#_loading{
	position:absolute;
	z-index:101;
	inset:0;
	padding:0;
	margin:0;
	flex-flow:row nowrap;
	align-items:center;
	place-content:center;
	color:#fff;
	background-color:transparent;
	backdrop-filter:blur(10px);
	display:none;
}
#_loading::after{
	content:' ';
	flex:0 1 auto;
	border:4px solid #fff;
	border-top-color:#3498db;
	border-radius:50%;
	box-shadow:0 0 1px 0 #0004,inset 0 0 1px 0 #0004;
	width:15px;
	height:15px;
	aspect-ratio:1;
	display:block;
	animation:spin 1s linear infinite;
}
@keyframes spin{
	to{transform:rotate(360deg)}
}
main.loading > #_loading{display:flex}
@media screen and (max-width:640px){}
@media (orientation:landscape){}
@media (orientation:portrait){}
@supports not (display:grid){}`

#renderRoot = () => /*html*/`
<main>
	<section></section>
	<div id="_loading"></div>
</main>`

static styles = /*css*/``

render = () => /*html*/``

static define(){customElements.get(this.tagName) || customElements.define(this.tagName,this)}

/*
static{
	super.define()
	//customElements.get(this.tagName) || customElements.define(this.tagName,this)
	//customElements.get(this.tagName) || customElements.define(this.tagName,this,this.defineOptions)
}
*/

}

//customElements.get(baseElement.tagName) || customElements.define(baseElement.tagName,baseElement)