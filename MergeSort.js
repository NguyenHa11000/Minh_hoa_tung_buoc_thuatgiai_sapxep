let list = [];  // để  lưu danh sách nhập  vào 
let temp = [];  // mảng tạm  để sắp xếp
let tree  = 0; // độ sau của hàm  mergeSort
let l = []; //mang phan chia mang cho hàm Merge
let temp3 = 0;      //tần đang xét 
let temp4 = 0;      // chi số phần tử đang xét
let temp5 = 0;
let i = 0;
let j = 0;
let left = 0;
let right = 0;
let mid = 0 ;
let B = [];
let k = 0;
let strThaoTac = "";
let keySuKien = -1;
let arr = [];
let A = [];
let key  = 0;
let key2 = 0;
let key3 = 0;
let listSukien = [];// list su  kien

class Sukien{
    constructor(){
        this.arrlist    = [];
        this.strThaotac = '';
        this.arrDangXet = [];
        this.arrTam     = [];
        this.mid        = 0;
        this.left       = 0;
        this.right      = 0;
        this.i          = 0;
        this.j          = 0;
    }
}




function loadData(){
    list = [];
    temp = [];
    tree = 0;
    l = [];
    temp3 = 0;  
    temp4 = 0;  
    temp5 = 0;
    key = 0;
    i = 0;
    j = 0;
    left = 0;
    right = 0;
    mid = 0;
    key2 = 0;
    B = [];
    k = 0;
    strThaoTac = "";
    keySuKien = -1;
    listSukien = [];



    let arr = document.getElementById("nhap").value;
    


    arr = arr.trim();
    test = arr.indexOf("  ");
    while (test != -1) {
        arr = arr.replace("  ", " ");
        test = arr.indexOf("  ");
    }

    list = arr.split(" ");
    let s= 0;
    for (let i = 0; i < list.length; i++) {
        list[i] = Number(list[i]);
        s+=list[i];
    }
    temp = list;
    tree = Math.floor(Math.log(list.length)/Math.LN2);
    if(tree == Math.log(list.length)/Math.LN2)
    {
        tree--;
    }
    // tạo mảng phân chia cây merge
    l.push(list.length);
    i = 0;
    while(l[i] > 1 && check(l,i)){

        if(l[i]==1)
            l.push(1);
        else{
            x = Math.floor(l[i]/2);
            if(x*2 == l[i]){
                l.push(x);
                l.push(x);
            }else
            {
                l.push(x +1);
                l.push(x);
            }
        }
        i++;
    }
    temp2 = 0;
    for(i = 0;i<tree+1;i++)
    {
        temp2+= Math.pow(2,i);
    }

    for(i = l.length;i>temp2;i--)
    {
        l.pop();
    }

    temp3 = tree;
    temp4 = Math.pow(2, temp3);

    if (temp.length <= 1) {
        return document.getElementById("warning").innerHTML = "Vui lòng nhập 2 số";
    }
    let m;
    for (let m = 0; m < temp.length; m++) {
        temp[m] = Number(temp[m]);
        if (isNaN(temp[m])) {
            return document.getElementById("warning").innerHTML = "Vui lòng nhập lại dãy số";
        }
    }
    var t = "";
    for (m = 0; m < temp.length; m++) {
        t = t + '<p id="' + m + '" class="circle">' + temp[m] + '</p>';
    }
    document.getElementById("content").innerHTML = t;
    document.getElementById("AfterClick").style.display = 'block';
    
    // document.getElementById("xuat").innerHTML = "Mảng vừa nhập";
    // document.getElementById("inp").innerHTML = temp;
    document.getElementById("now").innerHTML = "";
    document.getElementById("tam").innerHTML = "";
    document.getElementById("thaotac").innerHTML = "";
    document.getElementById("left").innerHTML ="";
    document.getElementById("right").innerHTML ="";
    document.getElementById("mid").innerHTML = "";
    document.getElementById("i").innerHTML = "";
    document.getElementById("j").innerHTML = "";

    return list;
}
function check(arr, x)
{
    for(i = x;i<arr.length;i++)
    {
        if(arr[i]>1)
        return 1;
    }
    return 0;
}

// biến  lưu vị trí đang xét 
let keyVitri = 0;


