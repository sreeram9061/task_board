
const handileResetHour=(curentHr)=>{
    return curentHr>12 ? curentHr-12 :curentHr
 }

 const splitFun=(num)=>{
  console.log(num)
   if( num.toString().split('').length==1 ){
    return `0${num}`
   }else{
    return num
   }  
 }
export const useDateAndTime = () => {
  const currentdate = new Date(); 
  return `${splitFun(currentdate.getDate())}/${(splitFun(currentdate.getMonth()+1))}/${currentdate.getFullYear()} @ ${splitFun(handileResetHour(currentdate.getHours()))}:${splitFun(currentdate.getMinutes())} ${splitFun(currentdate.getHours())>12 ?'PM' : 'AM'}`
}

 
