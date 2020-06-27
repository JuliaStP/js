const string = "Привет! Как дела?";
let arr = ['П','р', 'и', 'в', 'е', 'т', '!', 'К', 'а', 'к', 'д', 'е', 'л', 'а', '?'];
    let vowels = [arr[2], arr[4], arr[8], arr[11], arr[13]];
    let getVowels = vowels.reduce(function (total, current, index) {
        if (index == 0) {
            return current;
        } else {
            return total + '' + current;
        }
    }, '');

    console.log (getVowels);