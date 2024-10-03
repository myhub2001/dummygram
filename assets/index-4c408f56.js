import{j as P,a as r,r as o,b as H,u as J,m as K,e as p,d as _,c as u,n as Q,p as x,s as A}from"./index-19c586dc.js";import{v as S,A as X,a as U,b as C,c as Y,f as Z,s as L}from"./signIn-f0665491.js";const ee=({address:d,image:s,blank_profile:m,handleChange:l})=>P("div",{className:"input__group",children:[r("label",{htmlFor:"file",id:"file-label",children:r("div",{className:"img-outer",children:d?r("img",{src:URL.createObjectURL(s),alt:"profile pic",className:"img-inner"}):r("img",{src:m,alt:"profile pic",className:"img-inner"})})}),r("input",{type:"file",id:"file",className:"file",onChange:l,accept:"image/*",required:!0,"aria-labelledby":"file-label"})]}),te=()=>{const d=o.useRef(""),{enqueueSnackbar:s}=H(),m=J(),[l,R]=o.useState(""),[b,k]=o.useState(""),[v,F]=o.useState(""),[j,I]=o.useState(""),[i,M]=o.useState(null),[T,q]=o.useState(null),[w,y]=o.useState(!0),[g,D]=o.useState(""),[a,W]=o.useState(S.initialValue);function $(e,n=300){let t;return(...h)=>{clearTimeout(t),t=setTimeout(()=>{e.apply(this,h)},n)}}const O=()=>{const e=d.current;/^[a-z][a-z0-9_]{4,20}$/.test(e)?$(z)():y(!1)},z=async()=>{const e=d.current;(await _.collection("users").where("username","==",e).get()).empty?y(!0):y(!1)},B=e=>{e.target.files[0]&&(M(e.target.files[0]),q(e.target.value))},G=async e=>{e.preventDefault();let n=!0;if(Object.values(a).forEach(t=>{t!==!1&&(n=!1)}),g===""&&(n=!1),!w){p(),s("Username not available!",{variant:"error"});return}if(n){const t=_.collection("users"),h=_.doc(`usernames/${g}`),N=_.batch();await u.createUserWithEmailAndPassword(b,v).then(async E=>{await Q(u.currentUser,{displayName:l}).then(N.set(h,{uid:u.currentUser.uid})).then(N.commit()).then(await t.doc(u.currentUser.uid).set({uid:u.currentUser.uid,username:g,name:l,email:b,photoURL:u.currentUser.photoURL,posts:[],friends:[u.currentUser.uid]})).then(()=>{x(),s(`Congratulations ${l},you have joined Dummygram`,{variant:"success"}),m("/")}).catch(c=>{p(),s(c.message,{variant:"error"})}),A.ref(`images/${i==null?void 0:i.name}`).put(i).on("state_changed",()=>{},c=>{p(),s(c.message,{variant:"error"})},()=>{A.ref("images").child(i==null?void 0:i.name).getDownloadURL().then(c=>{E.user.updateProfile({displayName:l,photoURL:c}),x(),s("Signup Successful!",{variant:"success"})}).catch(c=>console.error(c))})}).catch(E=>{p(),s(E.message,{variant:"error"})})}else s("Please fill all fields with valid data",{variant:"error"})},V=()=>{m("/login")},f=(e,n)=>{let t=S[e](n);e==="confirmPassword"&&(t=S.confirmPassword(n,v)),W(h=>({...h,...t}))};return r(X,{children:r("form",{"aria-label":"Sign Up Form",children:P("div",{className:"form__bottom signup-container",children:[r(ee,{address:T,blank_profile:K,image:i,handleChange:B}),r(U,{label:"Username",id:"username",placeholder:"Enter your Username",value:g,handleChange:e=>{d.current=e.target.value.trim(),D(e.target.value.trim()),O()},maxLength:18,fieldName:"username",aria_dsc_by:"username-error",isError:!w,errorMesssage:"Username not availaible",error_border:w}),r(U,{label:"Full name",id:"full__name",placeholder:"Enter your Fullname",value:l,handleChange:e=>{R(e.target.value),f(e.target.name,e.target.value)},maxLength:40,fieldName:"name",aria_dsc_by:"name-error",isError:a.name&&a.nameError,errorMesssage:a.nameError,error_border:!a.nameError}),r(U,{label:"Email",id:"email",type:"email",placeholder:"Enter your email",value:b,handleChange:e=>{k(e.target.value),f(e.target.name,e.target.value)},maxLength:64,fieldName:"email",aria_dsc_by:"email-error",isError:a.email&&a.emailError,errorMesssage:a.emailError,error_border:!a.emailError}),P("div",{className:"pass-container-both",children:[r(C,{label:"Password",id:"password",name:"password",placeholder:"Enter your password",value:v,handleChange:e=>{F(e.target.value),f(e.target.name,e.target.value)},maxLength:30,aria_dsc_by:"password-error",errorMesssage:a.passwordError,isError:a.password&&a.passwordError}),r(C,{label:"Confirm Password",id:"confirmpassword",name:"confirmPassword",placeholder:"Confirm your Password",value:j,handleChange:e=>{I(e.target.value),f(e.target.name,e.target.value)},maxLength:30,aria_dsc_by:"confirm-password-error",errorMesssage:a.confirmPasswordError,isError:a.confirmPassword&&a.confirmPasswordError})]}),r(Y,{handleSubmit:G,btn__label:"Sign up",submit__icon:Z,handleSignInWithGoogle:e=>L(e,s,m),handleSignInWithFacebook:e=>L(e,s,m,!1),have_acct_question:"Already have an account?",have_acct_nav:V,have__acct_action:"Sign in"})]})})})};export{te as default};