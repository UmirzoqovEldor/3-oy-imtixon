// birinchi savolning javibi
function isPalindrom (text){
    return text == text.split('').reverse().join('');
}
console.log(isPalindrom('hello'));
console.log(isPalindrom('level'));
console.log(isPalindrom('121'));


// ikkinchi savolning javobi
function word(maxWord) {
    console.log(maxWord);
    const arry = maxWord.split('')
    console.log(arry);
    let max = arry[0];
    for(let i=0; i<arry.length; i++){
       console.log(arry[i].length);
              if(arry[i]==max){
          max=arry[i]
       }

    }
        console.log(max);

    }
    const newword = 'shaptoslis';
           word(newword);


           //uchinch savolning javobi
function kabisaYili(yil) {
  if ((yil % 4 === 0 && yil % 100 !== 0) || yil % 400 === 0) {
    let result1 = ` ${yil} kabisa yili `;
    console.log(result1);
  } else {
    let result2 = `${yil} kabisa yili emas `;
    console.log(result2);
  }

  return;
  
}
kabisaYili(1600);


//4- savolning javobi

let Number = [-23, 157, -45, 66, -18, , 91, -56, -93, 0, -9];

function nanegativeNumber(array) {

    let negativeNumbers = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            negativeNumbers.push(array[i]);
        }
    }
    return negativeNumbers;
}

console.log(' Manfiy sonlar tuplami:', nanegativeNumber(Number));