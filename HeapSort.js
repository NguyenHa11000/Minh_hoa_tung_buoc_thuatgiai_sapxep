var list = [];
var check;
var listcheck;
var max;
var count;
var rep;
var contructor;
var LeftpivotIndex;
var lengthRightIndex;
var d, y, n;
var pivot, left, right;
var arrLength;

function maxHeap(input, i) {
    const left = 2 * i + 1;
    const right = 2 * i + 2;
    let max = i;

    if (left < arrLength && input[left] > input[max]) {
        max = left;
    }

    if (right < arrLength && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        maxHeap(input, max);
    }
}

function swap(input, indexA, indexB) {
    const temp = input[indexA];
    input[indexA] = input[indexB];
    input[indexB] = temp;
    return ;
}

function heapSort(input) {   

    arrLength = input.length;
    d = 0;
    for (let i = Math.floor(arrLength / 2); i >= 0; i -= 1)      
    {
        maxHeap(input, i);
        d++;
    }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        arrLength--;
        maxHeap(input, 0);
    }
}

function Start()
{   
    document.getElementById("Code0").innerHTML = " Ghi chú " ;
    document.getElementById("Code1").innerHTML = " max : vị trí của nút cha";
    document.getElementById("Code2").innerHTML = "left: vị trí của nút con bên trái ";
    document.getElementById("Code3").innerHTML = "right: vị trí của nút con bên phải";
    document.getElementById("Code4").innerHTML = "Nút cha > nút con, nút gốc có giá trị lớn nhất";
    document.getElementById("Code6").style.border = 'solid';
    document.getElementById("Code7").style.border = 'solid';
    document.getElementById("Code8").style.border = 'solid';
    document.getElementById("Code9").style.border = 'solid';
    document.getElementById("Code10").style.border = 'solid';
    document.getElementById("Code6").style.borderColor = '#FFFFFF';
    document.getElementById("Code7").style.borderColor = '#FFFFFF';
    document.getElementById("Code8").style.borderColor = '#FFFFFF';
    document.getElementById("Code9").style.borderColor = '#FFFFFF';
    document.getElementById("Code10").style.borderColor = '#FFFFFF';
    listcheck = [];
    //document.getElementById("Code4").innerHTML = " ";
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
    console.log(list);
    var t = "";
    for (i = 0; i < list.length; i++) {
        t = t + '<p id="' + i + '" class="circle">' + list[i] + '</p>';
    }
    document.getElementById("content").innerHTML = t;
    document.getElementById("AfterClick").style.display = 'block';
    check = 0;
    d = 0;
    //console.log(pivot)
    arrLength = list.length;
    rep = 0;
    count = 0;
    n=0;
}
function Next()
{
    if(check == 0)
    {
        // document.getElementById("Code6").style.borderColor = '#FFFFFF';
        // document.getElementById("Code7").style.borderColor = '#FFFFFF';
        // document.getElementById("Code8").style.borderColor = '#FFFFFF';
        // document.getElementById("Code9").style.borderColor = '#FFFFFF';
        // document.getElementById("Code10").style.borderColor = '#FFFFFF';
        if (d == 0){
            console.log(rep)
            y = Math.floor(arrLength / 2) - rep;
            if (rep == 0){
            document.getElementById("Code0").innerHTML = "Giai đoạn tạo MaxHeap";
            document.getElementById("Code1").innerHTML = "max = len(input)/2 ";
            document.getElementById("Code2").innerHTML = "left = 2*max + 1";
            document.getElementById("Code3").innerHTML = "right = 2*max + 2";
            d = -1;
            }
            else {
                if(y==-1)
                {
                    document.getElementById("Code0").innerHTML = "Giai đoạn Sort";
                    document.getElementById("Code1").innerHTML = " ";
                    document.getElementById("Code2").innerHTML = " ";
                    document.getElementById("Code3").innerHTML = " ";
                    document.getElementById("Code4").innerHTML = 'Xong phần tạo MaxHeap';
                    document.getElementById("Code5").innerHTML = " ";
                    check = 4;
                    d = 0;
                    y = arrLength;
                }
                else{
                    max = y;
                    left = 2 * y + 1 ;
                    right = 2 * y + 2 ;
                    if (left > (arrLength-1)){
                        check = 3;
                    }
                    else{
                        document.getElementById(max).style.background = '#FF8C00';
                        document.getElementById(left).style.background = '#00CC66';
                        document.getElementById("Code1").innerHTML = "max = " + max;
                        document.getElementById("Code2").innerHTML = "left = " + left;
                        document.getElementById("Code3").innerHTML = "right = " + right;
                        document.getElementById("Code4").innerHTML = left + " < " + arrLength + " && " + list[left] + " > "+ list[max] ;
                        document.getElementById("Code5").innerHTML = "vun đống lần " + rep;
                        document.getElementById("Code6").style.borderColor = '#FCD12A';
                        check = 1;
                    }
                }
            }
        }
        else if (d == -1){
            //document.getElementById(max).style.background = '#FFFFFF';
            document.getElementById(n).style.background = '#FFFFFF';
            document.getElementById("Code10").style.borderColor = '#FFFFFF';
            max = y;
            left = 2 * y + 1 ;
            right = 2 * y + 2 ;
            document.getElementById(max).style.background = '#FF8C00';
            if (left > (arrLength-1)){
                check = 0;
                d =0;
                rep++;
                document.getElementById(max).style.background = '#FFFFFF';
            }
            else{
                document.getElementById(left).style.background = '#00CC66';
                document.getElementById("Code1").innerHTML = "max = " + max;
                document.getElementById("Code2").innerHTML = "left = " + left;
                document.getElementById("Code3").innerHTML = "right = " + right;
                document.getElementById("Code4").innerHTML = left + " < " + arrLength + " && " + list[left] + " > "+ list[max] ;
                document.getElementById("Code6").style.borderColor = '#FCD12A';
                check = 1;
            }
        } 
    }
    else if(check == 1)
    {
        if (left < arrLength && list[left] > list[max]){
            document.getElementById(max).style.background = '#FFFFFF';
            document.getElementById("Code7").style.borderColor = '#FCD12A';
            document.getElementById("Code6").style.borderColor = '#FFFFFF';
            max = left;
            document.getElementById("Code5").innerHTML = "swap left va max => max =" + left;
            document.getElementById(max).style.background = '#FF8C00';
        }
        else {
            document.getElementById("Code5").innerHTML = "sai";
            document.getElementById(left).style.background= '#FFFFFF';
            document.getElementById("Code6").style.borderColor = '#FFFFFF';
        }
        check = 2;
        d = 1;
    }
    else if(check == 2)
    {
        if(d == 1){
            document.getElementById("Code7").style.borderColor = '#FFFFFF';
            if (right <= (arrLength-1)){
                document.getElementById(right).style.background= '#00CC66';
                document.getElementById("Code8").style.borderColor = '#FCD12A';
                document.getElementById("Code4").innerHTML = right + " < " +  arrLength + " && " + list[right] + " > " + list[max]; 
                document.getElementById("Code5").innerHTML = " ";
                d = 2;
            }
            else{
                document.getElementById("Code5").innerHTML = "Không có phần tử thứ " + right;
                check = 3;
            }
        }
        else if (d == 2){
            if (right < arrLength && list[right] > list[max]){
                document.getElementById(max).style.background = '#FFFFFF';
                document.getElementById("Code9").style.borderColor = '#FCD12A';
                document.getElementById("Code8").style.borderColor = '#FFFFFF';
                //document.getElementById("Code4").innerHTML = right < arrLength && list[right] > list[max];
                max = right;
                document.getElementById("Code5").innerHTML = "swap right và max => max =" + max;
                document.getElementById(max).style.background = '#FF8C00';
            }
            else {
                document.getElementById("Code5").innerHTML = "sai";
                document.getElementById(right).style.background= '#FFFFFF';
                document.getElementById("Code8").style.borderColor = '#FFFFFF';
            }
            check = 3;
        }
    }
    else if (check == 3)
    {
        document.getElementById("Code9").style.borderColor = '#FFFFFF';
        if (max != y){
            document.getElementById(max).style.background = '#FCD12A';
            document.getElementById(y).style.background = '#FCD12A';
            document.getElementById("Code10").style.borderColor = '#FCD12A';
            document.getElementById("Code4").innerHTML = "Đổi chỗ giá trị vị trí" + y + " va " + max;
            document.getElementById(max).innerHTML = list[y];
            document.getElementById(y).innerHTML = list[max];
            swap(list,max,y);
            n = y;
            y = max;
            d = -1;
        }
        else{
            rep++;
            document.getElementById(max).style.background = '#FFFFFF';
            d = 0;
        }
        check = 0;
        console.log(list);
    }
    else if (check == 4){
        console.log(y);
        if(d == 0){
            if(y > 2){
                y--;
                document.getElementById("Code10").style.borderColor = '#FCD12A';
                document.getElementById(y).innerHTML = list[0];
                document.getElementById(0).innerHTML = list[y];
                document.getElementById(y).style.background ='#710193';
                swap(list,0,y);
                arrLength--;
                count = 0;
                max = 0;
                document.getElementById("Code4").innerHTML = "Tiến hành tạo lại maxheap";
                d = 1;
            }
            else {
                if (list[0]>list[1]){
                    document.getElementById("Code10").style.borderColor = '#FCD12A';
                    document.getElementById(0).innerHTML = list[1];
                    document.getElementById(1).innerHTML = list[0];
                    document.getElementById(0).style.background ='#710193';
                    document.getElementById(1).style.background ='#710193';
                    document.getElementById("Code0").innerHTML = " ";
                    document.getElementById("Code1").innerHTML = " ";
                    document.getElementById("Code2").innerHTML = " ";
                    document.getElementById("Code3").innerHTML = " ";
                    document.getElementById("Code4").innerHTML = "Hoàn thành Heap Sort";
                    document.getElementById("Code5").innerHTML = " ";
                    swap(list,0,1);
                    return;
                }
                else{
                    document.getElementById(0).style.background ='#710193';
                    document.getElementById(1).style.background ='#710193';
                    document.getElementById("Code0").innerHTML = " ";
                    document.getElementById("Code1").innerHTML = " ";
                    document.getElementById("Code2").innerHTML = " ";
                    document.getElementById("Code3").innerHTML = " ";
                    document.getElementById("Code4").innerHTML = "Hoàn thành Heap Sort";
                    document.getElementById("Code5").innerHTML = " ";
                    return;
                }
            }
        }
        else if (d == 1){
            document.getElementById("Code10").style.borderColor = '#FFFFFF';
            document.getElementById(n).style.background = '#FFFFFF';
            //console.log(count);
            max = count;
            document.getElementById(max).style.background = '#FF8C00';
            left = 2 * max + 1 ;
            right = 2 * max + 2 ;
            if (left >= (y-1)){
                d=5;
            }
            else{
                // document.getElementById(max).style.background = '#FF8C00';
                document.getElementById(left).style.background = '#00CC66';
                document.getElementById("Code6").style.borderColor = '#FCD12A';
                document.getElementById("Code1").innerHTML = "max = " + max;
                document.getElementById("Code2").innerHTML = "left = " + left;
                document.getElementById("Code3").innerHTML = "right = " + right;
                document.getElementById("Code4").innerHTML = left + " < " + arrLength + " && " + list[left] + " > "+ list[max] ;
                d = 2;
            }
        }
        else if (d == 2){
            if (left < arrLength && list[left] > list[max]){
                document.getElementById(max).style.background = '#FFFFFF';
                document.getElementById("Code7").style.borderColor = '#FCD12A';
                document.getElementById("Code6").style.borderColor = '#FFFFFF';
                max = left;
                document.getElementById(max).style.background = '#FF8C00';

                document.getElementById("Code5").innerHTML = "swap left va max => max =" + left;
            }
            else {
                document.getElementById("Code5").innerHTML = "sai";
                document.getElementById(left).style.background = '#FFFFFF';
                document.getElementById("Code6").style.borderColor = '#FFFFFF';
            }
            d = 3;
        }
        else if (d == 3){
            document.getElementById("Code7").style.borderColor = '#FFFFFF';
            if (right < (y-1)){
                document.getElementById(right).style.background= '#00CC66';
                document.getElementById("Code8").style.borderColor = '#FCD12A';
                document.getElementById("Code4").innerHTML = right + " < " +  arrLength + " && " + list[right] + " > " + list[max]; 
                document.getElementById("Code5").innerHTML = " ";
                d = 4;
            }
            else {
                document.getElementById("Code5").innerHTML = "khong co phan tu thu " + right;
                document.getElementById(right).style.background = '#FFFFFF';
                d = 5;
            }
        }
        else if(d == 4){
            if (right < arrLength && list[right] > list[max]){
                document.getElementById(max).style.background = '#FFFFFF';
                document.getElementById("Code9").style.borderColor = '#FCD12A';
                document.getElementById("Code8").style.borderColor = '#FFFFFF';
                max = right;
                document.getElementById("Code5").innerHTML = "=> max =" + max;
                document.getElementById(max).style.background = '#FF8C00';
            }
            else {
                document.getElementById("Code5").innerHTML = "sai";
                document.getElementById(right).style.background = '#FFFFFF';
                document.getElementById("Code8").style.borderColor = '#FFFFFF';
            }
            d = 5;
        }
        else if (d == 5){
            document.getElementById("Code9").style.borderColor = '#FFFFFF';
            if (max != count){
                document.getElementById("Code10").style.borderColor = '#FCD12A';
                document.getElementById("Code4").innerHTML = "doi cho vi tri" + count + "va" + max;                
                document.getElementById(max).innerHTML = list[count];
                document.getElementById(count).innerHTML = list[max];
                document.getElementById(max).style.background = '#FCD12A';
                document.getElementById(count).style.background = '#FCD12A';
                swap(list,max,count);
                n = count;
                count = max;
                d = 1;
            }
            else {
                d = 0;
                count = 0;
                document.getElementById(max).style.background = '#FFFFFF';
            }
        }
        console.log(list);
    }
}