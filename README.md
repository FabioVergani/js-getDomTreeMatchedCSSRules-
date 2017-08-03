# js-getMatchedCSSRules > get-DomTree-MatchedCSSRules


collect:

javascript:(function(w){
 const pseudo2ignore=/::?(a(fter|ctive)|b(ackdrop|efore)|checked|d(efault|i(r\(.*\)|sabled))|e(mpty|nabled)|first-l(etter|ine)|f(ocus(-within)?|ullscreen)|hover|in(-range|determinate|valid)|link|not\(.*\)|o(ptional|ut-of-range)|placeholder(-shown)?|re(ad-(only|write)|quired)|selection|target|v(alid|isited)|-moz-(progress-bar|range-(progress|thumb|track))|-ms-(fill(-(low|upp)er)?|t(humb|rack))|-webkit-(progress-(bar|value)|slider-(runnable-track|thumb)))+/g,selectorpart=/^.*(?={)/,mediaMatch=w.matchMedia,MediaRule=w.CSSMediaRule,StyleRule=w.CSSStyleRule,foundedRules={Other:[],Unused:[],Used:[]};
 for(let f=function(x){
	const rules=x.cssRules;
	if(rules){
		const A=MediaRule, B=StyleRule, R=foundedRules;
		for(let test=mediaMatch,d=doc,rule,m=rules,l=m.length,x=R.Used,y=R.Unused,z=R.Other,i=0;i<l;++i){
			rule=m[i];
			if(rule instanceof A){
				if(test(rule.conditionText).matches){f(rule)}
			}else{
				if(rule instanceof B){
					for(let a=x,b=y,s,d=document,p=pseudo2ignore,q=selectorpart,g=[],m=rule.selectorText.split(','),l=m.length,i=0;i<l;++i){
						if(d.querySelector(p.test(s=m[i].trim())?s.replace(p,''):s)!==null){g.push(s)};
						if(g.length){a.push([g,rule.cssText.replace(q,'')])}else{b.push(s)}
					}
				}else{
					z.push(rule)
				}
			}
		}
	}
 },doc=w.document,m=doc.styleSheets,l=m.length,i=0;i<l;++i){f(m[i])};
 console.dir(foundedRules);
})(window);
