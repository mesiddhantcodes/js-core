const obj = {
    name: "siddhant",
    hyy() {
        console.log("Hyy how r u ??");
    },
};

const nn = obj.name;
console.log(nn);
obj.hyy();
const n = Object.getPrototypeOf(obj);
console.log(n);