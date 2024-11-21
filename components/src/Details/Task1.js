const Task1=()=>{

    // let a=10;
    // let b=0;
    // let x=1;
    // let y = a * x + b; 
    // console.log (y);
    // let res=[]
    // for(let i=1;i<=50;i++){
    //    if(i%2==0){
    //       res.push(i)
    //    }
    // }
    // console.log(res)
    // let number=10
    // let pattern=""
    // for(let i=1;i<=number;i++){
    //     for(let j=0;j<i;j++){
    //         pattern+="*"
    //     }
    //     pattern+="\n"
    // }
    // console.log(pattern);
    const generatepattern=()=>{
        let number=8
        let result="";
        let addStar = 0;
        for(let i=1;i<=number;i++){
            if(i%2===0){
                result+="*".repeat(i-addStar)+"\n"
                addStar+=1
            }else{
                result+="*\n"
            }
            console.log(result);
        }
    }
    generatepattern()
    
   
    return(
        <>
        </>
    )
}
export default Task1;