console.log('bài tập về nhà')
// Bài 1: Tính lương nv 
// B1: xác định input:
// - Lương 1 ngày 
// - số ngày làm
var wage = 100000;
var days = '30';

// B2: Xử lý đề bài 
// - tiền lương nv = Lương 1 ngày * số ngày làm
salary = wage * days;
// B3: output 
console.log('luongNV', salary);

/* Bài 2: giá trị trung bình 
B1: input */
var n1, n2, n3, n4, n5;
n1 = 2;
n2 = 5;
n3 = 3;
n4 = -1;
n5 = 10;
// B2: phân tích 
average = (n1 + n2 + n3 + n4 +n5) / 5;
console.log('trung bình', average);

// bài 3: Quy đổi tiền 
// B1: input
// - 1USD = 23.500VND 
var USD = 23500;

// B2: phân tích 
// 23500 * số lượng usd muốn đổi
fiveUSD = USD * 5;
// B3: output 
fiveUSD = fiveUSD.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
console.log('5 USD = ', fiveUSD);

/*bài 4: DT, CV hình chữ nhật
 b1: tìm input 
- chiều dài = 5
- chiều rộng = 10*/
length = 5;
width = 10;
// b2: phân tích 
// - dienTich = length * width;
// - chuVi = (length + width) * 2
dienTich = length * width;
chuVi = (length + width) * 2;
// B3: output 
console.log('diện tích', dienTich);
console.log('chu vi', chuVi);

// bài 5 tính tổng 2 ký số
// b1: Input 
n1 = 12;
n2 = 44;
// b2: phân tích đề 
/*- tổng ký số = số hàng chục + số hàng dv;
- lấy số hàng dv: số % 10;
- lấy só hàng chục: số / 10;*/

unit1 = n1 % 10;
console.log(unit1)
ten1 = Math.floor(n1 / 10);
console.log(ten1) 
unit2 = n2 % 10;

ten2 = Math.floor(n2 / 10); 

sum1 = unit1 + ten1; 
sum2 = unit2 + ten2;

// b3: output 
console.log('sum1', sum1);
console.log('sum2', sum2);









