function nb_year(p0, percent, aug, p) {
    let years = 0;
    if (percent % 1 === 0) {
        percent = percent / 100;
    }
    while (p0 <= p) {
        p0 = (p0 + (p0 * percent) + aug);
        years++;
    }
    return years;
}
console.log(nb_year(1500, 5, 100, 5000));
