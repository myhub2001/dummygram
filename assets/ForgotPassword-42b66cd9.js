import{r as g,b as p,u as h,w as m,a,x as v,j as i,e as t,c as f,p as b}from"./index-19c586dc.js";const y="/assets/logo-588209d1.png",S=()=>{const[n,o]=g.useState(""),{enqueueSnackbar:e}=p(),l=h(),c=m(),d=r=>{if(r.preventDefault(),n===""){t(),e("Email cannot be empty",{variant:"error"});return}f.sendPasswordResetEmail(n).then(()=>{b(),e("Check your mail and change the pasword.",{variant:"success"})}).catch(s=>{s.code==="auth/invalid-email"?(t(),e("Invalid email address",{variant:"error"})):s.code==="auth/user-not-found"?(t(),e("User not found",{variant:"error"})):s.code==="auth/wrong-password"?(t(),e("Wrong password",{variant:"error"})):s.code==="auth/account-exists-with-different-credential"?(t(),e("Account exists with a different credential",{variant:"error"})):(t(),e("Error Occured!",{variant:"error"}))})},u=()=>{l("/login")};return a("div",{style:{display:"flex",alignContent:"center",justifyContent:"center"},children:a("div",{style:v(),className:c.paper,children:i("form",{className:"modal__signup",children:[a("img",{src:y,alt:"dummygram",className:"modal__signup__img",style:{width:"80%",filter:"invert(var(--val))"}}),a("input",{type:"email",placeholder:" Email",value:n,onChange:r=>o(r.target.value)}),a("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",border:"1px solid rgba(104, 85, 224, 1)",height:"100%",boxSizing:"border-box",marginTop:"10px",backgroundColor:"white",boxShadow:"0 0 20px rgba(104, 85, 224, 0.2)",borderRadius:"4px"}}),a("button",{type:"submit",onClick:d,className:"button log",children:"RESET PASSWORD"}),i("div",{className:"have-account",children:["Already have a account?"," ",a("span",{role:"button",onClick:u,children:"Sign in"})]})]})})})};export{S as default};
