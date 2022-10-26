function myfunction(D) {
    
    var days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    
    var out={
        "Mon":0,
        "Tue":0,
        "Wed":0,
        "Thu":0,
        "Fri":0,
        "Sat":0,
        "Sun":0,
    }
    
    for(let day in D)
    {
     
      if(new Date(day).getDay()==1){
          out["Mon"]+=D[day];
      } 
      else if(new Date(day).getDay()==2){
          out["Tue"]+=D[day];
      } 
      else if(new Date(day).getDay()==3){
          out["Wed"]+=D[day];
      } 
      else if(new Date(day).getDay()==4){
          out["Thu"]+=D[day];
      } 
      else if(new Date(day).getDay()==5){
          out["Fri"]+=D[day];
      } 
      else if(new Date(day).getDay()==6){
          out["Sat"]+=D[day];
      } 
      else{
          out["Sun"]+=D[day];
      } 
    }
    
    for(let i=0;i<7;i++)
    {
        if(out[days[i]]==0)
        {
         
            let x=i;
            let cnt=0;
            while(i<7 && out[days[i]]==0)
            {
                cnt++;
                i++;
            }

          
            let d=(out[days[i]] - out[days[x - 1]])/(cnt + 1);
            let k=1;
            for(let j=x;j<i;j++)
            {
                out[days[j]]=out[days[x-1]]+k*d;
                k++;
            }
        }
    }
    return out;
}

module.exports = myfunction