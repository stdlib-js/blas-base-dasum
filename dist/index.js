"use strict";var m=function(a,e){return function(){return e||a((e={exports:{}}).exports,e),e.exports}};var y=m(function(B,p){
var n=require('@stdlib/math-base-special-abs/dist'),q=6;function _(a,e,v){var i,u,r;if(i=0,a<=0||v<=0)return i;if(v===1){if(u=a%q,u>0)for(r=0;r<u;r++)i+=n(e[r]);if(a<q)return i;for(r=u;r<a;r+=q)i+=n(e[r])+n(e[r+1])+n(e[r+2])+n(e[r+3])+n(e[r+4])+n(e[r+5]);return i}for(a*=v,r=0;r<a;r+=v)i+=n(e[r]);return i}p.exports=_
});var j=m(function(C,d){
var s=require('@stdlib/math-base-special-abs/dist'),o=6;function E(a,e,v,i){var u,r,f,t;if(u=0,a<=0)return u;if(r=i,v===1){if(f=a%o,f>0)for(t=0;t<f;t++)u+=s(e[r]),r+=v;if(a<o)return u;for(t=f;t<a;t+=o)u+=s(e[r])+s(e[r+1])+s(e[r+2])+s(e[r+3])+s(e[r+4])+s(e[r+5]),r+=o;return u}for(t=0;t<a;t++)u+=s(e[r]),r+=v;return u}d.exports=E
});var M=m(function(D,l){
var O=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),b=y(),g=j();O(b,"ndarray",g);l.exports=b
});var h=require("path").join,k=require('@stdlib/utils-try-require/dist'),w=require('@stdlib/assert-is-error/dist'),z=M(),c,R=k(h(__dirname,"./native.js"));w(R)?c=z:c=R;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
