// export default async function(context){
//     if(context.route.name=='beta_updates'){
         
//          return
//     }
//     if(context.route.name=='index'){
//         try {
//             await context.$axios.$get('/users/user/',{'headers':{
//                'Authorization':`Bearer ${localStorage.getItem('token')}`
//              }})
//             .then((response)=>{
//                 if(localStorage.getItem('account_type')=='Admin'){
//                     context.redirect('/admin/dashboard')
//                 }
//                 else if(localStorage.getItem('account_type')=='Seller'){
//                     context.redirect('/seller/dashboard')
//                 }
//                 else{
//                     context.redirect('/customer/dashboard') 
//                 }
               
//             })
         
//          } catch (error) {
//                 context.redirect('/login')
//                 localStorage.clear()
//          }
//          return
//     }
//     if(context.route.name=='index' || context.route.name=='login'){
//         try {   
//             await context.$axios.$get('/users/user/',{'headers':{
//                 'Authorization':`Bearer ${localStorage.getItem('token')}`,
                    
//               }})
//              .then((response)=>{
//                 context.redirect('/')
//              })
             
//         } catch (error) {
//                 return
//         }
    
//     }
//     else{ 
//         try {
//             await context.$axios.$get('/users/user/',{'headers':{
//                'Authorization':`Bearer ${localStorage.getItem('token')}`
//              }})
//             .then((response)=>{
//             })
         
//          } catch (error) {
//                 // context.redirect('/login')
//                 localStorage.clear()

//          }

//     }
  
// }
