const tryPromise = new Promise((resolve,reject) =>{
    console.log("processing ...");
    setTimeout(() => {
        const success = false;
        if(success){
            resolve("success gak tuh?");
        }else{
            reject("error nih");
        }
    },2000);
});
// });//trypromise adalah object dari class promise
// //memiliki 2 callback


const asynAwait = async () => {
    console.log("process 1");
    await tryPromise
    .then((res) =>{
        console.log("res => ", res);
    })
    .catch((err) =>{
        console.log("err => ", err);
    })
    .finally(() => {
        console.log("final ");
    });
    console.log("process 3");
};

const fetchData = async ()=> {
    try {
        console.log("process 1");
    const response = await fetch('https://jsonplaceholder.typecode.com/users')
    const users = await response.json();
    console.log("users => ", users);
    console.log("process 3");
    } catch (err) {
        console.log("catch error", err);
    }
};

// fetchData();

const tryThrow = () => {
    try{
        let isFalse = true;
        if(isFalse){
            throw " there is error"
        }
        console.log("success");
    } catch (err){
        console.log(err);
    }
};
tryThrow();
