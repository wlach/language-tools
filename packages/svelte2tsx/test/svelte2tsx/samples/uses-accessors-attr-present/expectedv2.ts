///<reference types="svelte" />
;function render() {

	 let foo: number = undefined/*Ωignore_startΩ*/;foo = __sveltets_1_any(foo);/*Ωignore_endΩ*/
	 let foo2 = undefined
	let clazz: string/*Ωignore_startΩ*/;clazz = __sveltets_1_any(clazz);/*Ωignore_endΩ*/
	
	 const bar: string = ''
;
async () => {  { svelteHTML.createElement("svelteoptions", {"accessors":true,});}
};
return { props: {foo: foo , foo2: foo2 , class: clazz , bar: bar}, slots: {}, getters: {bar: bar}, events: {} }}

export default class Input__SvelteComponent_ extends __sveltets_1_createSvelte2TsxComponent(__sveltets_1_partial(['foo','foo2','bar'], __sveltets_1_with_any_event(render()))) {
    get bar() { return render().getters.bar }
    get foo() { return render().props.foo }
    /**accessor*/
    set foo(_) {}
    get foo2() { return render().props.foo2 }
    /**accessor*/
    set foo2(_) {}
    get class() { return render().props.class }
    /**accessor*/
    set class(_) {}
}