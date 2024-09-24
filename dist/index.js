"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=v(function(z,q){
var y=require('@stdlib/math-base-special-abs/dist');function j(e,r,a,u){var i,s,t;if(i=0,e<=0)return i;for(s=u,t=0;t<e;t++)i+=y(r[s]),s+=a;return i}q.exports=j
});var m=v(function(A,d){
var l=require('@stdlib/strided-base-stride2offset/dist'),R=n();function _(e,r,a){var u=l(e,a);return R(e,r,a,u)}d.exports=_
});var x=v(function(B,c){
var b=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),f=m(),E=n();b(f,"ndarray",E);c.exports=f
});var O=require("path").join,g=require('@stdlib/utils-try-require/dist'),h=require('@stdlib/assert-is-error/dist'),k=x(),o,p=g(O(__dirname,"./native.js"));h(p)?o=k:o=p;module.exports=o;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
