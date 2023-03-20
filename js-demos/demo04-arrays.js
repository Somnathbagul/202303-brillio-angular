var values=[2,3,4];

console.log('typeof values',typeof values);

console.log('values[1]',values[1]);

values.push(15);

console.log('values',values);

console.log('values[100]',values[100]);

values[7]=20;

console.log('values',values);

for(let value of values)
    console.log(value);



