(this["webpackJsonpcredit-card-form"]=this["webpackJsonpcredit-card-form"]||[]).push([[0],[,,,,,,function(e,r,t){e.exports=t(17)},,,,,function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){},function(e,r,t){"use strict";t.r(r);var a=t(0),n=t.n(a),c=t(5),i=t.n(c),d=(t(11),t(2)),o=t(1),l=t(3);t(12);function u(e){var r=e.creditCardCvvFromInput;return n.a.createElement("div",{className:"credit-card-back"},n.a.createElement("div",{className:"magnetic-stripe"}),n.a.createElement("div",{className:"cvv-stripe-container"},n.a.createElement("div",{className:"cvv-stripe-label"},"CVV"),n.a.createElement("div",{className:"cvv-stripe"},r)),n.a.createElement("div",{className:"credit-card-back-logo-container"},n.a.createElement("img",{className:"credit-card-back-logo",src:"https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png",alt:"credit card logo"})))}t(13);function m(e){var r,t,a=e.fieldValues,c=e.setFocusOnCreditCardNumber,i=e.setFocusOnCreditCardName,d=e.setFocusOnCreditCardExpirationMonth,o=a.creditCardNumber,l=a.creditCardName,u=a.creditExpirationMonth,m=a.creditExpirationYear;return n.a.createElement("div",{className:"credit-card-front"},n.a.createElement("div",{className:"credit-card-chip-brand-container"},n.a.createElement("div",{className:"credit-card-chip-container"},n.a.createElement("img",{className:"credit-card-chip",src:"https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/chip.png",alt:"credit card chip"})),n.a.createElement("div",{className:"credit-card-logo-container"},n.a.createElement("img",{className:"credit-card-logo",src:"https://raw.githubusercontent.com/muhammederdem/credit-card-form/master/src/assets/images/visa.png",alt:"credit card logo"}))),n.a.createElement("div",{className:"credit-card-number-container"},n.a.createElement("div",{className:"credit-card-number",onClick:c},function(e){var r=e.length;return 19===r?e:r<19&&r>0?e.substring(0,r)+"#### #### #### ####".substring(r):"#### #### #### ####"}(o))),n.a.createElement("div",{className:"credit-card-name-and-expiration-container"},n.a.createElement("div",{className:"credit-card-name-container",onClick:i},n.a.createElement("div",{className:"credit-card-holder-label"},"Card Holder"),n.a.createElement("div",{className:"credit-card-holder-name"},l)),n.a.createElement("div",{className:"credit-card-expiration-container",onClick:d},n.a.createElement("div",{className:"credit-card-expiration-label"},"Expires"),n.a.createElement("div",{className:"credit-card-expiration"},(""===(r=u)?"MM":r)+"/"+(""===(t=m)?"YYYY":t)))))}t(14);function s(e){var r=e.formValues,t=e.showFront,a=e.setFocusOnCreditCardNumber,c=e.setFocusOnCreditCardName,i=e.setFocusOnCreditCardExpirationMonth,d=t?"flipper":"flipper show-back",o=r.creditCardNumber,l=r.creditCardName,s=r.creditExpirationMonth,C=r.creditExpirationYear,E=r.creditCardCvv;return n.a.createElement("div",{className:"credit-card"},n.a.createElement("div",{className:d},n.a.createElement(m,{fieldValues:{creditCardNumber:o,creditCardName:l,creditExpirationMonth:s,creditExpirationYear:C},setFocusOnCreditCardNumber:a,setFocusOnCreditCardName:c,setFocusOnCreditCardExpirationMonth:i}),n.a.createElement(u,{creditCardCvvFromInput:E})))}t(15);function C(e){var r=e.cvvOnBlur,t=e.cvvOnFocus,c=e.handleChange,i=e.handleSubmit,d=e.focusOnCreditCardNumber,o=e.onBlurForCreditCardNumberInput,l=e.focusOnCreditCardName,u=e.onBlurForCreditCardNameInput,m=e.focusOnCreditCardExpirationMonth,s=e.onBlurForCreditCardExpirationMonthInput,C=e.formFields,E=Object(a.useRef)(null),p=Object(a.useRef)(null),v=Object(a.useRef)(null);return Object(a.useEffect)((function(){d&&E.current.focus(),l&&p.current.focus(),m&&v.current.focus()})),n.a.createElement("form",{className:"credit-card-form",onSubmit:i},n.a.createElement("div",{className:"input-group"},n.a.createElement("label",{htmlFor:"creditCardNumber",className:"block-label"},"Credit Card Number"),C.creditCardNumber.showError?n.a.createElement("div",{className:"credit-card-form-error number-input-error"},"Please ensure you include a 16 digit number for this field."):null,n.a.createElement("input",{className:"credit-card-text-field number-input",name:"creditCardNumber",id:"creditCardNumber",type:"text",placeholder:"1234 5678 1234 5678",onChange:function(e){var r=e.target.value,t=C.creditCardNumber.value.length<r.length?function(e){for(var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,t=e.replace(/\D/g,""),a="",n=0,c=0;c<t.length;c++)a+=t[c],(c+1)%4===0&&n<r&&(a+=" ",n+=1);return a}(r):r;c("creditCardNumber",t)},value:C.creditCardNumber.value,maxLength:19,onBlur:o,ref:E})),n.a.createElement("div",{className:"input-group"},n.a.createElement("label",{htmlFor:"creditCardName",className:"block-label"},"Credit Card Name"),C.creditCardName.showError?n.a.createElement("div",{className:"credit-card-form-error name-input-error"},"Please include a name for this field"):null,n.a.createElement("input",{className:"credit-card-text-field name-input",name:"creditCardName",id:"creditCardName",type:"text",placeholder:"John Smith",onChange:function(e){return c("creditCardName",e.target.value)},value:C.creditCardName.value,onBlur:u,ref:p})),n.a.createElement("div",{className:"input-group input-group-flex"},n.a.createElement("fieldset",{className:"credit-card-expiration-date-container"},n.a.createElement("legend",{className:"block-label credit-card-expiration-legend"},"Expiration Date"),C.creditExpirationMonth.showError||C.creditExpirationYear.showError?n.a.createElement("div",{className:"credit-card-form-error expiration-input-error"},"Please select both a month and year."):null,n.a.createElement("div",{className:"credit-card-expiration-selects-container"},n.a.createElement("label",{htmlFor:"creditCardExpirationMonth",className:"hidden-label"},"Month"),n.a.createElement("select",{className:"credit-card-select-field expiration-month-input",name:"creditExpirationMonth",id:"creditExpirationMonth",onChange:function(e){return c("creditExpirationMonth",e.target.value)},value:C.creditExpirationMonth.value,onBlur:s,ref:v},n.a.createElement("option",{defaultValue:!0},"Month"),n.a.createElement("option",null,"01"),n.a.createElement("option",null,"02"),n.a.createElement("option",null,"03"),n.a.createElement("option",null,"04"),n.a.createElement("option",null,"05"),n.a.createElement("option",null,"06"),n.a.createElement("option",null,"07"),n.a.createElement("option",null,"08"),n.a.createElement("option",null,"09"),n.a.createElement("option",null,"10"),n.a.createElement("option",null,"11"),n.a.createElement("option",null,"12")),n.a.createElement("label",{htmlFor:"creditCardExpirationYear",className:"hidden-label"},"Year"),n.a.createElement("select",{className:"credit-card-select-field expiration-year-input",name:"creditExpirationYear",id:"creditExpirationYear",onChange:function(e){return c("creditExpirationYear",e.target.value)},value:C.creditExpirationYear.value},n.a.createElement("option",{defaultValue:!0},"Year"),n.a.createElement("option",null,"2021"),n.a.createElement("option",null,"2022"),n.a.createElement("option",null,"2023")))),n.a.createElement("div",{className:"credit-card-cvv-container"},n.a.createElement("label",{htmlFor:"creditCardCvv",className:"block-label"},"CVV"),C.creditCardCvv.showError?n.a.createElement("div",{className:"credit-card-form-error cvv-input-error"},"Please enter a valid 3 digit number."):null,n.a.createElement("input",{className:"credit-card-text-field cvv-input",type:"text",placeholder:"123",onChange:function(e){return c("creditCardCvv",e.target.value.replace(/\D/g,""))},maxLength:3,value:C.creditCardCvv.value,onBlur:r,onFocus:t,name:"creditCardCvv",id:"creditCardCvv"}))),n.a.createElement("button",{type:"submit",className:"submit-credit-card-form-button"},"Submit"))}t(16);var E=function(){var e,r={value:"",showError:!1},t=Object(a.useState)((e={},Object(d.a)(e,"creditCardNumber",Object(o.a)(Object(o.a)({},r),{},{focused:!1})),Object(d.a)(e,"creditCardName",Object(o.a)(Object(o.a)({},r),{},{focused:!1})),Object(d.a)(e,"creditExpirationMonth",Object(o.a)(Object(o.a)({},r),{},{focused:!1})),Object(d.a)(e,"creditExpirationYear",r),Object(d.a)(e,"creditCardCvv",r),e)),c=Object(l.a)(t,2),i=c[0],u=c[1],m=Object(a.useState)(!0),E=Object(l.a)(m,2),p=E[0],v=E[1];function h(e,r){u((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(d.a)({},e,Object(o.a)(Object(o.a)({},t[e]),{},{focused:r})))}))}return n.a.createElement("div",{className:"app"},n.a.createElement(s,{formValues:function(){var e={};for(var r in i){var t=i[r].value;e[r]=t}return e}(),setFocusOnCreditCardNumber:function(){return h("creditCardNumber",!0)},setFocusOnCreditCardName:function(){return h("creditCardName",!0)},setFocusOnCreditCardExpirationMonth:function(){return h("creditExpirationMonth",!0)},showFront:p}),n.a.createElement(C,{handleChange:function(e,r){u((function(t){return Object(o.a)(Object(o.a)({},t),{},Object(d.a)({},e,Object(o.a)(Object(o.a)({},t[e]),{},{value:r})))}))},handleSubmit:function(e){e.preventDefault(),u((function(e){var r=function(e){var r=!1,t=!1,a=!1,n=!1,c=!1;return""!==e.creditCardNumber.value&&19===e.creditCardNumber.value.length||(r=!0),""===e.creditCardName.value.trim()&&(t=!0),""!==e.creditExpirationMonth.value&&""!==e.creditExpirationYear.value||(a=!0,n=!0),""!==e.creditCardCvv.value.trim()&&3===e.creditCardCvv.value.length||(c=!0),{showCreditCardNumberError:r,showCreditCardNameError:t,showCreditExpirationMonthError:a,showCreditExpirationYearError:n,showCreditCvvError:c}}(i),t=r.showCreditCardNumberError,a=r.showCreditCardNameError,n=r.showCreditExpirationMonthError,c=r.showCreditExpirationYearError,d=r.showCreditCvvError,l={creditCardNumber:Object(o.a)(Object(o.a)({},e.creditCardNumber),{},{showError:t}),creditCardName:Object(o.a)(Object(o.a)({},e.creditCardName),{},{showError:a}),creditExpirationMonth:Object(o.a)(Object(o.a)({},e.creditExpirationMonth),{},{showError:n}),creditExpirationYear:Object(o.a)(Object(o.a)({},e.creditExpirationYear),{},{showError:c}),creditCardCvv:Object(o.a)(Object(o.a)({},e.creditCardCvv),{},{showError:d})};return Object(o.a)({},l)}))},cvvOnFocus:function(){return v(!1)},cvvOnBlur:function(){return v(!0)},focusOnCreditCardNumber:i.creditCardNumber.focused,onBlurForCreditCardNumberInput:function(){return h("creditCardNumber",!1)},focusOnCreditCardName:i.creditCardName.focused,onBlurForCreditCardNameInput:function(){return h("creditCardName",!1)},focusOnCreditCardExpirationMonth:i.creditExpirationMonth.focused,onBlurForCreditCardExpirationMonthInput:function(){return h("creditExpirationMonth",!1)},formFields:i,setFormFields:u}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[6,1,2]]]);
//# sourceMappingURL=main.2f61ab03.chunk.js.map