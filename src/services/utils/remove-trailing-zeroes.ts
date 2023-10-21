export function removeTrailingZeros(str: string) {

    if (!str.includes(".")) return str

    for (let i = str.length - 1; i >= 0; i--) {


        if (str[i] == "0") {
            str = str.slice(0, -1)

            continue;
        }

        if (str[i] == ".") {
            str = str.slice(0, -1)
        }

        break;
    }

    return str;
}