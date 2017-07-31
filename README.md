# js-getMatchedCSSRules

javascript:(function(w){
 function f(x){
	const m=x.cssRules;
	for(let e,i=0,l=m.length;i<l;++i){
		e=m[i];
		if(e instanceof A){
			if(g(e.conditionText).matches){f(e)}
		}else{
			if(e instanceof B && n.matches(e.selectorText)){r.push(e.cssText)}
		}
	}		
 } 
 const r=[], n=w.$0, g=w.matchMedia, A=w.CSSMediaRule, B=w.CSSStyleRule;
 for(let i=0,m=w.document.styleSheets,l=m.length;i<l;++i){f(m[i])};
 console.log(r.join('\n'));
})(window);
