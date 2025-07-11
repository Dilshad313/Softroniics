// Normal 
function add(a,b,callback){
    let error = false
    if(a==0){
        error=true;
    }

    callback(a+b,error);
}

function mul(a,b,callback){
    callback(a*b)
}

function sub(a,b,callback){
    callback(a-b)
}

function div(a,b,callback){
    callback(a/b)
}

add(10,20,(sum,error)=>{
    if(error){
        console.log("Not working.......");
        
    }
    else{
        console.log(sum);
        mul(sum,sum,(product)=>{
            console.log(product);
            div(product,10,(divi)=>{
                console.log(divi);
                sub(divi,10,(subt)=>{
                    console.log(subt);
                    
                })
                
            })
            
        })
        
    }
})


// Call Hell
function add(a,b){
    return new Promise((res,rej)=>{
        if(a==0){
            rej("Error......")
        }
        else{
            res(a+b)
        }
    })
}

function mul(a,b){
    return new Promise((res,rej)=>{
        if(a==0){
            rej("The value is zero")
        }
        res(a*b)
    })
}

function div(a,b){
    return new Promise((res,rej)=>{
        if(a==0){
            rej("The value is zero")
        }
        res(a/b)
    })
}

function sub(a,b){
    return new Promise((res,rej)=>{
        if(a==0){
            rej("The value is zero")
        }
        res(a-b)
    })
}

add(10,20).then((sum)=>{
    console.log(sum);
    return mul(sum,sum)
}).then((product)=>{
    console.log(product);
    return div(product,10);  
}).then((divi)=>{
    console.log(divi);
    return sub(divi,20); 
}).then((subt)=>{
    console.log(subt);
}).catch((err)=>{
    console.log(err);
})

// async and await (pendind resolve)
function getName(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("My Name:")
        },3000)
    })
}

function getNumber(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("10000000")
        },2000)
    })
}
Promise.all([getName(),getNumber()]).then((result)=>{
    console.log(result);
    
})

async function getUser(){
    let name= await getName();
    console.log(name);
    
}getUser();
