//javascript:()(window);
(w=>{
    function f(x){
       const o=x.cssRules;
       if(o){
           for(let e,m=o,l=m.length,A=Mr,B=Ms,C=Mm,D=F,E=X,i=0;i<l;++i){
               e=m[i];
               if(e instanceof A){
                   if(C(e.conditionText).matches){f(e)}
               }else{
                   if(e instanceof B){
                       const t=e.cssText;
                       if(E[0].test(t)!==true){
                           for(let s,v,n=[],p=E[2],m=e.selectorText.split(','),l=m.length,i=0;i<l;++i){
								s=m[i].trim(); 
								v=p.test(s)?s.replace(p,'').trim():s;
								if(v!==''&&v!=='*'){if(d.querySelector(v)!==null){n.push(s)}}else{n.push(s)};
								if(n.length){D[0].push([n,t.replace(E[1],'')])}else{D[1].push(t)}
                           }						
                       }
                   }else{
                       D[2].push(e)
                   }
               }
           }
       } 
    }
    function g(x){const r=R;for(let m=F[0],l=m.length,i=0;i<l;++i){for(let n=m[i][0],t=n.length,j=0;j<t;++j){if(x.matches(n[j])){r.push(m.splice(i,1)[0]);--l}}}}
	const R=[],F=[[],[],[],[]],d=w.document,Mr=w.CSSMediaRule,Ms=w.CSSStyleRule,Mm=w.matchMedia,Mi=CSSImportRule,Mf=CSSFontFaceRule,Mk=CSSKeyframesRule,X=[/^.*{\s*}/,/^.*(?={)/,/::?(a(fter|ctive)|b(ackdrop|efore)|checked|d(efault|i(r\(.*\)|sabled))|e(mpty|nabled)|first-l(etter|ine)|f(ocus(-within)?|ullscreen)|hover|in(-range|determinate|valid)|link|not\(.*\)|o(ptional|ut-of-range)|placeholder(-shown)?|re(ad-(only|write)|quired)|selection|target|v(alid|isited)|-moz-(progress-bar|range-(progress|thumb|track))|-ms-(fill(-(low|upp)er)?|t(humb|rack))|-webkit-(progress-(bar|value)|slider-(runnable-track|thumb)))+/g];
    let V=['*'],e=d.documentElement;        
	for(let m=d.styleSheets,l=m.length,i=0;i<l;++i){f(m[i])};
    if(e.children.length!==0){const o=d.createTreeWalker(e,1,null);do{g(e);let n=e.firstElementChild;n!==null?e=n:(n=e.nextElementSibling,n!==null?e=n:(o.currentNode=e,e=o.nextNode()))}while(e!==null)}else{g(e)};
	e=[[]];
	for(let n,o=V,k=e,x,a,b,m=R,l=m.length,z=1,i=0;i<l;++i){
		x=m[i];
		a=x[0].join(',');
		b=x[1];
		n=o.indexOf(a);
		if(n<0){
			o[z]=a;
			k[z]=[b];
			++z;
		}else{
			let c=k[n];
			if(c.includes(b)!==true){c.push(b)}			
		}
	};
	
	
	
	for(let r,o=R,m=e,l=m.length,i=0;i<l;++i){
		r=m[i];
		if(r.length>1){const a=[];for(let s,m=r,l=m.length,i=0;i<l;++i){s=m[i];a.push(s.substring(1,s.length-1))};r=m[i]=['{'+a.join('')+'}']};
		o.push(V[i]+r);
	};
	e=null;
	V=[[],[],[]];
	for(let s,x=a=Mi,A=V[0],b=Mf,B=V[1],c=Mk,C=V[2],m=F[2],D=F[3],l=m.length,i=0;i<l;++i){
		x=m[i];
		s=x.cssText;
		if(x instanceof a){A.push(s)}else{if(x instanceof b){B.push(s)}else{if(x instanceof c){C.push(s)}else{D.push(s)}}}
	};
	
	for(let x,m=R,l=m.length,i=0;i<l;++i){	
		x=m[i];
		//m[i]=x[0]+x[1]
		console.log(i,x);	
	};
	
	//R.unshift(V[0].join('\n'),V[1].join('\n'),V[2].join('\n'));
	V='\n*/';
	//e=F[3];if(e.length){R.push('\n/*ignored:\n'+e.join('\n')+V)};
	//e=F[1];if(e.length){R.push('\n/*unused:\n'+e.join('\n')+V)};
	console.dir(R);	
	//w.open('about:blank').document.write('<pre>'+R.join('\n')+'</pre>')
})(window);


 

/*
ma mica ti voglio convincere, anzi sono interssato al debunk se me lo fai > unfriended
console.log(a,b)
		if(m.includes(a)){
		}else{
		};
	
	*/
	//for(let e,m=R,l=m.length,i=0;i<l;++i){e=m[i];m[i]=e[0]+e[1]};
	


