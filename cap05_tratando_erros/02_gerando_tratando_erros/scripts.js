function double(number) {
    if (typeof number !== 'number') {
        throw new Error(`value expected: number. value received: ${typeof number}`);
    }
    return number * 2;
}

try {
    console.log(double('abc'));
} catch (error) {
    console.log(double(3));
} finally {
    console.log('finished');
}