function next()
{
    if((keySuKien+1) == listSukien.length ){
        switch(key){
            case 0: 
            let sukien1 = new Sukien;
            console.log("buoc 1:");
            if(temp3 == -1 && temp5 == 0){
                document.getElementById("thaotac").innerHTML = "";
                sukien1.strThaotac = "";
            }else{
                if(temp5 == temp.length && (temp3 -1) >=0){
                    document.getElementById("thaotac").innerHTML = "Săp xếp trộn các mảng ở tầng " + (temp3-1);
                    strThaoTac = "Săp xếp trộn các mảng ở tầng " + (temp3-1);
                    for (let m = 0; m < temp.length; m++) {
                        document.getElementById(m).style.background="#FFFFFF";
                    }
                    document.getElementById("now").innerHTML = "Mảng đang xét:  <br/>A = []";
                    sukien1.left = left;
                    document.getElementById("left").innerHTML = "left = " + left;
                    sukien1.right = right;
                    for (let m = 0; m < temp.length; m++) {
                        if(left==0 && right==0)
                        {
                            document.getElementById(m).style.background="#FFFFFF";
                        }
                        else if(m>=left && m<=right)
                        {
                            document.getElementById(m).style.background="#00CC66";
                        }
                        else
                        {
                            document.getElementById(m).style.background="#FFFFFF";
                        }
                    }
                    document.getElementById("right").innerHTML = "right = "  + right;
                    document.getElementById("mid").innerHTML = "mid = " + mid;
                    sukien1.mid = mid;
                    document.getElementById("i").innerHTML = "i = " + i;
                    sukien1.i = i;
                    document.getElementById("j").innerHTML = "j = " + j;
                    sukien1.j = j;
                    document.getElementById("tam").innerHTML = "Mảng tạm:  <br/> B = []";
                }else{
                    if((temp3 -1) >=0){
                    document.getElementById("thaotac").innerHTML = "Săp xếp trộn các mảng ở tầng " + temp3;
                    strThaoTac = "Săp xếp trộn các mảng ở tầng " + temp3;
                    for (let m = 0; m < temp.length; m++) {
                        document.getElementById(m).style.background="#FFFFFF";
                    }
                }
                    
                }
                // document.getElementById("thaotac").innerHTML = "Săp xếp trộn các mảng ở tầng " + temp3;
                // strThaoTac = "Săp xếp trộn các mảng ở tầng " + temp3;

            }
            if(temp3 == -1){ // tần đang xét
                let B = [];
                B = merge(temp);
                document.getElementById("now").innerHTML = "["+temp + "]<br/> mảng đã được sắp xếp";
                keyKetThuc = 1;
                return;
            }else{
                if(temp4 == 0) {    
                    temp3--;
                    temp4 = Math.pow(2, temp3);
                    temp5 = 0;
                    key = 0;
                }
                else{
                    arr = temp.slice(temp5,(temp5 + l[Math.pow(2, temp3 + 1) - temp4-1]));
                    temp4 --;
                    key = 1;
                    key2 = 0;
                    document.getElementById("now").innerHTML = "Mảng đang xét:  <br/>A = [" + arr+"]";
                    
                    sukien1.left = left;
                    document.getElementById("left").innerHTML = "left = " + left;
                    sukien1.right = left + (arr.length - 1);
                    right = left + arr.length - 1;
                    for (let m = 0; m < temp.length; m++) {
                        if(left==0 && right==0)
                        {
                            document.getElementById(m).style.background="#FFFFFF";
                        }
                        else if(m>=left && m<=right)
                        {
                            document.getElementById(m).style.background="#00CC66";
                        }
                        else
                        {
                            document.getElementById(m).style.background="#FFFFFF";
                        }
                    }
                    document.getElementById("right").innerHTML = "right = "  + right;
                    mid = Math.floor(((right+left) / 2));
                    document.getElementById("mid").innerHTML = "mid = " + mid;
                    sukien1.mid = mid;
                    i = left;
                    document.getElementById("i").innerHTML = "i = " + i;
                    sukien1.i = i;
                    j = mid + 1;
                    document.getElementById("j").innerHTML = "j = " + j;
                    sukien1.j = j;
                    document.getElementById("tam").innerHTML = "Mảng tạm:  <br/> B = []";
                    B = [];
                    key = 1;
                }
                sukien1.arrlist = temp.slice();
                sukien1.strThaotac = strThaoTac;
                sukien1.arrDangXet = arr.slice();
                sukien1.arrTam = B.slice();
                listSukien.push(sukien1);
            }
            break;

            case 1: 
                let sukien2 = new Sukien;
                sukien2.arrlist = temp.slice();
                sukien2.arrDangXet = arr.slice();
                console.log("buoc 2:");
                if(key2 < arr.length -1){
                nextmerge(arr);
                document.getElementById("tam").innerHTML = "Mảng tạm:  <br/> B = [" + B + "]";
                document.getElementById("i").innerHTML = "i = " + i;
                document.getElementById("j").innerHTML = "j = " + j;
                key = 1;
                }else {
                    B = arr;
                    document.getElementById("thaotac").innerHTML = "Vì mảng đang xét có 1 phần tử nên gán cho mảng tạm:";
                    strThaoTac = "Vì mảng đang xét có 1 phần tử nên gán cho mảng tạm:";
                    document.getElementById("tam").innerHTML = "Mảng tạm:  <br/> B = [" + B + "]";
                    key = 2;
                }
                if(B.length == arr.length) key = 2;
                sukien2.arrTam = B.slice();
                sukien2.strThaotac = strThaoTac;
                sukien2.left = left;
                sukien2.right = right;
                sukien2.mid = mid;
                sukien2.i=i;
                sukien2.j=j;
                listSukien.push(sukien2);
                break;
            case 2:
                let sukien3 = new Sukien;
                console.log("buoc 3:");
                document.getElementById("thaotac").innerHTML = 'Đổ mảng đã trộn từ mảng tạm vào lại mảng ban đầu';
                sukien3.strThaotac = 'Đổ mảng đã trộn từ mảng tạm vào lại mảng ban đầu';

                if(arr.length == 1){
                    temp[temp5] = B[0];
                }else{
                    for(i = 0;i < l[Math.pow(2, temp3 + 1) - temp4-2];i++)
                    {
                        temp[temp5+i] = B[i];
                    }
                }
                keyVitri += arr.length;
                sukien3.arrTam = B.slice();
                B = [];
                temp5 += l[Math.pow(2, temp3 + 1) - temp4-2] ;
                //document.getElementById("inp").innerHTML = temp;
                for (let m = 0; m < temp.length; m++) {
                    document.getElementById(m).innerHTML = temp[m];
                }
                key = 0;
                key2 = 0;
                k = 0;
                
                sukien3.arrlist = temp.slice();
                sukien3.arrDangXet = arr.slice();
                sukien3.left = left;
                sukien3.right = right;
                sukien3.mid = mid;
                sukien3.i = listSukien[listSukien.length-1].i;
                sukien3.j = listSukien[listSukien.length-1].j;
                strThaoTac = 'Đổ mảng đã trộn từ mảng tạm vào lại mảng ban đầu';
                listSukien.push(sukien3);
                left = temp5;


                break; 
            default:
                break;
        }
        keySuKien = listSukien.length -1;
        if(temp5 == list.length)
        {
            left = 0;
            right = 0;
            mid = 0;
            i = 0;
            j = 0;
            arr = [];
        }
    }
    else{

        keySuKien++;
        let sk = new Sukien;
        sk = listSukien[keySuKien];
        //document.getElementById("inp").innerHTML = sk.arrlist;
        for (let m = 0; m < temp.length; m++) {
            document.getElementById(m).innerHTML = sk.arrlist[m];
        }
        document.getElementById("now").innerHTML = "Mảng đang xét:  <br/>A = [" + sk.arrDangXet+"]";
        document.getElementById("tam").innerHTML = "Mảng tạm:  <br/> B = [" + sk.arrTam + "]";
        document.getElementById("thaotac").innerHTML = sk.strThaotac;
        document.getElementById("left").innerHTML ="left = "+ sk.left;
        document.getElementById("right").innerHTML ="right = " +  sk.right;
        for (let m = 0; m < temp.length; m++) {
            if(sk.left==0 && sk.right==0)
            {
                document.getElementById(m).style.background="#FFFFFF";
            }
            else if(m>=sk.left && m<=sk.right)
            {
                document.getElementById(m).style.background="#00CC66";
            }
            else
            {
                document.getElementById(m).style.background="#FFFFFF";
            }
        }
        document.getElementById("mid").innerHTML = "mid = " + sk.mid;
        document.getElementById("i").innerHTML = "i = " + sk.i;
        document.getElementById("j").innerHTML = "j = " + sk.j;
    }
}


