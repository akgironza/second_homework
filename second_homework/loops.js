// Pick five to tackle.

// 1. Create a loop that logs the numbers from 0-99 (ascending)
for(i=0; i < 100; i++){
    console.log(i);
};

// 2. Create a loop that logs the numbers from 99-0 (descending)
for(i=99; i > -1; i--){
    console.log(i);
};

// 9. Create a loop that logs the numbers from 3-90 that are multiples of 3 (ascending)
for(i=3; i < 91; i++){
    if (i % 3 === 0){
        console.log(i);
    };
};

// 3. Create a loop that logs the EVEN numbers from 0-98 (ascending)
for(i = 0; i < 99; i++){
    if (i % 2 === 0){
        console.log(i);
    };
};

// 6. Create a loop that logs the ODD numbers from 99-0 (descending)
for(i = 99; i > -1; i--){
    if(i % 2 !== 0){
        console.log(i);
    };
};

