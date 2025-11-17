/**
 * Web Components lazy autoLoader
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

const observer = new IntersectionObserver((entries,observer) => {
	entries.forEach(({isIntersecting,target}) => {
		if(isIntersecting){
			import(`./${target.localName}.js`).catch(console.error)
			observer.unobserve(target)
		}
	})
},{threshold:0.1,rootMargin:'0px'})

document.body.querySelectorAll(':not(:defined)').forEach(el => observer.observe(el))