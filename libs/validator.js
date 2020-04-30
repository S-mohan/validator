/*!
 * validator 0.1.4
 * (c) 2020 Smohan<https://smohan.net>
 * Released under the MIT License.
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Validator",[],t):"object"==typeof exports?exports.Validator=t():e.Validator=t()}(this,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,r),i.l=!0,i.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t),r.d(t,"validator",(function(){return L}));var n=Object.prototype.toString,i=["string","number","boolean","symbol"],a=Number.MAX_SAFE_INTEGER||Math.pow(2,53)-1,u=function(e){return"[object RegExp]"===n.call(e)},s=function(e){return"string"==typeof e},o=function(e){return void 0===e},l=function(e){return null===e},f=function(e){return o(e)||l(e)||s(e)&&0===e.trim().length||d(e)&&0===e.length||m(e)&&0===Object.keys(e).length},c=function(e){return!l(e)&&"object"==typeof e},m=function(e){return"[object Object]"===n.call(e)},d=function(e){return Array.isArray.call(null,e)},b=function(e){return i.includes(typeof e)},h=function(e){return"function"==typeof e},p=function(e){var t=f(e)?NaN:+e;return"number"==typeof t&&!Number.isNaN(t)},g=function(e){return p(e)&&e%1==0},y=function(e){return+e&&e!==(0|e)},$=function(e){return g(e)&&e>=-a&&e<=a},v=function(e){return!0===e},j=function(e){return!1===e},A=function(e){return"boolean"==typeof e},O={regex:function(e,t){if(!u(e))throw TypeError("[VALIDATE ERROR]: The parameter reg must be a RegExp object");return!!e.test(t)},isRegexp:u,isString:s,isUndefined:o,isNull:l,isEmpty:f,isObject:c,isPlainObject:m,isArray:d,isPrimitive:b,isFunction:h,isNumber:p,isInteger:g,isFloat:y,isSafeInteger:$,isTrue:v,isFalse:j,isBoolean:A,isNaN:function(e){return p(e)&&e!=e}},x={objectId:"{$field} is not a valid ObjectId",email:"{$field} is not a valid email address",alpha:"{$field} contains non-letter characters",alphaNum:"{$field} contains non alpha-numeric characters",alphaDash:"{$field} must be alpha-numeric, dash, underscore",chs:"{$field} must be chinese",chsAlpha:"{$field} must be chinese or alpha",chsAlphaNum:"{$field} must be chinese,alpha-numeric",chsDash:"{$field} must be chinese,alpha-numeric,underscore, dash",url:"{$field} is not a valid url",date:"{$field} is not a valid date",array:"{$field} must be a array",number:"{$field} must be numeric",integer:"{$field} must be integer",safeInteger:"{$field} must be a safe integer",float:"{$field} must be float",boolean:"{$field} must be boolean",trueValue:"{$field} must be true",falseValue:"{$field} must be false",in:"{$field} must be in {$format}",between:"{$field} must between {$minimum} - {$maximum}",length:"length of {$field} must be equal to {$format}",maximum:"{$field} must be no less than {$format}",minimum:"{$field} must be no greater than {$format}",minLength:"length of {$field} must be no less than {$format} characters",maxLength:"length of {$field} must be no greater than {$format} characters",required:"{$field} is required",notEmpty:"{$field} can't be blank"},E=Object.prototype.hasOwnProperty,N=function(e,t){return E.call(t,e)},F=function(e){return O.isArray(e)?e.length:O.isString(e)?e.trim().length:0},I=function(e,t){if(!O.isEmpty(e)&&t){for(var r=e.split(".");r.length;){if(t=t[r.shift()],!O.isPlainObject(t)&&!O.isArray(t))break}return t}},k=function(e,t){if(O.isEmpty(e)||!t)return!1;var r=e.split(".");if(1===r.length)return N(r[0],t);var n=r.slice(0,r.length-1).join("."),i=r[r.length-1],a=I(n,t);return!(o(a)||!O.isPlainObject(a)&&!O.isArray(a))&&N(i,a)},w=function(e){return e.charAt(0).toUpperCase()+e.slice(1)};I("a.b.a",{a:1,b:{a:2,c:[1,2],d:{e:"success"}}});var D={objectId:/^[0-9a-fA-F]{24}$/,email:/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,alpha:/^[A-Za-z]+$/,alphaNum:/^[A-Za-z0-9]+$/,alphaDash:/^[A-Za-z0-9\-\_]+$/,chs:/^[\u4E00-\u9FA5\uF900-\uFA2D]+$/,chsAlpha:/^[\u4E00-\u9FA5\uF900-\uFA2Da-zA-Z]+$/,chsAlphaNum:/^[\u4E00-\u9FA5\uF900-\uFA2Da-zA-Z0-9]+$/,chsDash:/^[\u4E00-\u9FA5\uF900-\uFA2DA-Za-z0-9\-\_]+$/,url:/^(http(?:|s)\:)*\/\/([^\/]+)/,date:/^\d{4}(-|\/)\d{1,2}(-|\/)\d{1,2}$/},P={mode:"single"},S=["objectId","email","alpha","alphaNum","alphaDash","chs","chsAlpha","chsAlphaNum","chsDash","url","date","array","string","number","integer","safeInteger","float","boolean","trueValue","falseValue","required","notEmpty","in","between","minimum","maximum","length","minLength","maxLength"],V=function(e){var t,r;return s(e)?(t=e,r=!0):m(e)?(t=e.message,r=e.format):r=e,{format:r=!(!l(r)&&!o(r))||r,message:t}},_=function(e,t,r){var n;switch(t=h(t)?t.call(L,r):t,e){case"array":return d(r);case"string":return s(r);case"number":return p(r);case"integer":return g(r);case"safeInteger":return $(r);case"float":return y(r);case"boolean":return A(r);case"trueValue":return v(r);case"falseValue":return j(r);case"in":if(d(t))return t.includes(r);break;case"between":if(p(r)&&!o(t.minimum)&&!o(t.maximum)){var i=+t.minimum,a=+t.maximum;return(r=+r)>=i&&r<=a}break;case"minimum":if(p(r)&&p(t))return+r>=+t;break;case"maximum":if(p(r)&&p(t))return+r<=+t;break;case"length":if(n=F(r),p(n)&&p(t))return n===+t;break;case"minLength":if(n=F(r),p(n)&&p(t))return n>=+t;break;case"maxLength":if(n=F(r),p(n)&&p(t))return n<=+t;break;default:return(t=D[e]).test(r)}return!0},q=function(e,t){return h(e)?!!e.call(null,t):b(e)?e===t:d(e)?e.includes(t):!u(e)||e.test(t)},R=/{\$(\w+)}/gm,T=function(e,t,r){return(e=s(e)?e:t)||(e="{$field} is not match {$format}"),e=e.replace(R,(function(e,t){return void 0!==r[t]?r[t]:e}))},L=function(e,t,r){void 0===r&&(r={});var n=Object.assign({},P,r),i=m(n.locale)?n.locale:x;if(!(e&&t&&m(e)&&m(t)))return!1;var a=Object.create(null);for(var u in t){if("step"===n.mode&&Object.keys(a).length)break;var s=t[u],o=k(u,e),l=o?I(u,e):void 0,c=N("required",s),d=N("notEmpty",s);if(d&&!c&&(c=!0),o){if(f(l)&&d){var b=V(s.notEmpty);E=b.format,F=b.message;a[u]=[T(F,i.notEmpty,{field:u,format:E})]}for(var h=a[u]=[],p=Object.keys(s).filter((function(e){return"required"!==e&&"notEmpty"!==e})),g=0,y=p.length;g<y;g++){var $=p[g],v=V(s[$]);E=v.format,F=v.message;if(!1!==E)if(!1===(S.includes($)?_($,E,l):q(E,l))){var j=void 0,A=void 0;if(m(E)&&(j=E.minimum,A=E.minimum),h.push(T(F,i[$],{field:u,format:E,minimum:j,maximum:A})),"all"!==n.mode)continue}}0===h.length&&delete a[u]}else if(c){var O=V(s.required),E=O.format,F=O.message;a[u]=[T(F,i.required,{field:u,format:E})]}}return!!Object.keys(a).length&&a};L.version="0.1.4",L.getObjectValue=I,L.ucfirst=w,L.isRegexp=u,L.isString=s,L.isNull=l,L.isEmpty=f,L.isObject=c,L.isPlainObject=m,L.isArray=d,L.isPrimitive=b,L.isFunction=h,L.isNumber=p,L.isInteger=g,L.isFloat=y,L.isSafeInteger=$,L.isTrue=v,L.isFalse=j,L.isBoolean=A,L.isNaN=isNaN,L.isEmail=function(e){return D.email.test(e)},L.isObjectId=function(e){return D.objectId.test(e)},L.isUrl=function(e){return D.url.test(e)},L.isDate=function(e){return D.date.test(e)};t.default=L}]).default}));