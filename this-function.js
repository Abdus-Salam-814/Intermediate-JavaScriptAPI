let me = {
    name: "John",
    thisInArrow: () => {
        console.log('My name is' + this.name);
    },
};

me.thisInArrow();

// My name is Undefined

