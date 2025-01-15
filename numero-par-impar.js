let i=0;
for(i=1;i<=10;i++) {
    if(i%2===0) console.log(i+" es par")
    else console.log(i+" es impar")    
};

for(i=1;i<=10;i++) console.log(i+(i%2===0 ? " es par" : " es impar"))