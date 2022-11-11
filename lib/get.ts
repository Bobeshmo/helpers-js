function get(obj: Object, path: string, defaultValue: any = undefined) {
    const arr: string[] = path.split(".")

    let index: number = 0
    const length: number = arr.length

    while (obj !== undefined && index < length) {
        obj = obj[arr[index++] as keyof typeof obj]
    }

    return (obj && index && index === length) ? obj : defaultValue
}

export default get;