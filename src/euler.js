export function Multiples() {
    let i = 0;
    let sum = 0;
    while (i < 1001) {
        let remainder3 = i % 3;
        let remainder5 = i % 5;
        if (remainder3 === 0 || remainder5 === 0) {
            sum = sum + i;
        }
        i++;
    }
    return sum;
}