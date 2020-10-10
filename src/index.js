module.exports = function toReadable(number) {
    let result = "";
    let num = String(number).split("").reverse();
    switch (String(number).length) {
        case 1:
            if (num[0] == "0") {
                return "zero";
            } else {
                return `${firstDigit(num)}`;
            }
        case 2:
            if (num[1] == "1" || num[0] == "0") {
                return `${secondDigit(num)}`;
            } else {
                return `${secondDigit(num)} ${firstDigit(num)}`;
            }
        case 3:
            if (num[1] == "1") {
                return `${thirdtDigit(num)} ${secondDigit(num)}`;
            } else if (num[0] == "0" && num[1] !== "0") {
                return `${thirdtDigit(num)} ${secondDigit(num)}`;
            } else if (num[1] == "0" && num[0] !== "0") {
                return `${thirdtDigit(num)} ${firstDigit(num)}`;
            } else if (num[0] == "0" && num[1] == "0") {
                return `${thirdtDigit(num)}`;
            } else {
                return `${thirdtDigit(num)} ${secondDigit(num)} ${firstDigit(
                    num
                )}`;
            }
    }

    function firstDigit(num) {
        numFirst = Number(num[0]);
        switch (numFirst) {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";
            case 4:
                return "four";
            case 5:
                return "five";
            case 6:
                return "six";
            case 7:
                return "seven";
            case 8:
                return "eight";
            case 9:
                return "nine";
            case 0:
                return "";
        }
    }
    function secondDigit(num) {
        numSecond = Number(num[1]);
        switch (numSecond) {
            case 1:
                switch (Number(num[0])) {
                    case 1:
                        return "eleven";
                    case 2:
                        return "twelve";
                    case 3:
                        return "thirteen";
                    case 4:
                        return "fourteen";
                    case 5:
                        return "fifteen";
                    case 6:
                        return "sixteen";
                    case 7:
                        return "seventeen";
                    case 8:
                        return "eighteen";
                    case 9:
                        return "nineteen";
                    case 0:
                        return "ten";
                }
            case 2:
                return "twenty";
            case 3:
                return "thirty";
            case 4:
                return "forty";
            case 5:
                return "fifty";
            case 6:
                return "sixty";
            case 7:
                return "seventy";
            case 8:
                return "eighty";
            case 9:
                return "ninety";
            case 0:
                return "";
        }
    }
    function thirdtDigit(num) {
        numThird = Number(num[2]);
        switch (numThird) {
            case 1:
                return "one hundred";
            case 2:
                return "two hundred";
            case 3:
                return "three hundred";
            case 4:
                return "four hundred";
            case 5:
                return "five hundred";
            case 6:
                return "six hundred";
            case 7:
                return "seven hundred";
            case 8:
                return "eight hundred";
            case 9:
                return "nine hundred";
        }
    }
};
