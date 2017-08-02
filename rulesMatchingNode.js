function rulesMatching(node){
 function f(x){
	const m=x.cssRules;
	for(let e,i=0,l=m.length;i<l;++i){
		e=m[i];
		if(e instanceof A){
			if(g(e.conditionText).matches){f(e)}
		}else{
			if(e instanceof B && node.matches(e.selectorText)){r.push(e.cssText)}
		}
	}		
 } 
 const r=[],w=window, g=w.matchMedia, A=w.CSSMediaRule, B=w.CSSStyleRule;
 for(let i=0,m=w.document.styleSheets,l=m.length;i<l;++i){f(m[i])};
 return r;
}
console.clear();
//console.dir(rulesMatching($0));
console.log(rulesMatching($0).join('\n'));
