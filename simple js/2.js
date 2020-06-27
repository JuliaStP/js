const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}];

   let getWorthyWorkers= function (arr) {
    let wellpaidWorkers = [];
    
    for(let i = 0; i < arr.length; i++) {
        const worker = arr[i];

        if (worker.salary > 1000){
            wellpaidWorkers.push(worker.name)
        }
    }

    return wellpaidWorkers;
}

    console.log(getWorthyWorkers(workers));