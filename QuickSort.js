var list = [];
var check;
var listcheck;
var pivot;
var count;
var rep;
var contructor;
var LeftpivotIndex = -1;
var lengthRightIndex;
var OrderSort;
var turnOn;
var listcheckswap;

function SelectPreStep() {
    var str = document.getElementById("Code4").innerHTML;
    if (str[0] == "C") {
        return 0;
    }
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '&') {
            return 2;
        }
    }
    return 3;
}
function TakeRightLength(arr) {
    {
        var i;
        var temp = 1;
        for (i = pivot + 1; i < arr.length; i++) {
            if (arr[i] != "none") {
                if (temp == 1) {
                    temp = 0;
                }
                else {
                    return i;
                }
            }
        }
        return i - 1;
    }
}

function Swap(arr, a, b) {
    temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function Takepivot(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == "none") {
            return i;
        }
    }
    return -1;
}

function TakelengthRightIndex(arr, p) {
    for (let i = p + 1; i < arr.length; i++) {
        if (listcheck[i] != 'none') {
            return i - 1;
        }
    }
    return arr.length - 1;
}

function Compare(a, b) {
    if (a < b) {
        return "Đúng";
    }
    else {
        return "Sai";
    }
}

function quickSort(arr) {
    if (arr.length < 2) return arr;

    // *** lấy phần tử cuối của 'arr' làm 'pivot'
    const pivotIndex = arr.length - 1;
    const pivot = arr[pivotIndex];

    const left = [];
    const right = [];

    let currentItem;
    // *** 'i < pivotIndex' => chúng ta sẽ không loop qua 'pivot' nữa
    for (let i = 0; i < pivotIndex; i++) {
        currentItem = arr[i];

        if (currentItem < pivot) {
            left.push(currentItem);
        }
        else {
            right.push(currentItem);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

function Start() {
    OrderSort = [];
    document.getElementById("Code5").style.borderColor = '#FFFFFF';
    document.getElementById("Code6").style.borderColor = '#FFFFFF';
    document.getElementById("Code7").style.borderColor = '#FFFFFF';
    document.getElementById("Code8").style.borderColor = '#FFFFFF';
    listcheck = [];
    document.getElementById("Code4").innerHTML = "";
    contructor = true;
    count = 1;
    document.getElementById("warning").innerHTML = "";
    a = document.getElementById("inp").value;
    a = a.trim();
    test = a.indexOf("  ");
    while (test != -1) {
        a = a.replace("  ", " ");
        test = a.indexOf("  ");
    }
    list = a.split(" ");
    if (list.length <= 1) {
        return document.getElementById("warning").innerHTML = "Vui lòng nhập 2 số";
    }
    let i;
    for (let i = 0; i < list.length; i++) {
        listcheck.push('none');
        list[i] = Number(list[i]);
        if (isNaN(list[i])) {
            return document.getElementById("warning").innerHTML = "Vui lòng nhập lại dãy số";
        }
    }
    var t = "";
    for (i = 0; i < list.length; i++) {
        t = t + '<p id="' + i + '" class="circle">' + list[i] + '</p>';
    }
    document.getElementById("content").innerHTML = t;
    document.getElementById("AfterClick").style.display = 'block';
    check = 0;
    pivot = Takepivot(listcheck);
    listcheckswap = [];
}

function Next() {
    if (check == 0) {
        if (turnOn == 1) {
            OrderSort.push(LeftpivotIndex - 1);
            turnOn = 0;
        }
        document.getElementById("Code8").style.borderColor = '#FFFFFF';
        var temp=Takepivot(listcheck);
        if (temp == -1) {
            document.getElementById("Code4").innerHTML = 'Các số đều đã được kiểm tra.';
            return;
        }
        pivot = temp;
        document.getElementById("Code4").innerHTML = 'Chọn pivot =' + list[pivot];
        listcheck[pivot] = 'checked';
        rep = pivot + 1;
        for (let i = 0; i < list.length; i++) {
            if (listcheck[i] != 'checked') {
                document.getElementById(i).style.background = "#FFFFFF";
            }
        }
        LeftpivotIndex = pivot + 1;
        document.getElementById(pivot).style.background = '#FF8C00';
        document.getElementById("Code1").innerHTML = "pivotIndex = " + pivot;
        document.getElementById("Code2").innerHTML = "pivot = " + list[pivot];
        document.getElementById("Code3").innerHTML = "LeftpivotIndex = " + LeftpivotIndex;
        check = 1;
    }
    else if (check == 1) {
        if (contructor == true) {
            rep = pivot + 1;
            contructor = false;
        }
        lengthRightIndex = TakelengthRightIndex(listcheck, pivot);
        document.getElementById("Code7").style.borderColor = '#FFFFFF';
        document.getElementById("Code5").style.border = 'solid';
        document.getElementById("Code5").style.borderColor = '#FCD12A';
        document.getElementById("Code6").style.borderColor = '#FFFFFF';
        document.getElementById("Code4").innerHTML = 'Bước ' + count + ': i=' + rep + ', lengthRightIndex=' + lengthRightIndex;
        if (rep <= lengthRightIndex) {
            check = 2;
            count += 1;
        }
        else {
            check = 4;
            count += 1;
            document.getElementById("Code4").innerHTML = document.getElementById("Code4").innerHTML + ', Kết thúc vòng lặp';
        }
    }
    else if (check == 2) {
        document.getElementById("Code4").innerHTML = 'Bước ' + count + ': ' + list[rep] + ' < ' + list[pivot] + ', ' + Compare(list[rep], list[pivot]);
        document.getElementById("Code5").style.borderColor = '#FFFFFF';
        document.getElementById("Code6").style.border = 'solid';
        document.getElementById("Code6").style.borderColor = '#FCD12A';
        if (Compare(list[rep], list[pivot]) == "Đúng") {
            document.getElementById(rep).style.background = '#00CC66';
            check = 3;
            count += 1;
        }
        else {
            document.getElementById(rep).style.background = '#710193';
            check = 1;
            rep += 1;
            count += 1;
        }
    }
    else if (check == 3) {
        var temp = document.getElementById(rep).style.background;
        document.getElementById(rep).style.background = document.getElementById(LeftpivotIndex).style.background;
        document.getElementById(LeftpivotIndex).style.background = temp;
        document.getElementById(rep).innerHTML = list[LeftpivotIndex];
        document.getElementById(LeftpivotIndex).innerHTML = list[rep];
        document.getElementById("Code4").innerHTML = 'Bước ' + count + ': Thực hiện đổi chỗ ' + list[rep] + ' và ' + list[LeftpivotIndex] + ", LeftpivotIndex cộng thêm 1";
        listcheckswap.push(rep);
        Swap(list, rep, LeftpivotIndex);
        count += 1;
        LeftpivotIndex += 1;
        document.getElementById("Code3").innerHTML = "LeftpivotIndex = " + LeftpivotIndex;
        rep += 1;
        document.getElementById("Code6").style.borderColor = '#FFFFFF';
        document.getElementById("Code7").style.border = 'solid';
        document.getElementById("Code7").style.borderColor = '#FCD12A';
        check = 1;
    }
    else if (check == 4) {
        document.getElementById(pivot).style.background = '#FFFFFF';
        document.getElementById(LeftpivotIndex - 1).style.background = '#FF8C00';
        document.getElementById(pivot).innerHTML = list[LeftpivotIndex - 1];
        document.getElementById(LeftpivotIndex - 1).innerHTML = list[pivot];
        document.getElementById("Code8").style.border = 'solid';
        document.getElementById("Code8").style.borderColor = '#FCD12A';
        document.getElementById("Code5").style.borderColor = '#FFFFFF';
        document.getElementById("Code4").innerHTML = 'Bước ' + count + ': Thực hiện đổi chỗ ' + list[pivot] + ' và ' + list[LeftpivotIndex - 1];
        Swap(listcheck, pivot, LeftpivotIndex - 1);
        Swap(list, pivot, LeftpivotIndex - 1);
        check = 0;
        count += 1;
        turnOn = 1;
    }
}

function Previous() {
    if (count != 1) {
        if (check == 0) {
            check = 4;
            count -= 1;
            Swap(listcheck, pivot, LeftpivotIndex - 1);
            Swap(list, pivot, LeftpivotIndex - 1);
            lengthRightIndex = TakelengthRightIndex(listcheck, pivot);
            rep = lengthRightIndex + 1;
            if (LeftpivotIndex)
                document.getElementById("Code4").innerHTML = 'Bước ' + (count - 1) + ': i=' + rep + ', lengthRightIndex=' + lengthRightIndex + ', Kết thúc vòng lặp';
            document.getElementById("Code8").style.borderColor = '#FFFFFF';
            document.getElementById("Code5").style.borderColor = '#FCD12A';
            document.getElementById(pivot).style.background = '#FF8C00';
            if (list[LeftpivotIndex - 1] < list[pivot]) {
                document.getElementById(LeftpivotIndex - 1).style.background = '#00CC66';
            }
            else if (list[LeftpivotIndex - 1] > list[pivot]) {
                document.getElementById(LeftpivotIndex - 1).style.background = '#710193';
            }
            else {
                document.getElementById(LeftpivotIndex - 1).style.background = '#FF8C00';
            }
            document.getElementById(pivot).innerHTML = list[pivot];
            document.getElementById(LeftpivotIndex - 1).innerHTML = list[LeftpivotIndex - 1];
        }
        else if (check == 1) {
            var prestep = SelectPreStep();
            if (prestep == 0) {
                LeftpivotIndex = OrderSort.pop();
                if (rep == LeftpivotIndex + 1) {
                    lengthRightIndex = TakeRightLength(listcheck);
                }
                rep = lengthRightIndex + 1;
                document.getElementById("Code5").style.borderColor = "#FFFFFF";
                document.getElementById(pivot).style.background = "#FFFFFF";
                turnOn = 1;
                listcheck[pivot] = "none";
                check = 0;
                document.getElementById("Code3").innerHTML = "LeftpivotIndex = " + (LeftpivotIndex+1);
                if (pivot > LeftpivotIndex) {
                    pivot = LeftpivotIndex;
                    for (let i = pivot + 1; i <= list.length; i++) {
                        if (listcheck[i] == "none") {
                            document.getElementById(i).style.background = "#710193";
                        }
                        else {
                            break;
                        }
                    }
                    document.getElementById("Code4").innerHTML = 'Bước ' + (count - 1) + ': Thực hiện đổi chỗ ' + list[LeftpivotIndex] + ' và ' + list[LeftpivotIndex];
                    document.getElementById(pivot).style.background = "#FF8C00";
                    document.getElementById("Code8").style.borderColor = '#FCD12A';
                    lengthRightIndex = TakelengthRightIndex(listcheck, LeftpivotIndex);
                    rep = lengthRightIndex + 1;
                    pivot = LeftpivotIndex;
                    LeftpivotIndex += 1;
                    return;
                }
                document.getElementById("Code4").innerHTML = 'Bước ' + (count - 1) + ': Thực hiện đổi chỗ ' + list[LeftpivotIndex] + ' và ' + list[pivot];
                document.getElementById(pivot).style.background = "#FFFFFF";
                document.getElementById("Code8").style.borderColor = '#FCD12A';
                for (let i = pivot + 1; i < LeftpivotIndex; i++) {
                    document.getElementById(i).style.background = "#00CC66";
                }
                for (let i = LeftpivotIndex + 1; i < list.length; i++) {
                    if (listcheck[i] == "none") {
                        document.getElementById(i).style.background = "#710193";
                    }
                    else {
                        break;
                    }
                }
                LeftpivotIndex += 1;
            }
            else if (prestep == 2) {
                check = 2;
                count -= 1;
                rep -= 1;
                document.getElementById("Code4").innerHTML = 'Bước ' + (count - 1) + ': i=' + rep + ', lengthRightIndex=' + lengthRightIndex;
                document.getElementById(rep).style.background = '#FFFFFF';
                document.getElementById("Code5").style.borderColor = '#FCD12A';
                document.getElementById("Code6").style.borderColor = '#FFFFFF';
            }
            else if (prestep == 3) {
                check = 3;
                count -= 1;
                LeftpivotIndex -= 1;
                rep -= 1;
                Swap(list, rep, LeftpivotIndex);
                var temp = document.getElementById(rep).style.background;
                document.getElementById(rep).style.background = document.getElementById(LeftpivotIndex).style.background;
                document.getElementById(LeftpivotIndex).style.background = temp;
                var temp2 = document.getElementById(rep).innerHTML;
                document.getElementById(rep).innerHTML = document.getElementById(LeftpivotIndex).innerHTML;
                document.getElementById(LeftpivotIndex).innerHTML = temp2;
                document.getElementById("Code4").innerHTML = 'Bước ' + (count - 1) + ': ' + list[rep] + ' < ' + list[pivot] + ', ' + Compare(list[rep], list[pivot]);
                document.getElementById("Code7").style.borderColor = '#FFFFFF';
                document.getElementById("Code6").style.borderColor = '#FCD12A';
                document.getElementById("Code3").innerHTML = "LeftpivotIndex = " + LeftpivotIndex;
                listcheckswap.pop();
            }
        }
        else if (check == 2) {
            count -= 1;
            check = 1;
            lengthRightIndex = TakelengthRightIndex(listcheck, pivot);
            if (document.getElementById(rep - 1).style.background == "rgb(113, 1, 147)") {
                if (listcheckswap[listcheckswap.length - 1] == rep - 1) {
                    document.getElementById("Code4").innerHTML = 'Bước ' + (count - 1) + ': Thực hiện đổi chỗ ' + list[rep - 1] + ' và ' + list[LeftpivotIndex - 1] + ", LeftpivotIndex cộng thêm 1";
                    document.getElementById("Code5").style.borderColor = '#FFFFFF';
                    document.getElementById("Code7").style.borderColor = '#FCD12A';
                }
                else {
                    document.getElementById("Code4").innerHTML = 'Bước ' + (count - 1) + ': ' + list[rep - 1] + ' < ' + list[pivot] + ', ' + Compare(list[rep - 1], list[pivot]);
                    document.getElementById("Code5").style.borderColor = '#FFFFFF';
                    document.getElementById("Code6").style.borderColor = '#FCD12A';
                }
            }
            else if (document.getElementById(rep - 1).style.background == "rgb(255, 140, 0)") {
                document.getElementById("Code5").style.borderColor = '#FFFFFF';
                document.getElementById("Code6").style.borderColor = '#FFFFFF';
                document.getElementById("Code4").innerHTML = 'Chọn pivot =' + list[pivot];
            }
            else {
                document.getElementById("Code4").innerHTML = 'Bước ' + (count - 1) + ': Thực hiện đổi chỗ ' + list[rep - 1] + ' và ' + list[LeftpivotIndex - 1] + ", LeftpivotIndex cộng thêm 1";
                document.getElementById("Code5").style.borderColor = '#FFFFFF';
                document.getElementById("Code7").style.borderColor = '#FCD12A';
            }

            // document.getElementById("Code4").innerHTML = 'Bước ' + (count-1) + ': i=' + rep + ', lengthRightIndex=' + lengthRightIndex;
            // document.getElementById("Code5").style.borderColor = '#FFFFFF';
            // document.getElementById("Code6").style.borderColor = '#FCD12A';

        }
        else if (check == 3) {
            document.getElementById("Code5").style.borderColor = '#FCD12A';
            document.getElementById(rep).style.background = '#FFFFFF';
            document.getElementById("Code6").style.borderColor = '#FFFFFF';
            count -= 1;
            document.getElementById("Code4").innerHTML = 'Bước ' + (count - 1) + ': i=' + rep + ', lengthRightIndex=' + lengthRightIndex;
            check = 2;
        }
        else if (check == 4) {
            count -= 1;
            check = 1;
            if (document.getElementById(lengthRightIndex).style.background == "rgb(113, 1, 147)") {
                if (listcheckswap[listcheckswap.length - 1] == rep - 1) {
                    document.getElementById("Code4").innerHTML = 'Bước ' + (count - 1) + ': Thực hiện đổi chỗ ' + list[rep - 1] + ' và ' + list[LeftpivotIndex - 1] + ", LeftpivotIndex cộng thêm 1";
                    document.getElementById("Code5").style.borderColor = '#FFFFFF';
                    document.getElementById("Code7").style.borderColor = '#FCD12A';
                }
                else {
                    document.getElementById("Code4").innerHTML = 'Bước ' + (count - 1) + ': ' + list[rep - 1] + ' < ' + list[pivot] + ', ' + Compare(list[rep - 1], list[pivot]);
                    document.getElementById("Code5").style.borderColor = '#FFFFFF';
                    document.getElementById("Code6").style.borderColor = '#FCD12A';
                }
            }
            else if (document.getElementById(lengthRightIndex).style.background == "rgb(255, 140, 0)") {
                document.getElementById("Code4").innerHTML = 'Chọn pivot =' + list[pivot];
                document.getElementById("Code5").style.borderColor = '#FFFFFF';
            }
            else {
                document.getElementById("Code4").innerHTML = 'Bước ' + (count - 1) + ': Thực hiện đổi chỗ ' + list[rep - 1] + ' và ' + list[LeftpivotIndex - 1] + ", LeftpivotIndex cộng thêm 1";
                document.getElementById("Code5").style.borderColor = '#FFFFFF';
                document.getElementById("Code7").style.borderColor = '#FCD12A';
            }

        }
    }
    else {
        check = 0;
        count = 1;
        listcheck[0] = "none";
        document.getElementById("Code4").innerHTML = "";
        document.getElementById("0").style.background = '#FFFFFF';
        document.getElementById("Code1").innerHTML = "pivotIndex = ";
        document.getElementById("Code2").innerHTML = "pivot = ";
        document.getElementById("Code3").innerHTML = "LeftpivotIndex = ";
    }
}