// tìm cách trộn lại 
// hàm merge
function merge(A)
{
    let mid = Math.floor((A.length-1) / 2);
    let i = 0;
    let j = mid + 1 ;
    k = 0;
    let n = A.length;
    let B = [];
    while((i< mid+1) && (j < A.length))
    {
        if(A[i]<A[j])
        {
            
            B[k]=A[i];
            k++;i++;
        }
        else{
            
            B[k]=A[j];
            k++;j++;
        }
    }
    while(i < mid+1)
    {
        B[k]=A[i];
        k++;i++;
    }
    while(j < A.length)
    {
        B[k]=A[j];
        k++;j++;
    }
    i = 0;
    for(k = 0; k< n; k++)
    {
        A[i] = B[k];
        i++;
    }
    return A;
}




// ham next cua ham merge
// ham xet các điều kiện trong merge


function nextmerge(A)
{
    if(A.length == 0) return;
    if(key2 < A.length)
    {
        if((i< mid+1) && (j <= right))
        {
            if(A[i-left]<A[j-left])
            {
                document.getElementById("thaotac").innerHTML = 'Ta xét điều kiên ((i< mid+1) và (j <= right))<br\>'+'Điều kiện đúng, ta xét A[i] < A[j] <br\> Điều kiện đúng nên ta thêm A[i] vào mảng tạm và tăng i lên 1 đơn vị. <br\> Qua bước tiếp theo';
                strThaoTac = 'Ta xét điều kiên ((i< mid+1) và (j <= right))<br\>'+'Điều kiện đúng, ta xét A[i] < A[j] <br\> Điều kiện đúng nên ta thêm A[i] vào mảng tạm và tăng i lên 1 đơn vị. <br\> Qua bước tiếp theo';
                
                B[k]=A[i-left];
                k++;i++;
            }
            else{
                document.getElementById("thaotac").innerHTML = 'Ta xét điều kiện ((i< mid+1) && (j <= right)) <br\>'+'Điều kiện đúng, ta xét A[i] < A[j] <br\>Điều kiện sai nên ta thêm A[j] vào mảng tạm và tăng j lên một đơn vị.<br\> Qua bước tiếp theo';
                strThaoTac = 'Ta xét điều kiện ((i< mid+1) && (j <= right)) <br\>'+'Điều kiện đúng, ta xét A[i] < A[j] <br\>Điều kiện sai nên ta thêm A[j] vào mảng tạm và tăng j lên một đơn vị.<br\> Qua bước tiếp theo';
                B[k]=A[j-left];
                k++; 
                j++;
            }
            return;
        }
        if(i < mid+1)
        {
            document.getElementById("thaotac").innerHTML = 'Ta xét điều kiện (i< mid+1) && (j <= right) <br\>'+' Điều kiện sai ta xét (i < mid+1) hoặc (j < right) <br\> Điều kiện (i < mid+1) đúng nên ta thêm A[i] vào mảng tạm và tăng i lên một đơn vị. <br\> Qua bước tiếp theo';
            strThaoTac = 'Ta xét điều kiện (i< mid+1) && (j <= right) <br\>'+' Điều kiện sai ta xét (i < mid+1) hoặc (j <= right) <br\> Điều kiện (i < mid+1) đúng nên ta thêm A[i] vào mảng tạm và tăng i lên một đơn vị. <br\> Qua bước tiếp theo';
            B[k]=A[i-left];
            k++;i++;
            return;
        }
        if(j <= right)
        {
            document.getElementById("thaotac").innerHTML = 'Ta xét điều kiện (i< mid+1) && (j <= right) <br\>'+'Điều kiện sai ta xét (i < mid+1) hoặc (j < right) <br\> Điều kiện (j < right) đúng nên ta thêm A[j] vào mảng tạm và tăng j lên một đơn vị.<br\> Qua bước tiếp theo ';
            strThaoTac = 'Ta xét điều kiện (i< mid+1) && (j <= right) <br\>'+'Điều kiện sai ta xét (i < mid+1) hoặc (j <= right) <br\> Điều kiện (j < right) đúng nên ta thêm A[j] vào mảng tạm và tăng j lên một đơn vị.<br\> Qua bước tiếp theo ';
            B[k]=A[j-left];
            k++;j++;
            return;
        }
        
        key2++;
    }
}

