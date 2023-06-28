
const handileResetHour=(curentHr)=>{
    return curentHr>12 ? curentHr-12 :curentHr
 }
export const useDateAndTime = (status) => {
  const currentdate = new Date(); 
  return `${status}${currentdate.getDate()}/${(currentdate.getMonth()+1)}/${currentdate.getFullYear()} @ ${handileResetHour(currentdate.getHours())}:${currentdate.getMinutes()} ${currentdate.getHours()>12 ?'PM' : 'AM'}`
}

 
