function uniq(arg: (string | number)[]) {
    const uniq: (string | number)[] = [];

    arg.forEach((element) => {
        if (!uniq.includes(element)) uniq.push(element);
    });

    return uniq;
}

export default uniq;