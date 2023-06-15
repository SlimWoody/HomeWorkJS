// ------------------ Задача 2 ---------------------------


let array = [2, 4, 6, 8, 10, 12, 11, 7, 5, 3, 1, 9]

let temp;

alert(array);

for (let i= 1; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        if(array[i] > array[j]){
            temp = array[i];
            array[i] = array[j];
            array[j] = temp; 
        }
    };
    
}

alert(array);
