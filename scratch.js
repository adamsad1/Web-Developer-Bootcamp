function nbYear(p0, percent, aug, p) {
    var years = 0;
    var curPop = p0;
    
    while (curPop < p) {
      curPop += curPop * (percent/100) + aug;
      years++;
    };
    
    return years++;
};