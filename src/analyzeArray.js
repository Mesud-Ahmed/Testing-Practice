export function analyzeArray(arr) {
    if (arr.length === 0) return null;
    let sum = arr[0], min = arr[0], max = arr[0], length = arr.length
    for (let i = 1; i < length; i++) {
        sum += arr[i]
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    
    let obj = {}
    obj.average = sum / length
    obj.min = min
    obj.max = max
    obj.length = length

    return obj

}