// 8 3 1 5 4 2 10 6 9 7 
//ham back

function back()
{
    if(keySuKien<1) return;
    keySuKien --;
    if((keySuKien) >= 0 )
    {
        let sk = new Sukien;
        sk = listSukien[keySuKien];
        //document.getElementById("inp").innerHTML = sk.arrlist;
        for (let m = 0; m < temp.length; m++) {
            document.getElementById(m).innerHTML = sk.arrlist[m];
        }
        document.getElementById("now").innerHTML = "Mảng đang xét:  <br/>A = [" + sk.arrDangXet+"]";
        document.getElementById("tam").innerHTML = "Mảng tạm:  <br/> B = [" + sk.arrTam + "]";
        document.getElementById("thaotac").innerHTML = sk.strThaotac;
        document.getElementById("left").innerHTML ="left = "+ sk.left;
        document.getElementById("right").innerHTML ="right = " +  sk.right;
        for (let m = 0; m < temp.length; m++) {
            if(sk.left==0 && sk.right==0)
            {
                document.getElementById(m).style.background="#FFFFFF";
            }
            else if(m>=sk.left && m<=sk.right)
            {
                document.getElementById(m).style.background="#00CC66";
            }
            else
            {
                document.getElementById(m).style.background="#FFFFFF";
            }
        }
        document.getElementById("mid").innerHTML = "mid = " + sk.mid;
        document.getElementById("i").innerHTML = "i = " + sk.i;
        document.getElementById("j").innerHTML = "j = " + sk.j;
    }
}