function a(i="",t,o=0){let r=0;return o>1?r=parseFloat(t).toLocaleString("en",{minimumFractionDigits:o,maximumFractionDigits:6}):r=parseInt(t).toLocaleString("en",{minimumFractionDigits:0,maximumFractionDigits:6}),r=i?`${i} ${r}`:r,r=="NaN"?"":r}function n(i){i=i||window.event;let t=i.which?i.which:i.keyCode;if(t>31&&(t<48||t>57))i.preventDefault();else return!0}export{a as f,n as i};
