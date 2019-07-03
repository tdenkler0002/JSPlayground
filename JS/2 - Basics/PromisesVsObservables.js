import { Observable } from 'rxjs';

const promise = asynFunc();

promise.then(result => {
    console.log(result);
});

function asyncTask(i) {
    return new Promise(resolve => resolve(i + 1));
}

async function runAsyncTasks() {
    const res1 = await asyncTask(0);
    const res2 = await asyncTask(res1);
    const res3 = await asyncTask(res2);
    return "Everything done"
}

runAsyncTasks().then(result => console.log(result));

//////////////////

function asyncTask(i) {
    return new Promise(resolve => resolve(i + 1));
}

function runAsyncTasks() {
    return asyncTask(0)
        .then(res1 => { return asyncTask(res1); })
        .then(res2 => { return asyncTask(res2); })
        .then(res3 => { return "Everything done"; });
}

runAsyncTasks().then(result => console.log(result));

///////////////////


const promise = new Promise(executorFunc);

function executorFunc(resolve, reject) {
    const value = Math.random();
    if (value <= 1/3.0)
        resolve(value);
    else if (value <= 2/3.0)
        reject("Value <= 2/3 (reject)");
    else
        throw "Value > 2/3 (throw)"
}

promise.then(onFulfilled).catch(onRejected);

function onFulfilled(value) {
    console.log("Got value: " + value);
}

function onRejected(error) {
    console.log("Caught error: " + error);
}

///////////////
const promise = new Promise((resolve, reject) => {
    const value = Math.random();
    if (value <= 1/3.0)
        resolve(value);
    else if (value <= 2/3.0)
        reject("Value <= 2/3 (reject)");
    else
        throw "Value > 2/3 (throw)"
});

promise
    .then(value => console.log("Got value: " + value))
    .catch(error => console.log("Caught error: " + error));

//////////////

const observable = new Observable(subscriberFunc);

function subscriberFunc(observer) {
    const value = Math.random();
    if (value <= 1/3.0)
        resolve(value);
    else if (value <= 2/3.0)
        reject("Value <= 2/3 (reject)");
    else
        throw "Value > 2/3 (throw)"
    observer.complete();
}

observable.subscribe(nextFunc, errorFunc, completeFunc);

function nextFunc(value) {
    console.log("Got value: " + value);
}

function errorFunc(error) {
    console.log("Caught error " + error);
}

function completeFunc() {
    console.log("Completed");
}

const observable = new Observable(observer => {
    const value = Math.random();
    if (value <= 1/3.0)
        resolve(value);
    else if (value <= 2/3.0)
        reject("Value <= 2/3 (reject)");
    else
        throw "Value > 2/3 (throw)"

    observer.complete();
});

observable.subscribe({
    next(value) { console.log("Got value: " + value) },
    error(err) { console.log("Caught error " + error) },
    complete() { console.log("Completed"); }
});

///////////////////

const promise = new Promise(resole => {
    resole(1);
    resole(2);
    resole(3);
});
promise.then(result => console.log(result));
//prints 1

//////////////////

const obs = new Observable(obs => {
    obs.next(1);
    obs.next(2);
    obs.next(3);
});
obs.subscribe(result => console.log(result));

